"use client";
import { AutocompleteStringDto, EnvioDto } from "@repo/types";
import React, { useState } from "react";

import EnvioCard from "../envio-card";

type WrapperEnviosProps = {
  envios: EnvioDto[];
  destinos: AutocompleteStringDto[];
};
const WrapperEnvios = ({ envios, destinos }: WrapperEnviosProps) => {
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

export default WrapperEnvios;
