import React, { useState, useEffect } from 'react';
import { Check, Mail, Phone, MapPin, Clock, Map } from 'lucide-react';
import { getContact, saveContact } from '../../utils/initialData';

export default function AdminContact() {
  const [contact, setContact] = useState({
    whatsapp: '',
    email: '',
    address: '',
    mapsEmbedUrl: '',
    operationalHours: ''
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setContact(getContact());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContact(contact);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-bold text-slate-800">Pengaturan Kontak Kantor</h2>
        <p className="text-xs text-slate-500 font-semibold mt-1">
          Perbarui nomor WhatsApp admin, email bisnis, alamat fisik, dan link Google Maps yang tertera di seluruh website.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 font-bold text-sm flex items-center gap-2">
          <Check className="w-5 h-5" />
          <span>Informasi kontak berhasil disimpan dan diperbarui!</span>
        </div>
      )}

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* WhatsApp */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Nomor WhatsApp Admin (Kode Negara)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                <Phone className="w-4 h-4 mr-1.5" />
                +
              </span>
              <input
                type="text"
                required
                value={contact.whatsapp}
                onChange={(e) => setContact({ ...contact, whatsapp: e.target.value.replace(/\D/g, '') })}
                placeholder="6281234567890 (Tanpa tanda + atau spasi)"
                className="w-full pl-14 pr-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium mt-1">
              *Masukkan nomor HP dimulai dengan kode negara, contoh: 6281234567890 untuk Indonesia (0812... menjadi 62812...).
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email Resmi Perusahaan
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="email"
                required
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                placeholder="admin@alfatih-syariah.com"
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>
          </div>

          {/* Operational hours */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Jam Operasional Kerja
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Clock className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="text"
                required
                value={contact.operationalHours}
                onChange={(e) => setContact({ ...contact, operationalHours: e.target.value })}
                placeholder="Senin - Sabtu (08:00 - 17:00 WITA)"
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">
              Alamat Lengkap Kantor
            </label>
            <div className="relative">
              <span className="absolute top-3 left-3.5 flex items-start pointer-events-none">
                <MapPin className="w-4 h-4 text-slate-400" />
              </span>
              <textarea
                required
                rows="3"
                value={contact.address}
                onChange={(e) => setContact({ ...contact, address: e.target.value })}
                placeholder="Alamat kantor lengkap, kecamatan, kota, provinsi..."
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800 resize-none"
              />
            </div>
          </div>

          {/* Maps iframe URL */}
          <div>
            <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">
              Google Maps Embed iframe URL
            </label>
            <div className="relative">
              <span className="absolute top-3 left-3.5 flex items-start pointer-events-none">
                <Map className="w-4 h-4 text-slate-400" />
              </span>
              <textarea
                required
                rows="3"
                value={contact.mapsEmbedUrl}
                onChange={(e) => setContact({ ...contact, mapsEmbedUrl: e.target.value })}
                placeholder="https://www.google.com/maps/embed?pb=..."
                className="w-full pl-11 pr-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none text-xs text-slate-500 font-semibold resize-none"
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium mt-1">
              *Cara mendapatkan: Buka Google Maps &gt; cari lokasi &gt; klik Bagikan &gt; pilih Sematkan Peta &gt; salin hanya nilai di dalam tag `src="..."`.
            </p>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-bold shadow-md"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
