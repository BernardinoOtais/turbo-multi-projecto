import type { PostNomeEnviochemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function patchNomeEnvio(nomeEnvioRecebido: PostNomeEnviochemaDto) {
  const { idEnvio, nomeEnvio } = nomeEnvioRecebido;
  const resBody = new ApiResponseBody<RespostaDto>();

  const prisma = PrismaSingleton.getEnviosPrisma();

  const envio = await prisma.envio.findUnique({ where: { idEnvio } });
  if (!envio) {
    return ResponseHandler.BadRequest('Não existe este envio...');
  }

  if (envio.fechado) {
    return ResponseHandler.BadRequest('Envio já está fechado...');
  }
  try {
    await prisma.$transaction(async (tx) => {
      await tx.envio.update({
        where: {
          idEnvio,
        },
        data: { nomeEnvio },
      });

      resBody.data = { status: 'ok', errorMessage: null };
    });
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
