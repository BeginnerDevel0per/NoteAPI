import UserService from '../service/services/UserService';
import User from '../entities/User';
import { Request, Response } from 'express';
import Register from '../DTOs/RegisterDTO';



export default class RegisterController {
    private _UserService: UserService;
    constructor() {
        this._UserService = new UserService();
    }

    async Register(req: Request, res: Response) {
        const { Email, UserName, Password, PasswordAgain } = req.body;
        res.json(await this._UserService.Register(new Register(UserName, Email, Password, PasswordAgain)));
    }
}