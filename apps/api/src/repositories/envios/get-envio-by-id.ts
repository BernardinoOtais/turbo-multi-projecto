import type { EnvioDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';
import { ApiResponseBody } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';

export async function getEnvioById(idEnvio: number, idd?: number) {
  const resBody = new ApiResponseBody<EnvioDto>();
  const prisma = PrismaSingleton.getEnviosPrisma();
  //console.log('idEnvio', idEnvio);
  //console.log('idd', idd);
  const tipoContainer = await prisma.container.findUnique({
    where: { idContainer: idd ?? 0 },
    select: { idTipoContainer: true },
  });

  //console.log('tipoContainer', tipoContainer?.idTipoContainer);
  try {
    const [dadosEnvio, itens, unidades, destinosDisponiveis] =
      await Promise.all([
        prisma.envio.findUnique({
          where: { idEnvio },
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
                                ItemTraduzido: {
                                  select: {
                                    descItem: true,
                                  },
                                  where: {
                                    idIdioma: 2,
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
                                Item: {
                                  select: {
                                    ItemTraduzido: {
                                      select: {
                                        descItem: true,
                                      },
                                      where: {
                                        idIdioma: 2,
                                      },
                                    },
                                  },
                                },
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
                          orderBy: [
                            { idTipoContainer: 'asc' },
                            { ordem: 'asc' },
                          ],
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
        prisma.$queryRaw<{ idItem: number; Descricao: string }[]>`
        SELECT
          a.idItem,
          a.Descricao
        from 
          Item a
        left join 
          ligacaoAndroid b on a.idItem = b.idItem and ${tipoContainer?.idTipoContainer} = 3
        where a.idItem > 199 and b.idItem is null`,
        prisma.unidades.findMany(),
        prisma.$queryRaw<{ value: string; label: string }[]>`
        SELECT 
          idDestino AS value, 
          nomeDestino AS label 
        FROM 
          Destinos`,
      ]);

    if (!dadosEnvio) {
      resBody.error = {
        code: HttpStatusCode.NOT_FOUND,
        message: `Envio with id ${idEnvio} not found`,
      };
      return resBody;
    }

    resBody.data = {
      ...dadosEnvio,
      Itens: itens,
      Unidades: unidades,
      DestinosDisponiveis: destinosDisponiveis,
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
