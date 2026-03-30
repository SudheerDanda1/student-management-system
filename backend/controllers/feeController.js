const Fee = require('../models/Fee');

const getStudentFees = async (req, res) => {
  try {
    const fees = await Fee.find({ studentId: req.params.studentId });
    res.json(fees);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const createFee = async (req, res) => {
  try {
    const { studentId, feeType, totalAmount, dueDate } = req.body;
    const fee = await Fee.create({ studentId, feeType, totalAmount, dueDate });
    res.status(201).json(fee);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const payFee = async (req, res) => {
  try {
    const { amount, receiptNumber } = req.body;
    const fee = await Fee.findById(req.params.id);

    if (fee) {
       fee.paidAmount += Number(amount);
       fee.payments.push({ amount, receiptNumber, date: new Date() });
       
       const updatedFee = await fee.save();
       res.json(updatedFee);
    } else {
      res.status(404).json({ message: 'Fee record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getStudentFees, createFee, payFee };
