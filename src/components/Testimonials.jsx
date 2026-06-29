import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { getTestimonials } from '../utils/initialData';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = () => {
    setTestimonials(getTestimonials());
  };

  useEffect(() => {
    loadTestimonials();
    window.addEventListener('storage', loadTestimonials);
    return () => window.removeEventListener('storage', loadTestimonials);
  }, []);

  return (
    <section id="testimoni" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-80 h-80 opacity-5 bg-gradient-to-l from-primary-400 to-indigo-400 rounded-full filter blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Testimoni</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Apa Kata Mitra Kami?
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Kepercayaan klien adalah motivasi terbesar kami untuk terus memberikan pelayanan pengadaan barang elektronik terbaik.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Quote Icon Background decoration */}
                <span className="absolute top-6 right-8 text-slate-100 group-hover:text-primary-50 transition-colors duration-300">
                  <Quote className="w-12 h-12 stroke-[1.5]" />
                </span>

                <div className="relative z-10">
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed mb-6">
                    "{test.content}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-50 mt-auto">
                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                    {test.name ? test.name.charAt(0) : 'U'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {test.name}
                    </h4>
                    <p className="text-xs text-slate-550 font-medium leading-none mt-1">
                      {test.role}, <span className="font-semibold text-slate-700">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-semibold mb-2">Belum ada testimoni</p>
            <p className="text-xs text-slate-400">Testimoni baru dapat diinput dari panel admin.</p>
          </div>
        )}
      </div>
    </section>
  );
}
