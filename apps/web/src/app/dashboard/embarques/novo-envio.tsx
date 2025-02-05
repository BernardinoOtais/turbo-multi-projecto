"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AutocompleteStringDto,
  PostNovoEnvioSchema,
  PostNovoEnvioSchemaDto,
} from "@repo/types";
import { ClipboardPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AutoCompleteFormFieldString } from "@/components/meus-components/AutoCompleteFormFieldString";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { novoEnvio } from "@/lib/actions/dashboard/embarques";
import { cn } from "@/lib/utils";

type NovoEnvioProps = { destinos: AutocompleteStringDto[] };

const NovoEnvio = ({ destinos }: NovoEnvioProps) => {
  const router = useRouter();
  const [disabledBotao, setDisabledBotao] = useState(true);
  const form = useForm<PostNovoEnvioSchemaDto>({
    resolver: zodResolver(PostNovoEnvioSchema),
    defaultValues: {
      nomeEnvio: "",
      obs: "",
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      setDisabledBotao(true);
      const isValid = await form.trigger();
      console.log("Values: ", values);
      if (!isValid) return;
      setDisabledBotao(false);
    });
    return unsubscribe;
  }, [form]);

  function onSubmit(values: PostNovoEnvioSchemaDto) {
    setDisabledBotao(true);
    novoEnvio(values)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao inserir conteudo...`, {
            description: resultado.error,
          });
        else {
          toast.info(`Inserido correctament...`, {
            description: "Sucesso",
          });
          // console.log("resultado", resultado);
          const status = resultado.data.data.status;

          if (status === "ok") {
            console.log("Ok");
            const idEnvio = resultado.data.data.id;
            router.push(`/dashboard/embarques/novo?idEnvio=${idEnvio}`);
          }
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setDisabledBotao(false);
      });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className={cn(
            "relative flex items-center justify-center", // Default classes
          )}
          title="Novo envio"
        >
          <ClipboardPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Novo Envio</DialogTitle>
          <DialogDescription>Criar novo envio</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <AutoCompleteFormFieldString
                form={form}
                label="Destino"
                name="idDestino"
                options={destinos}
                placeholder="Destino..."
                largura="w-[450px]"
                mostraErro={false}
                disable={false}
              />

              <FormField
                control={form.control}
                name="nomeEnvio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Envio</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome Envio..." {...field} />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="obs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Obs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Obs..." {...field} />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button disabled={disabledBotao} type="submit">
                  Novo Envio
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NovoEnvio;
