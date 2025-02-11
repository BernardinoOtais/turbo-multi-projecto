import {
  ContainerOpsSchemasDto,
  ConteudoDto,
  DestinosPossiveisSchema,
  EnvioSchema,
  ItensSchemaDto,
} from "@repo/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

import { deleteSession } from "@/lib/actions/auth/sessions";
import { NIVEIS_INICIAIS } from "@/lib/constants";
import { fetchGet } from "@/lib/fetch/fetch-get";
import { cn } from "@/lib/utils";

import DestinosDesteEnvio from "../destinos-deste-envio";
import ContainerBreadCrumbs from "./container-bread-crumbes";
import MainEFooterEmbarqueNovo from "./main-e-footer-embarque-novo";
import NovoEnvio from "../novo-envio";

const niveis = z.object({
  nivel: z
    .union([
      z.string().transform(val => [parseInt(val)]), // Single value as a string
      z.array(z.string().transform(val => parseInt(val))), // Array of strings
    ])
    .default([]),
});

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata: Metadata = {
  title: "Novo Embarque",
};

const NovoEmbarque = async ({ searchParams }: PageProps) => {
  const { idEnvio, nivel, idConteudo } = await searchParams;

  const nivelParse = niveis.safeParse({ nivel });

  const niveisValidados = nivelParse.success ? nivelParse.data.nivel : [];

  const idConteudoRecebido = idConteudo
    ? parseInt(idConteudo as string)
    : undefined;

  //console.log("niveisValidados", niveisValidados);
  const nIdEnvio = idEnvio ? parseInt(idEnvio as string) : null;

  if (!nIdEnvio) {
    const destinos = await fetchGet("envios/getdestinos");
    const destinosValidados = DestinosPossiveisSchema.safeParse(destinos.data);
    if (!destinosValidados.success) {
      redirect("/dashboard");
    }

    return (
      <div className="mx-auto p-1">
        <NovoEnvio destinos={destinosValidados.data} aberto={true} />
      </div>
    );
  }

  let idContainerInicial = 0;
  if (niveisValidados.length > 0) {
    idContainerInicial = niveisValidados[0];
  }

  const dadosGetEnvio =
    idContainerInicial === 0
      ? { id: nIdEnvio }
      : { id: nIdEnvio, idd: idContainerInicial };

  // Remove undefined values
  const filteredDadosGetEnvio = Object.fromEntries(
    Object.entries(dadosGetEnvio).filter(([, v]) => v !== undefined),
  );

  const envios = await fetchGet("envios/envio", filteredDadosGetEnvio);
  //console.log(envios);
  if (!envios) {
    redirect("/dashboard");
  }

  const envioValidado = EnvioSchema.safeParse(envios.data);

  if (!envioValidado.success) {
    return <div>Erro... {JSON.stringify(envioValidado.error)}</div>;
  }

  const dadosEnvio = envioValidado.data;

  const itens = dadosEnvio.Itens;
  const unidades = dadosEnvio.Unidades;

  if (!itens || !unidades) {
    deleteSession();
    return;
  }

  //console.log(itens, unidades);

  let container = dadosEnvio.Container;

  const listaDeContainers: EmbarqueBreadCrumbContainers[] = [];

  const temContainersSeleccionadados = niveisValidados.length > 0;

  const conteudoContainerNivelUm = dadosEnvio.Container?.map(item =>
    item.TipoContainer?.Item.Descricao.trim(),
  );

  //console.log("conteudoContainerNivelUm", conteudoContainerNivelUm);
  //console.log("NIVEIS_INICIAIS", NIVEIS_INICIAIS);
  const listaDeContainersNivelUmDisponivelParaInserir =
    !temContainersSeleccionadados
      ? NIVEIS_INICIAIS.filter(
          item => !conteudoContainerNivelUm?.includes(item),
        )
      : [];

  /*console.log(
    "listaDeContainersNivelUmDisponivelParaInserir",
    listaDeContainersNivelUmDisponivelParaInserir,
  );*/

  let conteudo: ConteudoDto[] | undefined = [];
  let containerOpsTamanhosDiponiveis: ContainerOpsSchemasDto = [];
  let idTipoContainer: number | undefined = 0;

  if (temContainersSeleccionadados) {
    for (const nivel of niveisValidados) {
      const conteudoPai = container?.find(con => con.idContainer === nivel);

      const badge = conteudoPai?.other_Container?.filter(
        oc => oc.idContainer !== nivel,
      ).length;
      container = conteudoPai?.other_Container;

      conteudo = conteudoPai?.Conteudo;

      containerOpsTamanhosDiponiveis = conteudoPai?.ContainerOp;

      idTipoContainer = conteudoPai?.idTipoContainer;

      listaDeContainers.push({
        id: nivel,
        nome: conteudoPai?.TipoContainer?.Item.Descricao || "",
        badge: badge || 0,
        numero: conteudoPai?.ordem || 0,
      });
    }

    //console.log("idTipoContainer: ", idTipoContainer);

    //console.log(nivel, dadosDisponiveisParaInserir);
  }

  const itensDisponiveis: ItensSchemaDto = dadosEnvio.Itens ?? [];

  return (
    <>
      <header className="x-1 space-y-1.5 border-b py-3 text-center">
        <h1 className="text-lg font-bold">
          Envio:{" "}
          <span className="font-medium">{envioValidado.data.nomeEnvio}</span>
        </h1>
        <div className="flex items-center justify-center">
          <h2 className="text-md font-semibold">Destino:</h2>
          <DestinosDesteEnvio
            idEnvio={envioValidado.data.idEnvio}
            idDestino={envioValidado.data.Destinos.idDestino}
            destinosDisponiveis={envioValidado.data.DestinosDisponiveis || []}
          />
        </div>

        <h3
          className={cn(
            "flex items-center justify-center pt-3",
            listaDeContainers.length === 0 && "hidden",
          )}
        >
          <ContainerBreadCrumbs
            crumbs={listaDeContainers}
            niveisValidados={niveisValidados}
            nIdEnvio={nIdEnvio}
          />
        </h3>
      </header>
      <MainEFooterEmbarqueNovo
        idEnvio={nIdEnvio}
        niveisValidados={niveisValidados}
        listaDeContainersNivelUmDisponivelParaInserir={
          listaDeContainersNivelUmDisponivelParaInserir
        }
        primeiroBadge={
          listaDeContainers.length > 0 ? listaDeContainers[0].nome : ""
        }
        idContainerPai={
          listaDeContainers.length > 0
            ? listaDeContainers[listaDeContainers.length - 1].id
            : null
        }
        containers={container}
        conteudos={conteudo}
        containerOpsTamanhosDiponiveis={containerOpsTamanhosDiponiveis}
        idTipoContainer={idTipoContainer}
        unidades={unidades}
        itensDisponiveis={itensDisponiveis}
        idConteudo={idConteudoRecebido}
        destino={dadosEnvio.Destinos}
      />
    </>
  );
};

export default NovoEmbarque;
