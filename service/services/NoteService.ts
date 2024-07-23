import GenericService from "./GenericService";
import Note from "../../entities/Note";
import IGenericRepository from "../../interfaces/repositories/IGenericRepository";
import GenericRepository from '../../repository/GenericRepository';
import INoteService from '../../interfaces/services/INoteService';
import UpdateNoteDto from "../../DTOs/UpdateNoteDto";
import ClientSideException from "../exceptions/ClientSideException";
import AddNoteDto from "../../DTOs/AddNoteDto";
import { mapper } from "../mappings/MapProfile";




export default class NoteService extends GenericService<Note> implements INoteService {


    private readonly _NoteRepository: IGenericRepository<Note>;
    constructor() {
        const NoteRepository = new GenericRepository<Note>("Note");
        super(NoteRepository);
        this._NoteRepository = NoteRepository;
    }

    async AddNote(addNoteDto: AddNoteDto): Promise<void> {
        const mapping = await mapper.mapAsync(addNoteDto, AddNoteDto, Note);
        await this._NoteRepository.AddAsync(mapping);
    }

    async GetAllNotes(UserId: string): Promise<Note[]> {
        const Notes = this._NoteRepository.Where({ UserId: UserId });
        return Notes;
    }

    async GetNoteById(UserId: string, NoteId: string): Promise<Note> {
        const note = await this._NoteRepository.FirstOrDefault({ UserId: UserId, id: NoteId });
        if (!note)
            throw new ClientSideException("Not bulunamadı.", 404)
        return (note);
    }
    async UpdateNote(updateNoteDto: UpdateNoteDto): Promise<void> {
        const note = await this._NoteRepository.FirstOrDefault({ UserId: updateNoteDto.UserId, id: updateNoteDto.NoteId });

        if (!note)
            throw new ClientSideException("Not bulunamadı.", 404);
        const mapping = await mapper.mapAsync(updateNoteDto, UpdateNoteDto, Note);
        this._NoteRepository.UpdateAsync(mapping);
    }

    async RemoveNote(UserId: string, NoteId: string): Promise<void> {
        const Note = await this._NoteRepository.FirstOrDefault({ UserId: UserId, id: NoteId });

        if (!Note)
            throw new ClientSideException("Not bulunamadı.", 404)
        await this._NoteRepository.Remove(NoteId);
    }


}