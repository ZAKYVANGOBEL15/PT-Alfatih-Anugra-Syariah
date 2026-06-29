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
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              PT Alfatih Anugrah Syariah
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Didirikan sebagai bentuk komitmen dalam memfasilitasi kebutuhan pengadaan barang elektronik berkualitas tinggi dan terstandarisasi. Kami hadir sebagai solusi untuk instansi pemerintah, BUMN, lembaga pendidikan, rumah sakit, perkantoran, dan UMKM di seluruh wilayah Indonesia.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Kami memegang teguh komitmen transparansi, kemudahan administratif, dan kecepatan pengiriman. Kami memastikan seluruh produk yang dipesan memiliki legalitas resmi dan jaminan klaim garansi yang mudah.
            </p>
            
            {/* Short stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block text-xl font-bold text-primary-600">Legal & Resmi</span>
                <span className="text-xs text-slate-500 font-medium">CV/PT berizin, NPWP, PKP lengkap</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block text-xl font-bold text-primary-600">Konsultasi Free</span>
                <span className="text-xs text-slate-500 font-medium">Bantu RAB & Spek Kebutuhan</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-gradient-to-b from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <Eye className="w-24 h-24 text-slate-900" />
              </div>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Visi Kami</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Menjadi mitra pengadaan IT & elektronik terdepan dan tepercaya di Indonesia yang mengutamakan kualitas produk, kepuasan mitra, serta integritas moral dalam bertransaksi.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-b from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <Target className="w-24 h-24 text-slate-900" />
              </div>
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Misi Kami</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                <li>Menyediakan produk original bergaransi resmi dari distributor utama.</li>
                <li>Menjamin transparansi harga dan administrasi pengadaan.</li>
                <li>Memberikan dukungan teknis pasca-pengiriman yang solutif.</li>
              </ul>
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
