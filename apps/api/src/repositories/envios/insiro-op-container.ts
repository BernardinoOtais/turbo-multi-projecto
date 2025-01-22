import type { PostOpDto, RespostaDto } from '@repo/types';
import { RespostaRecebidaSchema } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function insiroOpContainer(
  opRecebida: PostOpDto,
): Promise<ApiResponseBody<RespostaDto>> {
  const resBody = new ApiResponseBody<RespostaDto>();
  const { id, op } = opRecebida.PostOp;
  const prisma = PrismaSingleton.getEnviosPrisma();
  //console.log('resBody:', id, op);

  try {
    await prisma.$transaction(async (transaction) => {
      const existingContainerOp = await transaction.containerOp.findUnique({
        where: {
          idContainer_op: {
            idContainer: id,
            op,
          },
        },
      });

      if (existingContainerOp) {
        return ResponseHandler.BadRequest('OP already exists in the container');
      }

      const existingOp = await transaction.op.findUnique({
        where: { op },
      });

      if (!existingOp) {
        const procedureResult: RespostaDto =
          await transaction.$queryRaw`exec inserirOp ${op}`;
        //console.log('procedureResult: ', procedureResult);
        const resposta = RespostaRecebidaSchema.parse(procedureResult);
        //console.log('procedureResult: ', resposta);
        if (resposta && resposta[0].status !== 'ok') {
          //console.log('procedureResult: ', 'n Ok');
          return ResponseHandler.BadRequest(
            'Failed to execute stored procedure inserirOp',
          );
        }
      }

      await transaction.containerOp.create({
        data: {
          idContainer: id,
          op,
        },
      });

      const tamanhos = await transaction.opTamanho.findMany({
        where: { op },
      });

      const containerOpTamData = tamanhos.map((tamanho) => ({
        idContainer: id,
        op,
        tam: tamanho.tam,
      }));

      await transaction.containerOpTam.createMany({
        data: containerOpTamData,
      });

      resBody.data = { status: 'ok', errorMessage: null };
    });
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
