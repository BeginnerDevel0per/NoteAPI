import { AutoMap } from '@automapper/classes';
export default class Register {
    @AutoMap()
     UserName: string;
    @AutoMap()
     Email: string;
    @AutoMap()
     Password: string;
    @AutoMap()
     PasswordAgain: string;

    constructor(usernName: string, email: string, password: string, passwordAgain: string) {
        this.UserName = usernName;
        this.Email = email;
        this.Password = password;
        this.PasswordAgain = passwordAgain;
    }
}