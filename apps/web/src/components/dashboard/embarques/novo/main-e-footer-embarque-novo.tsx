import React from "react";
import Containers from "./containers/containers";
import RodaPe from "./rodape";
import { ConteudoDto, ListaDeContainersEnvioDto } from "@repo/types";

type MainEFooterEmbarqueNovoProps = {
  idEnvio: number;
  niveisValidados: number[];
  listaDeContainersNivelUmDisponivelParaInserir: string[];
  primeiroBadge: string;
  idContainerPai: number | null;
  containers: ListaDeContainersEnvioDto;
  conteudos: ConteudoDto[] | undefined;
};

const MainEFooterEmbarqueNovo = ({
  idEnvio,
  niveisValidados,
  listaDeContainersNivelUmDisponivelParaInserir,
  primeiroBadge,
  idContainerPai,
  containers,
  conteudos,
}: MainEFooterEmbarqueNovoProps) => {
  return (
    <>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full overflow-auto">
            <Containers
              containers={containers}
              idEnvio={idEnvio}
              niveisValidados={niveisValidados}
            />

            {conteudos?.map(conteudoItem => {
              return (
                <div key={conteudoItem.idConteudo} className="bg-red-500">
                  {conteudoItem.Item.Descricao}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="w-full px-1 py-2">
        <RodaPe
          idEnvio={idEnvio}
          nivel={niveisValidados}
          nivelUmContainersExistentes={
            listaDeContainersNivelUmDisponivelParaInserir
          }
          primeiroBadge={primeiroBadge}
          idContainerPai={idContainerPai}
        />
      </footer>
    </>
  );
};

export default MainEFooterEmbarqueNovo;
