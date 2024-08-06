import UserService from '../service/services/UserService';
import { Request, Response } from 'express';
import CustomResponseDto from '../DTOs/CustomResponseDto';
import IUserService from '../interfaces/services/IUserService';
export default class LoginController {

    private _UserService: IUserService;
    constructor() {
        this._UserService = new UserService();
    }
    async Login(req: Request, res: Response) {
        const { UserName, Password } = req.query;
        res.status(200).json(new CustomResponseDto(await this._UserService.Login(String(UserName), String(Password))).Success());
    }
}

