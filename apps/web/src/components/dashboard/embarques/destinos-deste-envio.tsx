"use client";
import { AutoCompleteFormField } from "@/components/meus-components/AutoCompleteFormField";
import { Form } from "@/components/ui/form";
import useAlteraFornecedor from "@/hooks/use-altera-fornecedor";
import useUnloadWarning from "@/hooks/use-unload-warning";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AutocompleteDto,
  PostDestinoSchema,
  PostDestinoSchemaDto,
} from "@repo/types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type DestinosDesteEnvioProps = {
  idEnvio: number;
  idDestino: number;
  destinosDisponiveis: AutocompleteDto[];
};

const DestinosDesteEnvio = ({
  idEnvio,
  idDestino,
  destinosDisponiveis,
}: DestinosDesteEnvioProps) => {
  const [destino, setDestino] = useState<PostDestinoSchemaDto>({
    idEnvio,
    idDestino,
  });

  const { isSaving, hasUnsavedChanges } = useAlteraFornecedor(destino);

  useUnloadWarning(hasUnsavedChanges);

  const form = useForm<PostDestinoSchemaDto>({
    resolver: zodResolver(PostDestinoSchema),
    defaultValues: {
      idEnvio,
      idDestino,
    },
  });
  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      const isValid = await form.trigger();

      if (!isValid) return;
      setDestino(prev => ({
        ...prev,
        idDestino: values.idDestino ?? prev.idDestino,
      }));
    });
    return unsubscribe;
  }, [form]);

  return (
    <Form {...form}>
      <form>
        <AutoCompleteFormField
          form={form}
          name="idDestino"
          options={destinosDisponiveis}
          placeholder="Destino..."
          largura="w-[450px]"
          mostraErro={false}
          disable={isSaving}
        />
      </form>
    </Form>
  );
};

export default DestinosDesteEnvio;
