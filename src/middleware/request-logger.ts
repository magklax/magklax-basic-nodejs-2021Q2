import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { logger } from '../winston';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    const { method, url } = req;
    const query = JSON.stringify(req.query);
    const body = JSON.stringify(req.body);

    next();

    finished(res, () => {
        logger.info(
            `request: ${method} ${url} query="${query}" body="${body}" code=${res.statusCode}`
        );
    });
};
