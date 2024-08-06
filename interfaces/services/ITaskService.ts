import AddTaskDto from '../../DTOs/AddTaskDto';
import Task from '../../entities/Task';
import IGenericService from './IGenericService';


export default interface ITaskService extends IGenericService<Task> {

    GetAll(UserId: string): Promise<Task[]>;
    RemoveTask(UserId: string, TaskId: string): Promise<void>;
    Add(TaskDto: AddTaskDto): Promise<void>;
}