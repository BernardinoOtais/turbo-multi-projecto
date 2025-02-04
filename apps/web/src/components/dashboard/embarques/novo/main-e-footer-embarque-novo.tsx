import React from "react";
import Containers from "./containers/containers";
import RodaPe from "./rodape";
import {
  ContainerOpsSchemasDto,
  ConteudoDto,
  ItensSchemaDto,
  ListaDeContainersEnvioDto,
  UnidadesSchemaDto,
} from "@repo/types";
import ConteudoExistente from "./containers/conteudo/conteudo-existente";
import InsereConteudoWrapper from "./containers/insere-conteudo-wrapper";

type MainEFooterEmbarqueNovoProps = {
  idEnvio: number;
  niveisValidados: number[];
  listaDeContainersNivelUmDisponivelParaInserir: string[];
  primeiroBadge: string;
  idContainerPai: number | null;
  containers: ListaDeContainersEnvioDto;
  conteudos: ConteudoDto[] | undefined;
  containerOpsTamanhosDiponiveis: ContainerOpsSchemasDto;
  idTipoContainer: number | undefined;
  unidades: UnidadesSchemaDto;
  itensDisponiveis: ItensSchemaDto;
  idConteudo: number | undefined;
};

const MainEFooterEmbarqueNovo = async ({
  idEnvio,
  niveisValidados,
  listaDeContainersNivelUmDisponivelParaInserir,
  primeiroBadge,
  idContainerPai,
  containers,
  conteudos,
  containerOpsTamanhosDiponiveis,
  idTipoContainer,
  unidades,
  itensDisponiveis,
  idConteudo,
}: MainEFooterEmbarqueNovoProps) => {
  //console.log("footer", containerOpsTamanhosDiponiveis);
  //console.log("idTipoContainer: ", idTipoContainer);

  const mostraContainers =
    idTipoContainer === undefined || idTipoContainer <= 4;

  return (
    <>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="flex w-full flex-col gap-1 overflow-auto">
            {conteudos && conteudos.length !== 0 && (
              <ConteudoExistente conteudos={conteudos} />
            )}

            {mostraContainers ? (
              <Containers
                containers={containers}
                idEnvio={idEnvio}
                niveisValidados={niveisValidados}
              />
            ) : (
              <InsereConteudoWrapper
                idConteudo={idConteudo}
                idContainerPai={idContainerPai || 0}
                unidades={unidades}
                containerOpsTamanhosDiponiveis={containerOpsTamanhosDiponiveis}
                itensDisponiveis={itensDisponiveis}
              />
            )}
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
