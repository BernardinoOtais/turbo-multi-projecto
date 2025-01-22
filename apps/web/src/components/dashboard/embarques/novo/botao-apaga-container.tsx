"use client";
import { Button } from "@/components/ui/button";

import { apagaContainer } from "@/lib/actions/dashboard/embarques/novo";
import { cn } from "@/lib/utils";
import { Loader2, Trash2 } from "lucide-react";
import React from "react";

type BotaoApagaContainerProps = {
  idContainer: number;
  className?: string; // Optional `className` prop
  setScroll: (data: boolean) => void;
  apagaCardEstado: boolean;
  setApgaCardEstado: (data: boolean) => void;
};

const BotaoApagaContainer = ({
  idContainer,
  className,
  setScroll,
  apagaCardEstado,
  setApgaCardEstado,
}: BotaoApagaContainerProps) => {
  const apagaContainerFun = () => {
    setApgaCardEstado(true);
    setScroll(false);
    apagaContainer(idContainer)
      .catch(error => console.error(error))
      .finally(() => setApgaCardEstado(false));
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
