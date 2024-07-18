import GenericRepository from "./GenericRepository";

export default class NoteRepository<Note> extends GenericRepository<Note> {
    constructor() {
        super("Note");
    }
}