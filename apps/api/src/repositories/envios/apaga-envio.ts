import type { RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function apagoEnvio(idEnvio: number) {
  const resBody = new ApiResponseBody<RespostaDto>();

  const prisma = PrismaSingleton.getEnviosPrisma();

  const envio = await prisma.envio.findUnique({ where: { idEnvio } });

  if (!envio) {
    return ResponseHandler.BadRequest('Nada a apagar...');
  }
  if (envio.fechado) {
    return ResponseHandler.BadRequest('Envio fechado...');
  }

  const container = await prisma.container.findMany({ where: { idEnvio } });

  //console.log('container: ', container);
  if (container.length !== 0) {
    return ResponseHandler.BadRequest('Envio tem conteudo...');
  }

  try {
    await prisma.envio.delete({
      where: {
        idEnvio,
      },
    });

    resBody.data = { status: 'ok', errorMessage: null };
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Unexpected error occurred while deleting container operation.',
    };
  }
  return resBody;
}
