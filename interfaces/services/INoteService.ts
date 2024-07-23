import Note from "../../entities/Note";
import IGenericService from "./IGenericService";
import UpdateNoteDto from '../../DTOs/UpdateNoteDto';
import AddNoteDto from "../../DTOs/AddNoteDto";


export default interface IUserService extends IGenericService<Note> {
    AddNote(AddNoteDto: AddNoteDto): Promise<void>;
    GetAllNotes(UserId: string): Promise<Note[]>;
    GetNoteById(UserId: string, NoteId: string): Promise<Note>;
    UpdateNote(UpdateNoteDto: UpdateNoteDto): Promise<void>;
    RemoveNote(UserId: string, NoteId: string): Promise<void>;
}