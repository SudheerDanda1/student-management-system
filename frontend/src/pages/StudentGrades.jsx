import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

const StudentGrades = () => {
  const academicRecords = [
    { subject: 'Computer Science 101', semester: 'Fall 2026', marks: 85, total: 100, grade: 'A' },
    { subject: 'Data Structures', semester: 'Fall 2026', marks: 92, total: 100, grade: 'A+' },
    { subject: 'Linear Algebra', semester: 'Fall 2026', marks: 78, total: 100, grade: 'B' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Academic Transcript</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg border border-indigo-500 flex items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-5 backdrop-blur-sm border border-white/20">
            <Award className="text-white" size={32} />
          </div>
          <div>
            <h3 className="text-indigo-100 font-medium tracking-wide uppercase text-sm mb-1">Cumulative Grade Average</h3>
            <p className="text-4xl font-bold drop-shadow-sm">3.8</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center group hover:border-indigo-200 transition-all">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-indigo-100 transition-colors border border-indigo-100">
            <TrendingUp size={32} />
          </div>
          <div>
            <h3 className="text-slate-500 font-medium tracking-wide uppercase text-sm mb-1">Aggregated Core Credits</h3>
            <p className="text-4xl font-bold text-slate-800">24</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="font-bold text-slate-700">Detailed Subject Outcomes Grid (Fall 2026)</h2>
        </div>
        <table className="w-full text-left">
          <thead className="border-b border-slate-100 text-xs uppercase text-slate-500 font-bold bg-white drop-shadow-sm">
            <tr>
              <th className="px-6 py-4">Educational Course</th>
              <th className="px-6 py-4">Active Term</th>
              <th className="px-6 py-4 text-center">Score Level</th>
              <th className="px-6 py-4 text-center">Theoretical Peak</th>
              <th className="px-6 py-4 text-right">Awarded Tier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {academicRecords.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-700">{r.subject}</td>
                <td className="px-6 py-4 text-slate-500 font-medium">{r.semester}</td>
                <td className="px-6 py-4 text-center font-bold text-slate-700">{r.marks}</td>
                <td className="px-6 py-4 text-center text-slate-400 font-medium">{r.total}</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg font-bold text-sm bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm leading-none">
                    {r.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentGrades;
