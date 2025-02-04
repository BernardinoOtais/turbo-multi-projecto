import type { PostNovoEnvioSchemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function novoEnvioOUPatch(
  postNovoEnvioSchemaDto: PostNovoEnvioSchemaDto,
) {
  const { idEnvio, nomeEnvio, idDestino, obs, nomeUser } =
    postNovoEnvioSchemaDto;
  const resBody = new ApiResponseBody<RespostaDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();
  //console.log('postNovoEnvioSchemaDto', postNovoEnvioSchemaDto);

  if (!nomeUser) {
    return ResponseHandler.BadRequest('Erro ao validar utilizador...');
  }

  try {
    const envio = idEnvio
      ? await prisma.envio.update({
          where: { idEnvio },
          data: { nomeEnvio, idDestino, obs },
        })
      : await prisma.envio.create({
          data: { nomeEnvio, idDestino, obs, nomeUser },
        });

    resBody.data = { status: 'ok', errorMessage: null, id: envio.idEnvio };
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Unexpected error occurred while updating container order and numbers.',
    };
  }

  return resBody;
}
