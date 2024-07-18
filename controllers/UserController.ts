import UserService from '../service/services/UserService';

export default class UserController {

    private _UserService: UserService;
    constructor() {
        this._UserService = new UserService();
    }
}