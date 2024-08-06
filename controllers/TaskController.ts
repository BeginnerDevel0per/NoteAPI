import { Request, Response } from 'express';
import ITaskService from '../interfaces/services/ITaskService';
import TaskService from '../service/services/TaskService';
import CustomResponseDto from '../DTOs/CustomResponseDto';
import AddTaskDto from '../DTOs/AddTaskDto';
export default class TaskController {

    private readonly _TaskService: ITaskService;
    constructor() {
        this._TaskService = new TaskService();
    }
    async GetAll(req: Request, res: Response) {
        const { UserId } = req.body;
        res.status(200).json(new CustomResponseDto(await this._TaskService.GetAll(UserId)))
    }
    async Add(req: Request, res: Response) {
        const { UserId, Content } = req.body;
        res.status(200).json(new CustomResponseDto(await this._TaskService.Add(new AddTaskDto({
            UserId: UserId,
            Content: Content
        }))))
    }
    async Remove(req: Request, res: Response) {
        res.status(200).json(new CustomResponseDto(await this._TaskService.RemoveTask(req.body.UserId, req.params.id)))
    }
}

