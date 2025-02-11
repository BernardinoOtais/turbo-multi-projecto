"use client";
import { ConteudoDto } from "@repo/types";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { apagaConteudo } from "@/lib/actions/dashboard/embarques";

import ConteudoCliente from "./conteudo-cliente";

type ConteudoExistenteProps = {
  conteudos: ConteudoDto[] | undefined;
  conteudosAgrupados: Record<
    number,
    {
      idItem: number;
      totalQtt: number;
      totalPeso: number;
      count: number;
    }
  >;
};

const ConteudoExistente = ({
  conteudos,
  conteudosAgrupados,
}: ConteudoExistenteProps) => {
  const [itensSelecionados, setItensSelecionados] = useState<number[]>([]);
  const [disabledApaga, setDisabledApaga] = useState(false);

  const totalPeso = conteudos?.reduce((acc, item) => acc + item.peso, 0) || 0;

  const apagaConteudoFun = () => {
    setDisabledApaga(true);

    apagaConteudo({ numbers: itensSelecionados })
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao apagar estes conteudos..`, {
            description: resultado.error,
          });
        else
          toast.info(`Conteudos apagados...`, {
            description: "Sucesso",
          });
      })
      .catch(error => {
        setItensSelecionados([]);
        setDisabledApaga(false);

        console.error(error);
      })
      .finally(() => {
        setItensSelecionados([]);
        setDisabledApaga(false);
      });
  };

  return (
    <div>
      <Table>
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

        <TableBody className="text-xs">
          <ConteudoCliente
            conteudos={conteudos}
            conteudosAgrupados={conteudosAgrupados}
            itensSelecionados={itensSelecionados}
            setItensSelecionados={setItensSelecionados}
            disabledApaga={disabledApaga}
          />
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>Peso Total:</TableCell>
            <TableCell className="text-center">
              {totalPeso.toFixed(5)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {itensSelecionados.length > 0 && (
        <Button
          className="w-full p-1"
          variant="destructive"
          disabled={disabledApaga}
          onClick={() => apagaConteudoFun()}
        >
          {disabledApaga && <Loader2 className="animate-spin" />} Apagar
          Conteudo
        </Button>
      )}
    </div>
  );
};

export default ConteudoExistente;
