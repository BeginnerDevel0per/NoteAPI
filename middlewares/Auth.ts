import JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TokenSettings } from '../config/Token';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        const token = String(authHeader?.split(' ')[1]);
        const decodedToken = JWT.verify(token, TokenSettings.SecurityKey);
        req.body.UserId = Object(JWT.decode(token)).UserId;
        next();
    } catch (error) {
        res.status(401).send();
    }
}