"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatchItemSchema, PatchItemSchemaDto } from "@repo/types";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { itemNomePatch } from "@/lib/actions/dashboard/embarques/configurar";

type FormAlteraItemExistentProps = {
  dados: PatchItemSchemaDto;
};
const FormAlteraItemExistent = ({ dados }: FormAlteraItemExistentProps) => {
  const router = useRouter();
  const [botaoDisabled, setBotaoDisabled] = useState(true);
  const [botaoAlteraNomeIsloading, setBotaoAlteraNomeIsloading] =
    useState(false);

  const form = useForm<PatchItemSchemaDto>({
    resolver: zodResolver(PatchItemSchema),
    defaultValues: dados,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      setBotaoDisabled(true);

      const isValid = await form.trigger();

      if (!isValid) return;

      const valoresNoForEmString = JSON.stringify(values);
      const dadosOriginaisEmString = JSON.stringify(dados);

      if (valoresNoForEmString === dadosOriginaisEmString) return;

      setBotaoDisabled(false);
    });

    return unsubscribe;
  }, [dados, form]);

  function onSubmit(values: PatchItemSchemaDto) {
    setBotaoAlteraNomeIsloading(true);

    itemNomePatch(values)
      .then(resultado => {
        console.log(resultado);
        if (!resultado.success)
          toast.error(`Erro ao inserir conteudo...`, {
            description: resultado.error,
          });
        else {
          toast.info(`Inserido correctament...`, {
            description: "Sucesso",
          });
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setBotaoAlteraNomeIsloading(false);
        setBotaoDisabled(true);
        router.push("/dashboard/embarques/configurar?tipo=ac");
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto w-full max-w-fit">
          <CardHeader>
            <CardTitle className="">Altera Item...</CardTitle>
            <CardDescription>{`Id do item: ${dados.idItem}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="Descricao"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-auto min-w-96 border-none"
                      placeholder="Nome em Pt..."
                      {...field}
                    />
                  </FormControl>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descItem"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-auto min-w-96 border-none"
                      placeholder="Nome em Fr..."
                      {...field}
                    />
                  </FormControl>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button disabled={botaoDisabled}>
              {botaoAlteraNomeIsloading && <Loader2 className="animate-spin" />}
              Alterar Envio
            </Button>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default FormAlteraItemExistent;
