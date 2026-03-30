const Student = require('../models/Student');

const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('userId', 'email role');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('userId', 'email role');
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (student) {
      if (req.user.role === 'Student' && student.userId.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized to update this profile' });
      }

      student.fullName = req.body.fullName || student.fullName;
      student.contactNumber = req.body.contactNumber || student.contactNumber;
      student.profilePicUrl = req.body.profilePicUrl || student.profilePicUrl;
      
      if (req.user.role === 'Admin') {
        student.rollNumber = req.body.rollNumber || student.rollNumber;
        student.course = req.body.course || student.course;
      }

      const updatedStudent = await student.save();
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  updateStudent
};
