import { z } from "zod";

export const CriaUser = z.object({
  nomeUser: z.string(),
  nome: z.string(),
  apelido: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Contain at least one letter.",
    }) /*
    .regex(/[0-9]/, {
      message: "Contain at least one number.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })*/
    .trim(),
  message: z.string().optional(),
});

export const UserCriado = z.object({
  nomeUser: z.string(),
  nome: z.string(),
  apelido: z.string(),
  email: z.string().email(),
  message: z.string().optional(),
});

export const LoginZ = z.object({
  nomeUser: z.string().min(1),
  password: z.string().min(1),
  message: z.string().optional(),
});

export const User = z.object({
  id: z.string(),
  name: z.string(),
  apelido: z.string(),
  email: z.string().email(),
  accessToken: z.string(),
  refreshToken: z.string(),
  papeis: z.array(z.string()),
});

export const RefreshToken = z.object({
  refresh: z.string(),
});

export const Papeis = z.object({
  papeis: z.array(
    z.object({
      idPapel: z.string(),
      descricao: z.string(),
    })
  ),
});

export const UserMiddlewareSchema = z.object({
  sub: z.string(),
  papeis: z.array(z.string()),
  iat: z.number(),
  exp: z.number(),
});

export type RefreshTokenDto = z.infer<typeof RefreshToken>;

export type CriaUserDto = z.infer<typeof CriaUser>;

export type LoginDto = z.infer<typeof LoginZ>;

export type UserDto = z.infer<typeof User>;

export type UserCriadoDto = z.infer<typeof UserCriado>;

export type PapeisDto = z.infer<typeof Papeis>;
