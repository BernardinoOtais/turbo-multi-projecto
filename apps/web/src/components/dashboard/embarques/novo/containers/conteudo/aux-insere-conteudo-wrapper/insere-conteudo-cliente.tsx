"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AutocompleteDto,
  ContainerOpsSchemasDto,
  OpSchemaDto,
  PostConteudoDto,
  PostConteudoSchema,
} from "@repo/types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AutoCompleteFormField } from "@/components/meus-components/AutoCompleteFormField";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { insiroConteudo } from "@/lib/actions/dashboard/embarques/novo";

type InsereConteudoClienteProps = {
  idConteudo?: number;
  idContainer: number;
  ops: AutocompleteDto[];
  unidades: AutocompleteDto[];
  itens: AutocompleteDto[];
  dadoOps: ContainerOpsSchemasDto;
};

type DadosOp = { modelo: string; cor: string; pedido: string };

const getTamanhos = (dados: OpSchemaDto) =>
  dados.OpTamanho?.sort((a, b) => a.ordem - b.ordem)
    .filter(item => item.tam !== "nt")
    .map(item => ({
      tam: item.tam,
      qtt: 0,
      peso: 0,
    })) ?? [];

const InsereConteudoCliente = ({
  idContainer,
  ops,
  unidades,
  itens,
  dadoOps,
}: InsereConteudoClienteProps) => {
  const [estadoBoataoSubmitDisabled, setEstadoBoataoSubmitDisabled] =
    useState(true);

  const [tamanhoUnico, setTamanhoUnico] = useState(true);

  const [dadosOp, setDadosOp] = useState<DadosOp>({
    modelo: "",
    cor: "",
    pedido: "",
  });

  const form = useForm<PostConteudoDto>({
    resolver: zodResolver(PostConteudoSchema),
    defaultValues: {
      conteudo: {
        idContainer,
        idUnidades: 1, //Unidades
      },
    },
  });

  //console.log("errors: ", form.formState.errors);

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values, { name }) => {
      setEstadoBoataoSubmitDisabled(true);
      if (name === "conteudo.op") {
        const opSelecionado = values.conteudo?.op;

        const dados = opSelecionado
          ? dadoOps?.find(op => op.op === opSelecionado)?.Op
          : undefined;

        if (dados) {
          form.setValue(
            "conteudo.TamanhosQttPeso",
            tamanhoUnico
              ? [{ tam: "nt", qtt: 0, peso: 0 }]
              : getTamanhos(dados),
          );
          setDadosOp({
            modelo: dados.modelo,
            cor: dados.cor.trim(),
            pedido: dados.pedido,
          });
        }
      }
      const isValid = await form.trigger();
      if (!isValid) return;
      setEstadoBoataoSubmitDisabled(false);
    });

    return unsubscribe;
  }, [dadoOps, form, tamanhoUnico]);

  useEffect(() => {
    const opSelecionado = form.getValues("conteudo.op");
    if (!opSelecionado) return;

    const dados = opSelecionado
      ? dadoOps?.find(op => op.op === opSelecionado)?.Op
      : undefined;

    if (dados) {
      form.setValue(
        "conteudo.TamanhosQttPeso",
        tamanhoUnico ? [{ tam: "nt", qtt: 0, peso: 0 }] : getTamanhos(dados),
      );
    }
  }, [dadoOps, form, tamanhoUnico]);

  const tamanhosQttPeso = form.getValues("conteudo.TamanhosQttPeso");
  function onSubmit(values: PostConteudoDto) {
    setEstadoBoataoSubmitDisabled(true);
    insiroConteudo(values)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao inserir conteudo...`, {
            description: resultado.error,
          });
        else
          toast.info(`Inserido correctament...`, {
            description: "Sucesso",
          });
      })
      .catch(error => console.error(error))
      .finally(() => {
        setDadosOp({
          modelo: "",
          cor: "",
          pedido: "",
        });

        form.reset();

        setEstadoBoataoSubmitDisabled(false);
      });
  }
  const handleArrowNavigation = (
    e: React.KeyboardEvent,
    index: number,
    fieldType: "qtt" | "peso",
  ) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault(); // Prevent scrolling

      // Move vertically (Up/Down between different rows)
      const nextIndex = e.key === "ArrowDown" ? index + 1 : index - 1;
      const nextField = document.querySelector<HTMLInputElement>(
        `input[name="conteudo.TamanhosQttPeso.${nextIndex}.${fieldType}"]`,
      );

      if (nextField) {
        nextField.focus();
      }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); // Prevent scrolling

      // Move horizontally (Left/Right between qtt and peso in the same row)
      const nextFieldType = fieldType === "qtt" ? "peso" : "qtt";
      const nextField = document.querySelector<HTMLInputElement>(
        `input[name="conteudo.TamanhosQttPeso.${index}.${nextFieldType}"]`,
      );

      if (nextField) {
        nextField.focus();
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
        <div className="flex h-24 items-center space-x-4">
          <AutoCompleteFormField
            form={form}
            name="conteudo.op"
            options={ops}
            label="Op"
            placeholder="Op..."
            largura="w-[120px]"
          />
          {dadosOp.modelo && (
            <span className="mx-auto font-semibold">
              <span className="">Mode:</span> {dadosOp.modelo}
              <Separator orientation="vertical" className="mx-2 h-2 w-[2px]" />
              <span className="">Cor:</span> {dadosOp.cor}
              <Separator orientation="vertical" className="mx-2 h-2 w-[2px]" />
              <span className="">Pedido:</span> {dadosOp.pedido}
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start">
          <AutoCompleteFormField
            form={form}
            name="conteudo.idItem"
            options={itens}
            label="Item"
            placeholder="Selecione um item..."
            largura="w-[400px]"
          />

          <AutoCompleteFormField
            form={form}
            name="conteudo.idUnidades"
            options={unidades}
            label="Unidade"
            placeholder="Unidade"
            largura="w-[120px]"
          />
        </div>
        <div className="flex flex-col" id="quantidades-tamanhos-pesos">
          <div className="mx-auto flex items-center space-x-2">
            <Switch
              id="tamanho-unico"
              checked={tamanhoUnico}
              onCheckedChange={setTamanhoUnico}
              disabled={!tamanhosQttPeso}
            />
            <Label htmlFor="tamanho-unico">Tamanho único</Label>
          </div>

          <div className="mt-4">
            {tamanhosQttPeso?.map((tamanho, index) => (
              <div key={tamanho.tam} className="flex items-center space-x-4">
                {tamanho.tam !== "nt" && (
                  <span className="w-12 text-center font-semibold">
                    {tamanho.tam}
                  </span>
                )}
                <FormField
                  control={form.control}
                  name={`conteudo.TamanhosQttPeso.${index}.qtt`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Qtt</FormLabel>}
                      <FormControl>
                        <Input
                          placeholder="qtt.."
                          {...field}
                          onKeyDown={e =>
                            handleArrowNavigation(e, index, "qtt")
                          }
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
                  name={`conteudo.TamanhosQttPeso.${index}.peso`}
                  render={({ field }) => (
                    <FormItem>
                      {index === 0 && <FormLabel>Peso</FormLabel>}
                      <FormControl>
                        <Input
                          placeholder="peso..."
                          {...field}
                          onKeyDown={e =>
                            handleArrowNavigation(e, index, "peso")
                          }
                        />
                      </FormControl>
                      <div className="h-5">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            type="submit"
            className="ml-auto"
            disabled={estadoBoataoSubmitDisabled}
          >
            Inserir
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InsereConteudoCliente;
