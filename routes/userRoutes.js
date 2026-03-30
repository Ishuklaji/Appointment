import express from "express";
import {
  updatePassword,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userController.js";
import { userAuth } from "../middlewares/AuthMiddleware.js";
import upload from "../middlewares/multer.js";

const router = express();

// REGISTER || POST

router.post("/register", userRegister);

// LOGIN || POST

router.post("/login", userLogin);

// UPDATE PROFILE || PATCH
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);

// UPDATE PASSWORD || PATCH
router.patch("/update-password/:id", userAuth, updatePassword);

export default router;
