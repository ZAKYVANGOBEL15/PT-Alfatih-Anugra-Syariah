import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, Tag } from 'lucide-react';
import { getProducts, saveProduct, deleteProduct, getCategories } from '../../utils/initialData';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    category: '',
    description: '',
    details: '',
    specifications: [],
    image: '',
    gallery: [],
    status: 'Tersedia'
  });
  
  // Spec inputs state
  const [specKey, setSpecKey] = useState('');
  const [specVal, setSpecVal] = useState('');

  useEffect(() => {
    setProducts(getProducts());
    setCategories(getCategories());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentProduct.category) {
      alert('Silakan pilih kategori.');
      return;
    }
    saveProduct(currentProduct);
    setProducts(getProducts());
    resetForm();
  };

  const handleEdit = (prod) => {
    setCurrentProduct({ ...prod, specifications: prod.specifications || [], gallery: prod.gallery || [] });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const resetForm = () => {
    setCurrentProduct({
      id: '',
      name: '',
      category: categories[0]?.slug || '',
      description: '',
      details: '',
      specifications: [],
      image: '',
      gallery: [],
      status: 'Tersedia'
    });
    setSpecKey('');
    setSpecVal('');
    setIsEditing(false);
  };

  const addSpec = () => {
    if (!specKey || !specVal) return;
    const newSpecs = [...currentProduct.specifications, { key: specKey, value: specVal }];
    setCurrentProduct({ ...currentProduct, specifications: newSpecs });
    setSpecKey('');
    setSpecVal('');
  };

  const removeSpec = (idx) => {
    const newSpecs = currentProduct.specifications.filter((_, i) => i !== idx);
    setCurrentProduct({ ...currentProduct, specifications: newSpecs });
  };

  const getCategoryName = (slug) => {
    const cat = categories.find(c => c.slug === slug);
    return cat ? cat.name : slug;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Produk Pengadaan</h2>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Tambah, edit, dan hapus data produk yang ditampilkan di halaman katalog publik.
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={() => {
              resetForm();
              setIsEditing(true);
            }}
            className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-md"
          >
            <Plus className="w-4 h-4" />
            Tambah Produk
          </button>
        )}
      </div>

      {isEditing ? (
        /* EDIT FORM */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              {currentProduct.id ? 'Edit Detail Produk' : 'Tambah Produk Baru'}
            </h3>
            <button onClick={resetForm} className="text-slate-450 hover:text-slate-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column Fields */}
              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Nama Produk</label>
                  <input
                    type="text"
                    required
                    value={currentProduct.name}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                    placeholder="Contoh: CCTV Hikvision 2MP"
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Kategori Produk</label>
                  <select
                    value={currentProduct.category}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800 bg-white"
                  >
                    <option value="">-- Pilih Kategori --</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* Status Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Status Ketersediaan</label>
                  <div className="flex gap-4">
                    {['Tersedia', 'Pre-Order'].map(st => (
                      <label key={st} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
                        <input
                          type="radio"
                          name="status"
                          value={st}
                          checked={currentProduct.status === st}
                          onChange={(e) => setCurrentProduct({ ...currentProduct, status: e.target.value })}
                          className="w-4 h-4 text-primary-650"
                        />
                        {st}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cover Image Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">URL Gambar Utama</label>
                  <input
                    type="url"
                    required
                    value={currentProduct.image}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none text-slate-650 font-medium"
                  />
                </div>
              </div>

              {/* Right Column Fields */}
              <div className="space-y-4">
                {/* Short Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Deskripsi Singkat (Card)</label>
                  <input
                    type="text"
                    required
                    value={currentProduct.description}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                    placeholder="Teks singkat yang akan muncul di card katalog..."
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                  />
                </div>

                {/* Detailed Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Detail & Deskripsi Panjang</label>
                  <textarea
                    rows="5"
                    value={currentProduct.details}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, details: e.target.value })}
                    placeholder="Penjelasan produk yang komprehensif..."
                    className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800 resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Specifications Box */}
            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Spesifikasi Teknis</h4>
              
              {/* Specs List */}
              {currentProduct.specifications.length > 0 && (
                <div className="mb-4 space-y-2 border border-slate-150 rounded-xl p-4 bg-slate-50">
                  {currentProduct.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100 text-xs font-semibold text-slate-800">
                      <span><span className="text-slate-550">{spec.key}:</span> {spec.value}</span>
                      <button type="button" onClick={() => removeSpec(idx)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Spec Inputs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={specKey}
                  onChange={(e) => setSpecKey(e.target.value)}
                  placeholder="Kunci (cth: RAM)"
                  className="flex-grow px-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm outline-none font-semibold text-slate-800 bg-slate-50/50"
                />
                <input
                  type="text"
                  value={specVal}
                  onChange={(e) => setSpecVal(e.target.value)}
                  placeholder="Nilai (cth: 16GB DDR4)"
                  className="flex-grow px-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm outline-none font-semibold text-slate-800 bg-slate-50/50"
                />
                <button
                  type="button"
                  onClick={addSpec}
                  className="bg-slate-850 hover:bg-slate-950 text-white font-bold py-2 px-5 rounded-xl text-xs sm:text-sm transition-colors"
                >
                  Tambah Spek
                </button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-sm font-bold text-slate-700"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-bold shadow-md shadow-primary-500/10"
              >
                <Check className="w-4 h-4 inline-block mr-1.5" />
                Simpan Produk
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* TABLE LIST */
        <div className="bg-white rounded-2xl border border-slate-150 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-150 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Gambar</th>
                  <th className="py-4 px-6">Nama Produk</th>
                  <th className="py-4 px-6">Kategori</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-650">
                {products.length > 0 ? (
                  products.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-50/30">
                      <td className="py-4 px-6">
                        <img
                          src={prod.image || 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=60&q=80'}
                          alt={prod.name}
                          className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-100"
                        />
                      </td>
                      <td className="py-4 px-6 font-bold text-slate-900 max-w-[200px] truncate">
                        {prod.name}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 text-xs text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-100 font-semibold">
                          <Tag className="w-3 h-3" />
                          {getCategoryName(prod.category)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          prod.status === 'Tersedia'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {prod.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(prod)}
                            className="p-2 text-slate-450 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(prod.id)}
                            className="p-2 text-slate-450 hover:text-red-650 hover:bg-red-50 rounded-lg transition-all"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-slate-550 italic font-semibold">
                      Belum ada data produk. Klik "Tambah Produk" untuk memulai.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
