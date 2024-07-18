import express from 'express';
import RegisterController from '../controllers/RegisterController';
const router = express.Router();
const registerController = new RegisterController();


router.route("/").post(registerController.Register.bind(registerController));

export default router;