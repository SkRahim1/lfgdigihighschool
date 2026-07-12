import { Link, useLocation } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';
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
    <nav className="bg-slate-900/90 backdrop-blur-md text-white shadow-xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-school-secondary/95 p-2.5 rounded-2xl group-hover:rotate-6 transition-transform shadow-lg shadow-school-secondary/25">
                <School className="text-slate-950" size={24} />
              </div>
              <span className="font-extrabold text-xl tracking-tight hidden sm:block bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                Lfg Digi High School
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                    isActive ? 'text-school-secondary bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-school-secondary transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors border border-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 pb-6 px-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive ? 'bg-school-secondary text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
