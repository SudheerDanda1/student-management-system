import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User, Phone, Book } from 'lucide-react';

const StudentProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Simulated fetch mimicking robust data hydration
    setProfile({ fullName: 'Example Student', rollNumber: 'CS1022', course: 'Computer Science', contactNumber: '555-0199' });
    setFormData({ fullName: 'Example Student', contactNumber: '555-0199' });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...profile, ...formData });
    setIsEditing(false);
  };

  if (!profile) return <div>Loading Profile...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Profile</h1>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500 relative">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>
        <div className="px-8 pb-8 relative">
          <div className="w-24 h-24 border-4 border-white bg-slate-100 rounded-full flex items-center justify-center absolute -top-12 shadow-md">
            <User size={40} className="text-slate-400" />
          </div>
          
          <div className="mt-16 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">{profile.fullName}</h2>
              <p className="text-indigo-600 font-medium tracking-wide mt-0.5 whitespace-nowrap">{profile.rollNumber}</p>
            </div>
            <button 
              onClick={() => setIsEditing(!isEditing)} 
              className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </button>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg py-2.5 px-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg py-2.5 px-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700" value={formData.contactNumber} onChange={(e) => setFormData({...formData, contactNumber: e.target.value})} />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm">Save Changes</button>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                <div className="flex items-center text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4 border border-slate-200">
                    <Book className="text-indigo-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Enrolled Course</p>
                    <p className="font-semibold text-slate-800">{profile.course}</p>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4 border border-slate-200">
                    <Phone className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Contact Method</p>
                    <p className="font-semibold text-slate-800">{profile.contactNumber}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
