import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Corporate profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/image/logo.png" alt="Logo PT Alfatih" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-bold text-xl tracking-tight block leading-tight">
                  PT ALFATIH
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block leading-none">
                  Anugrah Syariah
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
              Mitra penyedia barang elektronik, IT, CCTV, dan solusi jaringan bergaransi resmi. Kami berfokus memberikan pelayanan profesional dan terpercaya.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Navigasi Cepat</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400 font-semibold">
              <button onClick={() => handleNavClick('#home')} className="hover:text-primary-400 transition-colors text-left">Home</button>
              <button onClick={() => handleNavClick('#tentang-kami')} className="hover:text-primary-400 transition-colors text-left">Tentang Kami</button>
              <button onClick={() => handleNavClick('#layanan')} className="hover:text-primary-400 transition-colors text-left">Layanan</button>
              <button onClick={() => handleNavClick('#produk')} className="hover:text-primary-400 transition-colors text-left">Produk</button>
              <button onClick={() => handleNavClick('#galeri')} className="hover:text-primary-400 transition-colors text-left">Galeri Proyek</button>
              <button onClick={() => handleNavClick('#testimoni')} className="hover:text-primary-400 transition-colors text-left">Testimoni</button>
              <button onClick={() => handleNavClick('#faq')} className="hover:text-primary-400 transition-colors text-left">FAQ</button>
              <button onClick={() => handleNavClick('#kontak')} className="hover:text-primary-400 transition-colors text-left">Kontak</button>
            </div>
          </div>

          {/* Legal / Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Legalitas & Waktu</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              SIUP, NIB, NPWP, PKP Lengkap.<br />
              Pengadaan Resmi Instansi Pemerintah & Swasta.<br />
              <span className="text-slate-300 font-semibold">Senin - Sabtu: 08:00 - 17:00 WITA</span>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
          <p>
            &copy; {currentYear} PT Alfatih Anugrah Syariah. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Admin link removed temporarily */}
          </div>
        </div>
      </div>
    </footer>
  );
}
