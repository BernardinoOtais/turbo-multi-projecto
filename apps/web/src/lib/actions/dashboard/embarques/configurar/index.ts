"use server";
import { PatchItemSchemaDto } from "@repo/types";
import { revalidatePath } from "next/cache";

import { fetchPatch } from "@/lib/fetch/fetch-patch";
import { fetchDelete } from "@/lib/fetch/fetch-delete";

export async function itemInactivoPatch(idItem: number) {
  try {
    const response = await fetchPatch("envios/itens/itens-patch-inactivo", {
      idItem,
    });

    revalidatePath("/dashboard/embarques/configurar");
    return response;
  } catch (error) {
    console.log("Erro insiroOpEmContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function itemNomePatch(dados: PatchItemSchemaDto) {
  try {
    const response = await fetchPatch("envios/itens/itens-patch-nome", {
      idItem: dados.idItem,
      idIdioma: dados.idIdioma,
      Descricao: dados.Descricao,
      descItem: dados.descItem,
    });

    revalidatePath("/dashboard/embarques/configurar");
    return response;
  } catch (error) {
    console.log("Erro insiroOpEmContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

///apaga-item'

export async function itemApaga(idItem: number) {
  try {
    const response = await fetchDelete("envios/itens/apaga-item", {
      id: idItem,
    });

    revalidatePath("/dashboard/embarques/configurar");
    return response;
  } catch (error) {
    console.log("Erro insiroOpEmContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}
