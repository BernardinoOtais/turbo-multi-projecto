import React from "react";

import { Button } from "@/components/ui/button";

import BoataoActualizaAndroid from "./botao-actualiza-android";

const ConfiguracaoEmbarques = () => {
  return (
    <div className="flex">
      <BoataoActualizaAndroid />
      <Button variant="outline" className="m-1 mx-auto">
        Insere Itens
      </Button>
      <Button variant="outline" className="m-1 mx-auto">
        Preços Embarque
      </Button>
    </div>
  );
};

export default ConfiguracaoEmbarques;
