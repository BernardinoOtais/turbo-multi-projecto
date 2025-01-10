import type { BaseContainerSchemaDto } from '@repo/types';
import {
  type DadosParaPesquisaComPaginacaoEOrdemDto,
  type EnvioDto,
  type EnviosListDto,
  type PostContainerSchemaDto,
} from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';
import { permiteSubcontainer } from '@utils/utils';

export class EnviosRepository {
  static async getEnvios(
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
        this.numeroDeEnvios(fechado),
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
  static async numeroDeEnvios(fechado: boolean): Promise<number> {
    return PrismaSingleton.getEnviosPrisma().envio.count({
      where: { fechado },
    });
  }
  static async devolveContainerPorId(idContainer: number) {
    return PrismaSingleton.getEnviosPrisma().container.findUnique({
      where: {
        idContainer,
      },
    });
  }
  static async numeroOrdemContainerSeSubContainer(
    container: PostContainerSchemaDto,
  ): Promise<number> {
    const { idContainerPai, idEnvio, idTipoContainer } = container;
    return PrismaSingleton.getEnviosPrisma().container.count({
      where: {
        idContainerPai,
        idEnvio,
        idTipoContainer,
      },
    });
  }
  static async exitisEsteContainerPrincipal(container: PostContainerSchemaDto) {
    const { idContainerPai, idEnvio, idTipoContainer } = container;
    return PrismaSingleton.getEnviosPrisma().container.findMany({
      where: {
        idContainerPai,
        idEnvio,
        idTipoContainer,
      },
    });
  }
  static async insereContainer(
    container: PostContainerSchemaDto,
    ordem: number,
  ) {
    const { idContainerPai, idEnvio, idTipoContainer } = container;
    return PrismaSingleton.getEnviosPrisma().container.create({
      data: {
        idContainerPai,
        idEnvio,
        idTipoContainer,
        ordem,
      },
    });
  }
  static async getEnvioById(idEnvio: number) {
    const resBody = new ApiResponseBody<EnvioDto>();

    try {
      const envio = await PrismaSingleton.getEnviosPrisma().envio.findUnique({
        where: { idEnvio },
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
          //Container principal
          Container: {
            where: { idContainerPai: null },
            select: {
              idContainer: true,
              idContainerPai: true,
              idTipoContainer: true,
              ordem: true,
              TipoContainer: {
                select: {
                  idItem: true,
                  Item: {
                    select: {
                      Descricao: true,
                    },
                  },
                },
              },
              Conteudo: {
                select: {
                  idConteudo: true,
                  idContainer: true,
                  idItem: true,
                  Item: {
                    select: {
                      idItem: true,
                      Descricao: true,
                    },
                  },
                },
              },
              //Container Sub
              other_Container: {
                select: {
                  idContainer: true,
                  idContainerPai: true,
                  idTipoContainer: true,
                  ordem: true,
                  TipoContainer: {
                    select: {
                      idItem: true,
                      Item: {
                        select: {
                          Descricao: true,
                        },
                      },
                    },
                  },
                  Conteudo: {
                    select: {
                      idConteudo: true,
                      idContainer: true,
                      idItem: true,
                      Item: {
                        select: {
                          idItem: true,
                          Descricao: true,
                        },
                      },
                    },
                  },
                  //Container Sub sub
                  other_Container: {
                    select: {
                      idContainer: true,
                      idContainerPai: true,
                      idTipoContainer: true,
                      ordem: true,
                      TipoContainer: {
                        select: {
                          idItem: true,
                          Item: {
                            select: {
                              Descricao: true,
                            },
                          },
                        },
                      },
                      Conteudo: {
                        select: {
                          idConteudo: true,
                          idContainer: true,
                          idItem: true,
                          Item: {
                            select: {
                              idItem: true,
                              Descricao: true,
                            },
                          },
                        },
                      },
                      //Container Sub sub sub
                      other_Container: {
                        select: {
                          idContainer: true,
                          idContainerPai: true,
                          idTipoContainer: true,
                          ordem: true,
                          TipoContainer: {
                            select: {
                              idItem: true,
                              Item: {
                                select: {
                                  Descricao: true,
                                },
                              },
                            },
                          },
                          Conteudo: {
                            select: {
                              idConteudo: true,
                              idContainer: true,
                              idItem: true,
                              Item: {
                                select: {
                                  idItem: true,
                                  Descricao: true,
                                },
                              },
                            },
                          },
                        },
                        orderBy: { ordem: 'asc' },
                      },
                      //Container Sub sub sub
                    },
                    orderBy: { ordem: 'asc' },
                  },
                  //Container Sub sub
                },
                orderBy: { ordem: 'asc' },
              },
              //Container Sub
            },
            orderBy: { ordem: 'asc' },
          },
          //Container principal
        },
      });

      if (!envio) {
        resBody.error = {
          code: HttpStatusCode.NOT_FOUND,
          message: `Envio with id ${idEnvio} not found`,
        };
        return resBody;
      }

      resBody.data = envio;
      return resBody;
    } catch (error) {
      resBody.error = {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: error instanceof Error ? error.message : 'Unexpected error',
      };
      return resBody;
    }
  }
  static async postContainer(container: PostContainerSchemaDto) {
    const resBody = new ApiResponseBody<BaseContainerSchemaDto>();
    const { idContainerPai, idTipoContainer } = container;

    try {
      if (!idContainerPai) {
        const munmeroMinimoParacontainerInicial = 3;
        if (idTipoContainer <= munmeroMinimoParacontainerInicial) {
          const containerPrincipalJaExiste =
            await this.exitisEsteContainerPrincipal(container);
          if (containerPrincipalJaExiste.length > 0) {
            return ResponseHandler.BadRequest(
              `Já existe este container Principal`,
            );
          }
          const containerInserido = await this.insereContainer(
            container,
            idTipoContainer,
          );
          resBody.data = containerInserido;
          return resBody;
        }
        return ResponseHandler.BadRequest(`Não pode inserir este container`);
      }

      const containerPai = await this.devolveContainerPorId(idContainerPai);

      const idTipoContainerPai =
        containerPai?.idTipoContainer as keyof typeof permiteSubcontainer;

      const listaDeSubContainersDisponiveis =
        idContainerPai && permiteSubcontainer[idTipoContainerPai];

      if (!listaDeSubContainersDisponiveis) {
        return ResponseHandler.BadRequest(
          `Não há sub-containers diponiveis... `,
        );
      }

      const idTipoContainerDisponivel = listaDeSubContainersDisponiveis.find(
        (tipo) => tipo === idTipoContainer,
      );

      if (!idTipoContainerDisponivel) {
        return ResponseHandler.BadRequest(
          `Este tipo de container não pode ser sub-container`,
        );
      }

      const ordem = await this.numeroOrdemContainerSeSubContainer(container);

      const containerSeguinte = ordem + 1;
      const containerInserido = await this.insereContainer(
        container,
        containerSeguinte,
      );
      resBody.data = containerInserido;
      return resBody;
    } catch (error) {
      // Handle errors and set error response
      resBody.error = {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: error instanceof Error ? error.message : String(error),
      };
      return resBody;
    }
  }
  static async verificoSeContainerTemSubContainers(idContainer: number) {
    const subContainers =
      await PrismaSingleton.getEnviosPrisma().container.findMany({
        where: { idContainerPai: idContainer },
      });
    return subContainers;
  }
  static async verificoSeContainerTemConteudo(idContainer: number) {
    const conteudo = await PrismaSingleton.getEnviosPrisma().conteudo.findMany({
      where: { idContainer },
    });
    return conteudo;
  }
  static async containerApagar(
    idContainer: number,
  ): Promise<ApiResponseBody<BaseContainerSchemaDto | undefined>> {
    const temSubContainers =
      await this.verificoSeContainerTemSubContainers(idContainer);
    if (temSubContainers.length > 0) {
      return ResponseHandler.BadRequest(
        'Não pode ser apagado pois tem SubContainers...',
      );
    }

    const temConteudo = await this.verificoSeContainerTemConteudo(idContainer);
    if (temConteudo.length > 0) {
      return ResponseHandler.BadRequest(
        'Não pode ser apagado pois tem Conteudo...',
      );
    }

    const prisma = PrismaSingleton.getEnviosPrisma();
    const resBody = new ApiResponseBody<BaseContainerSchemaDto>();

    try {
      const resultadoDaTransaction = await prisma.$transaction(async (tx) => {
        // Delete the container
        const containerApagado = await tx.container.delete({
          where: { idContainer },
        });

        // Adjust the "ordem" of remaining containers
        const { idContainerPai, idTipoContainer } = containerApagado;

        await tx.container.updateMany({
          where: {
            idContainerPai,
            idTipoContainer,
            idContainer: { gt: idContainer },
          },
          data: {
            ordem: {
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
}
