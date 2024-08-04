import IGenericService from "./IGenericService";
import RegisterDTO from '../../DTOs/RegisterDto';
import UserDto from '../../DTOs/UserDto';
import UpdateProfileDto from '../../DTOs/UpdateProfileDto';
import UpdatePasswordDto from '../../DTOs/UpdatePasswordDto';
import UpdateProfileImageDto from '../../DTOs/UpdateProfileImageDto';
import User from "../../entities/User";
export default interface IUserService extends IGenericService<User> {

    Login(UserName: string, Password: string): Promise<object>;
    Register(RegisterDTO: RegisterDTO): Promise<void>;
    GetProfile(UserId: string): Promise<UserDto>;
    UpdateProfileInformation(UpdateProfileDto: UpdateProfileDto): Promise<void>;
    UpdatePassword(UpdatePasswordDto: UpdatePasswordDto): Promise<void>;
    RemoveProfileImage(UserId: string): Promise<void>;
    ChangeProfileImage(UpdateProfileImageDto: UpdateProfileImageDto): Promise<void>;
    GetUserProfileImage(ImageFolderName: string): Promise<Buffer>;
}