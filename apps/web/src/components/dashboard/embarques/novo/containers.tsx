"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { ListaDeContainersEnvioDto, ContainerSchemaDto } from "@repo/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import BotaoApagaContainer from "./botao-apaga-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GripHorizontal } from "lucide-react";

import {
  closestCenter,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { fetchPatch } from "@/lib/fetch/fetch-patch";

const DndContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then(mod => mod.DndContext),
  { ssr: false },
);

type ContainersProps = {
  containers: ListaDeContainersEnvioDto;
  idEnvio: number;
  niveisValidados: number[];
};

type SortableItemProps = {
  container: ContainerSchemaDto;
  idEnvio: number;
  niveisValidados: number[];
};
// SortableItem Component
const SortableItem = ({
  container,
  idEnvio,
  niveisValidados,
}: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: container.idContainer });

  return (
    <Card
      key={container.idContainer}
      className={cn(
        "relative h-28",
        isDragging && "relative z-50 h-28 cursor-grab shadow-xl",
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
      <CardHeader>
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
      <CardContent>
        <p>Altura</p>
      </CardContent>
      {container.other_Container?.length == 0 &&
        container.Conteudo?.length == 0 && (
          <BotaoApagaContainer
            idContainer={container.idContainer}
            className="absolute bottom-2 right-2"
          />
        )}
    </Card>
  );
};

const Containers = ({
  containers,
  idEnvio,
  niveisValidados,
}: ContainersProps) => {
  const [items, setItems] = useState(containers ?? []);

  useEffect(() => {
    // Update the items state if containers prop changes
    setItems(containers ?? []);
  }, [containers]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      let updatedItemsFinal: ContainerSchemaDto[] = [];
      let estadoInicial: ContainerSchemaDto[] = [];
      setItems(prevItems => {
        estadoInicial = prevItems;
        const oldIndex = prevItems.findIndex(
          item => item.idContainer === active.id,
        );
        const newIndex = prevItems.findIndex(
          item => item.idContainer === over.id,
        );

        if (oldIndex === -1 || newIndex === -1) {
          return prevItems;
        }

        const updatedItems = [...prevItems];

        const [movedItem] = updatedItems.splice(oldIndex, 1); // Remove the item
        updatedItems.splice(newIndex, 0, movedItem); // Insert the item at the new position

        updatedItemsFinal = updatedItems.map((item, index) => ({
          ...item,
          ordem: index + 1,
        }));

        return updatedItemsFinal;
      });

      try {
        const dadosParaPost = updatedItemsFinal.map(item => ({
          id: item.idContainer,
          ordem: item.ordem,
        }));

        const response = await fetchPatch("envios/containerOrdem", {
          idOrdem: dadosParaPost,
        });

        //console.log("Server response:", response);

        setItems(prevItems =>
          prevItems.map(item => {
            const updatedItem = response.data.find(
              (resItem: { id: number }) => resItem.id === item.idContainer,
            );
            return updatedItem ? { ...item, ordem: updatedItem.ordem } : item;
          }),
        );
      } catch (error) {
        setItems(estadoInicial);
        console.error("Error updating order:", error);
        // Optionally handle rollback or show error feedback to the user
      }
    }
  };

  return (
    <DndContextWithNoSSR
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext
        items={items.map(item => item.idContainer)}
        strategy={verticalListSortingStrategy}
      >
        <div>
          {items.map(container => (
            <SortableItem
              key={container.idContainer}
              container={container}
              idEnvio={idEnvio}
              niveisValidados={niveisValidados}
            />
          ))}
        </div>
      </SortableContext>
    </DndContextWithNoSSR>
  );
};

export default Containers;
