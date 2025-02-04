"use server";
import { LoginZ } from "@repo/types";
import { redirect } from "next/navigation";
import { z } from "zod";

import { BACKEND_URL } from "@/lib/constants";

import { createSession } from "./sessions";

export const login = async (
  values: z.infer<typeof LoginZ>,
  callbackUrl?: string | null,
) => {
  const validatedFields = LoginZ.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error?.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${BACKEND_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
      credentials: "include",
    });

    //console.log("response em auth Login:", response);
    if (!response.ok) {
      console.log("response em auth Login:", "nao ok");
      return {
        error: {
          message:
            response.status === 401
              ? "Credênciais inválidas!"
              : response.statusText,
        },
      };
    }
    const result = await response.json();

    //Atencao aos papeis

    // console.log("result em auth Login:", result);

    await createSession({
      id: result.data.id,
      name: result.data.name,
      apelido: result.data.apelido,
      email: result.data.email,
      accessToken: result.data.accessToken,
      refreshToken: result.data.refreshToken,
      papeis: result.data.papeis,
    });

    redirect(callbackUrl || "/");
  } catch (err) {
    throw err;
  }
};
