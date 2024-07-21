import express from 'express';
import UserController from '../controllers/UserController';
import asyncHandler from '../middlewares/AsyncHandler';
const router = express.Router();
//route => user/
const userController = new UserController();



router.route("/UpdatePassword").put(asyncHandler(userController.UpdatePassword.bind(userController)));
router.route("/ProfileImage").put(asyncHandler(userController.ChangeProfileImage.bind(userController)));
router.route("/ProfileImage").delete(asyncHandler(userController.RemoveProfileImage.bind(userController)));
router.route("/").get(asyncHandler(userController.GetProfile.bind(userController)));
router.route("/").put(asyncHandler(userController.UpdateProfileInformation.bind(userController)));
export default router;