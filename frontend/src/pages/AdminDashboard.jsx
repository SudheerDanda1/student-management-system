import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Users, BookOpen, CreditCard, UserCheck } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
    </div>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}-100 text-${color}-600`}>
      <Icon size={24} />
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/dashboard/summary');
        setStats(data);
      } catch (error) {
        console.error('Failed to load dashboard stats', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Admin Dashboard Overview</h1>
      
      {stats ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Students" value={stats.totalStudents} icon={Users} color="indigo" />
          <StatCard title="Total Faculty" value={stats.totalFaculty} icon={BookOpen} color="emerald" />
          <StatCard title="Fees Collected" value={`$${stats.collectedFees.toLocaleString()}`} icon={CreditCard} color="blue" />
          <StatCard title="Today's Attendance" value={`${stats.todaysAttendance.present} / ${stats.todaysAttendance.totalExpected}`} icon={UserCheck} color="rose" />
        </div>
      ) : (
        <div className="text-slate-500 mb-8 font-medium animate-pulse">Loading core statistics...</div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="px-5 py-2.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors shadow-sm cursor-pointer">Register New Student</button>
          <button className="px-5 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors shadow-sm cursor-pointer">Process Fee Payment</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
