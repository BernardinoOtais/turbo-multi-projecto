import z from "zod";
export const inteiroNaoNegativo = z.coerce
  .number({
    required_error: "Tem que inserrir números...",
    invalid_type_error: "Formato errado...",
  })
  .int({ message: "Tem que ser inteiro...." })
  .nonnegative({ message: "Tem que ser positivo..." });

const float = z
  .union([z.string(), z.number()]) // Accept both strings and numbers
  .transform((value) => {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed === "") return undefined; // Treat empty string as undefined to trigger "Obrigatório"
      return trimmed.replace(",", ".");
    }
    return value;
  }) // Normalize strings (replace commas with dots)
  .refine((value) => value !== undefined, {
    message: "Obrigatório", // Required error message
  })
  .refine((value) => !isNaN(parseFloat(value as string)), {
    message: "Formato de número errado...",
  }) // Ensure valid number format
  .transform((value) => parseFloat(value as string)) // Convert to number
  .refine((value) => value > 0, {
    message: "> 0...",
  });

const floatZero = z
  .union([z.string(), z.number()]) // Accept both strings and numbers
  .transform((value) => {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed === "") return undefined; // Treat empty string as undefined to trigger "Obrigatório"
      return trimmed.replace(",", ".");
    }
    return value;
  }) // Normalize strings (replace commas with dots)
  .refine((value) => value !== undefined, {
    message: "Obrigatório", // Required error message
  })
  .refine((value) => !isNaN(parseFloat(value as string)), {
    message: "Formato de número errado...",
  }) // Ensure valid number format
  .transform((value) => parseFloat(value as string))
  .refine((value) => value >= 0, {
    message: ">= 0...",
  }); // Convert to number

const chavePhc = z
  .string()
  .max(25, { message: "Não pode ter mais 25 caracteres..." })
  .min(23, { message: "Não pode ter menos 23 caracteres..." });

export const IdNumeroInteiroNaoNegativoSchema = z.object({
  id: inteiroNaoNegativo,
  idd: inteiroNaoNegativo.optional(),
});

const verdadeiroOuFalso = z.string().transform((val) => {
  if (val === "true") return true;
  if (val === "false") return false;
  throw new Error("Invalid boolean value");
});

const nomeEnvio = z
  .string()
  .min(3, { message: "Tem que ter pelo menos 3 caracteres..." })
  .max(50, { message: "Máximo 50 caracteres" });

export const DadosParaPesquisaComPaginacaoEOrdem = z.object({
  skip: inteiroNaoNegativo,

  take: inteiroNaoNegativo,
  fechado: verdadeiroOuFalso,
  ordem: z.enum(["asc", "desc"]).optional(),
});

export const IdOrdemSchema = z.object({
  idOrdem: z.array(
    z.object({
      id: inteiroNaoNegativo,
      ordem: inteiroNaoNegativo,
    })
  ),
});

export const PostContainerSchema = z.object({
  idEnvio: inteiroNaoNegativo,
  idContainerPai: inteiroNaoNegativo.nullable(),
  idTipoContainer: inteiroNaoNegativo,
});

export const PostAlturaSchema = z.object({
  PostAltura: z.object({
    id: inteiroNaoNegativo,
    altura: float,
  }),
});

export const IdContainerOpSchema = z.object({
  id: inteiroNaoNegativo,
  op: inteiroNaoNegativo,
});

export const PostOpSchema = z.object({
  PostOp: IdContainerOpSchema,
});

export const RespostaSchema = z.object({
  status: z.string(),
  errorMessage: z.string().nullable(),
  successMessage: z.string().optional(),
  id: inteiroNaoNegativo.optional(),
});

export const RespostaRecebidaSchema = z.array(RespostaSchema);

const tamanhosQttPeso = z.object({
  tam: z.string().max(25, { message: "Máximo 25 caracteres" }),
  qtt: floatZero,
  peso: floatZero,
  pesoUnit: floatZero,
});
export const PostConteudoSchema = z.object({
  conteudo: z.object({
    idContainer: inteiroNaoNegativo,
    idItem: inteiroNaoNegativo,
    op: inteiroNaoNegativo,
    idUnidades: inteiroNaoNegativo,
    TamanhosQttPeso: z.array(tamanhosQttPeso),
  }),
});

export const PostDestinoSchema = z.object({
  idEnvio: inteiroNaoNegativo,
  idDestino: chavePhc,
});
export const PostNomeEnviochema = z.object({
  idEnvio: inteiroNaoNegativo,
  nomeEnvio,
});

export const PostNovoEnvioSchema = z.object({
  idEnvio: inteiroNaoNegativo.optional(),
  nomeEnvio,
  idDestino: chavePhc,
  obs: z.string().optional(),
  nomeUser: z.string().optional(),
});

export const ListaIdsSchema = z.object({
  numbers: z.array(inteiroNaoNegativo),
});

export type PostContainerSchemaDto = z.infer<typeof PostContainerSchema>;

export type IdOrdemDto = z.infer<typeof IdOrdemSchema>;

export type PostAlturaDto = z.infer<typeof PostAlturaSchema>;

export type PostOpDto = z.infer<typeof PostOpSchema>;

export type RespostaDto = z.infer<typeof RespostaSchema>;

export type RespostaRecebidaDto = z.infer<typeof RespostaRecebidaSchema>;

export type IdContainerOpSchemaDto = z.infer<typeof IdContainerOpSchema>;

export type DadosParaPesquisaComPaginacaoEOrdemDto = z.infer<
  typeof DadosParaPesquisaComPaginacaoEOrdem
>;

export type PostConteudoDto = z.infer<typeof PostConteudoSchema>;

export type PostDestinoSchemaDto = z.infer<typeof PostDestinoSchema>;

export type PostNovoEnvioSchemaDto = z.infer<typeof PostNovoEnvioSchema>;

export type PostNomeEnviochemaDto = z.infer<typeof PostNomeEnviochema>;

export type ListaIdsSchemaDto = z.infer<typeof ListaIdsSchema>;

export type IdNumeroInteiroNaoNegativoSchemaDto = z.infer<
  typeof IdNumeroInteiroNaoNegativoSchema
>;
