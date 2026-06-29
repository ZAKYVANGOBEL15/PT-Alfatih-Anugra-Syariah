import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare, Send } from 'lucide-react';
import { getContact, getWhatsAppLink } from '../utils/initialData';

export default function Contact() {
  const [contact, setContact] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    message: ''
  });

  const loadContact = () => {
    setContact(getContact());
  };

  useEffect(() => {
    loadContact();
    window.addEventListener('storage', loadContact);
    return () => window.removeEventListener('storage', loadContact);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waNumber = contact.whatsapp || '6282131397759';
    const text = `Halo Admin PT Alfatih Anugrah Syariah,\nsaya ingin berkonsultasi mengenai pengadaan elektronik.\n\n*Nama:* ${formData.name}\n*Instansi/UMKM:* ${formData.institution}\n*Email:* ${formData.email}\n*No. HP:* ${formData.phone}\n*Pesan:* ${formData.message}`;
    
    window.open(getWhatsAppLink(waNumber, text), '_blank');
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Kontak</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Hubungi Tim Kami
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Siap bekerja sama secara profesional. Konsultasikan kebutuhan pengadaan barang elektronik Anda dengan kami sekarang juga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kantor</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-slate-150 rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Alamat Utama</h4>
                  <p className="text-sm text-slate-650 font-medium leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-slate-150 rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Telepon & WhatsApp</h4>
                  <p className="text-sm text-slate-650 font-semibold leading-relaxed">
                    +{contact.whatsapp}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-slate-150 rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email Resmi</h4>
                  <p className="text-sm text-slate-650 font-semibold leading-relaxed">
                    {contact.email}
                  </p>
                </div>
              </div>

              {/* Operational hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-slate-150 rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Jam Operasional</h4>
                  <p className="text-sm text-slate-650 font-medium leading-relaxed">
                    {contact.operationalHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[240px] bg-slate-200">
              <iframe
                title="Google Maps Location PT Alfatih Anugrah Syariah"
                src={contact.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ajukan Pertanyaan</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-8">
              Isi data di bawah ini untuk mengirimkan formulir konsultasi langsung ke WhatsApp Admin kami.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                  />
                </div>
                {/* Company/Institution */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Instansi / Perusahaan</label>
                  <input
                    type="text"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Contoh: SMK Negeri 1 Manado"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Aktif</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Contoh: partner@email.com"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nomor Telepon / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-semibold"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pesan & Kebutuhan Barang</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan spesifikasi produk elektronik atau kebutuhan konsultasi pengadaan barang Anda di sini..."
                  className="w-full px-4 py-3 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-medium resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2.5 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-6 rounded-xl text-sm shadow-sm transition-all"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-4 h-4 object-contain" 
                />
                Kirim via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
