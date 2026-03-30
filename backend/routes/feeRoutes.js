const express = require('express');
const router = express.Router();
const { getStudentFees, createFee, payFee } = require('../controllers/feeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, authorize('Admin'), createFee);

router.route('/student/:studentId')
  .get(protect, getStudentFees);

router.route('/:id/pay')
  .post(protect, payFee);

module.exports = router;
