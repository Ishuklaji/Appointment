import express from "express";
import {
  createMessage,
  getAllMessage,
} from "../controllers/webMessageController.js";

const router = express.Router();

// CREATE MESSAGE || POST
router.post("/create", createMessage);

// GET ALL MESSAGE || POST
router.get("/get-all", getAllMessage);

export default router;
