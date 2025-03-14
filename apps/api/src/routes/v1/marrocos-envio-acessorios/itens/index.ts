import type {
  PatchEstadoItemSchemaDto,
  PatchItemSchemaDto,
  PostItensAcessoriosSchemaDto,
} from '@repo/types';
import {
  IdNumeroInteiroNaoNegativoSchema,
  PatchEstadoItemSchema,
  PatchItemSchema,
  PostItensAcessoriosSchema,
} from '@repo/types';
import { Router } from 'express';
import type { NextFunction, Request, Response } from 'express';

import { validaSchema } from '@middlewares/valida-schema';
import { EnviosItensRepository } from '@repositories/envios/itens';
import HttpStatusCode from '@utils/http-status-code';

const ItensRotas = Router();

ItensRotas.post(
  '/actualiza-android',
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const post = await EnviosItensRepository.refreshPartesAndroid();
      res.status(post.error ? post.error.code : HttpStatusCode.OK).json(post);
    } catch (err) {
      next(err);
    }
  },
);

ItensRotas.post(
  '/itens-novos',
  validaSchema(PostItensAcessoriosSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostItensAcessoriosSchemaDto = req.body;
    try {
      const post = await EnviosItensRepository.insiroItens(body);
      res.status(post.error ? post.error.code : HttpStatusCode.OK).json(post);
    } catch (err) {
      next(err);
    }
  },
);

ItensRotas.get(
  '/itens-acessorios',
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const acessorios = await EnviosItensRepository.getIntensAcessorios();
      res
        .status(acessorios.error ? acessorios.error.code : HttpStatusCode.OK)
        .json(acessorios);
    } catch (err) {
      next(err);
    }
  },
);

ItensRotas.patch(
  '/itens-patch-inactivo',
  validaSchema(PatchEstadoItemSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PatchEstadoItemSchemaDto = req.body;
    try {
      const patchEstadoItem = await EnviosItensRepository.patchEstadoItem(
        body.idItem,
      );
      res
        .status(
          patchEstadoItem.error
            ? patchEstadoItem.error.code
            : HttpStatusCode.OK,
        )
        .json(patchEstadoItem);
    } catch (err) {
      next(err);
    }
  },
);

ItensRotas.patch(
  '/itens-patch-nome',
  validaSchema(PatchItemSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PatchItemSchemaDto = req.body;
    try {
      const patchNomeItem = await EnviosItensRepository.patchNomeItem(body);
      res
        .status(
          patchNomeItem.error ? patchNomeItem.error.code : HttpStatusCode.OK,
        )
        .json(patchNomeItem);
    } catch (err) {
      next(err);
    }
  },
);

ItensRotas.delete(
  '/apaga-item',
  validaSchema(IdNumeroInteiroNaoNegativoSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const idRecebido = IdNumeroInteiroNaoNegativoSchema.parse(req.query);
    const idItem = idRecebido.id;
    try {
      const apagaItem = await EnviosItensRepository.apagaItem(idItem);
      res
        .status(apagaItem.error ? apagaItem.error.code : HttpStatusCode.OK)
        .json(apagaItem);
    } catch (err) {
      next(err);
    }
  },
);

export default ItensRotas;
