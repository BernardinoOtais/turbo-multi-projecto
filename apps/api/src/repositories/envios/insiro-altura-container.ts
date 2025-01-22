import type { ContainerSchemaDto, PostAlturaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function insiroAlturaContainer(alturaRecebida: PostAlturaDto) {
  const resBody = new ApiResponseBody<ContainerSchemaDto>();
  const { id, altura } = alturaRecebida.PostAltura;
  try {
    const container = await PrismaSingleton.getEnviosPrisma().container.update({
      where: { idContainer: id },
      data: { altura: altura },
    });
    resBody.data = container;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Unexpected error occurred while updating container order.',
    };
  }

  return resBody;
}
