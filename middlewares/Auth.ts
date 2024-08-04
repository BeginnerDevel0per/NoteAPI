import JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TokenSettings } from '../config/Token';
import ClientSideException from '../service/exceptions/ClientSideException';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        const token = String(authHeader?.split(' ')[1]);
        const decodedToken = JWT.verify(token, TokenSettings.SecurityKey);
        req.body.UserId = Object(JWT.decode(token)).UserId;
        next();
    } catch (error) {
        throw new ClientSideException("Token geçersiz veya bulunamadı.", 401);
    }
}