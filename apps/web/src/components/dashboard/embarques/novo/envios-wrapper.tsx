"use client";
import { AutocompleteDto, EnvioDto } from "@repo/types";
import React, { useState } from "react";

import EnvioCard from "../envio-card";

type EnviosWrapperProps = {
  envios: EnvioDto[];
  destinos: AutocompleteDto[];
};
const EnviosWrapper = ({ envios, destinos }: EnviosWrapperProps) => {
  const [disabledBotao, setDisabledBotao] = useState(false);

  return envios.map(envio => {
    return (
      <EnvioCard
        key={envio.idEnvio}
        envio={envio}
        destinos={destinos}
        disabledBotao={disabledBotao}
        setDisabledBotao={setDisabledBotao}
      />
    );
  });
};

export default EnviosWrapper;
