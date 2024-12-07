
import dbConnect from '@/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'customer' },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token, message: 'Signin successful' }), { status: 200 });
  } catch (error) {
    console.error('Error during signin:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}
