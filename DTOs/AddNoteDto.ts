import { AutoMap } from "@automapper/classes";

export default class AddNoteDto {
    @AutoMap()
    public UserId!: string;
    @AutoMap()
    public Content!: string;

    constructor(init?: Partial<AddNoteDto>) {
        Object.assign(this, init);
    }

}