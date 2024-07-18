export default class Register {
    public UserName: string;
    public Email: string;
    public Password: string;
    public PasswordAgain: string;

    constructor(usernName: string, email: string, password: string, passwordAgain: string) {
        this.UserName = usernName;
        this.Email = email;
        this.Password = password;
        this.PasswordAgain = passwordAgain;
    }
}