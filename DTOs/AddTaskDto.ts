export default class AddTaskDto {

    UserId!: string;
  
    Content!: string;

    constructor(init?: Partial<AddTaskDto>) {
        Object.assign(this, init);
    }

}