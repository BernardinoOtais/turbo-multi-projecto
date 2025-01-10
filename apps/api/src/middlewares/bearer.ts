import type { Response, NextFunction, Request } from 'express';

import { ResponseHandler } from '@utils/api-response-body';
import { verifyToken } from '@utils/jwt-handler';

export async function bearerJwt(
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

  if (!decripted.valid) {
    const resBody = ResponseHandler.Unauthorized('Unauthenticated');
    res.status(resBody.error!.code).json(resBody);
    return;
  }

  next();
}
