import UserService from '../service/services/UserService';
import { Request, Response } from 'express';
import CustomResponseDto from '../DTOs/CustomResponseDto';
export default class LoginController {

    private _UserService: UserService;
    constructor() {
        this._UserService = new UserService();
    }
    async Login(req: Request, res: Response) {
        const { UserName, Password } = req.body;
        res.status(200).json(new CustomResponseDto(await this._UserService.Login(UserName, Password)).Success());
    }
}

