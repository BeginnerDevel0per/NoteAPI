import { Request, Response } from 'express';
import NoteService from '../service/services/NoteService';
import INoteService from '../interfaces/services/INoteService';
import CustomResponseDto from '../DTOs/CustomResponseDto';
import AddNoteDto from '../DTOs/AddNoteDto';
import UpdateNoteDto from '../DTOs/UpdateNoteDto';
export default class NoteController {


    private readonly _NoteService: INoteService;
    constructor() {
        this._NoteService = new NoteService();
    }

    async AddNote(req: Request, res: Response) {
        const { UserId, Content } = req.body;
        res.status(200).json(new CustomResponseDto(await this._NoteService.AddNote(new AddNoteDto({ UserId: UserId, Content: Content }))).Success());
    }


    async GetAllNotes(req: Request, res: Response) {
        const { UserId } = req.body;
        res.status(200).json(new CustomResponseDto(await this._NoteService.GetAllNotes(UserId)).Success());
    }

    async GetNoteById(req: Request, res: Response) {
        res.status(200).json(new CustomResponseDto(await this._NoteService.GetNoteById(req.body.UserId, req.params.id)).Success());
    }

    async RemoveNote(req: Request, res: Response) {
        const { UserId, NoteId } = req.body;
        res.status(200).json(new CustomResponseDto(await this._NoteService.RemoveNote(req.body.UserId, req.params.id)).Success());
    }

    async UpdateNote(req: Request, res: Response) {
        const { UserId, NoteId, Content } = req.body;
        res.status(200).json(new CustomResponseDto(await this._NoteService.UpdateNote(new UpdateNoteDto({
            UserId: UserId,
            NoteId: NoteId,
            Content: Content
        }))).Success());
    }
}