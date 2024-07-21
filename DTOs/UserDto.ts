
import { AutoMap } from '@automapper/classes';
export default class UserDto {


    @AutoMap()
    public UserName!: string;
    @AutoMap()
    public Email!: string;

    @AutoMap()
    ProfileImage!: string;
    constructor(init?: Partial<UserDto>) {
        Object.assign(this, init);
    }
}