import express from "express";
import { isAdmin, userAuth } from "../middlewares/AuthMiddleware.js";
import {
  bookAppointment,
  getAllAppointments,
} from "../controllers/appointmentsController.js";

const router = express.Router();

// CREATE APPOINTMENT || POST
router.post("/create", userAuth, isAdmin, bookAppointment);

// GET ALL APPOINTMENTS || GET
router.get("/all", userAuth, isAdmin, getAllAppointments);

export default router;
