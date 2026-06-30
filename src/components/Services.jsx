import React, { useState } from 'react';
import { 
  Laptop, 
  ClipboardList, 
  Truck, 
  Settings, 
  ShieldAlert, 
  Cpu, 
  Briefcase, 
  Compass, 
  CheckCircle2, 
  Users 
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('it'); // 'it' or 'mice'

  const itServices = [
    {
      icon: <Laptop className="w-6 h-6 text-primary-600" />,
      title: 'Pengadaan IT Baru & Second',
      description: 'Menyediakan pilihan perangkat keras original seperti laptop, PC, CCTV, printer, scanner, dan server. Tersedia unit baru bergaransi resmi maupun barang second (bekas) berkualitas tinggi layak pakai.'
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-primary-600" />,
      title: 'Konsultasi RAB & Spesifikasi',
      description: 'Dapatkan asistensi gratis dari tim teknis kami untuk menyesuaikan spesifikasi perangkat IT yang dibutuhkan dengan alokasi anggaran belanja Anda.'
    },
    {
      icon: <Truck className="w-6 h-6 text-primary-600" />,
      title: 'Pengiriman Cepat & Aman',
      description: 'Kami bekerja sama dengan ekspedisi cargo terpercaya untuk mengirimkan perangkat elektronik dengan jaminan packing kayu dan asuransi penuh.'
    },
    {
      icon: <Settings className="w-6 h-6 text-primary-600" />,
      title: 'Instalasi & Konfigurasi',
      description: 'Layanan pemasangan langsung di tempat untuk paket CCTV, instalasi perkabelan jaringan UTP/FO, penataan server rack, dan setting awal komputer.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary-600" />,
      title: 'Dukungan Garansi Resmi',
      description: 'Kami memfasilitasi klaim kerusakan barang ke service center resmi produsen. Anda tidak perlu repot mengurus administrasi klaim.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary-600" />,
      title: 'Pemeliharaan Berkala',
      description: 'Menawarkan kontrak kerja pemeliharaan (maintenance contract) hardware dan software berkala untuk instansi perkantoran dan sekolah.'
    }
  ];

  const miceService = {
    title: 'Meeting, Incentive, Convention and Exhibition (MICE)',
    subtitle: 'Acara Pertemuan, Perjalanan Insentif, Konvensi & Pameran (MICE)',
    description: 'Tujuan kami adalah membantu institusi pemerintah, profesional bisnis, institusi pendidikan, dan organisasi lainnya untuk menjalankan dan membuat konsep atau ide sehingga menjadi kenyataan di semua bentuk kegiatan MICE.',
    icon: <Users className="w-8 h-8 text-primary-600" />,
    points: [
      'Kegiatan pertemuan indoor dan outdoor',
      'Program Employee Outing/Outbound',
      'Pemesanan Tiket Pesawat, Hotel Domestik dan Internasional',
      'Camp (Capacity and team building program), Gathering and Employee Education',
      'Perjalanan Formal (Perjalanan Dinas), Pendidikan (Study Tour) dan Acara Sosial',
      'Konvensi formal untuk perusahaan atau Lembaga pemerintah lainnya',
      'Menyediakan untuk acara pameran (promosi, budaya, pariwisata dan Pendidikan)'
    ]
  };

  const travelService = {
    title: 'Indonesia Vacation Trip Management & Tourism',
    subtitle: 'Manajemen Perjalanan Liburan dan Pariwisata Indonesia',
    description: 'PT Alfatih Anugrah Syariah bertujuan untuk membantu klien kami mengembangkan rencana perjalanan mereka sesuai dengan keinginan dan kemampuan finansial mereka. Dimulai dengan perencanaan, dan menjadi pelayan dalam setiap aktivitas perjalanan yang menyenangkan.',
    icon: <Compass className="w-8 h-8 text-primary-600" />,
    points: [
      'Menangani semua kegiatan perjalanan di wilayah Indonesia (Wisata Kota, Wisata Studi, Liburan dan Perjalanan Lainnya)',
      'Liburan Korporat, Lembaga, Sekolah, dan Keluarga',
      'Menyediakan tiket, hotel atau home stay',
      'Liburan petualangan ekstrem (arung jeram, berkemah, Rappeling/Climbing, touring, dan lainnya)'
    ]
  };

  return (
    <section id="layanan" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 opacity-5 bg-gradient-to-r from-primary-400 to-indigo-400 rounded-full filter blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Layanan Kami</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            {activeTab === 'it' ? 'Layanan Pengadaan & Solusi IT' : 'Manajemen Event & Perjalanan Wisata'}
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            {activeTab === 'it' 
              ? 'Kami mengawal seluruh proses mulai dari konsultasi kebutuhan barang, pemesanan, perakitan, pengiriman aman, hingga instalasi di lokasi Anda.'
              : 'Menawarkan solusi kreatif dan komprehensif untuk menyukseskan perhelatan formal serta perjalanan liburan menyenangkan yang direncanakan secara matang.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-200/60 backdrop-blur rounded-2xl border border-slate-350/50">
            <button
              onClick={() => setActiveTab('it')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'it' 
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/10' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-4 h-4" />
              Pengadaan & Solusi IT
            </button>
            <button
              onClick={() => setActiveTab('mice')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'mice' 
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/10' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              MICE & Travel Management
            </button>
          </div>
        </div>

        {/* Services Content */}
        {activeTab === 'it' ? (
          /* IT Services Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-primary-600">
                    {svc.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* MICE & Travel Management Cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MICE Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-105 transition-transform duration-500">
                <Briefcase className="w-40 h-40 text-slate-900" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                  {miceService.icon}
                </div>
                <span className="text-xs font-bold tracking-wider text-primary-600 uppercase block mb-1">Layanan MICE</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{miceService.title}</h3>
                <p className="text-xs text-slate-500 font-semibold mb-4 leading-relaxed">{miceService.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{miceService.description}</p>
                
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Cakupan Kegiatan</h4>
                  <ul className="space-y-3">
                    {miceService.points.map((pt, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 text-sm font-semibold leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-105 transition-transform duration-500">
                <Compass className="w-40 h-40 text-slate-900" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                  {travelService.icon}
                </div>
                <span className="text-xs font-bold tracking-wider text-primary-600 uppercase block mb-1">Manajemen Perjalanan</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{travelService.title}</h3>
                <p className="text-xs text-slate-500 font-semibold mb-4 leading-relaxed">{travelService.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{travelService.description}</p>
                
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Cakupan Kegiatan</h4>
                  <ul className="space-y-3">
                    {travelService.points.map((pt, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 text-sm font-semibold leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
