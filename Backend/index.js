import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(json());

connectDB(); // connect to MongoDB

app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
