require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

// DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", authRoutes);
app.use("/api", itemRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Start
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});