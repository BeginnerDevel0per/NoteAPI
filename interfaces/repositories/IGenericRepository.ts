

export default interface IGenericRepository<T> {
    GetByIdAsync(Id: string): Promise<T>;
    GetAllAsync(): Promise<T[]>;
    AddAsync(entity: T): Promise<void>;
    UpdateAsync(Id: string, entity: T): Promise<void>;
    Remove(Id: string): Promise<void>;
    Where(filter: any): Promise<T[]>;
    FirstOrDefault(filter: any): Promise<T | undefined>;
}