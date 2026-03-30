const Attendance = require('../models/Attendance');

const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status, subject } = req.body;
    
    const attendance = await Attendance.findOneAndUpdate(
      { studentId, date: new Date(date).setHours(0,0,0,0), subject },
      { status, recordedBy: req.user.id },
      { new: true, upsert: true }
    );
    res.status(201).json(attendance);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Attendance already marked for this subject and date' });
    }
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getStudentAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendanceRecords = await Attendance.find({ studentId }).sort({ date: -1 });
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { markAttendance, getStudentAttendance };
