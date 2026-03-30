const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  feeType: { type: String, required: true }, 
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Partial', 'Paid', 'Overdue'], default: 'Pending' },
  payments: [{
    amount: Number,
    date: { type: Date, default: Date.now },
    receiptNumber: String
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

feeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  if (this.paidAmount >= this.totalAmount) {
    this.status = 'Paid';
  } else if (this.paidAmount > 0) {
    this.status = 'Partial';
  } else if (new Date() > this.dueDate) {
    this.status = 'Overdue';
  } else {
    this.status = 'Pending';
  }
  next();
});

module.exports = mongoose.model('Fee', feeSchema);
