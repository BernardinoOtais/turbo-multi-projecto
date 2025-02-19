import type { PatchEstadoItemSchemaDto, PatchItemSchemaDto } from '@repo/types';
import { PatchEstadoItemSchema, PatchItemSchema } from '@repo/types';
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

export default ItensRotas;
