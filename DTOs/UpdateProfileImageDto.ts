import { UploadedFile } from "express-fileupload";

export default class UpdatePasswordDto {


    public UserId!: string;
    public ImageFile!: UploadedFile |UploadedFile[]| undefined ;


    constructor(init?: Partial<UpdatePasswordDto>) {
        Object.assign(this, init);
    }

}