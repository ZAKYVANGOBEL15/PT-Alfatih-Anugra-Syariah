import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getContact, getWhatsAppLink } from '../utils/initialData';

export default function FloatingWA() {
  const [contact, setContact] = useState({});

  const loadContact = () => {
    setContact(getContact());
  };

  useEffect(() => {
    loadContact();
    window.addEventListener('storage', loadContact);
    return () => window.removeEventListener('storage', loadContact);
  }, []);

  const handleClick = () => {
    const waNumber = contact.whatsapp || '6281234567890';
    const text = 'Halo Admin PT Alfatih Anugra Syariah,\nsaya berkunjung ke website Anda dan ingin menanyakan tentang pengadaan barang elektronik.';
    window.open(getWhatsAppLink(waNumber, text), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center gap-2 hover:px-4.5"
      title="Hubungi Kami via WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-6 h-6 object-contain" 
      />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-bold tracking-wide whitespace-nowrap text-slate-800">
        Chat Admin
      </span>
    </button>
  );
}
