import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; // <--- add this if you're using MongoDB
import authRoutes from "./routes/authRoutes.js"; // <-- adjust path if needed

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // <--- needed to read JSON body

// connect MongoDB (optional, if not already in another file)
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/Urban-community-digital")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// routes
app.use("/api/auth", authRoutes); // <--- this mounts your signup/login/register/profile routes

// test route
app.get("/", (req, res) => {
  res.send("medication tracker API is running...");
});

// error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
