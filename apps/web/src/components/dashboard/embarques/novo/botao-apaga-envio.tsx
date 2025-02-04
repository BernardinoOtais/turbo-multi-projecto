import { Loader2, Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { apagaEnvio } from "@/lib/actions/dashboard/embarques/novo";
import { cn } from "@/lib/utils";

type BotaoApagaEnvioProps = {
  idenvio: number;
  disabledBotao: boolean;
  setDisabledBotao: (data: boolean) => void;
};
const BotaoApagaEnvio = ({
  idenvio,
  disabledBotao,
  setDisabledBotao,
}: BotaoApagaEnvioProps) => {
  const apagaContainerFun = () => {
    setDisabledBotao(true);
    apagaEnvio(idenvio)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao apagar Envio: ${idenvio}`, {
            description: resultado.error,
          });
        else
          toast.info(`Envio ${idenvio} Apagada`, {
            description: "Sucesso",
          });
      })
      .catch(error => console.error(error))
      .finally(() => setDisabledBotao(false));
  };
  return (
    <Button
      size="icon"
      disabled={disabledBotao}
      onClick={() => apagaContainerFun()}
      className={cn(
        "relative flex items-center justify-center", // Default classes
      )}
      title="Apaga Container"
    >
      {disabledBotao && <Loader2 className="absolute animate-spin" />}
      {!disabledBotao && <Trash2 />}
    </Button>
  );
};

export default BotaoApagaEnvio;
