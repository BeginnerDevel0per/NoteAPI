import { AutoMap } from '@automapper/classes';
import BaseEntity from './BaseEntity';

export default class User extends BaseEntity {

    @AutoMap()
    UserName!: string;
    @AutoMap()
    Email!: string;
    @AutoMap()
    Password!: string;
    @AutoMap()
    PasswordUpdateDate!: string;

    @AutoMap()
    ProfileImage!: string | null | undefined;

    constructor(init?: Partial<User>) {
        super();
        Object.assign(this, init);
    }

}


