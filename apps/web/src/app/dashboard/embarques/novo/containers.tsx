"use client";
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
import {
  ListaDeContainersEnvioDto,
  ContainerSchemaDto,
  DestinoEnvioDto,
} from "@repo/types";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";

import { reordenaContainer } from "@/lib/actions/dashboard/embarques";

import ContainerCard from "./container-card";

const DndContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then(mod => mod.DndContext),
  { ssr: false },
);

type ContainersProps = {
  containers: ListaDeContainersEnvioDto;
  idEnvio: number;
  niveisValidados: number[];
  destino: DestinoEnvioDto;
};

const Containers = ({
  containers,
  idEnvio,
  niveisValidados,
  destino,
}: ContainersProps) => {
  //console.log("Containers", dadosDisponiveisParaInserir);
  const [apagaCardEstado, setApagaCardEstado] = useState(false);
  const [apagaOpEstado, setApagaOpEstado] = useState(false);

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
        updatedItems.splice(newIndex, 0, movedItem); // Insert the item at the new index

        // Assign correct `ordem` to all items
        const dadosComOrdemCorrecta = updatedItems.map((item, index) => ({
          ...item,
          ordem: index + 1,
        }));

        // Group by `idTipoContainer`
        const dadosAgrupadosPorTipo: Record<number, ContainerSchemaDto[]> = {};
        dadosComOrdemCorrecta.forEach(container => {
          if (!dadosAgrupadosPorTipo[container.idTipoContainer]) {
            dadosAgrupadosPorTipo[container.idTipoContainer] = [];
          }
          dadosAgrupadosPorTipo[container.idTipoContainer].push(container);
        });

        // Assign `nContainer` within each group
        const nContainerComAOrdemCorrect = Object.values(
          dadosAgrupadosPorTipo,
        ).flatMap(grupo =>
          grupo.map((container, index) => ({
            idContainer: container.idContainer,
            nContainer: index + 1, // Assign sequential nContainer
          })),
        );

        // Merge updated `nContainer` back into items
        const newDadosComOrdemCorrecta = dadosComOrdemCorrecta.map(item => {
          const updatedContainer = nContainerComAOrdemCorrect.find(
            nItem => nItem.idContainer === item.idContainer,
          );
          return {
            ...item,
            nContainer: updatedContainer
              ? updatedContainer.nContainer
              : item.nContainer, // Keep existing nContainer if not updated
          };
        });

        updatedItemsFinal = newDadosComOrdemCorrecta;

        return updatedItemsFinal;
      });

      //O tais post Post
      const dadosParaPost = updatedItemsFinal.map(item => ({
        id: item.idContainer,
        ordem: item.ordem,
      }));

      reordenaContainer(dadosParaPost)
        .then(dados => {
          //console.log(dados);
          if (!dados.success) {
            setItems(estadoInicial);
          }
          if (dados.success) {
            const dadosRecebidos = dados.data.data;
            setItems(prevItems =>
              prevItems.map(item => {
                const updatedItem = dadosRecebidos.find(
                  (resItem: { id: number }) => resItem.id === item.idContainer,
                );
                return updatedItem
                  ? {
                      ...item,
                      ordem: updatedItem.ordem,
                      nContainer: updatedItem.nContainer,
                    }
                  : item;
              }),
            );
          }
        })
        .catch(error => {
          console.error(error);
          setItems(estadoInicial);
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
        {items.map((container, index) => (
          <ContainerCard
            key={container.idContainer}
            container={container}
            idEnvio={idEnvio}
            niveisValidados={niveisValidados}
            referencia={index === items.length - 1 ? lastItemRef : null}
            setScroll={setScroll}
            apagaCardEstado={apagaCardEstado}
            setApagaCardEstado={setApagaCardEstado}
            apagaOpEstado={apagaOpEstado}
            setApagaOpEstado={setApagaOpEstado}
            destino={destino}
          />
        ))}
      </SortableContext>
    </DndContextWithNoSSR>
  );
};

export default Containers;
