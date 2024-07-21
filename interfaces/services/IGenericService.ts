export default interface IGenericService<T> {
    GetByIdAsync(Id: string): Promise<T>;
    GetAllAsync(): Promise<T[]>;
    AddAsync(entity: T): Promise<void>;
    UpdateAsync(entity: T): Promise<void>;
    Remove(Id: string): Promise<void>;
    Where(filter: any): Promise<T[]>;
    FirstOrDefault(filter: any): Promise<T | undefined>;
}