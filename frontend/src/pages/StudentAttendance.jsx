import React from 'react';
import { CalendarCheck, AlertCircle } from 'lucide-react';

const StudentAttendance = () => {
  const records = [
    { date: '2026-03-22', subject: 'Computer Science 101', status: 'Present' },
    { date: '2026-03-23', subject: 'Computer Science 101', status: 'Present' },
    { date: '2026-03-24', subject: 'Computer Science 101', status: 'Absent' },
    { date: '2026-03-25', subject: 'Computer Science 101', status: 'Present' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Attendance Record</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center group hover:border-emerald-200 transition-colors">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-emerald-100 transition-colors border border-emerald-100">
            <span className="text-xl font-bold">75%</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Overall Attendance</h3>
            <p className="text-sm text-slate-500 font-medium">You are maintaining required minimums.</p>
          </div>
        </div>
        <div className="bg-rose-50 p-6 rounded-xl border border-rose-100 flex items-start">
          <AlertCircle className="text-rose-500 mr-3 shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="text-sm font-bold text-rose-800 mb-1">Important Notice</h3>
            <p className="text-xs text-rose-600 font-medium leading-relaxed">Students dropping below 70% attendance will not be permitted to sit for final systemic examinations without board clearance.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h2 className="font-bold text-slate-700">Recent Tracking Logs</h2>
          <CalendarCheck className="text-slate-400" size={20} />
        </div>
        <table className="w-full text-left">
          <thead className="border-b border-slate-100 text-xs uppercase text-slate-500 font-bold bg-white">
            <tr>
              <th className="px-6 py-4">Recorded Date</th>
              <th className="px-6 py-4">Subject Name</th>
              <th className="px-6 py-4 text-right">Computed Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-700">{r.date}</td>
                <td className="px-6 py-4 text-slate-600 font-medium">{r.subject}</td>
                <td className="px-6 py-4 text-right flex justify-end">
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold border flex items-center gap-1.5 w-fit ${
                    r.status === 'Present' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {r.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAttendance;
