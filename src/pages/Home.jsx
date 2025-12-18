import React, { useState } from 'react';
import { 
  Code, Database, Layout, Terminal, 
  ArrowRight, ArrowLeft, Github, Linkedin, Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. IMPORT GAMBAR DARI ASSETS
// Vite akan menangani path ini secara otomatis saat proses build
import fotoProfil from '../assets/Foto.jpg'; 

// --- DATA: Fokus ke Skill Teknis ---
const skills = [
  {
    title: "Web Development",
    desc: "Membangun website responsif dengan React & Tailwind.",
    icon: <Layout size={32} />,
    color: "bg-blue-100", textColor: "text-blue-700", iconBg: "bg-blue-200"
  },
  {
    title: "Database Management",
    desc: "Perancangan ERD dan query SQL (MySQL/PostgreSQL).",
    icon: <Database size={32} />,
    color: "bg-green-100", textColor: "text-green-700", iconBg: "bg-green-200"
  },
  {
    title: "System Analysis",
    desc: "Menganalisis proses bisnis dan merancang solusi sistem.",
    icon: <Terminal size={32} />,
    color: "bg-purple-100", textColor: "text-purple-700", iconBg: "bg-purple-200"
  },
  {
    title: "Programming Logic",
    desc: "Pemecahan masalah algoritmik (Python/JS/C++).",
    icon: <Code size={32} />,
    color: "bg-yellow-100", textColor: "text-yellow-700", iconBg: "bg-yellow-200"
  }
];

// --- DATA: Highlight Proyek 
const featuredProjects = [
  {
    id: 1,
    category: "Database Project",
    title: "Sistem Manajemen Kafe",
    desc: "Perancangan basis data lengkap untuk operasional kafe/angkringan, mencakup manajemen inventaris, transaksi, dan laporan penjualan.",
    tech: ["MySQL", "ERD Design", "Normalization"]
  },
  {
    id: 2,
    category: "Case Study",
    title: "Analisis WiFi Kampus",
    desc: "Studi kasus analisis performa dan kepuasan pengguna terhadap layanan jaringan WiFi di lingkungan universitas.",
    tech: ["System Analysis", "Data Collection", "Reporting"]
  }
];

function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2">
            👋 Hello, Saya Imam Faqih Masduqi
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Sistem Informasi <br/>
            <span className="text-blue-600">Pelajar</span> & Penggemar Teknologi<br/>
          </h1>
          <p className="text-gray-500 max-w-lg text-lg">
            Menggabungkan pemahaman bisnis dan logika pemrograman untuk menciptakan solusi sistem yang efisien.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Lihat Karyaku
            </Link>
            <Link to="/contact" className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              Hubungi Saya
            </Link>
          </div>

          <div className="flex gap-4 mt-6 text-gray-400">
            <Github className="hover:text-gray-900 cursor-pointer transition-colors" />
            <Linkedin className="hover:text-blue-700 cursor-pointer transition-colors" />
            <Mail className="hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Gambar Profil dengan Import Assets */}
        <div className="relative flex justify-center">
          <div className="absolute top-0 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
          
          <img 
            src={fotoProfil} // 2. GUNAKAN VARIABEL HASIL IMPORT
            alt="Profile Imam Faqih Masduqi" 
            className="rounded-2xl shadow-2xl relative z-10 w-80 h-96 object-cover border-4 border-white rotate-3 hover:rotate-0 transition-all duration-500"
          />
        </div>
      </section>

      {/* 2. SKILLS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Kompetensi Utama</h2>
            <p className="text-gray-500 mt-2">Keahlian teknis dan analitis yang saya kembangkan</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`${skill.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${skill.textColor}`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECT */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Project Highlight</h2>
            <p className="text-gray-500 mt-2">Beberapa tugas kuliah dan proyek personal terbaik</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prevProject} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowLeft size={20} />
            </button>
            <button onClick={nextProject} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10">
            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">
              {featuredProjects[currentProject].category}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              {featuredProjects[currentProject].title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
              {featuredProjects[currentProject].desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {featuredProjects[currentProject].tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;