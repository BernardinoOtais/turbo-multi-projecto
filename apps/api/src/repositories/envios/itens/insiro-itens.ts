import type { PostItensAcessoriosSchemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function insiroItens(
  dadosRecebidos: PostItensAcessoriosSchemaDto,
) {
  const resBody = new ApiResponseBody<RespostaDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();
  const dados = dadosRecebidos.itens;

  try {
    await prisma.$transaction(async (tx) => {
      const promises = [];

      for (const item of dados) {
        if (!item.Descricao || !item.idiomas?.length) {
          continue;
        }

        const itemComAMesmaDescricao = await tx.item.findFirst({
          where: {
            Descricao: item.Descricao,
            Acessorios: { isNot: null },
          },
        });

        if (itemComAMesmaDescricao) {
          // Process translations for existing item
          promises.push(
            ...item.idiomas.map((idioma) =>
              tx.itemTraduzido.upsert({
                where: {
                  idIdioma_idItem: {
                    idItem: itemComAMesmaDescricao.idItem,
                    idIdioma: idioma.idIdioma,
                  },
                },
                update: { descItem: idioma.descItem },
                create: {
                  idIdioma: idioma.idIdioma,
                  idItem: itemComAMesmaDescricao.idItem,
                  descItem: idioma.descItem,
                },
              }),
            ),
          );

          // If translation already exists, update and exit loop
          for (const idioma of item.idiomas) {
            const itemComAMesmaTraducao = await tx.itemTraduzido.findFirst({
              where: {
                idIdioma: idioma.idIdioma,
                descItem: idioma.descItem,
              },
            });
            if (itemComAMesmaTraducao) {
              promises.push(
                tx.item.update({
                  where: { idItem: itemComAMesmaTraducao.idItem },
                  data: { Descricao: item.Descricao, inativo: false },
                }),
              );
              break; // Exit after first valid update
            }
          }
          continue; // Skip new item creation
        }

        // Create new item & translations
        const novoItem = await tx.item.create({
          data: { Descricao: item.Descricao, inativo: false },
        });

        await tx.acessorios.create({
          data: { idItem: novoItem.idItem, Descricao: novoItem.Descricao },
        });

        promises.push(
          tx.itemTraduzido.createMany({
            data: item.idiomas.map((idioma) => ({
              idItem: novoItem.idItem,
              idIdioma: idioma.idIdioma,
              descItem: idioma.descItem,
            })),
          }),
        );
      }

      await Promise.all(promises);
    });

    return resBody;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Unexpected error occurred while updating container order.',
    };
    return resBody;
  }
}
