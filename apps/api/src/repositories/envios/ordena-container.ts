import type { IdOrdemDto, ListaDeContainersEnvioDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function ordenaContainer(ordemRecebida: IdOrdemDto) {
  const resBody = new ApiResponseBody<ListaDeContainersEnvioDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();

  try {
    const resultadoDaTransaction = await prisma.$transaction(async (tx) => {
      // Update the `ordem` field for all containers
      await Promise.all(
        ordemRecebida.idOrdem.map((item) =>
          tx.container.update({
            where: {
              idContainer: item.id,
            },
            data: { ordem: item.ordem },
          }),
        ),
      );

      // Fetch all containers with the updated `ordem`
      const updatedContainers = await tx.container.findMany({
        where: {
          idContainer: { in: ordemRecebida.idOrdem.map((item) => item.id) },
        },
        orderBy: [{ idTipoContainer: 'asc' }, { ordem: 'asc' }],
      });

      // Group containers by `idTipoContainer` and calculate `nContainer` for each group
      const groupedContainers: Record<number, typeof updatedContainers> = {};
      updatedContainers.forEach((container) => {
        if (!groupedContainers[container.idTipoContainer]) {
          groupedContainers[container.idTipoContainer] = [];
        }
        groupedContainers[container.idTipoContainer].push(container);
      });
      //console.log(groupedContainers);
      // Update `nContainer` for each group
      await Promise.all(
        Object.values(groupedContainers).flatMap((group) =>
          group.map((container, index) =>
            tx.container.update({
              where: { idContainer: container.idContainer },
              data: { nContainer: index + 1 }, // Assign `nContainer` within the group
            }),
          ),
        ),
      );

      //console.log('updatedContainers: ', updatedContainers);
      return updatedContainers; // Return the final grouped and updated containers
    });
    // console.log(resultadoDaTransaction);
    resBody.data = resultadoDaTransaction;
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
