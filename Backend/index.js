import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // <-- import userRoutes
import path from "path";

const app = express();
app.use(cors({ origin: "https://neurocareai.onrender.com", credentials: true }));
app.use(json());

connectDB(); // connect to MongoDB

// Serve uploaded files
app.use("/uploads", express.static(path.join(path.resolve(), "uploads"))); // <-- add this

// Mount routes
app.use("/api", authRoutes);       // auth routes
app.use("/api/user", userRoutes);  // profile routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
