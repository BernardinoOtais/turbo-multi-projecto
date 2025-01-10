import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

import { server } from '@config/config';
import { catchAll } from '@middlewares/catch-all';
import { corsHandler } from '@middlewares/cors-handler';
import { requestLogger } from '@middlewares/logger';
import { rateLimiter } from '@middlewares/rate-limiter';
import { securityMiddleware } from '@middlewares/security';
import v1Routes from '@routes/v1';
import { parseAPIVersion } from '@utils/utils';

// Create Express app
const app = express();

/**
 * Core middlewares for parsing and cookies.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Security enhancements and rate limiting.
 */
app.use(securityMiddleware());
app.use(rateLimiter());

/**
 * Enable Cross-Origin Resource Sharing (CORS).
 */
app.use(corsHandler(server.ALLOWED_ORIGINS));

/**
 * Log incoming requests.
 */
app.use(requestLogger());

/**
 * Route handling.
 */
app.use(parseAPIVersion(1), v1Routes);

/**
 * Fallback for undefined routes.
 */
app.use(catchAll);

export default app;
