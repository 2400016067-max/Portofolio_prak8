import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    // UBAHAN 1: Tambahkan 'flex flex-col' agar layout bisa diatur vertikal
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
      
      <Navbar />

      {/* UBAHAN 2: Bungkus Routes dengan <main> dan 'flex-grow'. 
          Ini akan memaksa konten mengisi ruang kosong, sehingga footer terdorong ke bawah.
          Saya juga menambahkan 'container mx-auto' agar konten tidak mepet pinggir layar. */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="*" 
            element={
              <div className="text-center mt-20 text-red-500 font-bold">
                404 - Halaman Tidak Ditemukan
              </div>
            } 
          />
        </Routes>
      </main>
      
      {/* UBAHAN 3: Ganti teks Footer menjadi branding personal */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        <p>© 2025 Imam Faqih Masduqi. System Information Student.</p>
        <p className="text-xs mt-1 opacity-50">dibuat dengan React & Tailwind CSS</p>
      </footer>

    </div>
  );
}

export default App;