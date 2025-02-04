import { zodResolver } from "@hookform/resolvers/zod";
import {
  AutocompleteDto,
  EnvioDto,
  PostNovoEnvioSchema,
  PostNovoEnvioSchemaDto,
} from "@repo/types";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AutoCompleteFormField } from "@/components/meus-components/AutoCompleteFormField";
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
import { Textarea } from "@/components/ui/textarea";
import { novoEnvio } from "@/lib/actions/dashboard/embarques/novo";

import BotaoApagaEnvio from "./novo/botao-apaga-envio";

type EnvioCardProps = {
  envio: EnvioDto;
  destinos: AutocompleteDto[];
  disabledBotao: boolean;
  setDisabledBotao: (data: boolean) => void;
};
const EnvioCard = ({
  envio,
  destinos,
  disabledBotao,
  setDisabledBotao,
}: EnvioCardProps) => {
  const [estadoOriginal, setEstadoOriginal] = useState({
    nomeEnvio: envio.nomeEnvio,
    idEnvio: envio.idEnvio,
    idDestino: envio.Destinos.idDestino,
    obs: envio.obs || "",
  });
  const [botaoEscondido, setBotaEscondido] = useState(true);
  const [botaoAlteraIsloading, setBotaoAlteraIsloading] = useState(false);
  const form = useForm<PostNovoEnvioSchemaDto>({
    resolver: zodResolver(PostNovoEnvioSchema),
    defaultValues: estadoOriginal,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      setBotaEscondido(true);
      const isValid = await form.trigger();

      if (!isValid) return;

      const valoresNoForEmString = JSON.stringify(values);
      const dadosOriginaisEmString = JSON.stringify(estadoOriginal);
      if (valoresNoForEmString === dadosOriginaisEmString) return;

      setBotaEscondido(false);
    });

    return unsubscribe;
  }, [estadoOriginal, form]);

  function onSubmit(values: PostNovoEnvioSchemaDto) {
    setBotaoAlteraIsloading(true);
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
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setBotaoAlteraIsloading(false);
        setBotaEscondido(true);
        setEstadoOriginal({
          nomeEnvio: values.nomeEnvio,
          idEnvio: envio.idEnvio,
          idDestino: values.idDestino,
          obs: values.obs || "",
        });
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="">
          <CardHeader>
            <CardTitle className="text-center">
              <FormField
                control={form.control}
                name="nomeEnvio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-none text-center font-bold md:text-2xl"
                        placeholder="Nome Envio..."
                        {...field}
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </CardTitle>
            <CardDescription>{`Envio criado em ${envio.createdAt.toLocaleDateString("en-GB")}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col items-center space-x-2 md:flex-row">
                <Button asChild variant="link">
                  <Link
                    className="text-center"
                    href={{
                      pathname: "/dashboard/embarques/novo",
                      query: {
                        idEnvio: envio.idEnvio,
                      },
                    }}
                  >{`Envio: ${envio.idEnvio}`}</Link>
                </Button>
                <AutoCompleteFormField
                  form={form}
                  name="idDestino"
                  options={destinos}
                  placeholder="Destino..."
                  largura="w-[400px] md:w-[450px]"
                  mostraErro={false}
                  disable={false}
                />
              </div>
              <FormField
                control={form.control}
                name="obs"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Textarea placeholder="Obs..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              {!botaoEscondido && (
                <Button>
                  {botaoAlteraIsloading && <Loader2 className="animate-spin" />}
                  Alterar Envio
                </Button>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <p className="mr-auto">{`Envio criado por: ${envio.nomeUser}`}</p>
            {envio._count?.Container === 0 && (
              <BotaoApagaEnvio
                idenvio={envio.idEnvio}
                disabledBotao={disabledBotao}
                setDisabledBotao={setDisabledBotao}
              />
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default EnvioCard;
