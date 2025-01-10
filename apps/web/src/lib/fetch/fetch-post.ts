import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}
export const fetchPost = async (
  url: string,
  body: Record<string, unknown>,
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

    return await response.json();
  } catch (error) {
    console.error("Error in fetchPost:", error);
    return null;
  }
};
