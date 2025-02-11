import type {
  DadosParaPesquisaComPaginacaoEOrdemDto,
  EnviosListDto,
} from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuxEnvios } from './aux';

export async function getEnvios(
  body: DadosParaPesquisaComPaginacaoEOrdemDto,
): Promise<ApiResponseBody<EnviosListDto>> {
  const resBody = new ApiResponseBody<EnviosListDto>();
  const { skip, take, fechado, ordem } = body;
  const prisma = PrismaSingleton.getEnviosPrisma();

  try {
    // Fetch the data and count in parallel for efficiency
    const [dados, tamanhoLista, DestinosDisponiveis] = await Promise.all([
      prisma.envio.findMany({
        where: { fechado: fechado },
        select: {
          idEnvio: true,
          nomeEnvio: true,
          Destinos: {
            select: {
              idDestino: true,
              idIdioma: true,
              nomeDestino: true,
              morada: true,
              localMorada: true,
              codigoPostal: true,
              nacionalidade: true,
            },
          },
          fechado: true,
          createdAt: true,
          endDate: true,
          obs: true,
          nomeUser: true,
          _count: { select: { Container: true } },
        },
        skip,
        take,
        orderBy: { createdAt: ordem },
      }),
      AuxEnvios.numeroDeEnvios(fechado),
      prisma.$queryRaw<{ value: string; label: string }[]>`
      SELECT 
        idDestino AS value, 
        nomeDestino AS label 
      FROM 
        Destinos`,
    ]);

    resBody.data = {
      lista: dados,
      tamanhoLista,
      DestinosDisponiveis,
    };

    return resBody;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error instanceof Error ? error.message : 'Unexpected error',
    };
    return resBody;
  }
}
