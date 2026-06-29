import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, Star } from 'lucide-react';
import { getTestimonials, saveTestimonial, deleteTestimonial } from '../../utils/initialData';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    id: '',
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5
  });

  useEffect(() => {
    setTestimonials(getTestimonials());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    saveTestimonial(currentTestimonial);
    setTestimonials(getTestimonials());
    resetForm();
  };

  const handleEdit = (test) => {
    setCurrentTestimonial({ ...test });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) {
      deleteTestimonial(id);
      setTestimonials(getTestimonials());
    }
  };

  const resetForm = () => {
    setCurrentTestimonial({
      id: '',
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 5
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Testimoni Klien</h2>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Tambah, edit, dan hapus review atau testimoni kepuasan pelanggan dari instansi mitra.
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
            Tambah Testimoni
          </button>
        )}
      </div>

      {isEditing ? (
        /* EDIT FORM */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm max-w-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              {currentTestimonial.id ? 'Edit Testimoni' : 'Tambah Testimoni Baru'}
            </h3>
            <button onClick={resetForm} className="text-slate-450 hover:text-slate-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Nama Klien</label>
              <input
                type="text"
                required
                value={currentTestimonial.name}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>

            {/* Role & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Jabatan</label>
                <input
                  type="text"
                  required
                  value={currentTestimonial.role}
                  onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, role: e.target.value })}
                  placeholder="Contoh: IT Manager, Kepala Sekolah"
                  className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Instansi / Perusahaan</label>
                <input
                  type="text"
                  required
                  value={currentTestimonial.company}
                  onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, company: e.target.value })}
                  placeholder="Contoh: SMK Negeri 1"
                  className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                />
              </div>
            </div>

            {/* Rating Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Penilaian Bintang</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((stars) => (
                  <button
                    key={stars}
                    type="button"
                    onClick={() => setCurrentTestimonial({ ...currentTestimonial, rating: stars })}
                    className="p-1"
                  >
                    <Star className={`w-6 h-6 ${
                      currentTestimonial.rating >= stars
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200 hover:text-amber-200'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Review */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Isi Testimoni</label>
              <textarea
                required
                rows="4"
                value={currentTestimonial.content}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, content: e.target.value })}
                placeholder="Tulis testimoni atau review positif klien mengenai pengadaan barang..."
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800 resize-none"
              />
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
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-bold shadow-md"
              >
                <Check className="w-4 h-4 inline-block mr-1.5" />
                Simpan Testimoni
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* LIST VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEdit(test)}
                        className="p-1.5 text-slate-450 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(test.id)}
                        className="p-1.5 text-slate-450 hover:text-red-650 hover:bg-red-50 rounded-lg transition-all"
                        title="Hapus"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic font-medium mb-4 leading-relaxed">
                    "{test.content}"
                  </p>
                </div>
                <div className="border-t border-slate-50 pt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700">
                    {test.name ? test.name.charAt(0) : 'U'}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{test.name}</h5>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                      {test.role}, <span className="text-slate-750">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 italic text-slate-500 font-semibold">
              Belum ada data testimoni. Klik "Tambah Testimoni" untuk memulai.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
