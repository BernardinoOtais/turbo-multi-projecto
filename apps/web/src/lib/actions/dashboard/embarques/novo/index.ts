"use server";

import { fetchDelete } from "@/lib/fetch/fetch-delete";
import { fetchPatch } from "@/lib/fetch/fetch-patch";
import { fetchPost } from "@/lib/fetch/fetch-post";
import {
  IdContainerOpSchemaDto,
  PostAlturaDto,
  PostContainerSchemaDto,
  PostOpDto,
} from "@repo/types";
import { revalidatePath } from "next/cache";

export async function postNovoContainer(
  postContainerSchemaDto: PostContainerSchemaDto,
) {
  try {
    const response = await fetchPost(
      "envios/container",
      postContainerSchemaDto,
    );
    revalidatePath("embarques/novo");
    return response;
  } catch (error) {
    console.log("Erro ao criar novo container:", error);
    return null;
  }
}

export async function apagaContainer(idContainer: number) {
  try {
    const response = await fetchDelete("envios/container", { id: idContainer });
    revalidatePath("embarques/novo");
    return response;
  } catch (error) {
    console.log("Erro apagaContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function apagaOpContainer(idContainerOp: IdContainerOpSchemaDto) {
  try {
    const response = await fetchDelete(
      "envios/containerOpApaga",
      idContainerOp,
    );

    // Trigger revalidation of the specified path
    revalidatePath("embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro apagaOpContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function insiroAltura(alturaSchema: PostAlturaDto) {
  try {
    const response = fetchPost("envios/containerAltura", alturaSchema);

    // Trigger revalidation of the specified path
    revalidatePath("embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function insiroOpEmContainer(postOp: PostOpDto) {
  try {
    const response = fetchPost("envios/containerOps", postOp);

    // Trigger revalidation of the specified path
    revalidatePath("/dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro insiroOpEmContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function reordenaContainer(
  dadosParaPost: {
    id: number;
    ordem: number;
  }[],
) {
  try {
    const response = await fetchPatch("envios/containerOrdem", {
      idOrdem: dadosParaPost,
    });

    return response;
  } catch (error) {
    console.log("Erro insiroOpEmContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}
