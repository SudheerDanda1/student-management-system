import React from 'react';
import { DollarSign, FileText } from 'lucide-react';

const AdminFees = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Financial Ledger Management</h1>
      <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 border border-indigo-100 shadow-sm">
          <DollarSign size={40} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Campus Administration Module Active</h2>
        <p className="text-slate-500 max-w-md font-medium leading-relaxed">The financial ledger securely empowers administrators to issue bulk invoices, track outstanding deficits interactively, and process live systemic payments across students.</p>
        
        <div className="mt-8 flex gap-4">
           <button className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm transition-colors cursor-pointer flex items-center gap-2">
             <DollarSign size={18} /> Issue External Invoice
           </button>
           <button className="px-6 py-2.5 bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-100 shadow-sm transition-colors cursor-pointer flex items-center gap-2">
             <FileText size={18} /> Extract Fiscal Report
           </button>
        </div>
      </div>
    </div>
  );
};

export default AdminFees;
