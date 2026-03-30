const User = require('../models/User');
const Student = require('../models/Student');
const Fee = require('../models/Fee');
const Attendance = require('../models/Attendance');

const getDashboardSummary = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalFaculty = await User.countDocuments({ role: 'Faculty' });
    
    const fees = await Fee.find();
    const totalFees = fees.reduce((acc, fee) => acc + fee.totalAmount, 0);
    const collectedFees = fees.reduce((acc, fee) => acc + fee.paidAmount, 0);

    const today = new Date();
    today.setHours(0,0,0,0);
    const todaysAttendanceRecords = await Attendance.find({ date: today });
    const presentCount = todaysAttendanceRecords.filter(a => a.status === 'Present').length;
    
    res.json({
      totalStudents,
      totalFaculty,
      totalFees,
      collectedFees,
      todaysAttendance: { totalExpected: totalStudents, present: presentCount }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getDashboardSummary };
