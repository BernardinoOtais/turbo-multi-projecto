import { ConteudoDto } from "@repo/types";
import React from "react";

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

import ConteudoCliente from "./conteudo-cliente";

type ConteudoExistenteProps = {
  conteudos: ConteudoDto[] | undefined;
};

const ConteudoExistente = ({ conteudos }: ConteudoExistenteProps) => {
  // console.log("Conteudos: ", conteudos);

  const totalPeso = conteudos?.reduce((acc, item) => acc + item.peso, 0) || 0;

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
        <ConteudoCliente conteudos={conteudos} />
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
