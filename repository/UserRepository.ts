import GenericRepository from "./GenericRepository";
import User from '../entities/User';

export default class UserRepository extends GenericRepository<User> {
    constructor() {
        super("User");
    }
}