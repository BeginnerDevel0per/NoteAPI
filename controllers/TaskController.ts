import { Request, Response } from 'express';
import ITaskService from '../interfaces/services/ITaskService';
import TaskService from '../service/services/TaskService';
export default class TaskController {

    private readonly _TaskService: ITaskService;
    constructor() {
        this._TaskService = new TaskService();
    }
    async GetAll(req: Request, res: Response) {

    }
    async Add(req: Request, res: Response) {

    }
    async Remove(req: Request, res: Response) {

    }
}

