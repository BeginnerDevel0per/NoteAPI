import { AutoMap } from "@automapper/classes";

export default class NoteDto {
    @AutoMap()
    NoteId!: string;
    @AutoMap()
    Content!: string;
    
    @AutoMap()
    createDate!: string;
    @AutoMap()
    Title!: string;

    constructor(init?: Partial<NoteDto>) {
        Object.assign(this, init);
    }

}