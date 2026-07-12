import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Lfg Digi High School
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering students to achieve excellence through innovative digital learning and traditional values in the heart of Nizampet, Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-amber-500 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-amber-500 transition-colors">Admissions</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Rajiv Gruhakalpa, Vasanth Nagar Colony, Nizampet, Hyderabad, Telangana 500090</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+91 93811 01044 / +91 89770 62765</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>info@lfgdigihigh.edu.in</span>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://maps.app.goo.gl/KiJwCBDDaHFaczYW8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-amber-500/10 cursor-pointer"
              >
                <MapPin size={14} /> View on Google Maps
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 bg-slate-200 text-slate-600 rounded-xl hover:bg-school-secondary hover:text-slate-950 transition-all" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-200 text-slate-600 rounded-xl hover:bg-school-secondary hover:text-slate-950 transition-all" aria-label="Twitter">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-slate-200 text-slate-600 rounded-xl hover:bg-school-secondary hover:text-slate-950 transition-all" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Lfg Digi High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
