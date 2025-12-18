import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    // Container Utama: Menggunakan background putih bersih dengan font yang halus
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      
      {/* Area Navigasi Tetap di Atas */}
      <Navbar />

      {/* Main Content Area: 
          Saya menghapus 'container' di sini agar halaman seperti Home bisa tampil lebar penuh (Full Width).
          Jika kamu ingin kontennya rapi di tengah, biarkan halaman masing-masing (Home/Projects) yang mengaturnya.
      */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Halaman 404: Tampilan lebih profesional dan ramah pengguna */}
          <Route 
            path="*" 
            element={
              <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 text-4xl animate-bounce">
                  ⚠️
                </div>
                <h1 className="text-4xl font-black text-gray-900 mb-2">Halaman Tidak Ditemukan</h1>
                <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
                  Sepertinya jalur yang kamu tuju salah atau sudah dipindahkan. Silakan kembali ke halaman utama untuk melanjutkan penjelajahan.
                </p>
                <Link 
                  to="/" 
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
                >
                  Balik ke Home
                </Link>
              </div>
            } 
          />
        </Routes>
      </main>
      
      {/* Footer: Dibuat lebih modern dengan border-top tipis dan branding yang kuat */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Imam Faqih Masduqi
              </h2>
              <p className="text-gray-400 text-xs mt-1 font-medium tracking-widest uppercase">
                System Information Student • Portofolio 2025
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end text-sm text-gray-400">
              <p>© 2025 Imam Faqih Masduqi. All Rights Reserved.</p>
              <div className="mt-1 flex items-center gap-2">
                <span>Dibuat dengan</span>
                <span className="text-blue-500 font-semibold">React</span>
                <span>&</span>
                <span className="text-cyan-500 font-semibold">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;