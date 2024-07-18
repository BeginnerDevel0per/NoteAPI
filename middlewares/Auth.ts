import JWT from 'jsonwebtoken';
import { Request, Response } from 'express';
import { TokenSettings } from '../config/Token';


export default (req: Request, res: Response) => {
    try {
        const token = String(req.headers.authorization);
        const decodedToken = JWT.verify(token, TokenSettings.SecurityKey);
    } catch (error) {
        res.status(401).send();
    }
}