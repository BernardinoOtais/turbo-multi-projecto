import type { EnviosPrismaClient } from '@config/local-types';
import PrismaSingleton from '@services/prisma';

export class AuxEnviosItens {
  static async dadosPartesAndroid() {
    const prisma = PrismaSingleton.getEnviosPrisma();

    const dados = await prisma.$queryRaw<
      {
        idParte: number;
        descricaoParte: string;
        descricaoParteFrances: string;
      }[]
    >`
        select 
	        a.idParte, a.descricaoParte, a.descricaoParteFrances
        from 
            Oapptorta..EnviosMarrocosPartesPecas a
        left join 
            ligacaoAndroid b on a.idParte = b.idParte
        where 
            b.idParte is null`;

    return dados;
  }

  static async escrevoDadoPartesAndroid(
    tx: EnviosPrismaClient,
    dados: {
      idParte: number;
      descricaoParte: string;
      descricaoParteFrances: string;
    }[],
  ) {
    await Promise.all(
      dados.map(async (d) => {
        const item = await tx.item.create({
          data: {
            Descricao: d.descricaoParte,
            inativo: false,
          },
        });

        await tx.ligacaoAndroid.create({
          data: {
            idParte: d.idParte,
            idItem: item.idItem,
          },
        });

        await tx.itemTraduzido.create({
          data: {
            idIdioma: 2,
            idItem: item.idItem,
            descItem: d.descricaoParteFrances,
          },
        });
      }),
    );
  }

  static async verificoSeOItemJaFoiUsado(idItem: number) {
    const prisma = PrismaSingleton.getEnviosPrisma();
    return await prisma.conteudo.findFirst({
      where: { idItem },
    });
  }
}
