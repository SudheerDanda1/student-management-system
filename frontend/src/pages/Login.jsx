import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      navigate(user.role === 'Admin' ? '/admin' : user.role === 'Faculty' ? '/faculty' : '/student');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-slate-100">
        <h2 className="text-3xl font-bold text-center text-dark mb-2">Welcome Back</h2>
        <p className="text-center text-slate-500 mb-8 text-sm">Please sign in to your dashboard</p>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm border border-red-100">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400"
              placeholder="admin@school.edu"
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400"
              placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} required 
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium cursor-pointer shadow-md shadow-indigo-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
