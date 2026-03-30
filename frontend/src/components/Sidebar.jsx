import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, FileText, CreditCard, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  const adminLinks = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Students', path: '/admin/students', icon: <Users size={20} /> },
    { name: 'Fees', path: '/admin/fees', icon: <CreditCard size={20} /> },
  ];

  const facultyLinks = [
    { name: 'Dashboard', path: '/faculty', icon: <LayoutDashboard size={20} /> },
    { name: 'Attendance', path: '/faculty/attendance', icon: <BookOpen size={20} /> },
    { name: 'Academics', path: '/faculty/academics', icon: <FileText size={20} /> },
  ];

  const studentLinks = [
    { name: 'Dashboard', path: '/student', icon: <LayoutDashboard size={20} /> },
    { name: 'Profile', path: '/student/profile', icon: <Users size={20} /> },
    { name: 'Attendance', path: '/student/attendance', icon: <BookOpen size={20} /> },
    { name: 'Grades', path: '/student/grades', icon: <FileText size={20} /> },
    { name: 'Fees', path: '/student/fees', icon: <CreditCard size={20} /> },
  ];

  const links = user?.role === 'Admin' ? adminLinks : user?.role === 'Faculty' ? facultyLinks : studentLinks;

  return (
    <div className="w-64 bg-slate-900 flex flex-col min-h-screen shadow-xl z-20 border-r border-slate-800">
      <div className="p-6 flex items-center border-b border-slate-800">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
          <BookOpen size={22} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide">SmartEdu<span className="text-indigo-400">.</span></h1>
      </div>
      
      <div className="flex-1 py-6 px-3 flex flex-col gap-1.5">
        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg transition-all duration-200 group font-medium text-sm ${
                isActive 
                  ? 'bg-indigo-600/15 text-indigo-400 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-indigo-500 before:rounded-r-md' 
                  : 'text-slate-400 hover:bg-slate-800 hovered:text-slate-200'
              }`
            }
          >
            <span className={`mr-3 transition-transform duration-200 group-hover:scale-110`}>{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800 mt-auto">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-rose-500/10 hover:text-rose-400 rounded-lg transition-colors group font-medium text-sm"
        >
          <LogOut size={18} className="mr-3 group-hover:-translate-x-1 transition-transform" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
