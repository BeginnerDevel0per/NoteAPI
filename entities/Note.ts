import { AutoMap } from '@automapper/classes';
import BaseEntity from './BaseEntity';
export default class Note extends BaseEntity {
    @AutoMap()
    Title!: string;
    @AutoMap()
    Content?: String;
    @AutoMap()
    UserId?: string;

    constructor(init?: Partial<BaseEntity>) {
        super();
        Object.assign(this, init);
    }
}