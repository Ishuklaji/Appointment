import appointmentModel from "../models/appoinmentsModel.js";
import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";

// create appointment
export const bookAppointment = async (req, res) => {
  try {
    const { userId, doctorId, slotDate, slotTime, amount } = req.body;
    if (!userId || !doctorId || !slotDate || !slotTime || !amount) {
      return res.status(400).json({ message: "All fields are required !" });
    }
    const newAppointment = new appointmentModel({
      userId,
      doctorId,
      slotDate,
      slotTime,
      amount,
    });
    await newAppointment.save();
    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in booking appointment API",
      error,
    });
  }
};

// get all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find();
    res.status(200).json({
      message: "Appointments fetched successfully",
      totalAppointments: appointments.length,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching all appointments API",
      error,
    });
  }
};

// get appointment details
export const getAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(404)
        .send({ status: false, message: "Appointment ID is required" });
    }

    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res
        .status(404)
        .send({ status: false, message: "Appointment not found" });
    }
    // find user and doctor details
    const user = await userModel.findById(appointment?.userId);
    const doctor = await doctorModel.findById(appointment?.doctorId);

    res.status(200).json({
      status: true,
      message: "Appointment details fetched successfully",
      appointmentDetails: {
        clientName: user?.name,
        clientPhone: user?.phone,
        clientEmail: user?.email,
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,
        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentStatus: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching appointment details from API",
      error,
    });
  }
};

// change status of appointment
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { appointmentStatus } = req.body;
    if (!id) {
      return res
        .status(404)
        .send({ status: false, message: "Appointment ID is required" });
    }

    if (!appointmentStatus) {
      return res
        .status(400)
        .send({ status: false, message: "Appointment's status is required" });
    }

    const appointment = await appointmentModel.findByIdAndUpdate(
      id,
      { status: appointmentStatus },
      { new: true },
    );

    res.status(200).json({
      status: true,
      message: "Appointment status updated successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in changing appointment status from API",
      error,
    });
  }
};

// get user appointments
export const getUserAppointments = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res
        .status(404)
        .send({ status: false, message: "User ID is required" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    }

    const appointments = await appointmentModel.find({ userId: user?._id });
    res.status(200).json({
      status: true,
      message: "User appointments fetched successfully",
      totalAppointments: appointments.length,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching user appointments from API",
      error,
    });
  }
};

// get user appointment details
export const getUserAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(404)
        .send({ status: false, message: "Appointment ID is required" });
    }

    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res
        .status(404)
        .send({ status: false, message: "Appointment not found" });
    }
    // find user and doctor details
    const user = await userModel.findById(appointment?.userId);
    const doctor = await doctorModel.findById(appointment?.doctorId);

    res.status(200).json({
      status: true,
      message: "Appointment details fetched successfully",
      appointmentDetails: {
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,
        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentStatus: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching userappointment details from API",
      error,
    });
  }
};
