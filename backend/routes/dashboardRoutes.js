const express = require('express');
const router = express.Router();
const { getDashboardSummary } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/summary')
  .get(protect, authorize('Admin', 'Faculty'), getDashboardSummary);

module.exports = router;
