"use server";
import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";
import { UserDto } from "@repo/types";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const secretKey = process.env.SESSION_SECRET_KEY!;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(payload: UserDto) {
  try {
    const expiredAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const session = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(encodedKey);

    (await cookies()).set("session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: expiredAt,
      sameSite: "lax",
      path: "/",
    });
  } catch (error) {
    console.log("createSession error: ", error);
  }
}

export async function createSessionComResposta(
  payload: UserDto,
  response: NextResponse,
) {
  try {
    const expiredAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const session = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(encodedKey);

    response.cookies.set("session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: expiredAt,
      sameSite: "lax",
      path: "/",
    });
    return response;
  } catch (error) {
    console.log("createSession error: ", error);
    return response;
  }
}

export async function getSession() {
  const cookie = (await cookies()).get("session")?.value;

  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as UserDto;
  } catch (error) {
    console.error("Error verifying session:", error);
    redirect("/auth/login");
  }
}

export async function deleteSession() {
  (await cookies()).delete("session");
}

export async function updateTokens({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) return null;

  const { payload } = await jwtVerify<UserDto>(cookie, encodedKey);

  if (!payload) throw new Error("Session not found");

  const newPayload: UserDto = {
    ...payload,
    accessToken,
    refreshToken,
  };

  await createSession(newPayload);
}
