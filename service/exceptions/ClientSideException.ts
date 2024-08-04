import CustomResponseDto from '../../DTOs/CustomResponseDto';

export default class ClientSideException extends Error {
    public statusCode: number;
    public message: string;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}
