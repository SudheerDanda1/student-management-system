const express = require('express');
const router = express.Router();
const { markAttendance, getStudentAttendance } = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, authorize('Admin', 'Faculty'), markAttendance);

router.route('/student/:studentId')
  .get(protect, getStudentAttendance);

module.exports = router;
