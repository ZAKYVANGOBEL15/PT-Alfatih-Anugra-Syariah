import React from 'react';
import { Laptop, ClipboardList, Truck, Settings, ShieldAlert, Cpu } from 'lucide-react';

export default function Services() {
  const servicesList = [
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

  return (
    <section id="layanan" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 opacity-5 bg-gradient-to-r from-primary-400 to-indigo-400 rounded-full filter blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Layanan Kami</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Layanan Pengadaan Terintegrasi
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Kami mengawal seluruh proses mulai dari konsultasi kebutuhan barang, pemesanan, perakitan, pengiriman aman, hingga instalasi di lokasi Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col"
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
      </div>
    </section>
  );
}
