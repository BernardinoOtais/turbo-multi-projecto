import type { CriaUserDto, LoginDto, RefreshTokenDto } from '@repo/types';
import { CriaUser, LoginZ, RefreshToken } from '@repo/types';
import { Router } from 'express';
import type { NextFunction, Request, Response } from 'express';

import { validaSchema } from '@middlewares/valida-schema';
import { AuthRepository } from '@repositories/auth';
import HttpStatusCode from '@utils/http-status-code';

const AuthRoutes = Router();

AuthRoutes.post(
  '/login',
  validaSchema(LoginZ),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: LoginDto = req.body;
      const resBody = await AuthRepository.loginUser(body);

      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

AuthRoutes.post(
  '/register',
  validaSchema(CriaUser),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: CriaUserDto = req.body;
      const resBody = await AuthRepository.createUser(body);

      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

AuthRoutes.post(
  '/refresh-token',
  validaSchema(RefreshToken),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: RefreshTokenDto = req.body;

      const resBody = await AuthRepository.refreshToken(body);
      res
        .status(resBody.error ? resBody.error.code : HttpStatusCode.OK)
        .json(resBody);
    } catch (err) {
      next(err);
    }
  },
);

export default AuthRoutes;
