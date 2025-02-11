import type { RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnviosItens } from './aux';

export async function refreshPartesAndroid() {
  const resBody = new ApiResponseBody<RespostaDto>();
  const dados = await AuxEnviosItens.dadosPartesAndroid();

  if (dados.length === 0) {
    resBody.data = {
      status: 'ok',
      errorMessage: null,
      successMessage: 'Nada a actualizar...',
    };
    return resBody;
  }
  const prisma = PrismaSingleton.getEnviosPrisma();
  try {
    await prisma.$transaction(async (tx) => {
      await AuxEnviosItens.escrevoDadoPartesAndroid(tx, dados);
    });
    resBody.data = { status: 'ok', errorMessage: null };
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
