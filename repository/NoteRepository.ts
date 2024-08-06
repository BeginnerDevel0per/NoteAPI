import Note from "../entities/Note";
import GenericRepository from "./GenericRepository";

export default class NoteRepository extends GenericRepository<Note> {
    constructor() {
        super("Note");
    }
}