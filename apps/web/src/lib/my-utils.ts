import { jwtDecode } from "jwt-decode";

export function isTokenExpired(
  accessToken: string,
  bufferTime = 30 /**30 segundos de buffering */,
): boolean {
  try {
    const decoded: { exp?: number } = jwtDecode(accessToken);
    if (!decoded.exp) return true; // Treat as expired if no exp field

    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp < currentTime + bufferTime; // True if expiring within bufferTime
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // If decoding fails, assume token is expired
  }
}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const espera = async (segundos: number) => {
  await wait(segundos * 1000);
};

export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str; // Return the empty string if it's empty
  return str[0].toUpperCase() + str.slice(1);
}

export function validadoValorNumeroItensPorPagina(
  valor: string | string[] | undefined,
) {
  //devolve 10,20,30,40,50,60,70,80,90,100
  const valorNumeroItensPorPagina = valor ? parseInt(valor as string) : 10;

  const validadoValorNumeroItensPorPagina =
    valorNumeroItensPorPagina % 10 === 0 &&
    valorNumeroItensPorPagina >= 10 &&
    valorNumeroItensPorPagina <= 100
      ? valorNumeroItensPorPagina
      : 10;
  return validadoValorNumeroItensPorPagina;
}
