import React from 'react';
import { Award, DollarSign, Clock, ShieldCheck, Users, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-primary-600" />,
      title: 'Produk Berkualitas',
      description: 'Seluruh produk elektronik yang kami sediakan dijamin original dan langsung diimpor/didistribusikan dari agen pemegang merek resmi.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary-600" />,
      title: 'Harga Kompetitif',
      description: 'Menyediakan skema penawaran harga terbaik untuk proyek bervolume besar, lengkap dengan transparansi anggaran pajak (PPN/PPH).'
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Pengiriman Tepat Waktu',
      description: 'Sistem logistik yang tertata rapi memastikan pesanan barang sampai ke lokasi Anda tepat waktu, lengkap dengan asuransi pengiriman.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: 'Jaminan Bergaransi',
      description: 'Garansi resmi distributor utama yang dapat diklaim dengan mudah melalui tim support kami tanpa membingungkan administrasi Anda.'
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: 'Tim Berpengalaman',
      description: 'Teknisi kami siap melakukan instalasi dan setup jaringan di lokasi Anda dengan standar prosedur penataan kabel dan sistem yang rapi.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary-600" />,
      title: 'Pelayanan Profesional',
      description: 'Mulai dari penerbitan Quotation resmi, Invoice, Kwitansi, e-Faktur Pajak, hingga dokumen penawaran teknis disiapkan lengkap & cepat.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 bg-gradient-to-l from-primary-400 to-indigo-400 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Kelebihan</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Sebagai perusahaan berbadan hukum resmi, kami berkomitmen memberikan standar pelayanan terbaik bagi kelancaran operasional bisnis atau instansi Anda.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/50 border border-slate-100 transition-colors flex gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-150 flex items-center justify-center flex-shrink-0">
                {pt.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
