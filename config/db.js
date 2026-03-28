import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB database connected".bgMagenta.white);
  });
  await mongoose.connect(`${process.env.MONGO_URI}`);
};

export default connectDB;
