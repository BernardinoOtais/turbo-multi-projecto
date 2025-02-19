import { ItensAcessoriosSchema, PatchItemSchemaDto } from "@repo/types";
import { Rows4, Tags } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchGet } from "@/lib/fetch/fetch-get";
import { cn } from "@/lib/utils";

import BoataoActualizaAndroid from "./botao-actualiza-android";
import FormAlteraItemExistent from "./form-altera-item-existente";
import FormCriaItens from "./form-cria-Itens";
import SwitchItemInactivo from "./switch-item-inactivo";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export const metadata: Metadata = {
  title: "Embarques",
};

const ConfiguracaoEmbarques = async ({ searchParams }: PageProps) => {
  const { tipo, idItem } = await searchParams;

  const idRecebido =
    typeof idItem === "string" && !isNaN(parseInt(idItem, 10))
      ? parseInt(idItem, 10)
      : null;

  if (tipo === "ac") {
    const itensExistentes = await fetchGet("envios/itens/itens-acessorios");

    if (!itensExistentes) {
      redirect("/dashboard");
    }

    const itensExistentesValidados = ItensAcessoriosSchema.safeParse(
      itensExistentes.data,
    );

    if (!itensExistentesValidados.success) redirect("/dashboard");
    const dados = itensExistentesValidados.data;

    const dadosFormAlterar = (idItem: number): PatchItemSchemaDto | null => {
      const dadosParaAlterar = dados.itemsSchema.find(c => c.idItem === idItem);
      return dadosParaAlterar
        ? {
            idItem: dadosParaAlterar.idItem,
            idIdioma: dadosParaAlterar.ItemTraduzido[0].idIdioma,
            Descricao: dadosParaAlterar.Descricao,
            descItem:
              dadosParaAlterar.ItemTraduzido?.[0]?.descItem.trim() || "",
          }
        : null;
    };

    const formAApresentar = () => {
      const dadosParaAlterar = idRecebido ? dadosFormAlterar(idRecebido) : null;
      const idiomas = dados.idiomasSchema;
      return dadosParaAlterar ? (
        <FormAlteraItemExistent dados={dadosParaAlterar} />
      ) : (
        <FormCriaItens idiomas={idiomas} />
      );
    };

    return (
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full flex-col">
          <div className="flex w-full flex-col gap-1 overflow-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <Table className="">
                <TableCaption>Lista de itens traduzidos...</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-semibold">
                      Item PT
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      Lingua
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      Item Traduzido
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      Inactivo
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dados.itemsSchema.map(d => (
                    <TableRow
                      key={d.idItem}
                      className={cn({
                        "border-border border bg-gray-400 dark:bg-gray-700":
                          idRecebido === d.idItem,
                      })}
                    >
                      <TableCell>
                        {d._count.Conteudo === 0 ? (
                          <Button
                            variant="link"
                            className="h-0"
                            size="default"
                            asChild
                          >
                            <Link
                              href={`/dashboard/embarques/configurar?tipo=ac${
                                idRecebido === d.idItem
                                  ? ""
                                  : `&${new URLSearchParams({ idItem: d.idItem.toString() })}`
                              }`}
                            >
                              {d.Descricao}
                            </Link>
                          </Button>
                        ) : (
                          <span>{d.Descricao}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {d.ItemTraduzido.length > 0
                          ? d.ItemTraduzido[0].Idiomas.nomeIdioma
                          : ""}
                      </TableCell>
                      <TableCell>
                        {d.ItemTraduzido.length > 0
                          ? d.ItemTraduzido[0].descItem
                          : ""}
                      </TableCell>
                      <TableCell className="text-center">
                        <SwitchItemInactivo
                          inactivo={d.inativo}
                          idItem={d.idItem}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Suspense>
            {formAApresentar()}
          </div>
        </div>
      </main>
    );
  }
  if (tipo === "ma") {
    return <div>Ma</div>;
  }

  return (
    <main className="relative grow">
      <div className="absolute top-0 bottom-0 flex w-full">
        <BoataoActualizaAndroid />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Insere Itens</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="m-1 mx-auto w-56">
            <DropdownMenuLabel>Dados a Inserir...</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/embarques/configurar?tipo=ma">
                  <Rows4 className="mr-2" />
                  <span>Insere Malha</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/embarques/configurar?tipo=ac">
                  <Tags className="mr-2" />
                  <span>Insere Itens</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="m-1 mx-auto">
          Preços Embarque
        </Button>
      </div>
    </main>
  );
};

export default ConfiguracaoEmbarques;
