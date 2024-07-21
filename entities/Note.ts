import BaseEntity from './BaseEntity';
export default class Note extends BaseEntity {
    Content?: string;
    UserId?: string;

    constructor(init?: Partial<BaseEntity>) {
        super();
        Object.assign(this, init);
    }
}