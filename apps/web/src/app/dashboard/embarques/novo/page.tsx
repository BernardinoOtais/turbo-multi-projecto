import { Button } from "@/components/ui/button";
import { fetchGet } from "@/lib/fetch/fetch-get";

import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { EnvioSchema } from "@repo/types";
import { z } from "zod";
import ContainerBreadCrumbs from "@/components/dashboard/embarques/novo/container-bread-combes";
import { cn } from "@/lib/utils";
import RodaPe from "@/components/dashboard/embarques/novo/rodape";
import { NIVEIS_INICIAIS } from "@/lib/constants";

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
  const { idEnvio, nivel } = await searchParams;

  const nivelParse = niveis.safeParse({ nivel });

  const niveisValidados = nivelParse.success ? nivelParse.data.nivel : [];

  const nIdEnvio = idEnvio ? parseInt(idEnvio as string) : null;

  if (!nIdEnvio) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>novo</div>
      </div>
    );
  }

  const dadosGetEnvio = { id: nIdEnvio };

  const envios = await fetchGet("envios/envio", dadosGetEnvio);

  const envioValidado = EnvioSchema.safeParse(envios.data);

  if (!envioValidado.success) {
    return <div>Erro... {JSON.stringify(envioValidado.error)}</div>;
  }

  const dadosEnvio = envioValidado.data;

  let conteudo = dadosEnvio.Container;

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

  if (temContainersSeleccionadados) {
    for (const nivel of niveisValidados) {
      const conteudoPai = conteudo?.find(con => con.idContainer === nivel);
      const badge = conteudoPai?.other_Container?.filter(
        oc => oc.idContainer !== nivel,
      ).length;

      conteudo = conteudoPai?.other_Container;

      listaDeContainers.push({
        id: nivel,
        nome: conteudoPai?.TipoContainer?.Item.Descricao || "",
        badge: badge || 0,
        numero: conteudoPai?.ordem || 0,
      });
    }
  }

  return (
    <>
      <header className="x-1 space-y-1.5 border-b py-3 text-center">
        <h1 className="text-lg font-bold">
          Envio:{" "}
          <span className="font-medium">{envioValidado.data.nomeEnvio}</span>
        </h1>
        <h2 className="text-md font-semibold">
          Destino:{" "}
          <span className="font-medium">
            {envioValidado.data.Destinos.nomeDestino}
          </span>
        </h2>
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
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full">
            {conteudo?.map(con => {
              return (
                <div key={con.idContainer}>
                  <Button asChild variant="ghost">
                    <Link
                      href={{
                        pathname: "/dashboard/embarques/novo",
                        query: {
                          idEnvio: nIdEnvio,
                          nivel: [
                            ...new Set([...niveisValidados, con.idContainer]),
                          ], // Remove duplicates
                        },
                      }}
                    >
                      <span>{con.TipoContainer?.Item.Descricao}</span>
                      <span>{con.ordem}</span>
                      <span>{con.idContainer}</span>
                    </Link>
                  </Button>
                  {con.Conteudo?.map(conteudoItem => {
                    return (
                      <div key={conteudoItem.idConteudo} className="bg-red-500">
                        {conteudoItem.Item.Descricao}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="w-full px-1 py-2">
        <RodaPe
          idEnvio={nIdEnvio}
          nivel={niveisValidados}
          nivelUmContainersExistentes={
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
        />
      </footer>
    </>
  );
};

export default NovoEmbarque;
