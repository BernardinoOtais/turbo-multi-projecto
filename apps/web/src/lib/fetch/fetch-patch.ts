"use server";
import { revalidatePath } from "next/cache";
import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";

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

    if (!response.ok) {
      console.error("Fetch PATCH failed:", response);
      return null;
    }

    if (path) revalidatePath(path);

    return await response.json();
  } catch (error) {
    console.error("Error in fetchPatch:", error);
    return null;
  }
};
