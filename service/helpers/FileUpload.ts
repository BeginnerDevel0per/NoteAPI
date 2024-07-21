
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import uuid,{v7} from 'uuid';


export const Upload = async (ImageFile: UploadedFile, FolderName: string) => {

    if (ImageFile) {
        ImageFile.name = v7() + path.extname(ImageFile.name);
        console.log(ImageFile.name);
        const uploadPath = path.join(__dirname, '..', "..", 'uploads', FolderName, ImageFile.name);
        await ImageFile.mv(uploadPath);
        return ImageFile.name;
    }

}