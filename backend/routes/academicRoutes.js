const express = require('express');
const router = express.Router();
const { saveAcademicRecord, getStudentAcademicRecords } = require('../controllers/academicController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, authorize('Admin', 'Faculty'), saveAcademicRecord);

router.route('/student/:studentId')
  .get(protect, getStudentAcademicRecords);

module.exports = router;
