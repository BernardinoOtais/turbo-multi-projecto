"use server";

import {
  IdContainerOpSchemaDto,
  ListaIdsSchemaDto,
  PostAlturaDto,
  PostContainerSchemaDto,
  PostConteudoDto,
  PostDestinoSchemaDto,
  PostNomeEnviochemaDto,
  PostNovoEnvioSchemaDto,
  PostOpDto,
} from "@repo/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/actions/auth/sessions";
import { fetchDelete } from "@/lib/fetch/fetch-delete";
import { fetchDeleteBody } from "@/lib/fetch/fetch-delete-body";
import { fetchPatch } from "@/lib/fetch/fetch-patch";
import { fetchPost } from "@/lib/fetch/fetch-post";

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

export async function apagaConteudo(listaConteudo: ListaIdsSchemaDto) {
  try {
    const response = await fetchDeleteBody(
      "envios/conteudoApaga",
      listaConteudo,
    );

    // Trigger revalidation of the specified path
    revalidatePath("dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro apagaOpContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function insiroConteudo(conteudo: PostConteudoDto) {
  try {
    const response = fetchPost("envios/conteudo", conteudo);

    // Trigger revalidation of the specified path
    revalidatePath("dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function insiroFornecedor(
  postDestinoSchemaDto: PostDestinoSchemaDto,
) {
  try {
    const response = fetchPatch("envios/patchFornecedor", postDestinoSchemaDto);

    // Trigger revalidation of the specified path
    revalidatePath("dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

//envioApaga
export async function apagaEnvio(idEnvio: number) {
  try {
    const response = await fetchDelete("envios/envioApaga", {
      id: idEnvio,
    });

    // Trigger revalidation of the specified path
    revalidatePath("dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro apagaOpContainer:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function alteroNomeDoENvio(
  postNomeEnviochemaDto: PostNomeEnviochemaDto,
) {
  try {
    const response = fetchPatch("envios/patchNomeEnvio", postNomeEnviochemaDto);

    // Trigger revalidation of the specified path
    revalidatePath("/dashboard/embarques/novo");

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function novoEnvio(conteudo: PostNovoEnvioSchemaDto) {
  try {
    const session = await getSession();

    if (!session) redirect("/dashboard");
    const id = session.id;
    const novoConteudo = { ...conteudo, nomeUser: id };
    const response = fetchPost("envios/novoEnvio", novoConteudo);

    return response;
  } catch (error) {
    console.log("Erro insiroAltura:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}

export async function actualizaAndroid() {
  try {
    const session = await getSession();

    if (!session) redirect("/dashboard");

    const response = fetchPost("envios/itens/actualiza-android");

    return response;
  } catch (error) {
    console.log("Erro ao actulizar partes provenientes do android:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado...",
    };
  }
}
