import { AutoMap } from "@automapper/classes";

export default class AddNoteDto {
    @AutoMap()
    UserId!: string;
    @AutoMap()
    Content!: string;

    @AutoMap()
    Title!: string;

    constructor(init?: Partial<AddNoteDto>) {
        Object.assign(this, init);
    }

}