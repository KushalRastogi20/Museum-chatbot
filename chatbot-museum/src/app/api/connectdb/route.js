// src/app/api/connect-db/route.js
import { dbConnect } from '@/lib/db';

export async function GET(req) {
  try {
    await dbConnect();
    return new Response("MongoDB connected successfully!", { status: 200 });
  } catch (error) {
    console.error("Error during DB connection:", error);
    return new Response("Error connecting to MongoDB", { status: 500 });
  }
}
