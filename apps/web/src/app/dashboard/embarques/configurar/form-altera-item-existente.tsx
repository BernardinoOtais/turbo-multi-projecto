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
import {
  itemApaga,
  itemNomePatch,
} from "@/lib/actions/dashboard/embarques/configurar";

type FormAlteraItemExistentProps = {
  dados: PatchItemSchemaDto;
};
const FormAlteraItemExistent = ({ dados }: FormAlteraItemExistentProps) => {
  const router = useRouter();
  const [botaoAlteraItemDisabled, setBotaoAlteraItemDisabled] = useState(true);
  const [botaoIsloading, setBotaoIsloading] = useState(false);

  const form = useForm<PatchItemSchemaDto>({
    resolver: zodResolver(PatchItemSchema),
    defaultValues: dados,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      setBotaoAlteraItemDisabled(true);

      const isValid = await form.trigger();

      if (!isValid) return;

      const valoresNoForEmString = JSON.stringify(values);
      const dadosOriginaisEmString = JSON.stringify(dados);

      if (valoresNoForEmString === dadosOriginaisEmString) return;

      setBotaoAlteraItemDisabled(false);
    });

    return unsubscribe;
  }, [dados, form]);

  function onSubmit(values: PatchItemSchemaDto) {
    setBotaoIsloading(true);

    itemNomePatch(values)
      .then(resultado => {
        console.log(resultado);
        if (!resultado.success)
          toast.error(`Erro ao alterar item...`, {
            description: resultado.error,
          });
        else {
          toast.info(`Alterado correctament...`, {
            description: "Sucesso",
          });
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setBotaoIsloading(false);
        setBotaoAlteraItemDisabled(true);
        router.push("/dashboard/embarques/configurar?tipo=ac");
      });
  }

  const apagaItem = () => {
    setBotaoIsloading(true);

    itemApaga(dados.idItem)
      .then(resultado => {
        console.log(resultado);
        if (!resultado.success)
          toast.error(`Erro ao apagar item...`, {
            description: resultado.error,
          });
        else {
          toast.info(`Apagado correctament...`, {
            description: "Sucesso",
          });
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setBotaoIsloading(false);
        setBotaoAlteraItemDisabled(true);
        router.push("/dashboard/embarques/configurar?tipo=ac");
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto w-full max-w-fit">
          <CardHeader>
            <CardTitle className="">Altera Item...</CardTitle>
            <CardDescription>{`Id do item: ${dados.idItem}`}</CardDescription>
          </CardHeader>
          <CardContent className="">
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
            <div className="flex w-full">
              <Button
                disabled={botaoAlteraItemDisabled || botaoIsloading}
                className="mx-auto"
                type="submit"
              >
                {botaoIsloading && <Loader2 className="animate-spin" />}
                Alterar Item
              </Button>
              <Button
                className="mx-auto"
                disabled={botaoIsloading}
                type="button"
                onClick={apagaItem}
              >
                {botaoIsloading && <Loader2 className="animate-spin" />}
                Apaga Item
              </Button>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default FormAlteraItemExistent;
