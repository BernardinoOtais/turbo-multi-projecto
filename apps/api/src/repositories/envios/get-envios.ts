import type {
  DadosParaPesquisaComPaginacaoEOrdemDto,
  EnviosListDto,
} from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

import { AuthEnvios } from './aux';

export async function getEnvios(
  body: DadosParaPesquisaComPaginacaoEOrdemDto,
): Promise<ApiResponseBody<EnviosListDto>> {
  const resBody = new ApiResponseBody<EnviosListDto>();
  const { skip, take, fechado, ordem } = body;

  try {
    // Fetch the data and count in parallel for efficiency
    const [dados, tamanhoLista] = await Promise.all([
      PrismaSingleton.getEnviosPrisma().envio.findMany({
        where: { fechado: fechado },
        select: {
          idEnvio: true,
          nomeEnvio: true,
          Destinos: {
            select: {
              idDestino: true,
              idIdioma: true,
              nomeDestino: true,
            },
          },
          fechado: true,
          createdAt: true,
          endDate: true,
          obs: true,
          nomeUser: true,
        },

        skip,
        take,
        orderBy: { createdAt: ordem },
      }),
      AuthEnvios.numeroDeEnvios(fechado),
    ]);

    resBody.data = {
      lista: dados,
      tamanhoLista,
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
