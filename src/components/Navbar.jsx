import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Building2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Produk', href: '#produk' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Kontak', href: '#kontak' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // height of navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // If path starts with /admin, we can show a simpler Navbar or hide it
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white hover:text-primary-400 transition-colors">
          <img src="/image/logo.png" alt="Logo PT Alfatih" className="h-8 w-auto object-contain" />
          <span>ALFATIH <span className="text-sm font-light text-slate-400">ADMIN</span></span>
        </Link>
        <Link to="/" className="text-sm text-slate-300 hover:text-white underline font-medium">
          Lihat Landing Page
        </Link>
      </header>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="flex items-center gap-2">
              <img 
                src="/image/logo.png" 
                alt="Logo PT Alfatih" 
                className={`h-10 w-auto object-contain transition-all ${!isScrolled ? 'brightness-0 invert' : ''}`} 
              />
              <div className={isScrolled ? 'text-slate-900' : 'text-white'}>
                <span className="font-bold text-xl tracking-tight block leading-tight drop-shadow-sm">
                  PT ALFATIH
                </span>
                <span className={`text-[10px] uppercase tracking-widest font-semibold block leading-none drop-shadow-sm ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                  Anugra Syariah
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 drop-shadow-sm ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-primary-600' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('#kontak')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/10' 
                  : 'bg-white hover:bg-slate-50 text-slate-900 shadow-lg'
              }`}
            >
              <PhoneCall className={`w-4 h-4 ${isScrolled ? '' : 'text-primary-600'}`} />
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none drop-shadow-sm transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-primary-600' : 'text-white hover:text-slate-200'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100 border-t border-slate-200 bg-white' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-3 pb-6 space-y-1 shadow-inner">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => handleNavClick('#kontak')}
              className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-lg text-base font-bold shadow-md shadow-primary-500/10 transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
