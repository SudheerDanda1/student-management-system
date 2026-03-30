const AcademicRecord = require('../models/AcademicRecord');

const saveAcademicRecord = async (req, res) => {
  try {
    const { studentId, semester, subject, marksObtained, totalMarks, grade } = req.body;
    
    const record = await AcademicRecord.findOneAndUpdate(
      { studentId, semester, subject },
      { marksObtained, totalMarks, grade, recordedBy: req.user.id },
      { new: true, upsert: true }
    );
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getStudentAcademicRecords = async (req, res) => {
  try {
    const records = await AcademicRecord.find({ studentId: req.params.studentId }).sort({ semester: 1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { saveAcademicRecord, getStudentAcademicRecords };
