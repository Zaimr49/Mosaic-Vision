import { Request, Response } from 'express';
import Admin from '../models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Signup function
export const signupFunction = async (req: Request, res: Response) => {
    console.log("In signupFunction")
  const { email, password } = req.body;
//   check to see if email and password not null 
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }
    console.log("Email =", email," || password =", password)

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newAdmin = new Admin({ email, password: hashedPassword });

    await newAdmin.save();

    const token = jwt.sign({ id: newAdmin._id, email: newAdmin.email }, process.env.JWT_SECRET as string, { expiresIn: '30d' });

    res.status(201).json({ token, admin: { id: newAdmin._id, email: newAdmin.email } });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Login function
export const loginFunction = async (req: Request, res: Response) => {
    console.log("In loginFunction")
  const { email, password } = req.body;
//   check to see if email and password not null 
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }
    console.log("Email =", email," || password =", password)

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingAdmin.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: existingAdmin._id, email: existingAdmin.email }, process.env.JWT_SECRET as string, { expiresIn: '30d' });

    res.status(200).json({ token, admin: { id: existingAdmin._id, email: existingAdmin.email } });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
