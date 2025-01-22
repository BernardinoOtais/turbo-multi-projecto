import type { ContainerSchemaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuthEnvios } from './aux';

export async function containerApagar(
  idContainer: number,
): Promise<ApiResponseBody<ContainerSchemaDto | undefined>> {
  const temSubContainers =
    await AuthEnvios.verificoSeContainerTemSubContainers(idContainer);
  if (temSubContainers.length > 0) {
    return ResponseHandler.BadRequest(
      'Não pode ser apagado pois tem SubContainers...',
    );
  }

  const temConteudo =
    await AuthEnvios.verificoSeContainerTemConteudo(idContainer);
  if (temConteudo.length > 0) {
    return ResponseHandler.BadRequest(
      'Não pode ser apagado pois tem Conteudo...',
    );
  }

  const prisma = PrismaSingleton.getEnviosPrisma();
  const resBody = new ApiResponseBody<ContainerSchemaDto>();

  try {
    const resultadoDaTransaction = await prisma.$transaction(async (tx) => {
      // Delete the container
      const containerApagado = await tx.container.delete({
        where: { idContainer },
      });

      // Adjust the "ordem" of remaining containers
      const { idContainerPai, idTipoContainer, ordem, idEnvio, nContainer } =
        containerApagado;

      await tx.container.updateMany({
        where: {
          idEnvio: containerApagado.idEnvio,
          idContainerPai,
          ordem: { gt: ordem },
        },
        data: {
          ordem: {
            decrement: 1,
          },
        },
      });

      await tx.container.updateMany({
        where: {
          idEnvio,
          idContainerPai,
          idTipoContainer,
          nContainer: { gt: nContainer },
        },
        data: {
          nContainer: {
            decrement: 1,
          },
        },
      });
      return containerApagado;
    });

    // Return the result in the response body
    resBody.data = resultadoDaTransaction;
    return resBody;
  } catch (error) {
    // Handle errors in a consistent way
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error
          ? error.message
          : 'Unexpected error occurred while deleting container.',
    };
    return resBody;
  }
}
