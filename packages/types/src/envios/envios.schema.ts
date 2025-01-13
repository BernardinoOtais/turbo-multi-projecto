import { z } from "zod";

export const DestinoEnvio = z.object({
  idDestino: z.number().int().nonnegative(),
  idIdioma: z.number().int().nonnegative(),
  nomeDestino: z.string().max(60),
});

export const item = z.object({
  idItem: z.number().int().nonnegative(),
  Descricao: z.string().max(100),
});

export const conteudo = z.object({
  idConteudo: z.number().int().nonnegative(),
  idContainer: z.number().int().nonnegative(),
  idItem: z.number().int().nonnegative(),
  Item: item,
});

export const baseContainerSchema = z.object({
  idContainer: z.number().int().nonnegative(),
  idContainerPai: z.number().int().nonnegative().nullable(),
  idTipoContainer: z.number().int().nonnegative(),
  ordem: z.number().int().nonnegative(),
  TipoContainer: z
    .object({
      idItem: z.number().int().nonnegative(),
      Item: z.object({
        Descricao: z.string().max(100),
      }),
    })
    .optional(),
  Conteudo: z.array(conteudo).optional(),
});

// Define the recursive type
type Container = z.infer<typeof baseContainerSchema> & {
  other_Container?: Container[]; // Make it optional
};

// Create the recursive schema
export const ContainerEnvio: z.ZodType<Container> = baseContainerSchema.extend({
  other_Container: z.lazy(() => ContainerEnvio.array()).optional(),
});

const ListaDeContainersEnvio = z.array(ContainerEnvio).optional();

export const EnvioSchema = z.object({
  idEnvio: z.number().int().nonnegative(),
  nomeEnvio: z.string().max(50),
  Destinos: DestinoEnvio,
  fechado: z.boolean().default(false),
  createdAt: z.coerce.date().default(new Date()),
  endDate: z.coerce
    .date()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  obs: z
    .string()
    .nullable()
    .optional()
    .transform((val) => val ?? null),
  nomeUser: z.string().max(100),
  Container: ListaDeContainersEnvio,
});

export const EnviosListSchema = z.object({
  lista: z.array(EnvioSchema),
  tamanhoLista: z.number().int().nonnegative(),
});

export type EnvioDto = z.infer<typeof EnvioSchema>;
export type EnviosListDto = z.infer<typeof EnviosListSchema>;

export type ContainerSchemaDto = z.infer<typeof ContainerEnvio>;

export type ConteudoDto = z.infer<typeof conteudo>;

export type ListaDeContainersEnvioDto = z.infer<typeof ListaDeContainersEnvio>;
