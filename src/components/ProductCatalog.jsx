import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MessageCircle, ArrowRight, Eye, RefreshCw } from 'lucide-react';
import { getProducts, getCategories, getContact, getWhatsAppLink } from '../utils/initialData';

export default function ProductCatalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [contact, setContact] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Load data from localStorage
  const loadData = () => {
    setProducts(getProducts());
    setCategories(getCategories());
    setContact(getContact());
  };

  useEffect(() => {
    loadData();
    // Listen for custom storage events (optional, useful when changes happen on same page)
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.details && product.details.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppOrder = (product) => {
    const waNumber = contact.whatsapp || '6282131397759';
    const text = `Halo Admin PT Alfatih Anugrah Syariah,\nsaya tertarik dengan produk: *${product.name}* (Kategori: ${product.category}).\nMohon informasi ketersediaan stock, spesifikasi lebih lanjut, dan penawaran harga resminya.\nTerima kasih.`;
    window.open(getWhatsAppLink(waNumber, text), '_blank');
  };

  const getCategoryName = (slug) => {
    const cat = categories.find(c => c.slug === slug);
    return cat ? cat.name : slug;
  };

  return (
    <section id="produk" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Katalog Produk</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Peralatan Elektronik Pilihan
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Temukan berbagai macam pilihan produk IT dan elektronik original bergaransi resmi untuk menunjang aktivitas operasional instansi Anda.
          </p>
        </div>

        {/* Search and Category Filter controls */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari laptop, CCTV, printer, atau spesifikasi..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 rounded-xl text-sm outline-none transition-all placeholder-slate-400 font-medium text-slate-800"
              />
            </div>
            
            {/* Quick Refresh Button for testing LocalStorage updates */}
            <button
              onClick={loadData}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary-600 transition-colors px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm"
              title="Perbarui Data dari Admin Dashboard"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Perbarui Data
            </button>
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  selectedCategory === cat.slug
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer" onClick={() => navigate(`/produk/${prod.id}`)}>
                  <img
                    src={prod.image || 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80'}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Status Tag */}
                  {prod.status && (
                    <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm ${
                      prod.status === 'Tersedia'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {prod.status}
                    </span>
                  )}
                  {/* Category Tag overlay */}
                  <span className="absolute bottom-4 left-4 bg-slate-900/75 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-bold">
                    {getCategoryName(prod.category)}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2 cursor-pointer hover:text-primary-600 transition-colors line-clamp-1"
                    onClick={() => navigate(`/produk/${prod.id}`)}
                  >
                    {prod.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 line-clamp-2">
                    {prod.description}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => navigate(`/produk/${prod.id}`)}
                      className="flex items-center justify-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all"
                    >
                      <Eye className="w-4 h-4 text-slate-500" />
                      Detail
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(prod)}
                      className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp" 
                        className="w-4 h-4 object-contain" 
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-semibold mb-2">Tidak ada produk ditemukan</p>
            <p className="text-xs text-slate-400">Coba ubah kata pencarian atau pilih kategori lain.</p>
          </div>
        )}
      </div>
    </section>
  );
}
