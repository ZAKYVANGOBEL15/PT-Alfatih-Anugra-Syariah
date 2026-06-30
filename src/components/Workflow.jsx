import React from 'react';
import { 
  MessageSquare, 
  Lightbulb, 
  Calculator, 
  Play, 
  FileText, 
  HeartHandshake 
} from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare className="w-6 h-6 text-primary-400" />,
      title: 'Mendapat Brief dari Klien',
      description: 'Kami mendengarkan dengan saksama seluruh kebutuhan pengadaan, spesifikasi perangkat, volume, serta ekspektasi proyek dari pihak klien.'
    },
    {
      num: '02',
      icon: <Lightbulb className="w-6 h-6 text-primary-400" />,
      title: 'Memahami Konsep & Strategi',
      description: 'Menganalisis kebutuhan secara mendalam untuk menyusun strategi penyediaan barang yang paling efisien, aman, dan tepat guna.'
    },
    {
      num: '03',
      icon: <Calculator className="w-6 h-6 text-primary-400" />,
      title: 'Perhitungan Anggaran & Rencana',
      description: 'Menyusun kalkulasi anggaran yang kompetitif dan transparan beserta rencana kerja komprehensif (RAB, timeline pengiriman, dan instalasi).'
    },
    {
      num: '04',
      icon: <Play className="w-6 h-6 text-primary-400" />,
      title: 'Implementasi Optimal',
      description: 'Melaksanakan proses pengadaan, QC produk secara ketat, dan konfigurasi sistem sesuai dengan standard operational procedure.'
    },
    {
      num: '05',
      icon: <FileText className="w-6 h-6 text-primary-400" />,
      title: 'Laporan Pengiriman Tepat',
      description: 'Mengirimkan pesanan secara aman ke lokasi tujuan lengkap dengan detail serah terima barang dan dokumentasi laporan resmi.'
    },
    {
      num: '06',
      icon: <HeartHandshake className="w-6 h-6 text-primary-400" />,
      title: 'Evaluasi & Hubungan Berkelanjutan',
      description: 'Melakukan evaluasi internal, penyerahan laporan akhir pertanggungjawaban, serta menjaga hubungan baik pasca-proyek untuk kemitraan jangka panjang.'
    }
  ];

  return (
    <section id="alur-kerja" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 bg-gradient-to-tl from-indigo-500 to-primary-500 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-wider text-primary-400 uppercase">Alur Kerja</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Bagaimana Kami Bekerja?
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-sm sm:text-base font-medium">
            Alur kerja yang terstruktur dan terukur untuk memastikan setiap proyek pengadaan serta kerja sama berjalan dengan sempurna dari awal hingga akhir.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* Decorative central connection line for larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500/20 via-indigo-500/20 to-primary-500/20 -translate-y-1/2 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-primary-500/40 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Massive background number */}
              <span className="absolute -right-2 -bottom-4 text-8xl font-black text-white/5 group-hover:text-primary-500/10 transition-colors select-none">
                {step.num}
              </span>

              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-primary-950/40 border border-primary-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
