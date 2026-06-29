import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Folder, X } from 'lucide-react';
import { getProjects } from '../utils/initialData';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadProjects = () => {
    setProjects(getProjects());
  };

  useEffect(() => {
    loadProjects();
    window.addEventListener('storage', loadProjects);
    return () => window.removeEventListener('storage', loadProjects);
  }, []);

  return (
    <section id="galeri" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-primary-600 uppercase">Portofolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Dokumentasi Proyek Pengadaan
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-medium">
            Bukti nyata komitmen kami dalam menyelesaikan pengadaan barang IT & instalasi jaringan dengan kualitas terbaik di berbagai sektor.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Project Image */}
                <div 
                  className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto min-h-[200px] overflow-hidden bg-slate-100 flex-shrink-0 cursor-zoom-in"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={proj.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-primary-600 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-bold shadow-sm">
                    {proj.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-450" />
                      <span>{proj.date}</span>
                    </div>
                    
                    <h3 
                      className="text-lg font-bold text-slate-900 mb-3 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
                      onClick={() => setSelectedProject(proj)}
                    >
                      {proj.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Highlight bar */}
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-primary-600">
                    <Briefcase className="w-4 h-4" />
                    <span>Selesai 100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-semibold mb-2">Tidak ada dokumentasi proyek</p>
            <p className="text-xs text-slate-400">Proyek akan ditambahkan oleh admin melalui dashboard.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 focus:outline-none"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Image and metadata card */}
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-5 text-center text-white max-w-2xl px-4">
              <span className="text-xs font-bold tracking-wider text-primary-400 uppercase bg-primary-950/50 px-3 py-1 rounded-full border border-primary-850">
                {selectedProject.category}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold mt-3 mb-2">{selectedProject.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold">{selectedProject.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
