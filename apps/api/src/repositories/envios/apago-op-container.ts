import type { IdContainerOpSchemaDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnvios } from './aux';

export async function apagoOpContainer(
  idContainerOp: IdContainerOpSchemaDto,
): Promise<ApiResponseBody<RespostaDto>> {
  const resBody = new ApiResponseBody<RespostaDto>();
  const { id, op } = idContainerOp;

  const prisma = PrismaSingleton.getEnviosPrisma();

  // Get all related container IDs
  const getTodosContainersIdContainer =
    await AuxEnvios.getTodosContainersIdContainer(id);

  //console.log('getTodosContainersIdContainer: ', getTodosContainersIdContainer);

  if (!getTodosContainersIdContainer) {
    return ResponseHandler.BadRequest('Nada a apagar..');
  }

  // Check if there is content associated with the given `op`
  const opsEmConteudo = await prisma.conteudo.count({
    where: {
      idContainer: { in: getTodosContainersIdContainer },
      op,
    },
  });

  if (opsEmConteudo > 0) {
    return ResponseHandler.BadRequest(
      'Nāo pode apagar op, já há conteudo com esta op...',
    );
  }

  try {
    await prisma.$transaction(async (tx) => {
      // Then delete from `containerOp` (parent table)
      await tx.containerOp.deleteMany({
        where: {
          idContainer: { in: getTodosContainersIdContainer },
          op,
        },
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
