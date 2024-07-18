import IGenericService from "./IGenericService";
import RegisterDTO from '../../DTOs/RegisterDTO';
export default interface IUserService<User> extends IGenericService<User> {

    Login(UserName: string, Password: string): Promise<string>;
    Register(RegisterDTO: RegisterDTO): Promise<string>;
}