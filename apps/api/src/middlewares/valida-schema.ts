import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';
import { ZodError } from 'zod';

import { ResponseHandler } from '@utils/api-response-body';

// Utility function to parse Zod errors into a readable format
function parseZodErrors(errors: ZodError) {
  return errors.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
}

// Middleware to validate request body or query parameters against a Zod schema
export function validaSchema(
  schema: ZodSchema,
  source: 'body' | 'query' = 'body', // Specify source: "body" or "query"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataToValidate = source === 'body' ? req.body : req.query; // Use body or query based on source
      schema.parse(dataToValidate); // Validate the appropriate data source
      next(); // Proceed to the next middleware if valid
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const errors = parseZodErrors(error);
        const resBody = ResponseHandler.InvalidBody(
          `Validation Error: ${errors.join('; ')}`,
        );

        res.status(resBody.error!.code).json(resBody);
      } else {
        // Handle unexpected errors
        const resBody = ResponseHandler.BadRequest(
          'Unexpected validation error',
        );
        res.status(resBody.error!.code).json(resBody);
      }
    }
  };
}

/*

import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';
import { ZodError } from 'zod';

import { ResponseHandler } from '@utils/api-response-body';

// Utility function to parse Zod errors into a readable format
function parseZodErrors(errors: ZodError) {
  return errors.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
}

// Middleware to validate request body against a Zod schema
export function validaSchema(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // Validate the body
      next(); // Proceed to the next middleware if valid
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const errors = parseZodErrors(error);
        const resBody = ResponseHandler.InvalidBody(
          `Validation Error: ${errors.join('; ')}`,
        );

        res.status(resBody.error!.code).json(resBody);
      } else {
        // Handle unexpected errors
        const resBody = ResponseHandler.BadRequest(
          'Unexpected validation error',
        );
        res.status(resBody.error!.code).json(resBody);
      }
    }
  };
}

*/
