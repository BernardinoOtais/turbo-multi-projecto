import { z } from "zod";
const chavePhc = z.string().max(25).min(17);
const itemTraduzido = z.array(z.object({ descItem: z.string().max(100) }));

export const DestinosPossiveisSchema = z.array(
  z.object({
    value: chavePhc,
    label: z.string().max(100),
  })
);

export const DestinoEnvio = z.object({
  idDestino: chavePhc,
  idIdioma: z.number().int().nonnegative(),
  nomeDestino: z.string().max(60),
  morada: z.string().max(55),
  localMorada: z.string().max(43),
  codigoPostal: z.string().max(45),
  nacionalidade: z.string().max(20),
});

export const item = z.object({
  idItem: z.number().int().nonnegative(),
  Descricao: z.string().max(100),
  ItemTraduzido: itemTraduzido,
});

export const UnidadeSchema = z.object({
  idUnidades: z.number().int().nonnegative(),
  idItem: z.number().int().nonnegative(),
  descricaoUnidade: z.string().max(100),
  Item: z.object({ ItemTraduzido: itemTraduzido }).optional(),
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
const ItensSchema = z.array(
  z.object({
    idItem: z.number().int().nonnegative(),
    Descricao: z.string().max(100),
  })
);

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
  _count: z.object({ Container: z.number().int().nonnegative() }).optional(),
  Container: ListaDeContainersEnvio,
  Itens: ItensSchema.optional(),
  Unidades: UnidadesSchema.optional(),
  DestinosDisponiveis: DestinosPossiveisSchema.optional(),
});

export const EnviosListSchema = z.object({
  lista: z.array(EnvioSchema),
  tamanhoLista: z.number().int().nonnegative(),
  DestinosDisponiveis: DestinosPossiveisSchema.optional(),
});

export type EnvioDto = z.infer<typeof EnvioSchema>;

export type EnviosListDto = z.infer<typeof EnviosListSchema>;

export type ContainerSchemaDto = z.infer<typeof ContainerEnvio>;

export type ConteudoDto = z.infer<typeof conteudo>;

export type ListaDeContainersEnvioDto = z.infer<typeof ListaDeContainersEnvio>;

export type ContainerOpsSchemasDto = z.infer<typeof ContainerOpsSchemas>;

export type UnidadesSchemaDto = z.infer<typeof UnidadesSchema>;

export type ItensSchemaDto = z.infer<typeof ItensSchema>;

export type OpTamanhoDto = z.infer<typeof OpTamanhoSchema>;

export type OpSchemaDto = z.infer<typeof OpSchema>;

export type DestinoEnvioDto = z.infer<typeof DestinoEnvio>;

export type DestinosPossiveisDto = z.infer<typeof DestinosPossiveisSchema>;
