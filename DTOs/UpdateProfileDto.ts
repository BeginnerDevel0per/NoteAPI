
export default class UserDto {

     UserId!: string;

     UserName!: string;

     Email!: string;

    constructor(init?: Partial<UserDto>) {
        Object.assign(this, init);
    }
}