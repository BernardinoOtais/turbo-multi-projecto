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

export const IdOrdemSchema = z.array(
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
);

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

export type PostContainerSchemaDto = z.infer<typeof PostContainerSchema>;

export type IdOrdemDto = z.infer<typeof IdOrdemSchema>;
