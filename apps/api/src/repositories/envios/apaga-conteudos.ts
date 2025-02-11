import type { ListaIdsSchemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function apagaConteudos(idConteudos: ListaIdsSchemaDto) {
  const resBody = new ApiResponseBody<RespostaDto>();

  const prisma = PrismaSingleton.getEnviosPrisma();

  try {
    await prisma.conteudo.deleteMany({
      where: {
        idConteudo: { in: idConteudos.numbers },
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
