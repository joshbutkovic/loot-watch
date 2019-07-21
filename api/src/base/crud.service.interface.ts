export interface CrudServiceInterface<T> {
    getAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    // update(entity: T): Promise<T>;
    // create(entity: T): Promise<number>;
    delete(id: number): Promise<number>;
}