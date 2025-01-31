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

export const UnidadeSchema = z.object({
  idUnidades: z.number().int().nonnegative(),
  idItem: z.number().int().nonnegative(),
  descricaoUnidade: z.string().max(100),
});

export const OpTamanhoSchema = z.object({
  op: z.number().int().nonnegative(),
  tam: z.string().max(25),
  ordem: z.number().int().nonnegative(),
  qtt: z.number().int().nonnegative(),
});

export const OpSchema = z.object({
  op: z.number().int().nonnegative(),
  ref: z.string().max(18),
  modeloDesc: z.string().max(60),
  modelo: z.string().max(50),
  cor: z.string().max(50),
  pedido: z.string().max(50),
  norma: z.string().max(50),
  OpTamanho: z.array(OpTamanhoSchema).optional(),
});

export const conteudo = z.object({
  idConteudo: z.number().int().nonnegative(),
  idContainer: z.number().int().nonnegative(),
  idItem: z.number().int().nonnegative(),
  Item: item,
  op: z.number().int().nonnegative(),
  Op: OpSchema,
  tam: z.string().max(25),
  OpTamanho: z.object({ ordem: z.number().int().nonnegative() }),
  qtt: z.number().nonnegative(),
  Unidades: UnidadeSchema,
  peso: z.number().nonnegative(),
});

export const ContainerOpSchema = z.object({
  op: z.number().int().nonnegative(),
  Op: OpSchema,
});

export const ContainerOpsSchemas = z.array(ContainerOpSchema).optional();
export const TipoContainerSchema = z
  .object({
    idItem: z.number().int().nonnegative(),
    Item: z.object({
      Descricao: z.string().max(100),
    }),
  })
  .optional();

export const baseContainerSchema = z.object({
  idContainer: z.number().int().nonnegative(),
  idContainerPai: z.number().int().nonnegative().nullable(),
  idTipoContainer: z.number().int().nonnegative(),
  ordem: z.number().int().nonnegative(),
  nContainer: z.number().int().nonnegative(),
  altura: z.number().nonnegative(),
  TipoContainer: TipoContainerSchema,
  ContainerOp: ContainerOpsSchemas,
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
const ItensSchema = z
  .array(
    z.object({
      idItem: z.number().int().nonnegative(),
      Descricao: z.string().max(100),
    })
  )
  .optional();

const UnidadesSchema = z.array(UnidadeSchema);
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
  Itens: ItensSchema,
  Unidades: UnidadesSchema.optional(),
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

export type ContainerOpsSchemasDto = z.infer<typeof ContainerOpsSchemas>;

export type UnidadesSchemaDto = z.infer<typeof UnidadesSchema>;
