// errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import ClientSideException from '../service/exceptions/ClientSideException';

export function ErrorHandler(err: ClientSideException, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const message = err || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        error: {
            message: message,
        },
    });

}