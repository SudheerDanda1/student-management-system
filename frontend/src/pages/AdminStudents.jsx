import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';

const AdminStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('All');
  
  const allStudents = [
    { id: '1', name: 'James Wilson', roll: 'CS101', course: 'Computer Science', joined: '2026' },
    { id: '2', name: 'Emma Davis', roll: 'CS102', course: 'Computer Science', joined: '2026' },
    { id: '3', name: 'Michael Chen', roll: 'DS101', course: 'Data Structures', joined: '2026' },
  ];

  const filtered = allStudents.filter(s => 
    (s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.roll.toLowerCase().includes(searchTerm.toLowerCase())) && 
    (filterCourse === 'All' || s.course === filterCourse)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between xl:mb-6 mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">System Directory</h1>
          <p className="text-slate-500 text-sm mt-1">Manage global enrollments, edit specific profiles, and filter system records rapidly.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer hover:shadow-md">
          <Plus size={18} /> Register Student
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-wrap gap-4 items-end justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
        <div className="flex gap-4 flex-wrap w-full md:w-auto">
          <div className="flex-1 md:w-80">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input type="text" placeholder="Search by exact name or roll boundary..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-medium text-slate-700" />
            </div>
          </div>
          <div>
            <div className="relative group">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" size={18} />
              <select value={filterCourse} onChange={(e)=>setFilterCourse(e.target.value)} className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all text-sm font-medium text-slate-700 cursor-pointer min-w-[200px]">
                <option value="All">Global Filter - All</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Data Structures">Data Structures</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
            <tr>
              <th className="px-6 py-4">Register ID</th>
              <th className="px-6 py-4">Valid Name</th>
              <th className="px-6 py-4">Active Degree / Course</th>
              <th className="px-6 py-4">Entry</th>
              <th className="px-6 py-4 text-right">System Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-700">{student.roll}</td>
                <td className="px-6 py-4 text-slate-600 font-semibold">{student.name}</td>
                <td className="px-6 py-4 text-slate-500 font-medium">{student.course}</td>
                <td className="px-6 py-4 text-slate-400 font-semibold">{student.joined}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-lg transition-colors cursor-pointer"><Edit size={16} /></button>
                  <button className="p-2 text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-lg transition-colors cursor-pointer"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
               <tr>
                 <td colSpan="5" className="px-6 py-8 text-center text-slate-500 font-medium">No results found matching your active filter.</td>
               </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminStudents;
