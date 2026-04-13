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
      message: "Error in adding doctor API",
      error,
    });
  }
};

// Get All doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "All doctors fetched successfully",
      totalCount: doctors.length,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching all doctors API",
      error,
    });
  }
};

// Get single doctor details
export const getDoctorDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide doctor ID",
      });
    }

    const doctor = await doctorModel.findById(id);
    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Doctor details fetched successfully",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching doctor details API",
      error,
    });
  }
};

// Update doctor details
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide doctor ID",
      });
    }

    const data = req.body;

    const photoToBase64 = req.file
      ? req.file.buffer.toString("base64")
      : data.image;

    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      id,
      { ...req.body, image: photoToBase64 },
      { new: true },
    );

    if (!updatedDoctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Doctor details updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating doctor details API",
      error,
    });
  }
};

// Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide doctor's ID",
      });
    }

    const deletedDoctor = await doctorModel.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting doctor API",
      error,
    });
  }
};

// update availability of doctor
export const updateAvailableStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { availableStatus } = req.body;

    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please provide doctor ID",
      });
    }
    if (!availableStatus) {
      return res.status(400).send({
        success: false,
        message: "Please provide availability status",
      });
    }

    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: { available: availableStatus } },
      { returnDocument: "after" },
    );

    res.status(200).send({
      success: true,
      message: "Doctor availability updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating doctor availability API",
      error,
    });
  }
};
