import { AutoMap } from '@automapper/classes';
export default class BaseEntity {
    @AutoMap()
    id!: string;
    @AutoMap()
    createDate!: string;
    @AutoMap()
    updateDate!: string;


    constructor(init?: Partial<BaseEntity>) {
        Object.assign(this, init);
    }
}