import express from 'express';
import LoginController from '../controllers/LoginController';
const router = express.Router();
const loginController = new LoginController();




router.route("/").get(loginController.Login.bind(loginController));

export default router;