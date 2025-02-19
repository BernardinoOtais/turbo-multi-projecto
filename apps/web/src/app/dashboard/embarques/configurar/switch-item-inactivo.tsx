"use client";

import { RespostaSchema } from "@repo/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import { itemInactivoPatch } from "@/lib/actions/dashboard/embarques/configurar";

type SwitchItemInactivoProps = {
  idItem: number;
  inactivo: boolean;
};
const SwitchItemInactivo = ({ inactivo, idItem }: SwitchItemInactivoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inactivoValor, setInactivoValor] = useState(inactivo);
  const [isLoading, setIsLoading] = useState(false);

  const alteraEstadoDeItem = () => {
    if (isLoading) return;
    setIsLoading(true);
    itemInactivoPatch(idItem)
      .then(resultado => {
        if (!resultado.success) {
          toast.error(`Erro ao actulizar...`, {
            description: resultado.error,
          });
          setInactivoValor(prev => prev);
        }
        const respostaRecebida = RespostaSchema.safeParse(resultado.data.data);
        if (respostaRecebida.success) {
          toast.info(respostaRecebida.data.successMessage || `Ok ...`, {
            description: "Sucesso",
          });
          setInactivoValor(prev => !prev);
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setIsLoading(false);

        // Convert search params to an object
        const params = new URLSearchParams(searchParams.toString());

        // Remove the 'idItem' parameter
        params.delete("idItem");

        // Update the URL
        router.replace(`/dashboard/embarques/configurar?${params.toString()}`);
      });
  };

  return (
    <>
      <Switch
        disabled={isLoading}
        id="envio-fechado"
        checked={inactivoValor}
        onCheckedChange={alteraEstadoDeItem}
      />
    </>
  );
};

export default SwitchItemInactivo;
