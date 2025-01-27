import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { apagaOpContainer } from "@/lib/actions/dashboard/embarques/novo";
import { IdContainerOpSchemaDto } from "@repo/types";
import { Loader2 } from "lucide-react";

import React from "react";
import { toast } from "sonner";

type ApagaOpDoContainerProps = {
  op: number;
  idContainer: number;
  apagaOpEstado: boolean;
  setApagaOpEstado: (data: boolean) => void;
  setScroll: (data: boolean) => void;
};
const ApagaOpDoContainer = ({
  op,
  idContainer,
  apagaOpEstado,
  setApagaOpEstado,
  setScroll,
}: ApagaOpDoContainerProps) => {
  const apagaOpContainerFun = () => {
    setApagaOpEstado(true);
    setScroll(false);
    const dados: IdContainerOpSchemaDto = { id: idContainer, op };

    apagaOpContainer(dados)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao apagar a Op: ${op}`, {
            description: resultado.error,
          });
        else
          toast.info(`Op ${op} Apagada`, {
            description: "Sucesso",
          });
      })
      .catch(error => console.error(error))
      .finally(() => setApagaOpEstado(false));
  };
  return (
    <Button
      disabled={apagaOpEstado}
      className="group relative mx-1 mt-1 w-24"
      variant={"outline"}
      onClick={() => apagaOpContainerFun()}
    >
      <span>{`Op ${op}`}</span>
      {apagaOpEstado && <Loader2 className="absolute animate-spin" />}
      <Badge
        variant="destructive"
        className="absolute right-[-10px] top-[-14px] hidden h-5 w-5 items-center justify-center rounded-full text-xs font-bold group-hover:flex"
      >
        {"x"}
      </Badge>
      {/* Hover Badge */}
    </Button>
  );
};

export default ApagaOpDoContainer;
