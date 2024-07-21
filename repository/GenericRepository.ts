import IGenericRepository from '../interfaces/repositories/IGenericRepository';
import db, { Connection } from 'rethinkdb';
import { dbConnection } from '../config/Connection';
export default class GenericRepository<T> implements IGenericRepository<T> {

    private readonly tableName: string;
    private connection!: Connection;


    constructor(tableName: string) {
        this.tableName = tableName;
        this.ConnectionOpen();
    }


    private async ConnectionOpen() {
        try {
            this.connection = await db.connect(dbConnection);
        } catch (error) {
            console.error(error);
        }
    }
    async GetByIdAsync(Id: string): Promise<T> {
        return (await db.table(this.tableName).get(Id).run(await this.connection) as T);
    }
    async GetAllAsync(): Promise<T[]> {
        return ((await db.table(this.tableName).getAll().run(await this.connection)).toArray());
    }
    async AddAsync(entity: T): Promise<void> {
        await db.table(this.tableName).insert(entity).run(await this.connection);
    }
    async UpdateAsync(entity: T): Promise<void> {
        await db.table(this.tableName).update(entity as object).run(await this.connection)
    }
    async Remove(Id: string): Promise<void> {
        await db.table(this.tableName).get(Id).delete().run(await this.connection);
    }
    async Where(filter: any): Promise<T[]> {
        return (((await db.table(this.tableName).filter(filter).run(await this.connection)).toArray()));
    }
    async FirstOrDefault(filter: any): Promise<T | undefined> {
        const results = await this.Where(filter);
        if (results.length > 0)
            return (await results[0]);
        else
            return undefined;
    }

}