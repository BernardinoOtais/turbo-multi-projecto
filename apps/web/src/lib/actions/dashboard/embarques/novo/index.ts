"use server";

import { fetchDelete } from "@/lib/fetch/fetch-delete";
import { fetchPost } from "@/lib/fetch/fetch-post";
import { PostContainerSchemaDto } from "@repo/types";
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
    console.log("Erro ao criar novo container:", error);
    return null;
  }
}
