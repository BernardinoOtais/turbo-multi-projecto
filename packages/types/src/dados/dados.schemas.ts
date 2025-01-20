import z from "zod";

export const DadosParaPesquisaComPaginacaoEOrdem = z.object({
  skip: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." }),

  take: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." }),
  fechado: z.string().transform((val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    throw new Error("Invalid boolean value");
  }),
  ordem: z.enum(["asc", "desc"]).optional(),
});

export type DadosParaPesquisaComPaginacaoEOrdemDto = z.infer<
  typeof DadosParaPesquisaComPaginacaoEOrdem
>;

export const IdNumeroInteiroNaoNegativoSchema = z.object({
  id: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." })
    .nonnegative({ message: "Tem que ser positivo..." }),
});

export const IdOrdemSchema = z.object({
  idOrdem: z.array(
    z.object({
      id: z.coerce
        .number({
          required_error: "Tem que inserrir números...",
          invalid_type_error: "Formato de número errado...",
        })
        .int({ message: "Tem que ser inteiro...." })
        .nonnegative({ message: "Tem que ser positivo..." }),
      ordem: z.coerce
        .number({
          required_error: "Tem que inserrir números...",
          invalid_type_error: "Formato de número errado...",
        })
        .int({ message: "Tem que ser inteiro...." })
        .nonnegative({ message: "Tem que ser positivo..." }),
    })
  ),
});

export const PostContainerSchema = z.object({
  idEnvio: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." })
    .nonnegative({ message: "Tem que ser positivo..." }),
  idContainerPai: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." })
    .nonnegative({ message: "Tem que ser positivo..." })
    .nullable(),
  idTipoContainer: z.coerce
    .number({
      required_error: "Tem que inserrir números...",
      invalid_type_error: "Formato de número errado...",
    })
    .int({ message: "Tem que ser inteiro...." })
    .nonnegative({ message: "Tem que ser positivo..." }),
});

export const PostAlturaSchema = z.object({
  PostAltura: z.object({
    id: z.coerce
      .number({
        required_error: "Tem que inserrir números...",
        invalid_type_error: "Formato de número errado...",
      })
      .int({ message: "Tem que ser inteiro...." })
      .nonnegative({ message: "Tem que ser positivo..." }),
    altura: z
      .union([z.string(), z.number()]) // Accept string or number
      .transform((value) =>
        typeof value === "string" ? value.trim().replace(",", ".") : value
      ) // Normalize strings (replace commas with dots)
      .refine((value) => !isNaN(parseFloat(value.toString())), {
        message: "Formato de número errado...",
      }) // Ensure valid number format
      .transform((value) => parseFloat(value.toString())) // Convert to number
      .refine((value) => value > 0, {
        message: "Tem ser maior que 0...",
      }), // Ensure non-negative
  }),
});

export const PostOpSchema = z.object({
  PostOp: z.object({
    id: z.coerce
      .number({
        required_error: "Tem que inserrir números...",
        invalid_type_error: "Formato de número errado...",
      })
      .int({ message: "Tem que ser inteiro...." })
      .nonnegative({ message: "Tem que ser positivo..." }),
    op: z.coerce
      .number({
        required_error: "Tem que inserrir números...",
        invalid_type_error: "Formato de número errado...",
      })
      .int({ message: "Tem que ser inteiro...." })
      .nonnegative({ message: "Tem que ser positivo..." }),
  }),
});

export const RespostaSchema = z.object({
  status: z.string(),
  errorMessage: z.string().nullable(),
});
export const RespostaRecebidaSchema = z.array(RespostaSchema);

export type PostContainerSchemaDto = z.infer<typeof PostContainerSchema>;

export type IdOrdemDto = z.infer<typeof IdOrdemSchema>;

export type PostAlturaDto = z.infer<typeof PostAlturaSchema>;

export type PostOpDto = z.infer<typeof PostOpSchema>;

export type RespostaDto = z.infer<typeof RespostaSchema>;

export type RespostaRecebidaDto = z.infer<typeof RespostaRecebidaSchema>;
