import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, Calendar } from 'lucide-react';
import { getProjects, saveProject, deleteProject } from '../../utils/initialData';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: '',
    title: '',
    description: '',
    category: '',
    image: '',
    date: ''
  });

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    saveProject(currentProject);
    setProjects(getProjects());
    resetForm();
  };

  const handleEdit = (proj) => {
    setCurrentProject({ ...proj });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus dokumentasi proyek ini?')) {
      deleteProject(id);
      setProjects(getProjects());
    }
  };

  const resetForm = () => {
    setCurrentProject({
      id: '',
      title: '',
      description: '',
      category: '',
      image: '',
      date: ''
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Dokumentasi Proyek</h2>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Tambah, edit, dan hapus galeri dokumentasi proyek pengadaan elektronik yang telah diselesaikan.
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
            Tambah Proyek
          </button>
        )}
      </div>

      {isEditing ? (
        /* EDIT FORM */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              {currentProject.id ? 'Edit Dokumentasi Proyek' : 'Tambah Proyek Baru'}
            </h3>
            <button onClick={resetForm} className="text-slate-450 hover:text-slate-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Project Title */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Judul Proyek</label>
              <input
                type="text"
                required
                value={currentProject.title}
                onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                placeholder="Contoh: Pengadaan Laptop SMK 1"
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
              />
            </div>

            {/* Category & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Sektor Klien (Kategori)</label>
                <input
                  type="text"
                  required
                  value={currentProject.category}
                  onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value })}
                  placeholder="Contoh: Pendidikan, Keamanan, Perkantoran"
                  className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Waktu Selesai (Bulan Tahun)</label>
                <input
                  type="text"
                  required
                  value={currentProject.date}
                  onChange={(e) => setCurrentProject({ ...currentProject, date: e.target.value })}
                  placeholder="Contoh: Maret 2026"
                  className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">Deskripsi Proyek</label>
              <textarea
                required
                rows="4"
                value={currentProject.description}
                onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                placeholder="Jelaskan detail barang yang dikirim, nama instansi pembeli, dan respon teknisi..."
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none font-semibold text-slate-800 resize-none"
              />
            </div>

            {/* Project Image */}
            <div>
              <label className="block text-xs font-bold text-slate-750 uppercase tracking-wider mb-2">URL Gambar Dokumentasi</label>
              <input
                type="url"
                required
                value={currentProject.image}
                onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2.5 border border-slate-200 focus:border-primary-500 rounded-xl text-sm outline-none text-slate-650 font-medium"
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
                Simpan Proyek
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
                  <th className="py-4 px-6">Judul Proyek</th>
                  <th className="py-4 px-6">Kategori</th>
                  <th className="py-4 px-6">Tanggal</th>
                  <th className="py-4 px-6">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-650">
                {projects.length > 0 ? (
                  projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-slate-50/30">
                      <td className="py-4 px-6">
                        <img
                          src={proj.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=60&q=80'}
                          alt={proj.title}
                          className="w-12 h-8 rounded object-cover bg-slate-100 border border-slate-100"
                        />
                      </td>
                      <td className="py-4 px-6 font-bold text-slate-900 max-w-[200px] truncate">
                        {proj.title}
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-700 font-bold border border-slate-200/50">
                          {proj.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {proj.date}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(proj)}
                            className="p-2 text-slate-450 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(proj.id)}
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
                      Belum ada data proyek. Klik "Tambah Proyek" untuk memulai.
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
