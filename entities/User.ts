import BaseEntity from './BaseEntity';

export default class User extends BaseEntity {
    UserName?: string;
    Email?: string;
    Password?: string;
    PasswordUpdateDate?: string;
}