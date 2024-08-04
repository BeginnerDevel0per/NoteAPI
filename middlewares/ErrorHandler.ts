// errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import ClientSideException from '../service/exceptions/ClientSideException';
import CustomResponseDto from '../DTOs/CustomResponseDto';


export function ErrorHandler(err: ClientSideException, req: Request, res: Response, next: NextFunction) {
    //gelen erroru nasıl türde gönderdiğim middlware

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json(new CustomResponseDto(null, false, message).Fail());
}