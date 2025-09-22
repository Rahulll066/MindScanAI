import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_USER_PASSWORD);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Ensure uploads folder exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Get profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "firstName lastName email age gender avatar notes reminders settings"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Update profile
router.put("/profile", authMiddleware, upload.single("avatar"), async (req, res) => {
  try {
    const { age, gender, notes, reminders } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.age = age ?? user.age;
    user.gender = gender ?? user.gender;
    user.notes = notes ? JSON.parse(notes) : user.notes ?? [];
    user.reminders = reminders ? JSON.parse(reminders) : user.reminders ?? [];
    if (req.file) user.avatar = req.file.path;

    await user.save();
    res.json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;


