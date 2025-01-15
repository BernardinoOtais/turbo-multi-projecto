import type { Request, Response, NextFunction } from 'express';

/**
 * Custom CORS Middleware to handle Cross-Origin Resource Sharing.
 */
export const corsHandler = (allowedOrigins: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const origin = req.headers.origin;

    //console.log('allowedOrigins: ', allowedOrigins);
    // Allow requests with no origin (e.g., Android apps, Postman, curl)
    if (!origin) {
      res.setHeader('Access-Control-Allow-Origin', '*');
    } else if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      // Optional: Block requests from disallowed origins
      return;
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With, Accept',
    );
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return;
    }

    next();
  };
};
