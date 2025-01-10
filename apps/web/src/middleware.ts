import { NextRequest, NextResponse } from "next/server";
import {
  createSessionComResposta,
  deleteSession,
  getSession,
} from "./lib/actions/auth/sessions";

import { BACKEND_URL } from "./lib/constants";
import { UserDto } from "@repo/types";
import { isTokenExpired } from "./lib/my-utils";

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  //console.log("********inicio MIDDLEWARE*************");
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const isPublicRoute = pathname === "/";
  if (isPublicRoute) return NextResponse.next();

  // Retrieve the current session
  const session = await getSession();

  // Redirect to login if no session exists
  if (!session) {
    if (pathname.startsWith("/auth/login")) return NextResponse.next();
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const { accessToken, refreshToken, papeis } = session;

  // Verify user has permission to access the route
  const allowedPaths = [
    "/dashboard",
    ...papeis.map(role => `/dashboard/${role.toLowerCase()}`),
  ];

  if (!allowedPaths.some(allowedPath => pathname.startsWith(allowedPath))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Check if tokens are expired
  const isAccessTokenExpired = isTokenExpired(accessToken);
  const isRefreshTokenExpired = isTokenExpired(refreshToken);

  if (isAccessTokenExpired && isRefreshTokenExpired) {
    await deleteSession();
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Attempt to refresh tokens if only the access token is expired
  if (isAccessTokenExpired && !isRefreshTokenExpired) {
    if (pathname.startsWith("/auth/login"))
      return NextResponse.redirect(new URL("/", request.url));

    try {
      const refreshResponse = await fetch(`${BACKEND_URL}auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
        credentials: "include",
      });

      if (refreshResponse.ok) {
        const response = NextResponse.next();
        const { data } = await refreshResponse.json();
        const newSession: UserDto = {
          id: data.id,
          name: data.name,
          apelido: data.apelido,
          email: data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          papeis: data.papeis,
        };
        await createSessionComResposta(newSession, response);
        // console.log("********inicio MIDDLEWARE data.accessToken *************");
        //console.log("********inicio MIDDLEWARE*************", data.accessToken);
        return response;
      }
    } catch (error) {
      console.error("Error refreshing tokens:", error);
    }

    await deleteSession();
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
