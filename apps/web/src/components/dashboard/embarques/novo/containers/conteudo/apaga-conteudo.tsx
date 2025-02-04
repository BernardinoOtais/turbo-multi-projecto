import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { apagaConteudo } from "@/lib/actions/dashboard/embarques/novo";
import { Loader2 } from "lucide-react";

import React from "react";
import { toast } from "sonner";

type ApagaConteudoProps = {
  nome: string;
  idConteudo: number;
  disabledApaga: boolean;
  setDisabledApaga: (data: boolean) => void;
};
const ApagaConteudo = ({
  nome,
  idConteudo,
  disabledApaga,
  setDisabledApaga,
}: ApagaConteudoProps) => {
  const apagoConteudoFun = () => {
    setDisabledApaga(true);
    apagaConteudo(idConteudo)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao apagar Conteudo: ${idConteudo}`, {
            description: resultado.error,
          });
        else
          toast.info(`Conteudo ${idConteudo} Apagada`, {
            description: "Sucesso",
          });
      })
      .catch(error => console.error(error))
      .finally(() => setDisabledApaga(false));
  };
  return (
    <Button
      className="group hover:bg-primary/40 relative m-0 h-5 cursor-pointer p-0"
      variant="ghost"
      onClick={apagoConteudoFun}
      disabled={disabledApaga}
    >
      <span>{nome}</span>
      {disabledApaga && <Loader2 className="absolute animate-spin" />}
      <Badge
        variant="destructive"
        className="absolute top-[-10px] right-[-15px] hidden h-5 w-5 items-center justify-center rounded-full text-xs font-bold group-hover:flex"
      >
        {"x"}
      </Badge>
    </Button>
  );
};

export default ApagaConteudo;
