const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Config
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

console.log("Mongo URI:", MONGODB_URI);

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/academic', require('./routes/academicRoutes'));
app.use('/api/fees', require('./routes/feeRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.get('/test', (req, res) => {
  res.json({ message: "API working" });
});
// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Smart Student Management System API running optimally.' });
});

// ✅ Start server AFTER DB connects
async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

startServer();