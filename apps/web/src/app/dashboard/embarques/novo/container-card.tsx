import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ContainerSchemaDto, DestinoEnvioDto, PostOpDto } from "@repo/types";
import { PostAlturaDto } from "@repo/types";
import { GripHorizontal } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useSaveAltura from "@/hooks/use-save-altura";
import useSaveOpContainer from "@/hooks/use-save-op-container";
import useUnloadWarning from "@/hooks/use-unload-warning";
import { cn } from "@/lib/utils";

import ApagaOpDoContainer from "./apaga-op-do-container";
import BotaoApagaContainer from "./botao-apaga-container";
import InputAltura from "./input-altura";
import InputOp from "./input-op";
import PrintPalletDialog from "./print-pallet-dialog";
import PrintRotulosDialog from "./print-rotulos-dialog";

type ContainerCardProps = {
  container: ContainerSchemaDto;
  idEnvio: number;
  niveisValidados: number[];
  referencia: React.RefObject<HTMLDivElement | null> | null;
  setScroll: (data: boolean) => void;
  apagaCardEstado: boolean;
  setApagaCardEstado: (data: boolean) => void;
  apagaOpEstado: boolean;
  setApagaOpEstado: (data: boolean) => void;
  destino: DestinoEnvioDto;
};
const ContainerCard = ({
  container,
  idEnvio,
  niveisValidados,
  referencia,
  setScroll,
  apagaCardEstado,
  setApagaCardEstado,
  apagaOpEstado,
  setApagaOpEstado,
  destino,
}: ContainerCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: container.idContainer });

  const [altura, setAltura] = useState<PostAlturaDto>({
    PostAltura: { id: container.idContainer, altura: container.altura },
  });
  const { isSaving, hasUnsavedChanges } = useSaveAltura(altura);

  const valorOriginalOp: PostOpDto = {
    PostOp: { id: container.idContainer, op: 0 },
  };

  const [op, setOp] = useState<PostOpDto>(valorOriginalOp);

  const { isSavingOP, hasUnsavedChangesOp } = useSaveOpContainer(op, setOp);

  useUnloadWarning(hasUnsavedChanges || hasUnsavedChangesOp);

  const naoTemConteudo = container.Conteudo?.length == 0 || !container.Conteudo;

  const naoTemSubContainers =
    container.other_Container?.length == 0 ||
    !container.other_Container?.length;

  const getContainerComponent = () => {
    switch (container.TipoContainer?.idItem) {
      case 4:
        return (
          <div>
            <PrintPalletDialog container={container} destino={destino} />
            <PrintRotulosDialog container={container} />
          </div>
        );
      case 3:
        return (
          <div>
            <PrintPalletDialog container={container} destino={destino} />
            <PrintRotulosDialog container={container} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card
        key={container.idContainer}
        className={cn(
          "relative",
          isDragging && "relative z-50 cursor-grab shadow-xl",
        )}
        ref={setNodeRef}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
      >
        {niveisValidados.length > 0 && (
          <GripHorizontal
            {...attributes}
            {...listeners}
            className="text-muted-foreground absolute top-2 right-2 size-5 cursor-grab focus:outline-hidden"
          />
        )}
        <CardHeader className="pt-1 pb-0">
          <div className="mx-auto">
            <Link
              href={{
                pathname: "/dashboard/embarques/novo",
                query: {
                  idEnvio,
                  nivel: [
                    ...new Set([...niveisValidados, container.idContainer]),
                  ], // Remove duplicates
                },
              }}
            >
              <CardTitle className="text-center">{`${container.TipoContainer?.Item.Descricao} nº${container.nContainer}`}</CardTitle>
              <CardDescription className="text-center">{`id-${container.idContainer} ordem:${container.ordem}`}</CardDescription>
            </Link>
          </div>
        </CardHeader>
        <CardContent
          ref={referencia}
          className="flex flex-col items-center justify-start md:flex-row md:items-end"
        >
          <div className="flex flex-row gap-1 px-1">
            {container.idTipoContainer === 4 ? (
              <InputAltura
                isSaving={isSaving}
                altura={altura}
                setAltura={setAltura}
                setScroll={setScroll}
              />
            ) : (
              container.idTipoContainer > 4 && (
                <span>{container.TipoContainer?.Item.Descricao}</span>
              )
            )}
            {container.idTipoContainer === 4 && (
              <Separator orientation="vertical" className="h-14 w-[2px]" />
            )}
            {niveisValidados.length === 1 && (
              <InputOp
                isSaving={isSavingOP}
                idContainer={container.idContainer}
                setScroll={setScroll}
                setOp={setOp}
                op={op}
              />
            )}
          </div>
          <div className="flex grow">
            <div className="mr-auto">
              {niveisValidados.length === 1 &&
                container.ContainerOp?.map(op => (
                  <ApagaOpDoContainer
                    key={op.op}
                    op={op.op}
                    idContainer={container.idContainer}
                    apagaOpEstado={apagaOpEstado}
                    setApagaOpEstado={setApagaOpEstado}
                    setScroll={setScroll}
                  />
                ))}
            </div>
          </div>
        </CardContent>
        {naoTemConteudo && naoTemSubContainers ? (
          <BotaoApagaContainer
            idContainer={container.idContainer}
            className="absolute right-2 bottom-2"
            setScroll={setScroll}
            apagaCardEstado={apagaCardEstado}
            setApagaCardEstado={setApagaCardEstado}
            nomeContainer={container.TipoContainer?.Item.Descricao || ""}
          />
        ) : (
          getContainerComponent()
        )}
      </Card>
    </>
  );
};

export default ContainerCard;
