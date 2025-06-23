import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/Todo`);

  console.log("mongoose connected successfully");

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
};

export default connectDb;