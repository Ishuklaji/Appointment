import appointmentModel from "../models/appoinmentsModel.js";

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
