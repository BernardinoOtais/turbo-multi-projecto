import type { PostContainerSchemaDto } from '@repo/types';
import {
  DadosParaPesquisaComPaginacaoEOrdem,
  IdNumeroInteiroNaoNegativoSchema,
  PostContainerSchema,
} from '@repo/types';
import { Router } from 'express';
import type { NextFunction, Request, Response } from 'express';

import { validaSchema } from '@middlewares/valida-schema';
import { EnviosRepository } from '@repositories/envios';
import HttpStatusCode from '@utils/http-status-code';

const EnvioRotas = Router();

EnvioRotas.get(
  '/',
  validaSchema(DadosParaPesquisaComPaginacaoEOrdem, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const parameters = DadosParaPesquisaComPaginacaoEOrdem.parse(req.query);

    const envio = await EnviosRepository.getEnvios(parameters);

    try {
      res
        .status(envio.error ? envio.error.code : HttpStatusCode.OK)
        .json(envio);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.get(
  '/envio',
  validaSchema(IdNumeroInteiroNaoNegativoSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const idEnvio = IdNumeroInteiroNaoNegativoSchema.parse(req.query);

    const envio = await EnviosRepository.getEnvioById(idEnvio.id);

    try {
      res
        .status(envio.error ? envio.error.code : HttpStatusCode.OK)
        .json(envio);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.post(
  '/container',
  validaSchema(PostContainerSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostContainerSchemaDto = req.body;

    const resBody = await EnviosRepository.postContainer(body);

    try {
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

export default EnvioRotas;
