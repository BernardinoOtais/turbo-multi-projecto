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
      <GripHorizontal
        {...attributes}
        {...listeners}
        className="absolute right-2 top-2 size-5 cursor-grab text-muted-foreground focus:outline-none"
      />
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems(prevItems => {
        // Ensure that we find valid indices, otherwise return the array unchanged
        const oldIndex = prevItems.findIndex(
          item => item.idContainer === active.id,
        );
        const newIndex = prevItems.findIndex(
          item => item.idContainer === over.id,
        );

        if (oldIndex === -1 || newIndex === -1) {
          return prevItems; // No change if indices are invalid
        }

        // Create a new array to avoid mutating the state directly
        const updatedItems = [...prevItems];

        // Move the item to the new position
        const [movedItem] = updatedItems.splice(oldIndex, 1); // Remove the item
        updatedItems.splice(newIndex, 0, movedItem); // Insert the item at the new position

        // Update the 'ordem' field to reflect the new order
        const updatedItemsWithOrder = updatedItems.map((item, index) => ({
          ...item,
          ordem: index + 1, // Set ordem based on index (or your logic)
        }));

        const dadosParaPost = updatedItems.map(item => ({
          id: item.idContainer,
          ordem: item.ordem,
        }));

        //return updatedItemsWithOrder;
      });
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
