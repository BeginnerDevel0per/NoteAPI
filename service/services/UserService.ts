import GenericService from "./GenericService";
import IGenericRepository from '../../interfaces/repositories/IGenericRepository';
import GenericRepository from '../../repository/GenericRepository';
import IUserService from "../../interfaces/services/IUserService";
import { token } from '../security/CreateToken';
import RegisterDTO from "../../DTOs/RegisterDto";
import UserDto from '../../DTOs/UserDto';
import ClientSideException from "../exceptions/ClientSideException";
import User from "../../entities/User";
import UpdateProfileDto from '../../DTOs/UpdateProfileDto';
import UpdatePasswordDto from '../../DTOs/UpdatePasswordDto';
import { mapper } from '../mappings/MapProfile';
import UpdateProfileImageDto from '../../DTOs/UpdateProfileImageDto';
import { Upload } from '../helpers/FileUpload';
export default class UserService extends GenericService<User> implements IUserService<User> {


    private readonly _UserRepository: IGenericRepository<User>;

    constructor() {
        const userRepository = new GenericRepository<User>("User");
        super(userRepository);
        this._UserRepository = userRepository;
    }
    async Login(UserName: string, Password: string): Promise<object> {
        let user = (await this._UserRepository.FirstOrDefault({ UserName: UserName, Password: Password }));
        if (user)
            return { JWT: token(user.id, user.PasswordUpdateDate) };
        else
            throw new ClientSideException("Kullanıcı adı veya şifre hatalı", 404);
    }


    async Register(UserToRegister: RegisterDTO): Promise<void> {

        if (UserToRegister.Password !== UserToRegister.PasswordAgain)
            throw new ClientSideException("Şifreler Uyuşmuyor.", 400);
        const IsUserName = await this._UserRepository.FirstOrDefault({ UserName: UserToRegister.UserName });
        if (IsUserName)
            throw new ClientSideException("Bu kullanıcı adı kullanılıyor.", 400);
        await this._UserRepository.AddAsync(await mapper.mapAsync(UserToRegister, RegisterDTO, User));
    }


    async GetProfile(UserId: string): Promise<UserDto> {
        const UserInformation = await this._UserRepository.GetByIdAsync(UserId);
        let mapping = await mapper.mapAsync(UserInformation, User, UserDto);
        return (mapping);
    }


    async UpdateProfileInformation(UpdateProfileDto: UpdateProfileDto): Promise<void> {

        let User = await this._UserRepository.FirstOrDefault(UpdateProfileDto.UserId);
        if (!User)
            throw new ClientSideException("Kullanıcı bulunamadı.", 404);

        const IsUserNameUsed = await this._UserRepository.FirstOrDefault({ UserName: UpdateProfileDto.UserName });
        if (IsUserNameUsed && (IsUserNameUsed.UserName !== User.UserName))
            throw new ClientSideException("Bu kullanıcı adı kullanılıyor", 400);

        User.Email = UpdateProfileDto.Email;
        User.UserName = UpdateProfileDto.UserName;
        User.updateDate = new Date().toISOString();
        await this._UserRepository.UpdateAsync(User);
    }


    async UpdatePassword(UpdatePasswordDto: UpdatePasswordDto): Promise<void> {

        if (UpdatePasswordDto.NewPassword !== UpdatePasswordDto.NewPasswordAgain)
            throw new ClientSideException("Şifreler Uyuşmuyor.", 400);

        let User = await this._UserRepository.FirstOrDefault(UpdatePasswordDto.UserId);
        if (!User)
            throw new ClientSideException("Kullanıcı bulunamadı.", 400);

        if (User.Password === UpdatePasswordDto.Password)
            throw new ClientSideException("Şimdiki Şifre Hatalı.", 400);

        User.Password = UpdatePasswordDto.NewPassword;
        User.PasswordUpdateDate = new Date().toISOString();

        await this._UserRepository.UpdateAsync(User);
    }


    async RemoveProfileImage(UserId: string): Promise<void> {
        let User = await this._UserRepository.FirstOrDefault(UserId);
        if (!User)
            throw new ClientSideException("Kullanıcı bulunamadı.", 400);
        User.ProfileImage = null;
        await this._UserRepository.UpdateAsync(User);
    }

    async ChangeProfileImage(UpdateProfileImageDto: UpdateProfileImageDto): Promise<void> {

        if (UpdateProfileImageDto.ImageFile === null || UpdateProfileImageDto.ImageFile === undefined)
            throw new ClientSideException("Resim dosyası gönderilmedi.", 400);

        if (Array.isArray(UpdateProfileImageDto.ImageFile))
            throw new ClientSideException("Birden fazla dosya gönderilemez.", 400);

        let User = await this._UserRepository.FirstOrDefault(UpdateProfileImageDto.UserId);
        if (!User)
            throw new ClientSideException("Kullanıcı bulunamadı.", 400);

        const imageName = await Upload(UpdateProfileImageDto.ImageFile, "profileImages");
        User.ProfileImage = imageName;
        await this._UserRepository.UpdateAsync(User);
    }

}


