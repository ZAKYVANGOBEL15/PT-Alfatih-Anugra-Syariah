import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, LayoutDashboard, ShoppingBag, Briefcase, 
  HelpCircle, MessageSquare, PhoneCall, LogOut, ShieldCheck, 
  ChevronRight, Users, CheckCircle
} from 'lucide-react';
import AdminProducts from './AdminProducts';
import AdminProjects from './AdminProjects';
import AdminFAQs from './AdminFAQs';
import AdminTestimonials from './AdminTestimonials';
import AdminContact from './AdminContact';
import { getProducts, getProjects, getFaqs, getTestimonials } from '../../utils/initialData';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [stats, setStats] = useState({
    products: 0,
    projects: 0,
    faqs: 0,
    testimonials: 0
  });

  // Verify authentication
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('alfatih_logged_in');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
    
    // Load stats
    setStats({
      products: getProducts().length,
      projects: getProjects().length,
      faqs: getFaqs().length,
      testimonials: getTestimonials().length
    });
  }, [navigate, activeTab]);

  const handleLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin keluar dari panel admin?')) {
      sessionStorage.removeItem('alfatih_logged_in');
      navigate('/admin/login');
    }
  };

  const menuItems = [
    { id: 'summary', name: 'Ringkasan', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'products', name: 'Kelola Produk', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'projects', name: 'Kelola Proyek', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'faqs', name: 'Kelola FAQ', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'testimonials', name: 'Kelola Testimoni', icon: <Users className="w-5 h-5" /> },
    { id: 'contact', name: 'Kontak Kantor', icon: <PhoneCall className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-800">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Logo Brand */}
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <div className="p-2 bg-primary-600 rounded-lg">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight block">ALFATIH PORTAL</span>
              <span className="text-[9px] text-slate-450 uppercase tracking-wider font-semibold block">Admin Dashboard</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="p-4 space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === item.id 
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10' 
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            ))}
          </nav>
        </div>

        {/* User profile / Logout bottom */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-800/40 rounded-xl border border-slate-800/60">
            <div className="w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
              AD
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">Administrator</h5>
              <p className="text-[9px] text-emerald-500 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                Online
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Keluar Panel</span>
          </button>
        </div>
      </aside>

      {/* Main Administrative Panel Content */}
      <main className="flex-grow p-6 sm:p-8 lg:p-10 max-h-screen overflow-y-auto">
        {/* SUMMARY SECTION */}
        {activeTab === 'summary' && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-5">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Selamat Datang di Portal Admin</h2>
              <p className="text-sm text-slate-500 font-semibold mt-1">
                Gunakan panel ini untuk mengedit data secara dinamis. Perubahan disimpan langsung ke penyimpanan lokal (localStorage) browser Anda.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-slate-400 text-xs uppercase font-extrabold tracking-wider mb-1">Total Produk</span>
                  <span className="block text-3xl font-extrabold text-slate-900">{stats.products}</span>
                  <button onClick={() => setActiveTab('products')} className="text-xs text-primary-600 hover:text-primary-700 font-semibold underline mt-2 block">
                    Detail Produk
                  </button>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                  <ShoppingBag className="w-6 h-6" />
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-slate-400 text-xs uppercase font-extrabold tracking-wider mb-1">Total Proyek</span>
                  <span className="block text-3xl font-extrabold text-slate-900">{stats.projects}</span>
                  <button onClick={() => setActiveTab('projects')} className="text-xs text-primary-600 hover:text-primary-700 font-semibold underline mt-2 block">
                    Detail Proyek
                  </button>
                </div>
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-slate-400 text-xs uppercase font-extrabold tracking-wider mb-1">Pertanyaan FAQ</span>
                  <span className="block text-3xl font-extrabold text-slate-900">{stats.faqs}</span>
                  <button onClick={() => setActiveTab('faqs')} className="text-xs text-primary-600 hover:text-primary-700 font-semibold underline mt-2 block">
                    Kelola FAQ
                  </button>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <HelpCircle className="w-6 h-6" />
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-slate-400 text-xs uppercase font-extrabold tracking-wider mb-1">Testimoni Klien</span>
                  <span className="block text-3xl font-extrabold text-slate-900">{stats.testimonials}</span>
                  <button onClick={() => setActiveTab('testimonials')} className="text-xs text-primary-600 hover:text-primary-700 font-semibold underline mt-2 block">
                    Kelola Testimoni
                  </button>
                </div>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <Users className="w-6 h-6" />
                </div>
              </div>

            </div>

            {/* Instruction Panel */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-60 h-60 rounded-full bg-primary-600/10 filter blur-3xl" />
              <div className="relative z-10 space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-primary-300 border border-white/5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Petunjuk Dashboard</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Bagaimana Cara Kerja Prototipe Ini?</h3>
                <p className="text-sm text-slate-350 leading-relaxed font-semibold">
                  Situs web ini menggunakan integrasi local database virtual. Ketika Anda menambah, mengedit, atau menghapus item (Produk/Proyek/FAQ/Testimoni) di panel ini, data pada Landing Page utama akan langsung diperbarui secara dinamis tanpa perlu reload manual!
                </p>
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => navigate('/')}
                    className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    Lihat Website Utama
                  </button>
                </div>
              </div>
            </div>

            {/* Status list */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-950">Status Integrasi Sistem</h4>
              <div className="space-y-3 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>Sistem Local Storage Seed initialized: OK</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>Dukungan WhatsApp Order Link generation: OK</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>Modul CRUD Dinamis offline state: OK</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* CRUD BLOCKS */}
        {activeTab === 'products' && <AdminProducts />}
        {activeTab === 'projects' && <AdminProjects />}
        {activeTab === 'faqs' && <AdminFAQs />}
        {activeTab === 'testimonials' && <AdminTestimonials />}
        {activeTab === 'contact' && <AdminContact />}
      </main>

    </div>
  );
}
