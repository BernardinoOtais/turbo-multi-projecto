import { getSession } from "../actions/auth/sessions";
import { BACKEND_URL } from "../constants";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const fetchClientASubstituir = async (
  url: string,
  method: string = "GET", // Default to GET
  body: Record<string, unknown> | null = null,
  queryParams: Record<string, string | number | boolean> = {},
  options: FetchOptions = {},
) => {
  try {
    const session = await getSession();
    let requestUrl = `${BACKEND_URL}${url}`;

    // Construct query string for GET requests
    if (method === "GET" && Object.keys(queryParams).length > 0) {
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

    console.log("Final fetch URL:", requestUrl);

    // Set headers
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    };

    // Prepare request body, exclude for GET
    const requestBody =
      method !== "GET" && body ? JSON.stringify(body) : undefined;

    // Perform the fetch request
    const response = await fetch(requestUrl, {
      ...options,
      method, // Explicitly set method
      body: requestBody,
      credentials: "include",
    });

    if (!response.ok) {
      return null;
    }

    // Parse and return response JSON
    return await response.json();
  } catch (error) {
    console.error("Error in fetchClient:", error);
    return null;
  }
};
