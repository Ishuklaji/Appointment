import express from "express";
import { isAdmin, userAuth } from "../middlewares/AuthMiddleware.js";
import { addDoctor } from "../controllers/doctorController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// ADD DOCTOR || POST
router.post("/add", userAuth, isAdmin, upload.single("image"), addDoctor);

export default router;
