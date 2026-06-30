import React from 'react';
import { ShieldCheck, Target, HeartHandshake, Eye } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: 'Amanah & Terpercaya',
      description: 'Menjaga integritas dan kejujuran penuh dalam setiap proses pengadaan barang dan administrasi.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary-600" />,
      title: 'Profesional & Berintegritas',
      description: 'Menghadirkan layanan prima dengan ketepatan waktu pengiriman dan kualitas barang yang terjamin.'
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: 'Solusi Tepat Guna',
      description: 'Membantu memberikan konsultasi gratis agar klien mendapatkan spesifikasi perangkat sesuai anggaran.'
    }
  ];

  return (
    <section id="tentang-kami" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative top dot grid */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Profil Perusahaan</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Membangun Kemitraan Melalui Kepercayaan
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              PT Alfatih Anugrah Syariah
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Asallamu’allaikum Wr. Wb. Terlahir dari semangat untuk berkreasi dengan prinsip &ldquo;Do The Best Creativity&rdquo; kami adalah generasi milenial, kini hadir TENTANG KAMI dengan sebuah brand baru yang telah dirintis sejak awal 2019 silam.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              PT. ALFATIH ANUGRAH SYARIAH merupakan PT Perorangan yang didirikan oleh seorang Hotelier (alumni karyawan perhotelan). Salah satu brand kami yaitu bergerak dalam bidang Event Organizer, MICE dan Manajemen Perjalanan Liburan dan Pariwisata Indonesia. Serta telah mengekspansi bidang usahanya ke pengadaan barang untuk kebutuhan pemerintahan.
            </p>
            
            {/* Short stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-lg font-bold text-primary-600">Legal & Resmi</span>
                <span className="text-xs text-slate-500 font-medium">PT Perorangan berizin, NPWP, Kemenkumham lengkap</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-lg font-bold text-primary-600">Konsultasi Free</span>
                <span className="text-xs text-slate-500 font-medium">Bantu RAB & Spek Kebutuhan</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-3xl transform rotate-3 scale-102 opacity-10" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl">
              <img src="/image/Banner-Slide1.jpg" alt="PT Alfatih Anugrah Syariah Office" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary-400">Mitra Terpercaya</span>
                <p className="text-lg font-bold mt-1">Solusi Kreatif & Pengadaan Profesional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visi, Misi & Legalitas Sub-section */}
        <div className="border-t border-slate-100 pt-20 mt-20 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Visi, Misi & Legalitas</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
              Komitmen dan Fondasi Resmi Perusahaan
            </h3>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100 p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                <Eye className="w-32 h-32 text-slate-900" />
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Visi Kami</h4>
                <p className="text-slate-600 leading-relaxed font-semibold text-lg">
                  &ldquo;Tumbuh menjadi Perusahaan yang professional yang dapat selalu memberikan nilai tambah bagi berbagai pihak.&rdquo;
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div className="lg:col-span-7 bg-gradient-to-b from-slate-50 to-slate-100 p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                <Target className="w-32 h-32 text-slate-900" />
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Misi Kami</h4>
                <p className="text-sm text-slate-750 mb-6 leading-relaxed font-medium italic">
                  &ldquo;Dengan mengedepankan misi, kami selalu memberikan satu Langkah lebih maju dan kreatif serta inovatif sehingga kami tidak pernah berhenti mencapai perkembangan yang berkelanjutan.&rdquo;
                </p>
                <ul className="text-sm text-slate-600 space-y-3 list-disc pl-5 font-semibold leading-relaxed">
                  <li>Menjadi yang terbaik secara professional dalam bidang usaha industri kreatif dan pariwisata serta dalam bidang pengadaan barang di lingkungan pemerintahan.</li>
                  <li>Turut serta dalam pembangunan karakter sumber daya manusia yang positif di daerah dan nasional.</li>
                  <li>Berperan aktif untuk menjaga dan memajukan sumber daya perekonomian serta menjadi duta budaya dan pariwisata bagi daerah dan bangsa.</li>
                </ul>
              </div>
            </div>

            {/* Legalitas Card */}
            <div className="lg:col-span-12 bg-gradient-to-r from-primary-900 to-indigo-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group mt-4">
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-105 transition-transform duration-500">
                <ShieldCheck className="w-64 h-64 text-white" />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-3">
                  <div className="w-12 h-12 bg-white/10 text-primary-400 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight">Legalitas Resmi</h4>
                  <p className="text-slate-355 text-xs sm:text-sm font-medium leading-relaxed">
                    Kami berkomitmen pada tata kelola bisnis yang bersih, patuh hukum, dan transparan untuk seluruh mitra kerja kami.
                  </p>
                </div>
                
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">Status Badan Hukum</span>
                    <span className="text-sm font-bold text-white leading-snug">Perseroan Perorangan (PT)</span>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">NPWP</span>
                    <span className="text-sm font-bold text-white leading-snug">63.450.350.2-824.000</span>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-2">Sertifikat Kemenkumham</span>
                    <span className="text-sm font-bold text-white leading-snug break-words" title="AHU-000966.AH.01.31.Tahun 2023">AHU-000966.AH.01.31.Tahun 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Nilai-Nilai Utama Perusahaan</h3>
            <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
              Prinsip kerja yang kami terapkan untuk menjamin standar kualitas kerja yang terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-100 shadow-sm hover:shadow-md transition-all duration-200 text-center flex flex-col items-center">
                <div className="p-3 bg-primary-50 rounded-2xl mb-4">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
