import type { PostContainerSchemaDto } from '@repo/types';

import PrismaSingleton from '@services/prisma';

export class AuthEnvios {
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
  static async numeroOrdemContainerSeSubContainerTipo(
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
  static async numeroOrdemContainerSeSubContainer(
    container: PostContainerSchemaDto,
  ): Promise<number> {
    const { idContainerPai, idEnvio } = container;
    return PrismaSingleton.getEnviosPrisma().container.count({
      where: {
        idContainerPai,
        idEnvio,
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

  static async insereContainer(
    container: PostContainerSchemaDto,
    ordem: number,
    nContainer: number,
  ) {
    const { idContainerPai, idEnvio, idTipoContainer } = container;
    return PrismaSingleton.getEnviosPrisma().container.create({
      data: {
        idContainerPai,
        idEnvio,
        idTipoContainer,
        ordem,
        nContainer,
      },
    });
  }
}
