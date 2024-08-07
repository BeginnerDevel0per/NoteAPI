import { AutoMap } from "@automapper/classes";

export default class UpdateNoteDto {

    @AutoMap()
    UserId!: string;
    @AutoMap()
    NoteId!: string;
    @AutoMap()
    Content?: string;
    @AutoMap()
    Title!: string;

    constructor(init?: Partial<UpdateNoteDto>) {
        Object.assign(this, init);
    }

}