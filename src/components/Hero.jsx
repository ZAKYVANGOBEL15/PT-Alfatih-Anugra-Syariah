import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/image/Banner-Slide1.jpg',
    '/image/Banner-Slide2.jpg',
    '/image/Banner-Slide3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-slate-100">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero Background Slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Soft Dark Overlay to let images pop while keeping text readable */}
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700/50 mb-6 text-slate-200 text-xs sm:text-sm font-medium tracking-wide shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-primary-400" />
            <span>Mitra Pengadaan Barang & Jasa Resmi</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 drop-shadow-md max-w-4xl mx-auto"
          >
            <span className="block mb-4">Solusi Pengadaan</span>
            <span className="block mb-4">Barang Elektronik & IT</span>
            <span className="block">Terpercaya</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-sm"
          >
            PT Alfatih Anugrah Syariah menyediakan laptop, komputer, CCTV, perangkat jaringan, dan peralatan kantor berkualitas (tersedia unit baru bergaransi resmi maupun barang second/bekas layak pakai) untuk instansi pemerintah, BUMN, sekolah, kampus, dan swasta.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('#produk')}
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-4 rounded-xl text-base font-semibold shadow-lg shadow-primary-600/30 transition-all duration-200 group border border-primary-500"
            >
              <ShoppingBag className="w-5 h-5" />
              Lihat Produk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#kontak')}
              className="flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-slate-800 backdrop-blur-md text-white border border-slate-600 px-7 py-4 rounded-xl text-base font-semibold shadow-md transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-primary-400" />
              Minta Penawaran
            </button>
          </motion.div>

          {/* Core Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-700/80 grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-white leading-none">100%</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 block">Barang Original</span>
            </div>
            <div className="border-l border-slate-700 pl-4 sm:pl-6">
              <span className="block text-2xl sm:text-3xl font-bold text-white leading-none">Siap</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 block">Kerja Sama Resmi</span>
            </div>
            <div className="border-l border-slate-700 pl-4 sm:pl-6">
              <span className="block text-2xl sm:text-3xl font-bold text-white leading-none">Cepat</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1 block">Respon & Kirim</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
