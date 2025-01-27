import type {
  IdContainerOpSchemaDto,
  IdOrdemDto,
  PostAlturaDto,
  PostContainerSchemaDto,
  PostOpDto,
} from '@repo/types';
import {
  DadosParaPesquisaComPaginacaoEOrdem,
  IdContainerOpSchema,
  IdNumeroInteiroNaoNegativoSchema,
  IdOrdemSchema,
  PostAlturaSchema,
  PostContainerSchema,
  PostOpSchema,
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
    try {
      const envio = await EnviosRepository.getEnvios(parameters);

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
    try {
      const envio = await EnviosRepository.getEnvioById(idEnvio.id);
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
    try {
      const resBody = await EnviosRepository.postContainer(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);
EnvioRotas.delete(
  '/container',
  validaSchema(IdNumeroInteiroNaoNegativoSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const idRecebido = IdNumeroInteiroNaoNegativoSchema.parse(req.query);
    const idContainer = idRecebido.id;
    try {
      const containerApagado =
        await EnviosRepository.containerApagar(idContainer);
      res
        .status(
          containerApagado.error
            ? containerApagado.error.code
            : HttpStatusCode.OK,
        )
        .json(containerApagado);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.patch(
  '/containerOrdem',
  validaSchema(IdOrdemSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: IdOrdemDto = req.body;
    try {
      const resBody = await EnviosRepository.ordenaContainer(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.post(
  '/containerAltura',
  validaSchema(PostAlturaSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostAlturaDto = PostAlturaSchema.parse(req.body);
    try {
      const resBody = await EnviosRepository.insiroAlturaContainer(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.post(
  '/containerOps',
  validaSchema(PostOpSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostOpDto = PostOpSchema.parse(req.body);
    try {
      const resBody = await EnviosRepository.insiroOpContainer(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);
EnvioRotas.delete(
  '/containerOpApaga',
  validaSchema(IdContainerOpSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const query = IdContainerOpSchema.parse(req.query);
    try {
      const resBody = await EnviosRepository.apagoOpContainer(query);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

export default EnvioRotas;
