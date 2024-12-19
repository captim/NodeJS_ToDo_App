import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        message: 'Internal server error',
        error: err.message || err,
    });
};