import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";

const app = express();
app.use(cors());
app.use(json());

connectDB(); // connect to MongoDB

// Public routes
app.use("/api", authRoutes);

// Protected routes
app.use("/api", protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

