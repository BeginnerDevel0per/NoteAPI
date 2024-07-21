import IGenericService from "../../interfaces/services/IGenericService";
import IGenericRepository from '../../interfaces/repositories/IGenericRepository';


export default class GenericService<T> implements IGenericService<T> {

    private readonly _IGenericRepository: IGenericRepository<T>;

    constructor(GenericRepository: IGenericRepository<T>) {
        this._IGenericRepository = GenericRepository;
    }
    async GetByIdAsync(Id: string): Promise<T> {
        return (await this._IGenericRepository.GetByIdAsync(Id));
    }
    async GetAllAsync(): Promise<T[]> {
        return (await this.GetAllAsync());
    }
    async AddAsync(entity: T): Promise<void> {
        await this._IGenericRepository.AddAsync(entity);
    }
    async UpdateAsync(entity: T): Promise<void> {
        await this._IGenericRepository.UpdateAsync(entity);
    }
    async Remove(Id: string): Promise<void> {
        await this._IGenericRepository.Remove(Id);
    }
    async Where(filter: any): Promise<T[]> {
        return (await this._IGenericRepository.Where(filter));
    }
    async FirstOrDefault(filter: any): Promise<T | undefined> {
        return (await this._IGenericRepository.FirstOrDefault(filter));
    }
}