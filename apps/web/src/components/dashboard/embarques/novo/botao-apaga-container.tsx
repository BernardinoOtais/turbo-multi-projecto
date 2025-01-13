"use client";
import { Button } from "@/components/ui/button";

import { apagaContainer } from "@/lib/actions/dashboard/embarques/novo";
import { cn } from "@/lib/utils";
import { Loader2, Trash2 } from "lucide-react";
import React, { useState } from "react";

type BotaoApagaContainerProps = {
  idContainer: number;
  className?: string; // Optional `className` prop
};

const BotaoApagaContainer = ({
  idContainer,
  className,
}: BotaoApagaContainerProps) => {
  const [disable, setDisable] = useState(false);
  const apagaContainerFun = () => {
    setDisable(true);
    apagaContainer(idContainer).then(() => {
      setDisable(false);
    });
  };

  return (
    <Button
      size="icon"
      disabled={disable}
      onClick={() => apagaContainerFun()}
      className={cn(
        "relative flex items-center justify-center", // Default classes
        className, // Merge with custom classes
      )}
      title="Apaga Container"
    >
      {disable && <Loader2 className="absolute animate-spin" />}
      {!disable && <Trash2 />}
    </Button>
  );
};

export default BotaoApagaContainer;
