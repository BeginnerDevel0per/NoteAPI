import express from 'express';
import NoteController from '../controllers/NoteController';
import asyncHandler from '../middlewares/AsyncHandler';
const router = express.Router();
const noteController = new NoteController();

router.route("/Image/:imageFolderName").get(asyncHandler(noteController.GetNoteImage.bind(noteController)));
export default router;