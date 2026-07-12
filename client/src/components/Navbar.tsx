import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md text-slate-800 shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Lfg Digi High School Logo" 
                className="h-12 w-12 object-contain rounded-xl shadow-md border border-slate-100 group-hover:scale-105 transition-transform" 
              />
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                Lfg Digi High School
              </span>
            </Link>
          </div>

          {/* Menu toggle button (visible on both desktop and mobile) */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none transition-colors border border-slate-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 pb-6 px-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg z-50">
          <div className="max-w-7xl mx-auto space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-school-secondary text-slate-950 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
