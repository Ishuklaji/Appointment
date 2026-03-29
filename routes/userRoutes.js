import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";

const router = express();

// REGISTER || POST

router.post("/register", userRegister);

// LOGIN || POST

router.post("/login", userLogin);

export default router;
