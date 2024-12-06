// lib/db.js
import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Unable to connect to MongoDB");
  }
}

export default dbConnect;
