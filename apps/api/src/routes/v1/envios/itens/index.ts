import { Router } from 'express';
import type { NextFunction, Request, Response } from 'express';

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

export default ItensRotas;
