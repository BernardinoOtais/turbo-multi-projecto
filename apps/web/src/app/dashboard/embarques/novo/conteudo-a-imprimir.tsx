import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React, { useRef } from "react";

import PackingListConteudo from "@/components/meus-components/packing-list-conteudo";
import PackingListDestino from "@/components/meus-components/packing-list-destino";
import PackingListDizeres from "@/components/meus-components/packing-list-dizeres";
import PackingListPesoTotalVolume from "@/components/meus-components/packing-list-peso-total-volume";
import PackingListResumo from "@/components/meus-components/packing-list-resumo";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";

type ConteudoAImprimirProps = {
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
  altura: number;
};

export default function ConteudoAImprimir({
  contentRef,
  className,
  container,
  destino,
  altura,
}: ConteudoAImprimirProps) {
  const containerRef: React.RefObject<HTMLDivElement | null> = useRef(null);
  const { width } = useDimensions(containerRef);
  const containerAImprimir = container.other_Container;

  const dados = containerAImprimir?.flatMap(con => con.Conteudo ?? []);

  const groupedData = dados?.reduce(
    (acc, item) => {
      const descricao =
        item.Item.ItemTraduzido.length > 0
          ? item.Item.ItemTraduzido[0].descItem
          : item.Item.Descricao;
      if (!acc[item.idItem]) {
        acc[item.idItem] = {
          idItem: item.idItem,
          descricao: descricao,
          qtt: 0,
          peso: 0,
        };
      }
      acc[item.idItem].qtt += item.qtt;
      acc[item.idItem].peso += item.peso;
      return acc;
    },
    {} as Record<
      number,
      { idItem: number; descricao: string; qtt: number; peso: number }
    >,
  );
  const dadosResumo = groupedData ? Object.values(groupedData) : [];

  const pesoTotal = dadosResumo.reduce((acc, item) => acc + item.peso, 0);

  const numeroDeCaixas = containerAImprimir?.filter(
    c => c.idTipoContainer === 5,
  ).length;

  const pesoPallet = 10;

  const pesoDaPallet =
    pesoTotal + (!numeroDeCaixas ? 0 : numeroDeCaixas) + pesoPallet;

  return (
    <div
      className={cn("aspect-[210/297] bg-white text-black", className)}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <PackingListDestino destino={destino} />
        <PackingListConteudo
          containerAImprimir={containerAImprimir}
          numeroPai={container.nContainer}
        />
        <PackingListResumo dadosResumo={dadosResumo} />
        <PackingListPesoTotalVolume altura={altura} peso={pesoDaPallet} />
        <PackingListDizeres />
      </div>
    </div>
  );
}
