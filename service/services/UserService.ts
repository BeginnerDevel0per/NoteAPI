import GenericService from "./GenericService";
import IGenericRepository from '../../interfaces/repositories/IGenericRepository';
import GenericRepository from '../../repository/GenericRepository';
import IUserService from "../../interfaces/services/IUserService";
import { token } from '../security/CreateToken';
import Register from "../../DTOs/RegisterDTO";
import ClientSideException from "../exceptions/ClientSideException";
import User from "../../entities/User";



export default class UserService extends GenericService<User> implements IUserService<User> {


    private readonly _UserRepository: IGenericRepository<User>;

    constructor() {
        const userRepository = new GenericRepository<User>("User");
        super(userRepository);
        this._UserRepository = userRepository;
    }

    async Login(UserName: string, Password: string): Promise<string> {
        let user: User | undefined = (await this._UserRepository.FirstOrDefault({ UserName: UserName, Password: Password }));
        if (user)
            return token(user.id, user.PasswordUpdateDate);
        else
            throw new ClientSideException("Kullanıcı adı veya şifre hatalı", 404);
    }


    async Register(UserToRegister: Register): Promise<string> {

        if (UserToRegister.Password !== UserToRegister.PasswordAgain)
            throw new ClientSideException("Şifreler Uyuşmuyor.", 400);
        const IsUserName = await this._UserRepository.FirstOrDefault({ UserName: UserToRegister.UserName });
        if (IsUserName)
            throw new ClientSideException("Bu kullanıcı adı kullanılıyor.", 400);

        let userModel = new User();
        userModel.Email = UserToRegister.Email;
        userModel.Password = UserToRegister.Password;
        userModel.UserName = UserToRegister.UserName;
        userModel.createDate = new Date().toISOString();
        userModel.updateDate = "";
        await this._UserRepository.AddAsync(userModel);
        return "Kayıt Başarılı";
    }
}