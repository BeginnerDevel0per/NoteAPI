import { UploadedFile } from "express-fileupload";

export default class AddNoteImageDto {

    UserId!: string;

    File!: UploadedFile | UploadedFile[] | undefined;

    NoteId!: string;

    constructor(init?: Partial<AddNoteImageDto>) {
        Object.assign(this, init);
    }

}