import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FileText, CalendarCheck, CreditCard } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="mb-8 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-8 text-white shadow-lg overflow-hidden relative">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Hello, Student</h1>
          <p className="text-indigo-100 mb-6 max-w-lg leading-relaxed">Welcome to your dedicated student portal. Seamlessly track your daily attendance, monitor your academic progression, and oversee fee payments all in a localized view.</p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:bg-slate-50 transition-colors cursor-pointer text-sm">Review Full Profile</button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <svg width="350" height="350" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 5.18L12 11.54 5.18 8.18 12 5l6.82 3.18z"/></svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:-translate-y-1">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-semibold text-slate-700 uppercase tracking-wider text-xs">Attendance Overview</h3>
             <CalendarCheck className="text-emerald-500 bg-emerald-50 rounded-lg p-1.5" size={28} />
           </div>
           <p className="text-3xl font-bold text-slate-800 mb-1">85%</p>
           <p className="text-sm text-emerald-600 font-medium">Maintained on track</p>
         </div>
         
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:-translate-y-1">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-semibold text-slate-700 uppercase tracking-wider text-xs">Latest GPA Estimate</h3>
             <FileText className="text-indigo-500 bg-indigo-50 rounded-lg p-1.5" size={28} />
           </div>
           <p className="text-3xl font-bold text-slate-800 mb-1">A-</p>
           <p className="text-sm text-slate-500 font-medium">Subject to final review</p>
         </div>

         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:-translate-y-1">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-semibold text-slate-700 uppercase tracking-wider text-xs">Current Fee Status</h3>
             <CreditCard className="text-rose-500 bg-rose-50 rounded-lg p-1.5" size={28} />
           </div>
           <p className="text-3xl font-bold text-slate-800 mb-1">Pending</p>
           <p className="text-sm text-rose-500 font-medium">Due in approx 5 days</p>
         </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
