import type { EnvioDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function getEnvioById(idEnvio: number) {
  const resBody = new ApiResponseBody<EnvioDto>();

  try {
    const [dadosEnvio, itens, unidades] = await Promise.all([
      PrismaSingleton.getEnviosPrisma().envio.findUnique({
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
              nContainer: true,
              altura: true,
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
              ContainerOp: {
                select: {
                  op: true,
                  Op: {
                    select: {
                      op: true,
                      ref: true,
                      modeloDesc: true,
                      modelo: true,
                      cor: true,
                      pedido: true,
                      norma: true,
                      OpTamanho: {
                        select: {
                          op: true,
                          tam: true,
                          ordem: true,
                          qtt: true,
                        },
                      },
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
                  nContainer: true,
                  altura: true,
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
                  ContainerOp: {
                    select: {
                      op: true,
                      Op: {
                        select: {
                          op: true,
                          ref: true,
                          modeloDesc: true,
                          modelo: true,
                          cor: true,
                          pedido: true,
                          norma: true,
                          OpTamanho: {
                            select: {
                              op: true,
                              tam: true,
                              ordem: true,
                              qtt: true,
                            },
                          },
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
                      nContainer: true,
                      altura: true,
                      ContainerOp: {
                        select: {
                          op: true,
                          Op: {
                            select: {
                              op: true,
                              ref: true,
                              modeloDesc: true,
                              modelo: true,
                              cor: true,
                              pedido: true,
                              norma: true,
                              OpTamanho: {
                                select: {
                                  op: true,
                                  tam: true,
                                  ordem: true,
                                  qtt: true,
                                },
                              },
                            },
                          },
                        },
                      },
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
                          Op: {
                            select: {
                              op: true,
                              ref: true,
                              modeloDesc: true,
                              modelo: true,
                              cor: true,
                              pedido: true,
                              norma: true,
                            },
                          },
                          op: true,
                          tam: true,
                          OpTamanho: {
                            select: { ordem: true },
                          },
                          qtt: true,
                          Unidades: {
                            select: {
                              idUnidades: true,
                              idItem: true,
                              descricaoUnidade: true,
                            },
                          },
                          peso: true,
                        },
                        orderBy: [
                          { op: 'asc' },
                          { idItem: 'asc' },
                          {
                            OpTamanho: {
                              ordem: 'asc',
                            },
                          },
                        ],
                      },
                      //Container Sub sub sub
                      other_Container: {
                        select: {
                          idContainer: true,
                          idContainerPai: true,
                          idTipoContainer: true,
                          ordem: true,
                          nContainer: true,
                          altura: true,
                          ContainerOp: {
                            select: {
                              op: true,
                              Op: {
                                select: {
                                  op: true,
                                  ref: true,
                                  modeloDesc: true,
                                  modelo: true,
                                  cor: true,
                                  pedido: true,
                                  norma: true,
                                  OpTamanho: {
                                    select: {
                                      op: true,
                                      tam: true,
                                      ordem: true,
                                      qtt: true,
                                    },
                                  },
                                },
                              },
                            },
                          },
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
                        },
                        orderBy: [{ idTipoContainer: 'asc' }, { ordem: 'asc' }],
                      },
                      //Container Sub sub sub
                    },
                    orderBy: [{ ordem: 'asc' }],
                  },
                  //Container Sub sub
                },
                orderBy: [{ ordem: 'asc' }],
              },
              //Container Sub
            },
            orderBy: [{ ordem: 'asc' }],
          },
          //Container principal
        },
      }),
      PrismaSingleton.getEnviosPrisma().item.findMany({
        where: { idItem: { gt: 199 } },
      }),
      PrismaSingleton.getEnviosPrisma().unidades.findMany(),
    ]);

    if (!dadosEnvio) {
      resBody.error = {
        code: HttpStatusCode.NOT_FOUND,
        message: `Envio with id ${idEnvio} not found`,
      };
      return resBody;
    }

    resBody.data = { ...dadosEnvio, Itens: itens, Unidades: unidades };
    return resBody;
  } catch (error) {
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error instanceof Error ? error.message : 'Unexpected error',
    };
    return resBody;
  }
}
