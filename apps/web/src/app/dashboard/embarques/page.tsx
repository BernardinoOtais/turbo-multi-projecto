import {
  DadosParaPesquisaComPaginacaoEOrdemDto,
  EnvioDto,
  EnviosListSchema,
} from "@repo/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

import EnviosWrapper from "@/components/dashboard/embarques/novo/envios-wrapper";
import NovoEnvio from "@/components/dashboard/embarques/novo-envio";
import NItensPorPagina from "@/components/meus-components/n-itens-por-pagina";
import Paginacao from "@/components/meus-components/paginacao";
import SwitchFechado from "@/components/switch-fechado";
import { fetchGet } from "@/lib/fetch/fetch-get";
import { validadoValorNumeroItensPorPagina } from "@/lib/my-utils";

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
  if (!envios) {
    redirect("/dashboard");
  }

  const enviosValidados = EnviosListSchema.safeParse(envios.data);

  if (!enviosValidados.success) {
    return <div>Erro... {JSON.stringify(enviosValidados.error)}</div>;
  }

  const totalPages = Math.ceil(
    (enviosValidados.data.tamanhoLista - heroItemCount) / intensPorPagina,
  );
  const enviosRecebidos: EnvioDto[] = enviosValidados.data.lista;
  const destinos = enviosValidados.data.DestinosDisponiveis || [];

  return (
    <>
      <header className="x-1 space-y-1.5 border-b py-3 text-center">
        <div className="flex items-center space-x-2">
          <SwitchFechado fechado={valorFechado} />
          {valorFechado !== true && (
            <div className="mx-auto">
              <NovoEnvio destinos={destinos} />
            </div>
          )}
          {enviosValidados.data.tamanhoLista > 10 && (
            <div className="mx-auto">
              <NItensPorPagina valor={intensPorPagina} />
            </div>
          )}
        </div>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="flex w-full flex-col items-center gap-1 overflow-auto">
            <EnviosWrapper envios={enviosRecebidos} destinos={destinos} />
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
//3.42.08
export default Embarques;
