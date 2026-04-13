// const express = require("express");
import express from "express";
import testRoutes from "./routes/testRoutes.js";
import dotenv from "dotenv";
import "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import webMessageRoutes from "./routes/webMessageRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

// config env variable
dotenv.config();

// database
connectDB();

// REST  object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/webmessage", webMessageRoutes);
app.use("/api/v1/appointment", appointmentRoutes);

app.get("/", (req, res) => {
  res.send(`<h1>Node server running </h1>`);
});

// port
const PORT = process.env.PORT || 5000;

// run server command here
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .bgBlue.white,
  );
});
