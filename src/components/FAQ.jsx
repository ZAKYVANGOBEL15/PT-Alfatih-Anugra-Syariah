import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFaqs } from '../utils/initialData';

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const loadFaqs = () => {
    setFaqs(getFaqs());
  };

  useEffect(() => {
    loadFaqs();
    window.addEventListener('storage', loadFaqs);
    return () => window.removeEventListener('storage', loadFaqs);
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Temukan jawaban cepat mengenai legalitas perusahaan, garansi barang, tata cara pengadaan, hingga pengiriman barang di bawah ini.
          </p>
        </div>

        {/* Accordion FAQ list */}
        {faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-primary-200 bg-primary-50/10 shadow-sm'
                      : 'border-slate-200/80 bg-white'
                  }`}
                >
                  {/* Question header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        isOpen ? 'text-primary-600' : 'text-slate-400'
                      }`} />
                      <span className="text-sm sm:text-base">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-primary-600' : ''
                    }`} />
                  </button>

                  {/* Answer content */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-white/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-semibold">Belum ada pertanyaan</p>
          </div>
        )}
      </div>
    </section>
  );
}
