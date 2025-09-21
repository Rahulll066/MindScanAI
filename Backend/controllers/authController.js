import bcrypt from "bcrypt";
import { z } from "zod";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const signupController = async (req, res) => {
  const schema = z.object({
    email: z.string().min(3),
    password: z.string().min(3),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid data" });

  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await User.create({ email, password: hashedPassword, firstName, lastName });
    res.json({ message: "Signed up Successfully" });
  } catch (e) {
    res.status(400).json({ message: "Signup failed", error: e.message });
  }
};

export const signinController = async (req, res) => {
  const schema = z.object({ email: z.string(), password: z.string().min(3) });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid data" });

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(403).json({ message: "Incorrect credentials!" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(403).json({ message: "Incorrect credentials!" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_USER_PASSWORD, { expiresIn: "1h" });
  res.json({ token });
};
