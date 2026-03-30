import React, { useState } from 'react';
import { Save } from 'lucide-react';

const FacultyAcademics = () => {
  const [subject, setSubject] = useState('Computer Science 101');
  const [semester, setSemester] = useState('Fall 2026');
  
  const [records, setRecords] = useState([
    { id: '1', name: 'James Wilson', roll: 'CS101', marksObtained: 85, totalMarks: 100, grade: 'A' },
    { id: '2', name: 'Emma Davis', roll: 'CS102', marksObtained: 92, totalMarks: 100, grade: 'A+' },
    { id: '3', name: 'Michael Chen', roll: 'CS103', marksObtained: 74, totalMarks: 100, grade: 'B' },
  ]);

  const handleChange = (index, field, value) => {
    const newRecords = [...records];
    newRecords[index][field] = value;
    if (field === 'marksObtained' && newRecords[index].totalMarks) {
       const percent = (value / newRecords[index].totalMarks) * 100;
       if(percent >= 90) newRecords[index].grade = 'A+';
       else if(percent >= 80) newRecords[index].grade = 'A';
       else if(percent >= 70) newRecords[index].grade = 'B';
       else if(percent >= 60) newRecords[index].grade = 'C';
       else newRecords[index].grade = 'F';
    }
    setRecords(newRecords);
  };

  const handleSave = () => {
    alert('Dynamic grading grid persisted successfully!');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between xl:mb-6 mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manage Academics</h1>
          <p className="text-slate-500 text-sm mt-1">Input quantitative metrics mapping dynamically calculated evaluations.</p>
        </div>
        <button onClick={handleSave} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer">
          <Save size={18} /> Save Array States
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-wrap gap-6 items-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">Semester Filter</label>
          <select value={semester} onChange={(e)=>setSemester(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-[200px] text-slate-700 font-medium">
            <option>Fall 2026</option>
            <option>Spring 2026</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">Subject Designation</label>
          <select value={subject} onChange={(e)=>setSubject(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-700 font-medium">
            <option>Computer Science 101</option>
            <option>Data Structures & Models</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
            <tr>
              <th className="px-6 py-4">Register ID</th>
              <th className="px-6 py-4">Participant Label</th>
              <th className="px-6 py-4 text-center">Numerical Tally</th>
              <th className="px-6 py-4 text-center">Score Base</th>
              <th className="px-6 py-4 text-center">Final Banding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.map((student, idx) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-700">{student.roll}</td>
                <td className="px-6 py-4 text-slate-600 font-medium">{student.name}</td>
                <td className="px-6 py-4 text-center">
                  <input type="number" className="w-20 text-center border border-slate-300 rounded-lg py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 font-bold" value={student.marksObtained} onChange={(e) => handleChange(idx, 'marksObtained', Number(e.target.value))} />
                </td>
                <td className="px-6 py-4 text-center">
                  <input type="number" className="w-20 text-center border border-slate-300 rounded-lg py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-500 font-medium bg-slate-50" value={student.totalMarks} onChange={(e) => handleChange(idx, 'totalMarks', Number(e.target.value))} />
                </td>
                <td className="px-6 py-4 text-center font-bold text-indigo-600 bg-indigo-50/30">
                  {student.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyAcademics;
