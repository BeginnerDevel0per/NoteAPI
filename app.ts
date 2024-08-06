import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { ErrorHandler } from './middlewares/ErrorHandler';
import NoteRoute from './routes/NoteRoute';
import UserRoute from './routes/UserRoute';
import NoteImageRoute from './routes/NoteImageRoute';
import RegisterRoute from './routes/RegisterRoute';
import LoginRoute from './routes/LoginRoute';
import Authentication from './middlewares/Auth';
import { Address } from './config/Address';
const app = express();

app.use(cors({
     origin: "*"
}));

app.use(bodyParser.json());
app.use(fileUpload());

app.use("/Login", LoginRoute);
app.use("/Note", NoteImageRoute);
app.use("/Note", Authentication, NoteRoute);
app.use("/User", Authentication, UserRoute);
app.use("/Register", RegisterRoute);

app.use(ErrorHandler);//custom hata yonetimi


app.listen(Address.port, () => { console.log("5000 çalışıyor") });