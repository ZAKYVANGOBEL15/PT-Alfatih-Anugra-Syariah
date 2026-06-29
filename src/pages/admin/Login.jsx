import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Building2, AlertCircle } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('alfatih_logged_in', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Username atau password salah. Coba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 relative overflow-hidden">
      {/* Background shape overlays */}
      <div className="absolute top-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary-900/30 filter blur-[80px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[25rem] h-[25rem] rounded-full bg-slate-800/40 filter blur-[80px]" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Logo and Brand */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="p-3 bg-primary-600 text-white rounded-2xl shadow-xl shadow-primary-600/20 mb-4 inline-block">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
            PT ALFATIH ANUGRA SYARIAH
          </h1>
          <p className="text-xs text-slate-450 font-semibold uppercase tracking-widest mt-1.5">
            Portal Administrasi Database
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Masuk ke Panel Kontrol</h2>
          
          {error && (
            <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-xs font-bold text-red-700 mb-5">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-slate-400" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-400" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-primary-500/10 transition-colors mt-2"
            >
              Masuk
            </button>
          </form>

          {/* Quick Notice */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400 font-medium leading-relaxed block">
              Default demo: <span className="font-bold text-slate-500">admin</span> / <span className="font-bold text-slate-500">admin123</span>
            </span>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-xs text-slate-400 hover:text-white font-semibold underline transition-colors"
          >
            Kembali ke Landing Page
          </button>
        </div>

      </div>
    </div>
  );
}
