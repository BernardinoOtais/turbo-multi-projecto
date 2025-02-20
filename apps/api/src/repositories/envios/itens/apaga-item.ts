import type { RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnviosItens } from './aux';

export async function apagaItem(idItem: number) {
  const resBody = new ApiResponseBody<RespostaDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();

  try {
    const existeConteudoEsteItem =
      await AuxEnviosItens.verificoSeOItemJaFoiUsado(idItem);

    if (existeConteudoEsteItem) {
      resBody.data = {
        status: 'ok',
        errorMessage: null,
        successMessage: 'Não pode apagar, item já usado...',
      };
      return resBody;
    }

    await prisma.$transaction(async (tx) => {
      await tx.itemTraduzido.deleteMany({
        where: { idItem },
      });

      await tx.acessorios.delete({
        where: { idItem },
      });

      await tx.item.delete({ where: { idItem } });
    });
    // Success response
    resBody.data = { status: 'ok', errorMessage: null };
    return resBody;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Erro inesperado ao atualizar o item.',
    };
    return resBody;
  }
}
