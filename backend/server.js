const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// ✅ Health route (safe)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Smart Student Management System API running optimally.' });
});

// ✅ START SERVER ONLY AFTER DB CONNECTS
async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // ✅ LOAD ROUTES AFTER DB CONNECTION
    app.use('/api/auth', require('./routes/authRoutes'));
    app.use('/api/students', require('./routes/studentRoutes'));
    app.use('/api/attendance', require('./routes/attendanceRoutes'));
    app.use('/api/academic', require('./routes/academicRoutes'));
    app.use('/api/fees', require('./routes/feeRoutes'));
    app.use('/api/dashboard', require('./routes/dashboardRoutes'));

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

startServer();