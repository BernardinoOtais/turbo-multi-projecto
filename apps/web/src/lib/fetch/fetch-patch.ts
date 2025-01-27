"use server";

import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";
import { resposta } from "./fetch-aux";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const fetchPatch = async (
  url: string,
  body: Record<string, unknown>,
  path?: string,
  options: FetchOptions = {},
) => {
  try {
    const session = await getSession();
    const requestUrl = `${BACKEND_URL}${url}`;

    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    };

    const response = await fetch(requestUrl, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
      credentials: "include",
    });

    return await resposta(response, path);
  } catch (error) {
    console.error("Error in fetchPost:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
