
import { AutoMap } from '@automapper/classes';
export default class UserDto {


    @AutoMap()
    UserName!: string;

    @AutoMap()
    Email!: string;

    @AutoMap()
    ProfileImage!: string;

    @AutoMap()
    updateDate!: string;
    constructor(init?: Partial<UserDto>) {
        Object.assign(this, init);
    }
}