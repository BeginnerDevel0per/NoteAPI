import BaseEntity from './BaseEntity';

export default class Task extends BaseEntity {

    Content?: string;
    UserId?: string;


    constructor(init?: Partial<Task>) {
        super();
        Object.assign(this, init);
    }
}