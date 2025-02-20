import type { PatchItemSchemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnviosItens } from './aux';

export async function patchNomeItem(dados: PatchItemSchemaDto) {
  const { idItem, idIdioma, Descricao, descItem } = dados;
  const resBody = new ApiResponseBody<RespostaDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();

  try {
    // Check if the item has content before proceeding
    const existeConteudoEsteItem =
      await AuxEnviosItens.verificoSeOItemJaFoiUsado(idItem);
    if (existeConteudoEsteItem) {
      resBody.data = {
        status: 'ok',
        errorMessage: null,
        successMessage: 'Não pode alterar, item já usado...',
      };
      return resBody;
    }

    // Perform the transaction
    await prisma.$transaction(async (tx) => {
      await tx.item.update({ where: { idItem }, data: { Descricao } });
      await tx.itemTraduzido.update({
        where: { idIdioma_idItem: { idItem, idIdioma } },
        data: { descItem },
      });
    });

    // Success response
    resBody.data = { status: 'ok', errorMessage: null };
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Erro inesperado ao atualizar o item.',
    };
  }

  return resBody;
}
