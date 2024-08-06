
import Task from "../entities/Task";
import GenericRepository from "./GenericRepository";

export default class TaskRepository extends GenericRepository<Task> {
    constructor() {
        super("Task");
    }
}