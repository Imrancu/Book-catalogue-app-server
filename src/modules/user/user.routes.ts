import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user/", userController.userCreateController);
router.post("/login-user/", userController.userLoginController);
export const userRouter = router;
