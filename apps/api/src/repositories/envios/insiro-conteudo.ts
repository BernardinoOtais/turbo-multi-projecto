import type { PostConteudoDto, RespostaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function insiroConteudo(
  conteudo: PostConteudoDto,
): Promise<ApiResponseBody<RespostaDto>> {
  const resBody = new ApiResponseBody<RespostaDto>();

  const { op, idContainer, idItem, idUnidades, TamanhosQttPeso } =
    conteudo.conteudo;
  const prisma = PrismaSingleton.getEnviosPrisma();

  const tamanhosSemZeros = TamanhosQttPeso.filter(
    ({ qtt, peso, pesoUnit }) => qtt !== 0 && (peso !== 0 || pesoUnit !== 0),
  );
  const tam = tamanhosSemZeros.map(({ tam }) => tam);

  const conteudoExistente = await prisma.conteudo.findMany({
    where: { op, idItem, idUnidades, idContainer, tam: { in: tam } },
  });

  try {
    await prisma.$transaction(async (tx) => {
      // Update existing records
      await Promise.all(
        conteudoExistente.map((c) =>
          tx.conteudo.update({
            where: { idConteudo: c.idConteudo },
            data: {
              peso:
                (tamanhosSemZeros.find(({ tam }) => tam === c.tam)?.peso === 0
                  ? (tamanhosSemZeros.find(({ tam }) => tam === c.tam)?.qtt ??
                    c.qtt *
                      (tamanhosSemZeros.find(({ tam }) => tam === c.tam)
                        ?.pesoUnit ?? 0))
                  : tamanhosSemZeros.find(({ tam }) => tam === c.tam)?.peso) ??
                c.peso,
              qtt:
                tamanhosSemZeros.find(({ tam }) => tam === c.tam)?.qtt ?? c.qtt,
            },
          }),
        ),
      );

      // Insert new records
      const tamanhosNaoCorrespondentes = tamanhosSemZeros.filter(
        ({ tam }) =>
          !conteudoExistente.some(
            ({ tam: existingTam }) => existingTam === tam,
          ),
      );

      const dadosAInserir = tamanhosNaoCorrespondentes.map((t) => ({
        idContainer,
        idItem,
        op,
        tam: t.tam,
        qtt: t.qtt,
        idUnidades,
        peso: t.peso === 0 ? t.qtt * t.pesoUnit : t.peso,
      }));

      if (dadosAInserir.length > 0) {
        await tx.conteudo.createMany({ data: dadosAInserir });
      }

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
