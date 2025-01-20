"use client";

import dynamic from "next/dynamic";
import { ListaDeContainersEnvioDto, ContainerSchemaDto } from "@repo/types";
import React, { useEffect, useRef, useState } from "react";

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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { fetchPatch } from "@/lib/fetch/fetch-patch";
import ContainerCard from "./container-card";

const DndContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then(mod => mod.DndContext),
  { ssr: false },
);

type ContainersProps = {
  containers: ListaDeContainersEnvioDto;
  idEnvio: number;
  niveisValidados: number[];
};

const Containers = ({
  containers,
  idEnvio,
  niveisValidados,
}: ContainersProps) => {
  const [items, setItems] = useState(containers ?? []);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    // Update items state if containers change
    setItems(containers ?? []);
  }, [containers]);

  useEffect(() => {
    // Check if items need to trigger a scroll update
    if (containers && items.length < containers.length && !scroll) {
      setScroll(true);
    }
  }, [containers, items, scroll]);

  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastItemRef.current && scroll) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [items, scroll]);

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
        setScroll(false);
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
        {items.map((container, index) => (
          <ContainerCard
            key={container.idContainer}
            container={container}
            idEnvio={idEnvio}
            niveisValidados={niveisValidados}
            referencia={index === items.length - 1 ? lastItemRef : null}
            setScroll={setScroll}
          />
        ))}
      </SortableContext>
    </DndContextWithNoSSR>
  );
};

export default Containers;
