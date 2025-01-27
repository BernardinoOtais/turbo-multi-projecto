import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";
import { resposta } from "./fetch-aux";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const fetchDelete = async (
  url: string,
  queryParams: Record<string, string | number | boolean> = {},
  options: FetchOptions = {},
) => {
  try {
    const session = await getSession();
    let requestUrl = `${BACKEND_URL}${url}`;

    if (Object.keys(queryParams).length > 0) {
      const queryString = new URLSearchParams(
        Object.entries(queryParams).reduce(
          (acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          },
          {} as Record<string, string>,
        ),
      ).toString();
      requestUrl += `?${queryString}`;
    }

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${session?.accessToken}`,
    };

    const response = await fetch(requestUrl, {
      ...options,
      method: "DELETE",
      credentials: "include",
    });

    return await resposta(response);
  } catch (error) {
    console.error("Error in fetchDelete:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
