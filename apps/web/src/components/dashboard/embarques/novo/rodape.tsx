"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Container,
  ContainersExistentes,
  TodosOsContainers,
} from "../menu-containers/menu-containers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { postNovoContainer } from "@/lib/actions/dashboard/embarques/novo";

type RodaPeProps = {
  idEnvio: number;
  nivel: number[];
  nivelUmContainersExistentes: string[];
  primeiroBadge: string;
  idContainerPai: number | null;
};

const RodaPe = ({
  idEnvio,
  nivel,
  nivelUmContainersExistentes,
  primeiroBadge,
  idContainerPai,
}: RodaPeProps) => {
  const [disable, setDisable] = useState(false);

  if (nivelUmContainersExistentes.length > 0) {
    const botoesDados = nivelUmContainersExistentes.map(
      c => ContainersExistentes[c as keyof TodosOsContainers],
    );

    return (
      <div className="flex gap-1">
        {botoes(botoesDados, disable, setDisable, idEnvio, null)}
      </div>
    );
  }

  const normalizedBadge =
    primeiroBadge.trim() as keyof typeof ContainersExistentes;

  const numeroDeBotaoes = nivel.length;

  if (!normalizedBadge || numeroDeBotaoes === 3) {
    return null;
  }

  const dadosParaBoatoes =
    normalizedBadge && ContainersExistentes[normalizedBadge];

  //console.log("dadosParaBoatoes:", dadosParaBoatoes);

  const botoesDados =
    numeroDeBotaoes === 1
      ? dadosParaBoatoes.subContainer
      : dadosParaBoatoes.subContainer[0].subContainer;

  return (
    <div className="flex gap-1">
      {botoes(botoesDados, disable, setDisable, idEnvio, idContainerPai)}
    </div>
  );
};

export default RodaPe;

const botoes = (
  containers: Container[],
  disable: boolean,
  setDisable: (data: boolean) => void,
  idEnvio: number,
  idContainerPai: number | null,
) => {
  const novoContainair = (idTipoContainer: number) => {
    setDisable(true);

    postNovoContainer({
      idTipoContainer,
      idEnvio,
      idContainerPai,
    })
      .catch(erro => {
        console.error(erro);
      })
      .finally(() => setDisable(false));
  };

  const botoesAApresentar = containers.map(b => {
    return (
      <TooltipProvider key={b.nome}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              disabled={disable}
              onClick={() => novoContainair(b.idTipoContainer)}
              className="relative flex items-center justify-center"
            >
              {disable && <Loader2 className="absolute animate-spin" />}
              {!disable && <b.icon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{b.nome}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });

  return botoesAApresentar;
};
