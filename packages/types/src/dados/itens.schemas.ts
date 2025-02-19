import z from "zod";
import { inteiroNaoNegativo } from "./dados.schemas";

export const PatchItemSchema = z.object({
  idItem: inteiroNaoNegativo,
  idIdioma: inteiroNaoNegativo,
  Descricao: z
    .string()
    .max(100, { message: "Máximo 100 caracteres" })
    .min(5, { message: "Mínimo 5 caracteres" }),
  descItem: z
    .string()
    .max(100, { message: "Máximo 100 caracteres" })
    .min(5, { message: "Mínimo 5 caracteres" }),
});

export const PostItensAcessoriosSchema = z.array(
  z.object({
    Descricao: z
      .string()
      .max(100, { message: "Máximo 100 caracteres" })
      .min(5, { message: "Mínimo 5 caracteres" })
      .optional(),
    idiomas: z
      .array(
        z.object({
          idIdioma: inteiroNaoNegativo,
          descItem: z
            .string()
            .max(100, { message: "Máximo 100 caracteres" })
            .min(5, { message: "Mínimo 5 caracteres" }),
        })
      )
      .optional(),
  })
);

export const PatchEstadoItemSchema = z.object({
  idItem: inteiroNaoNegativo,
});

export type PatchItemSchemaDto = z.infer<typeof PatchItemSchema>;

export type PostItensAcessoriosSchemaDto = z.infer<
  typeof PostItensAcessoriosSchema
>;

export type PatchEstadoItemSchemaDto = z.infer<typeof PatchEstadoItemSchema>;
