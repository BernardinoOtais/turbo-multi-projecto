import type { PostOpDto, RespostaDto } from '@repo/types';
import { RespostaRecebidaSchema } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnvios } from './aux';

export async function insiroOpContainer(
  opRecebida: PostOpDto,
): Promise<ApiResponseBody<RespostaDto>> {
  const resBody = new ApiResponseBody<RespostaDto>();
  const { id, op } = opRecebida.PostOp;
  const prisma = PrismaSingleton.getEnviosPrisma();
  //console.log('resBody:', id, op);

  try {
    const existingContainerOp = await prisma.containerOp.findUnique({
      where: {
        idContainer_op: {
          idContainer: id,
          op,
        },
      },
    });

    const existingOp = await prisma.op.findUnique({
      where: { op },
    });

    if (existingContainerOp) {
      return ResponseHandler.BadRequest('OP já existe..');
    }

    if (!existingOp) {
      const procedureResult: RespostaDto =
        await prisma.$queryRaw`exec inserirOp ${op}`;
      //console.log('procedureResult: ', procedureResult);
      const resposta = RespostaRecebidaSchema.parse(procedureResult);
      //console.log('procedureResult: ', resposta);
      if (resposta && resposta[0].status !== 'ok') {
        //console.log('procedureResult: ', 'n Ok');
        return ResponseHandler.BadRequest(
          resposta[0].errorMessage ?? 'Errro ao inserir a Op...',
        );
      }
    }

    //saber os filhos
    const getTodosContainersIdContainer =
      await AuxEnvios.getTodosContainersIdContainer(id);

    //console.log('insiroOpContainer : ', getTodosContainersIdContainer);

    // Inserir muitas ops nos containers
    const dadosAInserir = getTodosContainersIdContainer.map((c) => ({
      idContainer: c,
      op: op,
    }));
    await prisma.$transaction(async (tx) => {
      //console.log('dadosAInserir dadosAInserir : ', dadosAInserir);

      await tx.containerOp.createMany({
        data: dadosAInserir,
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
