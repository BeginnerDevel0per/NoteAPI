import express from 'express';

import asyncHandler from '../middlewares/AsyncHandler';
import TaskController from '../controllers/TaskController';
const router = express.Router();
//route => user/
const taskController = new TaskController();



router.route("/").get(asyncHandler(taskController.GetAll.bind(taskController)));
router.route("/:id").delete(asyncHandler(taskController.Remove.bind(taskController)));
router.route("/").post(asyncHandler(taskController.Add.bind(taskController)));
export default router;