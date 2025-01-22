import type { EnvioDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function getEnvioById(idEnvio: number) {
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
                    ContainerOpTam: {
                      select: {
                        tam: true,
                        OpTamanho: {
                          select: {
                            tam: true,
                            ordem: true,
                            qtt: true,
                          },
                        },
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
