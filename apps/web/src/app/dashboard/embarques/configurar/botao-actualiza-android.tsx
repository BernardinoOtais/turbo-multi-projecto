"use client";
import { RespostaSchema } from "@repo/types";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { actualizaAndroid } from "@/lib/actions/dashboard/embarques";

const BoataoActualizaAndroid = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const clic = () => {
    setIsLoading(true);
    actualizaAndroid()
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao actulizar...`, {
            description: resultado.error,
          });

        const respostaRecebida = RespostaSchema.safeParse(resultado.data.data);
        if (respostaRecebida.success)
          toast.info(
            respostaRecebida.data.successMessage || `Partes actualizadas...`,
            {
              description: "Sucesso",
            },
          );
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  };
  return (
    <Button
      onClick={clic}
      variant="outline"
      className="m-1 mx-auto"
      disabled={isLoading}
    >
      {isLoading && <Loader2 className="animate-spin" />}
      Actualiza Partes de Android
    </Button>
  );
};

export default BoataoActualizaAndroid;
