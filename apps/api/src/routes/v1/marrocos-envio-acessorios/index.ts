import type {
  IdOrdemDto,
  ListaIdsSchemaDto,
  PostAlturaDto,
  PostContainerSchemaDto,
  PostConteudoDto,
  PostDestinoSchemaDto,
  PostNomeEnviochemaDto,
  PostNovoEnvioSchemaDto,
  PostOpDto,
} from '@repo/types';
import {
  DadosParaPesquisaComPaginacaoEOrdem,
  IdContainerOpSchema,
  IdNumeroInteiroNaoNegativoSchema,
  IdOrdemSchema,
  ListaIdsSchema,
  PostAlturaSchema,
  PostContainerSchema,
  PostConteudoSchema,
  PostDestinoSchema,
  PostNomeEnviochema,
  PostNovoEnvioSchema,
  PostOpSchema,
} from '@repo/types';
import { Router } from 'express';
import type { NextFunction, Request, Response } from 'express';

import { enviosAuthenticator } from '@middlewares/envios-authenticator';
import { validaSchema } from '@middlewares/valida-schema';
import { EnviosRepository } from '@repositories/envios';
import HttpStatusCode from '@utils/http-status-code';

import Itens from './itens';

const EnvioRotas = Router();

EnvioRotas.use(enviosAuthenticator);

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
      const envio = await EnviosRepository.getEnvioById(
        idEnvio.id,
        idEnvio.idd,
      );
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

EnvioRotas.delete(
  '/conteudoApaga',
  validaSchema(ListaIdsSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: ListaIdsSchemaDto = ListaIdsSchema.parse(req.body);
    try {
      const resBody = await EnviosRepository.apagaConteudos(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.post(
  '/conteudo',
  validaSchema(PostConteudoSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostConteudoDto = PostConteudoSchema.parse(req.body);
    try {
      const resBody = await EnviosRepository.insiroConteudo(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.patch(
  '/patchFornecedor',
  validaSchema(PostDestinoSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostDestinoSchemaDto = req.body;
    try {
      const resBody = await EnviosRepository.patchFornecedor(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.delete(
  '/envioApaga',
  validaSchema(IdNumeroInteiroNaoNegativoSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    const idRecebido = IdNumeroInteiroNaoNegativoSchema.parse(req.query);
    const idEnvio = idRecebido.id;
    try {
      const resBody = await EnviosRepository.apagoEnvio(idEnvio);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.patch(
  '/patchNomeEnvio',
  validaSchema(PostNomeEnviochema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostNomeEnviochemaDto = req.body;
    try {
      const resBody = await EnviosRepository.patchNomeEnvio(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.post(
  '/novoEnvio',
  validaSchema(PostNovoEnvioSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const body: PostNovoEnvioSchemaDto = PostNovoEnvioSchema.parse(req.body);
    try {
      const resBody = await EnviosRepository.novoEnvioOUPatch(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.get(
  '/getdestinos',
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const destinos = await EnviosRepository.getDestinos();

      res
        .status(destinos.error ? destinos.error.code : HttpStatusCode.OK)
        .json(destinos);
    } catch (err) {
      next(err);
    }
  },
);

EnvioRotas.use('/itens', Itens);
export default EnvioRotas;
