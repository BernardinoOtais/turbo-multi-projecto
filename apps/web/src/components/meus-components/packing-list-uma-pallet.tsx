import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React from "react";

import PackingListConteudo from "./packing-list-conteudo";
import PackingListDestino from "./packing-list-destino";
import PackingListDizeres from "./packing-list-dizeres";
import PackingListPesoTotalVolume from "./packing-list-peso-total-volume";
import PackingListResumo from "./packing-list-resumo";

type PackingListUmaPalletProps = {
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
  altura: number;
};

const tratarDadosDeUmaPalete = (container: ContainerSchemaDto) => {
  const containerAImprimir = container.other_Container ?? [];
  const dados = containerAImprimir.flatMap(con => con.Conteudo ?? []);

  const groupedData = dados.reduce<
    Record<
      number,
      { idItem: number; descricao: string; qtt: number; peso: number }
    >
  >((acc, item) => {
    const descricao =
      item.Item.ItemTraduzido.length > 0
        ? item.Item.ItemTraduzido[0].descItem
        : item.Item.Descricao;

    if (!acc[item.idItem]) {
      acc[item.idItem] = { idItem: item.idItem, descricao, qtt: 0, peso: 0 };
    }
    acc[item.idItem].qtt += item.qtt;
    acc[item.idItem].peso += item.peso;

    return acc;
  }, {});

  const dadosResumo = Object.values(groupedData);
  const pesoTotal = dadosResumo.reduce((acc, item) => acc + item.peso, 0);
  const numeroDeCaixas = containerAImprimir.filter(
    c => c.idTipoContainer === 5,
  ).length;
  const pesoPallet = 10;
  const pesoDaPallet = pesoTotal + (numeroDeCaixas || 0) + pesoPallet;

  return { dadosResumo, pesoDaPallet };
};

const PackingListUmaPallet = ({
  container,
  destino,
  altura,
}: PackingListUmaPalletProps) => {
  const { dadosResumo, pesoDaPallet } = tratarDadosDeUmaPalete(container);
  console.log("PackingListUmaPallet", container);
  return (
    <>
      <PackingListDestino destino={destino} />
      <PackingListConteudo
        containerAImprimir={container.other_Container}
        numeroPai={container.nContainer}
      />
      <div style={{ breakInside: "avoid", display: "block" }}>
        <PackingListResumo dadosResumo={dadosResumo} />
        <PackingListPesoTotalVolume altura={altura} peso={pesoDaPallet} />
        <PackingListDizeres />
      </div>
    </>
  );
};

export default PackingListUmaPallet;
