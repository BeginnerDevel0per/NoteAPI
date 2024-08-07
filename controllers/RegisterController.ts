import UserService from '../service/services/UserService';
import CustomResponseDto from '../DTOs/CustomResponseDto';
import { Request, Response } from 'express';
import Register from '../DTOs/RegisterDto';
import IUserService from '../interfaces/services/IUserService';



export default class RegisterController {
    private _UserService: IUserService;
    constructor() {
        this._UserService = new UserService();
    }
    async Register(req: Request, res: Response) {
        const { Email, UserName, Password, PasswordAgain } = req.body;
        res.status(200).json(
            new CustomResponseDto(await this._UserService.Register(
                new Register(UserName, Email, Password, PasswordAgain)
            )).Success());
    }
}