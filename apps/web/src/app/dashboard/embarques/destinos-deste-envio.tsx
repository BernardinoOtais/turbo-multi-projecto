"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AutocompleteStringDto,
  PostDestinoSchema,
  PostDestinoSchemaDto,
} from "@repo/types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { AutoCompleteFormFieldString } from "@/components/meus-components/AutoCompleteFormFieldString";
import { Form } from "@/components/ui/form";
import useAlteraFornecedor from "@/hooks/use-altera-fornecedor";
import useUnloadWarning from "@/hooks/use-unload-warning";

type DestinosDesteEnvioProps = {
  idEnvio: number;
  idDestino: string;
  destinosDisponiveis: AutocompleteStringDto[];
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
        <AutoCompleteFormFieldString
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
