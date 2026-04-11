import express from "express";
import { isAdmin, userAuth } from "../middlewares/AuthMiddleware.js";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorDetails,
  updateDoctor,
} from "../controllers/doctorController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// ADD DOCTOR || POST
router.post("/add", userAuth, isAdmin, upload.single("image"), addDoctor);

// GET ALL DOCTORS || GET
router.get("/get-all", getAllDoctors);

// GET SINGLE DOCTOR || GET
router.get("/get-details/:id", getDoctorDetails);

// UPDATE DOCTOR DETAILS || PATCH
router.patch(
  "/update/:id",
  userAuth,
  isAdmin,
  upload.single("image"),
  updateDoctor,
);

// DELETE DOCTOR || DELETE
router.delete("/delete/:id", userAuth, isAdmin, deleteDoctor);

export default router;
