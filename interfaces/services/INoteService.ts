import Note from "../../entities/Note";
import IGenericService from "./IGenericService";
import UpdateNoteDto from '../../DTOs/UpdateNoteDto';
import AddNoteDto from "../../DTOs/AddNoteDto";
import AddNoteImageDto from '../../DTOs/AddNoteImageDto';
import NoteDto from "../../DTOs/NoteDto";

export default interface IUserService extends IGenericService<Note> {
    AddNote(AddNoteDto: AddNoteDto): Promise<NoteDto>;
    GetAllNotes(UserId: string): Promise<NoteDto[]>;
    GetNoteById(UserId: string, NoteId: string): Promise<NoteDto>;
    UpdateNote(UpdateNoteDto: UpdateNoteDto): Promise<void>;
    RemoveNote(UserId: string, NoteId: string): Promise<void>;
    AddImage(AddNoteImageDto: AddNoteImageDto): Promise<object>;
    GetImage(ImageName: string): Promise<any>;
}