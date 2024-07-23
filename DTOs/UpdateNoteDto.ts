import { AutoMap } from "@automapper/classes";

export default class UpdateNoteDto {

    @AutoMap()
    public UserId!: string;
    @AutoMap()
    public NoteId!: string;
    @AutoMap()
    public Content!: string;

    constructor(init?: Partial<UpdateNoteDto>) {
        Object.assign(this, init);
    }

}