export default class UpdatePasswordDto {

     UserId!: string;

     Password!: string;

     NewPassword!: string;
    
     NewPasswordAgain!: string;


    constructor(init?: Partial<UpdatePasswordDto>) {
        Object.assign(this, init);
    }

}