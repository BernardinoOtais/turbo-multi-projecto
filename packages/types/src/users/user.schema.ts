import { z } from "zod";

const PasswordValida = z
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
  .trim();
const chave = z
  .string()
  .max(50, { message: "Não pode ter mais 50 caracteres..." })
  .min(23, { message: "Não pode ter menos 23 caracteres..." });

export const Papeis = z.object({
  papeis: z.array(
    z.object({
      idPapel: chave,
      descricao: z.string(),
    })
  ),
});

export const CriaUserComValidacaoPassword = z
  .object({
    nomeUser: z.string().min(4, { message: "Deve ter pelo menos 4 caracteres" }).max(50, { message: "Não pode ter mais 50 caracteres..." }),  
    nome: z.string().min(4, { message: "Deve ter pelo menos 4 caracteres" }).max(50, { message: "Não pode ter mais 50 caracteres..." }),  ,
    apelido: z.string().min(4, { message: "Deve ter pelo menos 4 caracteres" }).max(50, { message: "Não pode ter mais 50 caracteres..." }),  ,
    email: z.string().email(),
    password: PasswordValida,
    confirmPassword: PasswordValida,
    message: z.string().optional(),
    papeis: z.array(chave).min(1, { message: "Deve ter pelo menos um papel" }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Textos não são iguais",
        path: ["confirmPassword"],
      });
    }
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

export const UserMiddlewareSchema = z.object({
  sub: z.string(),
  papeis: z.array(z.string()),
  iat: z.number(),
  exp: z.number(),
});

export type RefreshTokenDto = z.infer<typeof RefreshToken>;

export type CriaUserComValidacaoPasswordDto = z.infer<
  typeof CriaUserComValidacaoPassword
>;

export type LoginDto = z.infer<typeof LoginZ>;

export type UserDto = z.infer<typeof User>;

export type UserCriadoDto = z.infer<typeof UserCriado>;

export type PapeisDto = z.infer<typeof Papeis>;
