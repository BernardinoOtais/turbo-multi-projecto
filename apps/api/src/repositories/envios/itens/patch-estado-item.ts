import type { RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function patchEstadoItem(id: number) {
  const resBody = new ApiResponseBody<RespostaDto>();

  const prisma = PrismaSingleton.getEnviosPrisma();
  try {
    const estado = await prisma.item.findUnique({
      where: { idItem: id },
      select: { inativo: true },
    });
    if (!estado) {
      resBody.data = {
        status: 'ok',
        errorMessage: null,
        successMessage: 'Não existe item a alterar...',
      };
      return resBody;
    }
    await prisma.item.update({
      where: { idItem: id },
      data: { inativo: !estado?.inativo },
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
