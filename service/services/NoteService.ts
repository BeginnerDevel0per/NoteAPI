import GenericService from "./GenericService";
import Note from "../../entities/Note";
import IGenericRepository from "../../interfaces/repositories/IGenericRepository";
import GenericRepository from '../../repository/GenericRepository';
import INoteService from '../../interfaces/services/INoteService';
import UpdateNoteDto from "../../DTOs/UpdateNoteDto";
import ClientSideException from "../exceptions/ClientSideException";
import AddNoteDto from "../../DTOs/AddNoteDto";
import { mapper } from "../mappings/MapProfile";
import AddNoteImageDto from "../../DTOs/AddNoteImageDto";
import { Upload } from "../helpers/FileUpload";
import path from "path";
import fs from 'fs';
import NoteDto from "../../DTOs/NoteDto";



export default class NoteService extends GenericService<Note> implements INoteService {


    private readonly _NoteRepository: IGenericRepository<Note>;
    constructor() {
        const NoteRepository = new GenericRepository<Note>("Note");
        super(NoteRepository);
        this._NoteRepository = NoteRepository;
    }

    async AddNote(addNoteDto: AddNoteDto): Promise<NoteDto> {
        if (!addNoteDto.Content) {
            addNoteDto.Content = JSON.stringify({ blocks: [] });
        }
        const mapping = await mapper.mapAsync(addNoteDto, AddNoteDto, Note);
        const note = await this._NoteRepository.AddAsync(mapping);
        const dtoMapping = await mapper.mapAsync(note, Note, NoteDto);
        return dtoMapping;
    }

    async GetAllNotes(UserId: string): Promise<NoteDto[]> {
        const Notes = (await this._NoteRepository.Where({ UserId: UserId }));
        Notes.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
        const mapping = mapper.mapArrayAsync(Notes, Note, NoteDto);

        return mapping;
    }

    async GetNoteById(UserId: string, NoteId: string): Promise<NoteDto> {
        const note = await this._NoteRepository.FirstOrDefault({ UserId: UserId, id: NoteId });
        if (!note)
            throw new ClientSideException("Not bulunamadı.", 404)

        const mapping = mapper.mapAsync(note, Note, NoteDto);
        return mapping;
    }
    async UpdateNote(updateNoteDto: UpdateNoteDto): Promise<void> {
        const note = await this._NoteRepository.FirstOrDefault({ UserId: updateNoteDto.UserId, id: updateNoteDto.NoteId });

        if (!note)
            throw new ClientSideException("Not bulunamadı.", 404);

        const mapping = await mapper.mapAsync(updateNoteDto, UpdateNoteDto, Note);
        await this._NoteRepository.UpdateAsync(mapping);
    }

    async RemoveNote(UserId: string, NoteId: string): Promise<void> {
        const Note = await this._NoteRepository.FirstOrDefault({ UserId: UserId, id: NoteId });

        if (!Note)
            throw new ClientSideException("Not bulunamadı.", 404)
        await this._NoteRepository.Remove(NoteId);
    }

    async AddImage(AddNoteImageDto: AddNoteImageDto): Promise<object> {
        const note = await this._NoteRepository.FirstOrDefault({ UserId: AddNoteImageDto.UserId, id: AddNoteImageDto.NoteId });
        if (!note)
            throw new ClientSideException("Not bulunamadı.", 404)
        if (!AddNoteImageDto.File)
            throw new ClientSideException("Resim dosyası göndermedin.", 400)
        if (Array.isArray(AddNoteImageDto.File))
            throw new ClientSideException("Birden fazla resim gönderilemez.", 400)
        const imageName = await Upload(AddNoteImageDto.File, "noteImages");

        return ({ success: 1, file: { url: `http://localhost:5000/Note/Image/${imageName}` } });
    }
    async GetImage(ImageName: string): Promise<any> {
        const imagePath = path?.join(__dirname, "..", "..", "uploads", "noteImages", String(ImageName));
        return await fs.readFileSync(imagePath);
    }
}