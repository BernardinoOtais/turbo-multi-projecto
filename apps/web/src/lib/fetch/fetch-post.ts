"use server";
import { revalidatePath } from "next/cache";
import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}
export const fetchPost = async (
  url: string,
  body: Record<string, unknown>,
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
    console.log("fetchPost url", requestUrl);
    const response = await fetch(requestUrl, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
    });

    if (!response.ok) {
      console.error("Fetch POST failed:", response);
      return null;
    }

    if (revalida) revalidatePath(revalida);
    return await response.json();
  } catch (error) {
    console.error("Error in fetchPost:", error);
    return null;
  }
};
