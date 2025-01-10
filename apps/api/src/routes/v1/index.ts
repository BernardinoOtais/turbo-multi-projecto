import type { Response, Request } from 'express';
import { Router } from 'express';

import { server } from '@config/config';
import { bearerJwt } from '@middlewares/bearer';
import HttpStatusCode from '@utils/http-status-code';

import AuthRoutes from './auth';
import Envios from './envios';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.status(HttpStatusCode.OK).json({
    tipo: server.NODE_ENV,
    dateTime: new Date().toISOString(),
    status: 'RUNNING',
    protected: false,
    hello: 'world',
  });
});

routes.use('/auth/', AuthRoutes);

routes.use('/envios', Envios);

routes.get('/protected', bearerJwt, (req: Request, res: Response) => {
  res.status(HttpStatusCode.OK).json({
    tipo: server.NODE_ENV,
    dateTime: new Date().toISOString(),
    status: 'RUNNING',
    protected: true,
  });
});

export default routes;
