import { UploadedFile } from "express-fileupload";

export default class UpdatePasswordDto {


     UserId!: string;
     ImageFile!: UploadedFile |UploadedFile[]| undefined ;


    constructor(init?: Partial<UpdatePasswordDto>) {
        Object.assign(this, init);
    }

}