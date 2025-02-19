import type { ItensAcessoriosDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function getIntensAcessorios() {
  const prisma = PrismaSingleton.getEnviosPrisma();
  const resBody = new ApiResponseBody<ItensAcessoriosDto>();

  try {
    const [dados, idiomas] = await Promise.all([
      prisma.item.findMany({
        where: {
          Acessorios: {
            isNot: null,
          },
        },
        select: {
          idItem: true,
          Descricao: true,
          inativo: true,
          ItemTraduzido: {
            select: {
              idIdioma: true,
              descItem: true,
              Idiomas: { select: { nomeIdioma: true } },
            },
          },
          _count: { select: { Conteudo: true } },
        },
      }),
      prisma.idiomas.findMany(),
    ]);

    resBody.data = {
      itemsSchema: dados,
      idiomasSchema: idiomas,
    };
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
