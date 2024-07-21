import express from 'express';
import RegisterController from '../controllers/RegisterController';
import asyncHandler from '../middlewares/AsyncHandler';
const router = express.Router();
const registerController = new RegisterController();


router.route("/").post(asyncHandler(registerController.Register.bind(registerController)));

export default router;