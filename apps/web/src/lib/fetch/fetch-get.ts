"use server";
import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const fetchGet = async (
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

    console.log("Url get antes: ", requestUrl);
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${session?.accessToken}`,
    };

    const response = await fetch(requestUrl, {
      ...options,
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      return null;
    }
    const resposta = await response.json();

    //console.log(resposta.data.Container[2].other_Container[1].other_Container);
    return resposta;
  } catch (error) {
    console.log("Error in fetchGet:", error);
    return null;
  }
};
