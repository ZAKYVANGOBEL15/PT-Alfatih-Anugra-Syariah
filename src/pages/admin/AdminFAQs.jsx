import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { getFaqs, saveFaq, deleteFaq } from '../../utils/initialData';

export default function AdminFAQs() {
  const [faqs, setFaqs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentFaq, setCurrentFaq] = useState({
    id: '',
    question: '',
    answer: '',
    category: 'Umum'
  });

  useEffect(() => {
    setFaqs(getFaqs());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    saveFaq(currentFaq);
    setFaqs(getFaqs());
    resetForm();
  };

  const handleEdit = (faq) => {
    setCurrentFaq({ ...faq });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus FAQ ini?')) {
      deleteFaq(id);
      setFaqs(getFaqs());
    }
  };

  const resetForm = () => {
    setCurrentFaq({
      id: '',
      question: '',
      answer: '',
      category: 'Umum'
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola FAQ</h2>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Tambah, edit, dan hapus pertanyaan yang sering diajukan oleh calon mitra kerja.
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
            Tambah FAQ
          </button>
        )}
      </div>

      {isEditing ? (
        /* EDIT FORM */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm max-w-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              {currentFaq.id ? 'Edit Data FAQ' : 'Tambah FAQ Baru'}
            </h3>
            <button onClick={resetForm} className="text-slate-450 hover:text-slate-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Question */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Pertanyaan</label>
              <input
                type="text"
                required
                value={currentFaq.question}
                onChange={(e) => setCurrentFaq({ ...currentFaq, question: e.target.value })}
                placeholder="Apakah PT Alfatih terdaftar sebagai..."
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Kategori FAQ</label>
              <input
                type="text"
                required
                value={currentFaq.category}
                onChange={(e) => setCurrentFaq({ ...currentFaq, category: e.target.value })}
                placeholder="Contoh: Legalitas & Pajak, Produk & Garansi, Pemesanan"
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>

            {/* Answer */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Jawaban Singkat</label>
              <textarea
                required
                rows="5"
                value={currentFaq.answer}
                onChange={(e) => setCurrentFaq({ ...currentFaq, answer: e.target.value })}
                placeholder="Jelaskan jawaban secara ringkas, sopan, dan solutif..."
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
                Simpan FAQ
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* LIST VIEW */
        <div className="space-y-4">
          {faqs.length > 0 ? (
            faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm flex justify-between items-start gap-4"
              >
                <div className="space-y-1.5">
                  <span className="inline-block bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                    {faq.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>

                <div className="flex gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(faq)}
                    className="p-2 text-slate-450 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    className="p-2 text-slate-450 hover:text-red-650 hover:bg-red-50 rounded-lg transition-all"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 italic text-slate-500 font-semibold">
              Belum ada pertanyaan FAQ. Klik "Tambah FAQ" untuk memulai.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
