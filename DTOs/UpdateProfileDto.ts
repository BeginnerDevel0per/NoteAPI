
export default class UserDto {

    public UserId!: string;

    public UserName!: string;

    public Email!: string;

    constructor(init?: Partial<UserDto>) {
        Object.assign(this, init);
    }
}