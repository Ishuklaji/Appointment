// const express = require("express");
import express from "express";
import testRoutes from "./routes/testRoutes.js";
import dotenv from "dotenv";
import "colors";
import morgan from "morgan";
import cors from "cors";

// config env variable
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.get("/", (req, res) => {
  res.send(`<h1>Node server running </h1>`);
});

// port
const PORT = process.env.PORT || 5000;

// run server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .bgBlue.white,
  );
});
