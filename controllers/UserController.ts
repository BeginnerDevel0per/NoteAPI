import UserService from '../service/services/UserService';
import { Request, Response } from 'express';
import CustomResponseDto from '../DTOs/CustomResponseDto';
import UpdateProfileDto from '../DTOs/UpdateProfileDto';
import UpdateProfileImageDto from '../DTOs/UpdateProfileImageDto';
import UpdatePasswordDto from '../DTOs/UpdatePasswordDto';
export default class UserController {

    private _UserService: UserService;

    constructor() {
        this._UserService = new UserService();
    }

    async GetProfile(req: Request, res: Response) {
        res.status(200).json(new CustomResponseDto(await this._UserService.GetProfile(req.body.UserId)).Success());
    }

    async UpdateProfileInformation(req: Request, res: Response) {
        const { UserId, UserName, Email } = req.body;
        res.status(200).json(new CustomResponseDto(
            await this._UserService.UpdateProfileInformation(new UpdateProfileDto({ UserId: UserId, UserName: UserName, Email: Email }))).Success());
    }

    async UpdatePassword(req: Request, res: Response) {
        const { UserId, Password, NewPassword, NewPasswordAgain } = req.body;
        res.status(200).json(new CustomResponseDto(await this._UserService.UpdatePassword(new UpdatePasswordDto({
            UserId: UserId,
            Password: Password,
            NewPassword: NewPassword,
            NewPasswordAgain: NewPasswordAgain
        }))).Success());
    }

    async ChangeProfileImage(req: Request, res: Response) {
        const reqBody = { UserId: req.body.UserId, ImageFile: req.files?.file };
        res.status(200).json(new CustomResponseDto(await this._UserService.ChangeProfileImage(new UpdateProfileImageDto({ UserId: req.body.UserId, ImageFile: req.files?.file }))).Success());
    }

    async RemoveProfileImage(req: Request, res: Response) {
        res.status(200).json(new CustomResponseDto(await this._UserService.RemoveProfileImage(req.body.UserId)).Success());
    }

    async GetProfileImage(req: Request, res: Response) {
        res.set('Content-Type', 'image/jpeg');
        res.status(200).send(await this._UserService.GetUserProfileImage(req.body.UserId));
    }
}