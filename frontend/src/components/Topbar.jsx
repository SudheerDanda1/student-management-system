import React, { useContext } from 'react';
import { Bell, Search } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Topbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg w-96 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-400 transition-all">
        <Search size={18} className="text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search students, courses..." 
          className="bg-transparent border-none outline-none w-full text-sm placeholder-slate-400 text-slate-700"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{user?.email}</p>
            <p className="text-xs text-indigo-600 font-medium">{user?.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold border-2 border-white ring-2 ring-indigo-50 shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
             {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
