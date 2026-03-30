import React, { useState } from 'react';
import { Calendar, Save, CheckCircle, XCircle } from 'lucide-react';

const FacultyAttendance = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [subject, setSubject] = useState('Computer Science 101');
  
  const [students, setStudents] = useState([
    { id: '1', name: 'James Wilson', roll: 'CS101', status: 'Present' },
    { id: '2', name: 'Emma Davis', roll: 'CS102', status: 'Present' },
    { id: '3', name: 'Michael Chen', roll: 'CS103', status: 'Absent' },
    { id: '4', name: 'Sarah Miller', roll: 'CS104', status: 'Present' },
  ]);

  const toggleStatus = (index) => {
    const newStudents = [...students];
    newStudents[index].status = newStudents[index].status === 'Present' ? 'Absent' : 'Present';
    setStudents(newStudents);
  };

  const handleSave = () => {
    alert('Mock attendance registers submitted!');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between xl:mb-6 mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Mark Attendance</h1>
          <p className="text-slate-500 text-sm mt-1">Class registers synced dynamically to the backend array.</p>
        </div>
        <button onClick={handleSave} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer hover:shadow-md">
          <Save size={18} /> Check-In Array
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-wrap gap-6 items-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">Selected Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 font-medium cursor-pointer" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">Subject Course</label>
          <select value={subject} onChange={(e)=>setSubject(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-[250px] transition-all text-slate-700 font-medium cursor-pointer">
            <option>Computer Science 101</option>
            <option>Data Structures & Models</option>
            <option>Modern Architecture</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
            <tr>
              <th className="px-6 py-4">Register ID</th>
              <th className="px-6 py-4">Full Identifier</th>
              <th className="px-6 py-4">Current Status</th>
              <th className="px-6 py-4 text-right">Switch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student, idx) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-700">{student.roll}</td>
                <td className="px-6 py-4 text-slate-600 font-medium">{student.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold gap-1.5 border ${
                    student.status === 'Present' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {student.status === 'Present' ? <CheckCircle size={14}/> : <XCircle size={14} />}
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => toggleStatus(idx)} className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors font-medium text-sm border border-transparent hover:border-indigo-100 cursor-pointer">
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyAttendance;
