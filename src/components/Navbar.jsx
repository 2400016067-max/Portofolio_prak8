import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Helper: Saya ubah warnanya sedikit agar lebih elegan (Blue-600 ke Blue-700 saat aktif)
  const isActive = (path) => 
    location.pathname === path 
      ? 'text-blue-700 font-bold border-b-2 border-blue-700 pb-1' // Tambah garis bawah biar tegas
      : 'text-gray-500 hover:text-blue-600 transition-all';

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* BRANDING: Fokus ke Nama Kamu */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo Inisial - Ganti 'A' dengan inisial nama depanmu */}
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
            A 
          </div>
          {/* Nama Lengkap - Ganti dengan Nama Aslimu */}
          <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-700 transition-colors">
            Imam Faqih Masduqi Portofolio
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/projects" className={isActive('/projects')}>
            Projects {/* Pakai 's' karena jamak */}
          </Link>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </div>

        {/* Note: Menu Mobile belum ada (hidden di layar kecil). 
            Nanti kita bahas cara buat Hamburger Menu jika perlu. */}
      
      </div>
    </nav>
  );
}

export default Navbar;