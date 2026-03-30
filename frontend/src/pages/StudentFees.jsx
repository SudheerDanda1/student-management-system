import React from 'react';
import { CreditCard, DollarSign, Download, CheckCircle, Clock } from 'lucide-react';

const StudentFees = () => {
  const fees = [
    { id: 1, type: 'Tuition Assessment - Fall 2026', total: 5000, paid: 5000, due: '2026-09-01', status: 'Cleared' },
    { id: 2, type: 'Laboratory Fees', total: 200, paid: 100, due: '2026-10-15', status: 'Partial' },
    { id: 3, type: 'Hostel Accommodation', total: 1500, paid: 0, due: '2026-11-01', status: 'Pending' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Financial Ledger Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 text-slate-50 opacity-50 transform translate-x-1/4 translate-y-1/4">
             <DollarSign size={120} />
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 relative z-10">Total Outstanding Assessed</p>
          <div className="flex items-center text-rose-600 relative z-10">
            <DollarSign size={28} className="mr-0.5" />
            <span className="text-4xl font-bold tracking-tight">1,600</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h2 className="font-bold text-slate-700">Billed Invoice History</h2>
        </div>
        <table className="w-full text-left">
          <thead className="border-b border-slate-100 text-xs uppercase text-slate-500 font-bold bg-white">
            <tr>
              <th className="px-6 py-4">Fee Structure Segment</th>
              <th className="px-6 py-4">Mandatory Date</th>
              <th className="px-6 py-4 text-center">Gross Billed</th>
              <th className="px-6 py-4 text-center">Clearing Transferred</th>
              <th className="px-6 py-4 text-center">Systemic State</th>
              <th className="px-6 py-4 text-right">Interactive Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {fees.map((fee) => (
              <tr key={fee.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-700">{fee.type}</td>
                <td className="px-6 py-4 text-slate-500 font-medium">{fee.due}</td>
                <td className="px-6 py-4 text-center font-bold text-slate-700">${fee.total}</td>
                <td className="px-6 py-4 text-center font-bold text-slate-700">${fee.paid}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-bold border items-center justify-center gap-1.5 min-w-[90px] ${
                    fee.status === 'Cleared' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    fee.status === 'Partial' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {fee.status === 'Cleared' && <CheckCircle size={14} />}
                    {fee.status === 'Pending' && <Clock size={14} />}
                    {fee.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right flex justify-end gap-3">
                  {fee.status !== 'Cleared' && (
                     <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm tracking-wide cursor-pointer">
                       <CreditCard size={14} /> Fulfill Balance
                     </button>
                  )}
                  {fee.paid > 0 && (
                     <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 shadow-sm cursor-pointer">
                       <Download size={14} /> Tx Receipt
                     </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentFees;
