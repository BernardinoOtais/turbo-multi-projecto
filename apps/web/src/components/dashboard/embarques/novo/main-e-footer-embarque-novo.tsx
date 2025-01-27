import React from "react";
import Containers from "./containers/containers";
import RodaPe from "./rodape";
import {
  ContainerOpsSchemasDto,
  ConteudoDto,
  ListaDeContainersEnvioDto,
  UnidadesSchemaDto,
} from "@repo/types";
import InsereConteudo from "./containers/insere-conteudo";

type MainEFooterEmbarqueNovoProps = {
  idEnvio: number;
  niveisValidados: number[];
  listaDeContainersNivelUmDisponivelParaInserir: string[];
  primeiroBadge: string;
  idContainerPai: number | null;
  containers: ListaDeContainersEnvioDto;
  conteudos: ConteudoDto[] | undefined;
  dadosDisponiveisParaInserir: ContainerOpsSchemasDto;
  idTipoContainer: number | undefined;
  unidades: UnidadesSchemaDto;
};

const MainEFooterEmbarqueNovo = ({
  idEnvio,
  niveisValidados,
  listaDeContainersNivelUmDisponivelParaInserir,
  primeiroBadge,
  idContainerPai,
  containers,
  conteudos,
  dadosDisponiveisParaInserir,
  idTipoContainer,
  unidades,
}: MainEFooterEmbarqueNovoProps) => {
  //console.log("footer", dadosDisponiveisParaInserir);
  //console.log("idTipoContainer: ", idTipoContainer);

  const mostraContainers =
    idTipoContainer === undefined || idTipoContainer <= 4;

  const unidadeParaAutoComplete = unidades.map(item => ({
    value: item.idUnidades.toString(),
    label: item.descricaoUnidade,
  }));

  return (
    <>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full overflow-auto">
            {conteudos?.map(conteudoItem => {
              return (
                <div key={conteudoItem.idConteudo} className="bg-red-500">
                  {conteudoItem.Unidades.descricaoUnidade}
                </div>
              );
            })}
            {mostraContainers ? (
              <Containers
                containers={containers}
                idEnvio={idEnvio}
                niveisValidados={niveisValidados}
              />
            ) : (
              <InsereConteudo
                dadosDisponiveisParaInserir={dadosDisponiveisParaInserir}
                unidades={unidadeParaAutoComplete}
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
