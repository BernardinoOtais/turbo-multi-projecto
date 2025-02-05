"use client";
import { AutocompleteStringDto, EnvioDto } from "@repo/types";
import React, { useState } from "react";

import EnvioCard from "../../../../app/dashboard/embarques/envio-card";

type EnviosWrapperProps = {
  envios: EnvioDto[];
  destinos: AutocompleteStringDto[];
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
