"use server";
import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";
import { resposta } from "./fetch-aux";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}
export const fetchPost = async (
  url: string,
  body?: Record<string, unknown>,
  revalida?: string,
  options: FetchOptions = {},
) => {
  // console.log("fetchPost", body);
  try {
    const session = await getSession();
    const requestUrl = `${BACKEND_URL}${url}`;

    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    };
    //console.log("fetchPost url", requestUrl);
    const response = await fetch(requestUrl, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined, // Handle undefined body
      credentials: "include",
    });

    return await resposta(response, revalida);
  } catch (error) {
    console.error("Error in fetchPost:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
