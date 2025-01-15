import { ContainerSchemaDto } from "@repo/types";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GripHorizontal } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BotaoApagaContainer from "../botao-apaga-container";
import InputAltura from "./input-altura";
import { PostAlturaDto } from "@repo/types";
import useSaveAltura from "@/hooks/use-save-altura";

type ContainerCardProps = {
  container: ContainerSchemaDto;
  idEnvio: number;
  niveisValidados: number[];
  referencia: React.RefObject<HTMLDivElement | null> | null;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
};
const ContainerCard = ({
  container,
  idEnvio,
  niveisValidados,
  referencia,
  setScroll,
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

  return (
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
          className="absolute right-2 top-2 size-5 cursor-grab text-muted-foreground focus:outline-none"
        />
      )}
      <CardHeader className="pb-0 pt-1">
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
            <CardTitle>{`${container.TipoContainer?.Item.Descricao} nº${container.ordem}`}</CardTitle>
            <CardDescription className="text-center">{`id-${container.idContainer}`}</CardDescription>
          </Link>
        </div>
      </CardHeader>
      <CardContent
        ref={referencia}
        className="flex flex-row items-center justify-start"
      >
        {container.idTipoContainer === 4 ? (
          <InputAltura
            altura={altura}
            setAltura={setAltura}
            setScroll={setScroll}
          />
        ) : (
          container.idTipoContainer > 4 && <span>Caixa</span>
        )}
      </CardContent>
      {container.other_Container?.length == 0 &&
        container.Conteudo?.length == 0 && (
          <BotaoApagaContainer
            idContainer={container.idContainer}
            className="absolute bottom-2 right-2"
            setScroll={setScroll}
          />
        )}
    </Card>
  );
};

export default ContainerCard;
