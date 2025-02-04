import { UserMiddlewareSchema } from '@repo/types';
import type { Response, NextFunction, Request } from 'express';

import { ResponseHandler } from '@utils/api-response-body';
import { verifyToken } from '@utils/jwt-handler';

export async function enviosAuthenticator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    const resBody = ResponseHandler.Unauthorized(
      'Access denied: No token provided',
    );
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    const resBody = ResponseHandler.Unauthorized(
      'Access denied: No token provided',
    );
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  const decripted = await verifyToken(token, 'access');

  //console.log('enviosAuthenticator ---', decripted.decoded);

  const dadosDescodificados = UserMiddlewareSchema.safeParse(decripted.decoded);

  if (!decripted.valid) {
    const resBody = ResponseHandler.Unauthorized('Unauthenticated');
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  if (!dadosDescodificados.success) {
    const resBody = ResponseHandler.Unauthorized('Unauthenticated');
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  if (!dadosDescodificados.data.papeis.includes('Embarques')) {
    //if (!dadosDescodificados.data.papeis.includes('ovo')) {
    const resBody = ResponseHandler.Unauthorized('Unauthenticated');
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  next();
}
