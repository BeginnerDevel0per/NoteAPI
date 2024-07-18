import express from 'express';
import NoteController from '../controllers/NoteController';
const router = express.Router();
const noteController = new NoteController();






export default router;