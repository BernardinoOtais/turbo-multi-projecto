import { inteiroNaoNegativo } from "../../dados/dados.schemas";
import z from "zod";

const IdiomasSchema = z.object({
  idIdioma: inteiroNaoNegativo,
  nomeIdioma: z.string().max(50, { message: "Máximo 50 caracteres" }),
});

const ItemTraduzidoSchema = z.object({
  idIdioma: inteiroNaoNegativo,
  descItem: z.string().max(100, { message: "Máximo 100 caracteres" }),
  Idiomas: z.object({
    nomeIdioma: z.string().max(50, { message: "Máximo 50 caracteres" }),
  }),
});

const ItemSchema = z.object({
  idItem: inteiroNaoNegativo,
  Descricao: z.string().max(100, { message: "Máximo 100 caracteres" }),
  inativo: z.boolean(),
  ItemTraduzido: z.array(ItemTraduzidoSchema),
  _count: z.object({
    Conteudo: inteiroNaoNegativo,
  }),
});

const ItemsSchema = z.array(ItemSchema);

export const ItensAcessoriosSchema = z.object({
  itemsSchema: ItemsSchema,
  idiomasSchema: z.array(IdiomasSchema),
});

export type ItensAcessoriosDto = z.infer<typeof ItensAcessoriosSchema>;
