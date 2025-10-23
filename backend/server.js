import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";

dotenv.config();

const app = express(); // ✅ Moved above route mounting

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/Urban-community-digital")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Correct route mounting order
app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Medication Tracker API is running ✅");
});

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
