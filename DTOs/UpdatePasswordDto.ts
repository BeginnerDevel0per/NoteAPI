export default class UpdatePasswordDto {

    public UserId!: string;

    public Password!: string;

    public NewPassword!: string;
    
    public NewPasswordAgain!: string;


    constructor(init?: Partial<UpdatePasswordDto>) {
        Object.assign(this, init);
    }

}