"use client";
import { Loader2, Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { apagaContainer } from "@/lib/actions/dashboard/embarques";
import { cn } from "@/lib/utils";

type BotaoApagaContainerProps = {
  idContainer: number;
  className?: string; // Optional `className` prop
  setScroll: (data: boolean) => void;
  apagaCardEstado: boolean;
  setApagaCardEstado: (data: boolean) => void;
  nomeContainer: string;
};

const BotaoApagaContainer = ({
  idContainer,
  className,
  setScroll,
  apagaCardEstado,
  setApagaCardEstado,
  nomeContainer,
}: BotaoApagaContainerProps) => {
  const apagaContainerFun = () => {
    setApagaCardEstado(true);
    setScroll(false);
    apagaContainer(idContainer)
      .then(resultado => {
        if (!resultado.success) {
          toast.error(
            `Erro ao apagar ${nomeContainer.trim()} id:${idContainer}`,
            {
              description: resultado.error,
            },
          );
        } else {
          toast.error(`Apagado ${nomeContainer.trim()} id:${idContainer}`, {
            description: resultado.error,
          });
        }
      })
      .catch(error => console.error(error))
      .finally(() => setApagaCardEstado(false));
  };

  return (
    <Button
      size="icon"
      disabled={apagaCardEstado}
      onClick={() => apagaContainerFun()}
      className={cn(
        "relative flex items-center justify-center", // Default classes
        className, // Merge with custom classes
      )}
      title="Apaga Container"
    >
      {apagaCardEstado && <Loader2 className="absolute animate-spin" />}
      {!apagaCardEstado && <Trash2 />}
    </Button>
  );
};

export default BotaoApagaContainer;
