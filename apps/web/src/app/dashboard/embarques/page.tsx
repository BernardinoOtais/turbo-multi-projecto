import NItensPorPagina from "@/components/meus-components/n-itens-por-pagina";
import Paginacao from "@/components/meus-components/paginacao";
import { fetchGet } from "@/lib/fetch/fetch-get";

import { validadoValorNumeroItensPorPagina } from "@/lib/my-utils";
import {
  DadosParaPesquisaComPaginacaoEOrdemDto,
  EnviosListSchema,
} from "@repo/types";

import { Metadata } from "next";

import React from "react";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export const metadata: Metadata = {
  title: "Embarques",
};

const Embarques = async ({ searchParams }: PageProps) => {
  const { fechado, envpp, page } = await searchParams;
  const valorFechado = fechado === "true";
  const valorPageActual = page ? parseInt(page as string) : 1;

  const intensPorPagina = validadoValorNumeroItensPorPagina(envpp);

  const heroItemCount = 0;

  const skip =
    (valorPageActual - 1) * intensPorPagina +
    (valorPageActual === 1 ? 0 : heroItemCount);

  const take =
    intensPorPagina + (valorPageActual - 1 === 1 ? heroItemCount : 0);

  const dadosIniciais: DadosParaPesquisaComPaginacaoEOrdemDto = {
    skip,
    take,
    fechado: valorFechado,
    ordem: "desc",
  };

  const envios = await fetchGet("envios", dadosIniciais);

  //console.log(envios);

  const enviosValidados = EnviosListSchema.safeParse(envios.data);

  if (!enviosValidados.success) {
    return <div>Erro... {JSON.stringify(enviosValidados.error)}</div>;
  }

  const totalPages = Math.ceil(
    (enviosValidados.data.tamanhoLista - heroItemCount) / intensPorPagina,
  );
  const enviosRecebidos = enviosValidados.data.lista;

  return (
    <>
      <header className="x-1 space-y-1.5 border-b py-3 text-center">
        <div className="flex">
          <p className="mr-auto flex items-center">Embarques</p>
          {enviosValidados.data.tamanhoLista > 10 && (
            <NItensPorPagina valor={intensPorPagina} />
          )}
        </div>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="flex flex-col">
            {enviosRecebidos.map(envio => {
              return <div key={envio.idEnvio}>{envio.nomeEnvio}</div>;
            })}
          </div>
        </div>
      </main>
      {totalPages > 1 && (
        <footer className="w-full px-1 py-3">
          <Paginacao paginaActual={valorPageActual} totalPaginas={totalPages} />
        </footer>
      )}
    </>
  );
};

export default Embarques;
