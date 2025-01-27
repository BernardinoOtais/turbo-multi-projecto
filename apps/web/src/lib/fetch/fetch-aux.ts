import { revalidatePath } from "next/cache";

export const resposta = async (response: Response, revalida?: string) => {
  if (!response.ok) {
    let errorBody;
    try {
      errorBody = await response.json();
    } catch (parseError) {
      console.error("Failed to parse error response:", parseError);
    }
    const errorMessage =
      errorBody?.error?.message || // Use the nested message if available
      errorBody?.message || // Use top-level message if no nested error
      `Request failed with status ${response.status}: ${response.statusText}`; // Fallback message

    // Return the structured error
    return { success: false, error: errorMessage };
  }

  if (revalida) revalidatePath(revalida);
  const data = await response.json();
  return { success: true, data };
};
