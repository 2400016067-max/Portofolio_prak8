import React from 'react';
import { ExternalLink, Github, Folder, Database, Code, FileText } from 'lucide-react';

// --- DATA PROYEK (Portofolio Sistem Informasi) ---
const myProjects = [
  {
    id: 1,
    category: "Database Systems (matkuliahSBD)",
    title: "Sistem Manajemen Database Kafe",
    desc: "Merancang arsitektur basis data relasional untuk operasional kafe (Angkringan). Mencakup desain ERD, normalisasi data, dan query SQL untuk manajemen inventaris serta transaksi.",
    tech: ["MySQL", "ERD Design", "Normalization", "SQL"],
    icon: <Database className="text-blue-500" />,
    link: "https://docs.google.com/document/d/19uqO8xK1Qh0juim30yp_GhhSLHJU6qM5/edit?usp=sharing&ouid=104135445480584836894&rtpof=true&sd=true", // Nanti isi dengan link PDF laporan atau GitHub SQL
    repo: "#"
  },
  {  
    id: 2,
    category: "Web Development (matkuliahTekWeb)",
    title: "IS Mini Hackathon: React App",
    desc: "Membangun aplikasi web frontend interaktif menggunakan React JS dalam batasan waktu tertentu. Fokus pada struktur komponen yang rapi dan styling modern.",
    tech: ["React JS", "Tailwind CSS", "Vite"],
    icon: <Code className="text-green-500" />,
    link: "#",
    repo: "#"
  },
  {
    id: 3,
    category: "System Analysis (matkuliah AKSI)",
    title: "Analisis Kualitas WiFi Kampus",
    desc: "Studi kasus analisis performa jaringan dan kepuasan pengguna terhadap layanan WiFi kampus. Menggunakan metode survei dan analisis data untuk memberikan rekomendasi perbaikan.",
    tech: ["Problem Solving", "Data Analysis", "Reporting"],
    icon: <FileText className="text-purple-500" />,
    link: "https://docs.google.com/document/d/1TDNOvxhMijUwL-U-o7_nq5u97IHQQGP0/edit?usp=sharing&ouid=104135445480584836894&rtpof=true&sd=true",
    repo: null // Kalau cuma laporan PDF, repo bisa null
  },
  {
    id: 4,
    category: "Software Engineering",
    title: "Agile/Scrum Simulation",
    desc: "Simulasi manajemen proyek perangkat lunak menggunakan metodologi Agile dengan bantuan Trello dan papan fisik untuk pelacakan backlog.",
    tech: ["Trello", "Agile", "Scrum", "Teamwork"],
    icon: <Folder className="text-yellow-500" />,
    link: "https://trello.com/invite/b/6931218412ebd2802a4a9887/ATTIf5e2db231cc687a6e4e7be01a23385a15E696783/ppl2025",
    repo: null
  },
  {
    id: 5,
    category: "Personal Project",
    title: "Website Portofolio Pribadi",
    desc: "Membangun website portofolio pribadi untuk menampilkan proyek-proyek akademik dan keterampilan teknis saya menggunakan React dan Tailwind CSS.",
    tech: ["React JS", "Tailwind CSS", "Vite", "Responsive Design"],
    icon: <Folder className="text-pink-500" />,
    link: "#",
    repo: "#"
  },
];

function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Projects</h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Kumpulan tugas kuliah dan proyek personal yang menunjukkan pemahaman saya dalam 
            <span className="font-bold text-blue-600"> teknis coding</span>, 
            <span className="font-bold text-blue-600"> basis data</span>, dan 
            <span className="font-bold text-blue-600"> analisis sistem</span>.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
              
              {/* Card Header */}
              <div className="p-6 pb-0 flex items-start justify-between">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer (Actions) */}
              <div className="p-6 pt-0 mt-auto flex gap-4 border-t border-gray-100 pt-4">
                {item.repo && (
                  <a href={item.repo} className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black transition-colors">
                    <Github size={18} /> Code
                  </a>
                )}
                {item.link && (
                  <a href={item.link} className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={18} /> {item.repo ? "Live Demo" : "Lihat Dokumen"}
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;