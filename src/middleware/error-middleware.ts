import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../common/logger';

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error(`Internal server error: ${err.name}: ${err.message}`);

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));

};

export { errorMiddleware };
