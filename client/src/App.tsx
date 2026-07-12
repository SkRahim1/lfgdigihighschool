import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919381101044?text=I%20would%20like%20to%20inquire%20about%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center border border-emerald-400"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.161.001 6.132 1.233 8.368 3.472 2.235 2.24 3.466 5.211 3.466 8.378 0 6.537-5.324 11.86-11.855 11.86-.002 0-.003 0-.005 0-2.016-.001-3.998-.514-5.753-1.492L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451h.005c5.379 0 9.75-4.372 9.75-9.755 0-2.605-1.012-5.054-2.85-6.895C16.386 2.113 13.939 1 11.86 1 6.482 1 2.11 5.372 2.11 10.75c0 1.637.474 3.238 1.373 4.636l-.992 3.623 3.714-.974.001.001.002.001z" />
            <path d="M15.97 12.945c-.228-.113-1.349-.665-1.558-.741-.209-.076-.361-.113-.513.113-.152.228-.589.741-.722.893-.133.152-.266.171-.494.057-.228-.114-.962-.355-1.833-1.132-.678-.605-1.136-1.352-1.27-1.579-.133-.228-.014-.351.1-.464.103-.102.228-.266.342-.399.114-.133.152-.228.228-.38.076-.152.038-.285-.019-.399-.057-.114-.513-1.235-.703-1.691-.186-.445-.37-.383-.506-.39l-.431-.008c-.152 0-.399.057-.608.285-.209.228-.798.779-.798 1.901 0 1.122.817 2.204.931 2.356.114.152 1.61 2.458 3.9 3.447.545.235.97.375 1.302.48.547.174 1.045.15 1.439.091.44-.066 1.349-.551 1.539-1.083.19-.532.19-.988.133-1.083-.057-.095-.209-.152-.437-.266z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
