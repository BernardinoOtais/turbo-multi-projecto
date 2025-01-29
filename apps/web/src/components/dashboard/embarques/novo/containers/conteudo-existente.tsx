import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ConteudoDto } from "@repo/types";
import React from "react";

type ConteudoExistenteProps = {
  conteudos: ConteudoDto[] | undefined;
};

const ConteudoExistente = ({ conteudos }: ConteudoExistenteProps) => {
  // console.log("Conteudos: ", conteudos);

  const totalPeso = conteudos?.reduce((acc, item) => acc + item.peso, 0) || 0;

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
        { idItem: number; totalQtt: number; totalPeso: number; count: number }
      >,
    ) || {};

  console.log("groupedByIdItem: ", groupedByIdItem);

  return (
    <Table>
      <TableCaption>Itens deste Container..</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[70px]">Op</TableHead>
          <TableHead>Referência</TableHead>
          <TableHead>Cor</TableHead>
          <TableHead>NºCliente</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="text-center">Tamanho</TableHead>
          <TableHead className="text-center">Quantidade</TableHead>
          <TableHead>Unidade</TableHead>
          <TableHead>Peso Uni.(Kg)</TableHead>
          <TableHead>Peso T.(Kg)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {conteudos
          ?.sort((a, b) => a.idItem - b.idItem) // Sort by idItem for grouping
          .map((c, index, array) => {
            const isLastForIdItem =
              index === array.length - 1 ||
              array[index + 1].idItem !== c.idItem;
            const groupSummary = groupedByIdItem[c.idItem];

            return (
              <React.Fragment key={c.idConteudo}>
                <TableRow>
                  <TableCell>{c.op}</TableCell>
                  <TableCell>{c.Op.modelo}</TableCell>
                  <TableCell>{c.Op.cor}</TableCell>
                  <TableCell>{c.Op.pedido}</TableCell>
                  <TableCell>{c.Item.Descricao}</TableCell>
                  <TableCell className="text-center">{c.tam}</TableCell>
                  <TableCell className="text-center">{c.qtt}</TableCell>
                  <TableCell>{c.Unidades.descricaoUnidade}</TableCell>
                  <TableCell className="text-center">
                    {(c.peso / c.qtt).toFixed(5)}
                  </TableCell>
                  <TableCell className="text-center">
                    {c.peso.toFixed(5)}
                  </TableCell>
                </TableRow>
                {isLastForIdItem && groupSummary.count > 1 && (
                  <TableRow>
                    <TableCell colSpan={4}></TableCell>
                    <TableCell colSpan={1} className="font-bold">
                      {c.Item.Descricao}
                    </TableCell>
                    <TableCell className="text-center font-bold">-</TableCell>
                    <TableCell className="text-center font-bold">
                      {groupSummary.totalQtt}
                    </TableCell>
                    <TableCell className="font-bold">-</TableCell>
                    <TableCell className="text-center font-bold">-</TableCell>
                    <TableCell className="text-center font-bold">
                      {groupSummary.totalPeso.toFixed(5)}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={9}>Peso Total:</TableCell>
          <TableCell className="text-center">{totalPeso.toFixed(5)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ConteudoExistente;
