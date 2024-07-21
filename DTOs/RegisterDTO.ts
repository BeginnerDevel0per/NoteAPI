import { AutoMap } from '@automapper/classes';
export default class Register {
    @AutoMap()
    public UserName: string;
    @AutoMap()
    public Email: string;
    @AutoMap()
    public Password: string;
    @AutoMap()
    public PasswordAgain: string;

    constructor(usernName: string, email: string, password: string, passwordAgain: string) {
        this.UserName = usernName;
        this.Email = email;
        this.Password = password;
        this.PasswordAgain = passwordAgain;
    }
}