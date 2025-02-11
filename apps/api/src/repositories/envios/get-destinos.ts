import type { DestinosPossiveisDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function getDestinos() {
  const resBody = new ApiResponseBody<DestinosPossiveisDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();
  try {
    const dados = await prisma.$queryRaw<{ value: string; label: string }[]>`
    SELECT 
      idDestino AS value, 
      nomeDestino AS label 
    FROM 
      Destinos`;

    resBody.data = dados;

    return resBody;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error instanceof Error ? error.message : 'Unexpected error',
    };
    return resBody;
  }
}
