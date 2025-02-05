import {
  ContainerOpsSchemasDto,
  ItensSchemaDto,
  UnidadesSchemaDto,
} from "@repo/types";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import InsereConteudoCliente from "./insere-conteudo-cliente";

type InsereConteudoWrapperProps = {
  idConteudo?: number;
  idContainerPai: number;
  unidades: UnidadesSchemaDto;
  containerOpsTamanhosDiponiveis: ContainerOpsSchemasDto;
  itensDisponiveis: ItensSchemaDto;
};
const InsereConteudoWrapper = ({
  idConteudo,
  idContainerPai,
  unidades,
  containerOpsTamanhosDiponiveis,
  itensDisponiveis,
}: InsereConteudoWrapperProps) => {
  const ops =
    containerOpsTamanhosDiponiveis?.map(item => ({
      value: item.op,
      label: item.op.toString(),
    })) || [];

  const unidadesDisponiveis = unidades.map(item => ({
    value: item.idUnidades,
    label: item.descricaoUnidade,
  }));

  const itens = itensDisponiveis.map(item => ({
    value: item.idItem,
    label: item.Descricao,
  }));
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          {idConteudo ? "Altera conteudo" : "Novo conteudo"}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <InsereConteudoCliente
          idContainer={idContainerPai}
          ops={ops}
          unidades={unidadesDisponiveis}
          itens={itens}
          dadoOps={containerOpsTamanhosDiponiveis}
        />
      </CardContent>
    </Card>
  );
};

export default InsereConteudoWrapper;
