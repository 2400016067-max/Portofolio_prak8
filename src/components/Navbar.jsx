import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-blue-700 font-bold md:border-b-2 md:border-blue-700 md:pb-1 bg-blue-50 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none'
      : 'text-gray-500 hover:text-blue-600 transition-all px-4 py-2 md:p-0';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* BRANDING */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
              I
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-blue-700 transition-colors">
              Imam Portofolio
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-2 pb-4">
            <Link to="/" onClick={closeMenu} className={isActive('/')}>Home</Link>
            <Link to="/projects" onClick={closeMenu} className={isActive('/projects')}>Projects</Link>
            <Link to="/contact" onClick={closeMenu} className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;