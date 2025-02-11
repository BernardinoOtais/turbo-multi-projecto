import { ConteudoDto } from "@repo/types";
import React from "react";

import ConteudoExistente from "./conteudo-existente";

type WrapperConteudoExistentProps = {
  conteudos: ConteudoDto[] | undefined;
};

const WrapperConteudoExistent = ({
  conteudos,
}: WrapperConteudoExistentProps) => {
  const dados = conteudos?.sort((a, b) => a.idItem - b.idItem);

  const conteudosAgrupados =
    conteudos?.reduce(
      (acc, item) => {
        if (!acc[item.idItem]) {
          acc[item.idItem] = {
            idItem: item.idItem,
            totalQtt: 0,
            totalPeso: 0,
            count: 0,
          };
        }
        acc[item.idItem].totalQtt += item.qtt;
        acc[item.idItem].totalPeso += item.peso;
        acc[item.idItem].count += 1;
        return acc;
      },
      {} as Record<
        number,
        {
          idItem: number;
          totalQtt: number;
          totalPeso: number;
          count: number;
        }
      >,
    ) || {};

  return (
    <ConteudoExistente
      conteudos={dados}
      conteudosAgrupados={conteudosAgrupados}
    />
  );
};

export default WrapperConteudoExistent;
