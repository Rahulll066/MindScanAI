import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // <-- import userRoutes

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(json());

connectDB(); // connect to MongoDB

// Mount routes
app.use("/api", authRoutes);       // your existing auth routes
app.use("/api/user", userRoutes);  // <-- add this line for profile route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
