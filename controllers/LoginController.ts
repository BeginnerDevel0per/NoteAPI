import UserService from '../service/services/UserService';
import { Request, Response, NextFunction } from 'express';
export default class LoginController {

    private _UserService: UserService;
    constructor() {
        this._UserService = new UserService();
    }

    async Login(req: Request, res: Response, next: NextFunction) {

        try {
            const { UserName, Password } = req.body;
            res.status(200).json(await this._UserService.Login(UserName, Password));
        } catch (error) {
            next(error);
        }
    }
}

