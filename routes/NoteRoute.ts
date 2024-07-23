import express from 'express';
import NoteController from '../controllers/NoteController';
import asyncHandler from '../middlewares/AsyncHandler';
const router = express.Router();
const noteController = new NoteController();



router.route("/").get(asyncHandler(noteController.GetAllNotes.bind(noteController)));
router.route("/").put(asyncHandler(noteController.UpdateNote.bind(noteController)));
router.route("/:id").get(asyncHandler(noteController.GetNoteById.bind(noteController)));
router.route("/").post(asyncHandler(noteController.AddNote.bind(noteController)));
router.route("/:id").delete(asyncHandler(noteController.RemoveNote.bind(noteController)));

export default router;