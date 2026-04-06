import doctorModel from "../models/doctorModel.js";

// Add doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      about,
      degree,
      speciality,
      experience,
      fees,
      email,
      image,
      phone,
      address,
      dob,
      gender,
    } = req.body;

    // validation
    if (
      !name ||
      !about ||
      !degree ||
      !speciality ||
      !experience ||
      !fees ||
      !email ||
      !phone ||
      !address ||
      !dob ||
      !gender
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const photoToBase64 = req.file
      ? req.file.buffer.toString("base64")
      : undefined;

    const doctorData = {
      name,
      about,
      degree,
      speciality,
      experience,
      fees,
      email,
      image: photoToBase64,
      phone,
      address,
      dob,
      gender,
    };

    const doctor = new doctorModel(doctorData);

    await doctor.save();
    res.status(201).send({
      success: true,
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in adding doctor",
      error,
    });
  }
};
