import type { Request, Response, NextFunction } from 'express';

import logger from '@config/logger';

/**
 * Middleware to log HTTP requests using Winston.
 */
export const requestLogger = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { method, url, headers } = req;
    const startTime = Date.now();

    // Log incoming request details
    logger.info(`Incoming request: ${method} ${url}`, {
      headers: {
        'user-agent': headers['user-agent'],
        origin: headers.origin,
      },
    });

    // Capture response details
    const originalSend = res.send;
    res.send = function (body) {
      const responseTime = Date.now() - startTime;

      // Log response details
      logger.info(`Response sent: ${method} ${url}`, {
        status: res.statusCode,
        responseTime: `${responseTime}ms`,
        body: body instanceof Buffer ? body.toString() : body,
      });

      return originalSend.call(this, body);
    };

    // Forward to the next middleware or route handler
    next();
  };
};
