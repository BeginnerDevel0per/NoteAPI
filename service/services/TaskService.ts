import GenericService from './GenericService';
import ITaskService from '../../interfaces/services/ITaskService';
import Task from '../../entities/Task';
import IGenericRepository from '../../interfaces/repositories/IGenericRepository';
import TaskRepository from '../../repository/TaskRepository';
import ClientSideException from '../exceptions/ClientSideException';
import AddTaskDto from '../../DTOs/AddTaskDto';
import { mapper } from '../mappings/MapProfile';

export default class TaskService extends GenericService<Task> implements ITaskService {
    private readonly _TaskRepository: IGenericRepository<Task>;
    constructor() {
        const taskRepository = new TaskRepository();
        super(taskRepository);
        this._TaskRepository = taskRepository;
    }

    async GetAll(UserId: string): Promise<Task[]> {
        return await this._TaskRepository.Where({ UserId: UserId });
    }

    async RemoveTask(UserId: string, TaskId: string): Promise<void> {
        const Task = await this._TaskRepository.FirstOrDefault({ UserId: UserId, id: TaskId })
        if (!Task)
            throw new ClientSideException("Task bulunamadı.", 404)
        await this._TaskRepository.Remove(Task.id);
    }

    async Add(TaskDto: AddTaskDto): Promise<void> {
        const task = await mapper.mapAsync(TaskDto, AddTaskDto, Task);
        await this._TaskRepository.AddAsync(task);
    }
}