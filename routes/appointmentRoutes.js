import express from "express";
import { isAdmin, userAuth } from "../middlewares/AuthMiddleware.js";
import {
  bookAppointment,
  getAllAppointments,
  getAppointmentDetails,
  getUserAppointmentDetails,
  getUserAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentsController.js";

const router = express.Router();

// CREATE APPOINTMENT || POST
router.post("/create", userAuth, isAdmin, bookAppointment);

// GET ALL APPOINTMENTS || GET
router.get("/get-all", userAuth, isAdmin, getAllAppointments);

// GET APPOINTMENT DETAILS || GET
router.get("/get-details/:id", userAuth, isAdmin, getAppointmentDetails);

// CHANGE APPOINTMENT STATUS || PATCH
router.patch("/update-status/:id", userAuth, isAdmin, updateAppointmentStatus);

// GET APPOINTMENTS BY USER ID || GET
router.get("/get-user-appointments/:userId", userAuth, getUserAppointments);

// GET USER APPOINTMENT DETAILS || GET
router.get(
  "/get-user-appointment-details/:id",
  userAuth,
  getUserAppointmentDetails,
);

export default router;
