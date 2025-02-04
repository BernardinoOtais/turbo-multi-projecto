"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { Fragment, useState } from "react";
import ApagaConteudo from "./apaga-conteudo";
import { ConteudoDto } from "@repo/types";

type ConteudoClienteProps = {
  conteudos: ConteudoDto[] | undefined;
};
const ConteudoCliente = ({ conteudos }: ConteudoClienteProps) => {
  const [disabledApaga, setDisabledApaga] = useState(false);
  const dados = conteudos?.sort((a, b) => a.idItem - b.idItem);

  const groupedByIdItem =
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

  return dados?.map((c, index, array) => {
    const isLastForIdItem =
      index === array.length - 1 || array[index + 1].idItem !== c.idItem;

    const groupSummary = groupedByIdItem[c.idItem];
    return (
      <Fragment key={c.idConteudo}>
        <TableRow>
          <TableCell>{c.op}</TableCell>
          <TableCell>{c.Op.modelo}</TableCell>
          <TableCell>{c.Op.cor}</TableCell>
          <TableCell>{c.Op.pedido}</TableCell>
          <TableCell>
            <ApagaConteudo
              nome={c.Item.Descricao}
              idConteudo={c.idConteudo}
              disabledApaga={disabledApaga}
              setDisabledApaga={setDisabledApaga}
            />
          </TableCell>
          <TableCell className="text-center">
            {c.tam === "nt" ? "" : c.tam}
          </TableCell>
          <TableCell className="text-center">{c.qtt}</TableCell>
          <TableCell>{c.Unidades.descricaoUnidade}</TableCell>
          <TableCell className="text-center">
            {c.qtt == 0 ? 0 : (c.peso / c.qtt).toFixed(5)}
          </TableCell>
          <TableCell className="text-center">{c.peso.toFixed(5)}</TableCell>
        </TableRow>
        {isLastForIdItem && groupSummary.count > 1 && (
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell colSpan={1} className="font-bold">
              {c.Item.Descricao}
            </TableCell>
            <TableCell className="text-center font-bold">-</TableCell>
            <TableCell className="text-center font-bold">
              {Number.isInteger(groupSummary.totalQtt)
                ? groupSummary.totalQtt
                : Number(groupSummary.totalQtt).toFixed(3)}
            </TableCell>
            <TableCell className="font-bold">-</TableCell>
            <TableCell className="text-center font-bold">-</TableCell>
            <TableCell className="text-center font-bold">
              {groupSummary.totalPeso.toFixed(5)}
            </TableCell>
          </TableRow>
        )}
      </Fragment>
    );
  });
};

export default ConteudoCliente;
