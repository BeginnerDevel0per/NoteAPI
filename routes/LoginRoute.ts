import express from 'express';
import LoginController from '../controllers/LoginController';
import asyncHandler from '../middlewares/AsyncHandler';
const router = express.Router();
const loginController = new LoginController();




router.route("/").get(asyncHandler(loginController.Login.bind(loginController)));

export default router;