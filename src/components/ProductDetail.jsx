import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { getProducts, getCategories, getContact, getWhatsAppLink } from '../utils/initialData';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [contact, setContact] = useState({});
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    // Scroll to top when page loaded
    window.scrollTo(0, 0);

    const productsList = getProducts();
    const foundProd = productsList.find(p => p.id === id);
    if (foundProd) {
      setProduct(foundProd);
      setActiveImage(foundProd.image);
    }
    setCategories(getCategories());
    setContact(getContact());
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-md max-w-md">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Produk Tidak Ditemukan</h2>
          <p className="text-sm text-slate-500 mb-6">Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.</p>
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const waNumber = contact.whatsapp || '6281234567890';
    const text = `Halo Admin PT Alfatih Anugra Syariah,\nsaya tertarik untuk meminta penawaran harga resmi (Quotation) untuk produk:\n\n*${product.name}*\nKategori: ${getCategoryName(product.category)}\nStatus: ${product.status}\n\nMohon segera dihubungi kembali. Terima kasih.`;
    window.open(getWhatsAppLink(waNumber, text), '_blank');
  };

  const getCategoryName = (slug) => {
    const cat = categories.find(c => c.slug === slug);
    return cat ? cat.name : slug;
  };

  // Safe check for gallery
  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 font-medium">
          <button onClick={() => navigate('/')} className="hover:text-primary-600 transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/#produk')} className="hover:text-primary-600 transition-colors">Produk</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </button>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-12 shadow-sm">
          
          {/* Images Section */}
          <div className="lg:col-span-6 space-y-4">
            {/* Active Image Box */}
            <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl bg-slate-50 border border-slate-150 overflow-hidden">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
              {product.status && (
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-bold shadow-sm ${
                  product.status === 'Tersedia'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {product.status}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto py-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-xl bg-slate-50 border-2 overflow-hidden flex-shrink-0 transition-all ${
                      activeImage === img ? 'border-primary-500 scale-95 shadow-sm' : 'border-slate-200 hover:border-slate-350'
                    }`}
                  >
                    <img src={img} alt={`Gallery index ${idx}`} className="w-full h-full object-cover p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="inline-block bg-primary-50 text-primary-700 text-xs uppercase tracking-wider px-3 py-1 rounded-full font-bold mb-4 border border-primary-100">
                {getCategoryName(product.category)}
              </span>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Detailed Explanation */}
              {product.details && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Detail Produk</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {product.details}
                  </p>
                </div>
              )}
            </div>

            {/* Core trust badges */}
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2 mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100% Produk Original Bergaransi Resmi</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>Administrasi Pengadaan (Quotation, Faktur, Pajak) Lengkap</span>
              </div>
            </div>

            {/* Order Call to Action */}
            <div>
              <button
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-3 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-4 px-8 rounded-xl text-base shadow-sm transition-all duration-200"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain" 
                />
                Hubungi Admin via WhatsApp
              </button>
              <p className="text-[11px] text-center text-slate-400 font-medium mt-2">
                *Klik tombol di atas untuk mengajukan penawaran harga atau pemesanan langsung ke admin.
              </p>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-12 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-12 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Spesifikasi Lengkap</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}
                    >
                      <td className="w-1/3 py-4 px-6 text-sm font-bold text-slate-950 border-b border-slate-100">
                        {spec.key}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-600 border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
