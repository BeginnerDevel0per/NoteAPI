import GenericService from './GenericService';
import ITaskService from '../../interfaces/services/ITaskService';
import Task from '../../entities/Task';
import IGenericRepository from '../../interfaces/repositories/IGenericRepository';
import TaskRepository from '../../repository/TaskRepository';

export default class TaskService extends GenericService<Task> implements ITaskService {
    private readonly _TaskRepository: IGenericRepository<Task>;
    constructor() {
        const taskrepository = new TaskRepository();
        super(taskrepository);
        this._TaskRepository = taskrepository;
    }
    GetAll(UserId: string): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    RemoveTask(UserId: string, TaskId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    Add(): Promise<Task> {
        throw new Error('Method not implemented.');
    }
}