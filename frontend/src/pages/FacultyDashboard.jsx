import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BookOpen, Users, CalendarCheck } from 'lucide-react';

const FacultyDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-2xl font-bold text-slate-800">Welcome, {user?.email}</h1>
        <p className="text-slate-500 mt-1">Manage your assigned classes and student evaluations efficiently.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:shadow-md cursor-pointer group">
           <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
             <CalendarCheck size={24} />
           </div>
           <h3 className="text-lg font-semibold text-slate-800">Mark Attendance</h3>
           <p className="text-slate-500 text-sm mt-2 leading-relaxed">Record today's attendance metrics for your assigned class rosters.</p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:shadow-md cursor-pointer group">
           <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
             <BookOpen size={24} />
           </div>
           <h3 className="text-lg font-semibold text-slate-800">Manage Grades</h3>
           <p className="text-slate-500 text-sm mt-2 leading-relaxed">Input academic marks and review detailed calculated grades securely.</p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:shadow-md cursor-pointer group">
           <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
             <Users size={24} />
           </div>
           <h3 className="text-lg font-semibold text-slate-800">Student Dictionary</h3>
           <p className="text-slate-500 text-sm mt-2 leading-relaxed">View comprehensive profiles and historic records for assigned students.</p>
         </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
