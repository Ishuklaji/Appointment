import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessage,
} from "../controllers/webMessageController.js";
import { isAdmin, userAuth } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// CREATE MESSAGE || POST
router.post("/create", createMessage);

// GET ALL MESSAGE || POST
router.get("/get-all", getAllMessage);

// DELETE MESSAGE || DELETE
router.delete("/delete/:id", userAuth, isAdmin, deleteMessage);

export default router;
