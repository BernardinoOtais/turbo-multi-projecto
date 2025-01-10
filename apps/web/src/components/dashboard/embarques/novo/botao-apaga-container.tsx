"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { apagaContainer } from "@/lib/actions/dashboard/embarques/novo";
import { Loader2, Trash2 } from "lucide-react";
import React, { useState } from "react";

type BotaoApagaContainerProps = {
  idContainer: number;
};

const BotaoApagaContainer = ({ idContainer }: BotaoApagaContainerProps) => {
  const [disable, setDisable] = useState(false);
  const apagaContainerFun = () => {
    setDisable(true);
    apagaContainer(idContainer).then(() => {
      setDisable(false);
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            disabled={disable}
            onClick={() => apagaContainerFun()}
            className="relative flex items-center justify-center"
          >
            {disable && <Loader2 className="absolute animate-spin" />}
            {!disable && <Trash2 />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Apaga Container</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BotaoApagaContainer;
