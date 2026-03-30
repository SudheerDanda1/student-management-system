const express = require('express');
const router = express.Router();
const { getStudents, getStudentById, updateStudent } = require('../controllers/studentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, authorize('Admin', 'Faculty'), getStudents);

router.route('/:id')
  .get(protect, getStudentById)
  .put(protect, authorize('Admin', 'Faculty', 'Student'), updateStudent);

module.exports = router;
