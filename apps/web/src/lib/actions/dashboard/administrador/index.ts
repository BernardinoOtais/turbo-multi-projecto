"use server";

import { CriaUserComValidacaoPasswordDto } from "@repo/types";
import { revalidatePath } from "next/cache";

import { fetchPost } from "@/lib/fetch/fetch-post";

export async function criarNovoUser(data: CriaUserComValidacaoPasswordDto) {
  try {
    const response = fetchPost("auth/register", data);

    // Trigger revalidation of the specified path
    revalidatePath("dashboard/administrador");

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}
