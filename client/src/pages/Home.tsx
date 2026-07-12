import { ArrowRight, BookOpen, Users, Trophy, Computer, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const notices = [
    { id: 1, title: 'Admissions Open for Session 2026-27', date: new Date().toISOString(), description: 'Registration forms for admission into Nursery to Grade X are available at the school office.' },
    { id: 2, title: 'Independence Day Prep Begins', date: new Date(Date.now() - 86400000 * 2).toISOString(), description: 'Preparations for the grand Independence Day celebrations have started on the campus.' },
    { id: 3, title: 'Academic Session 2026-27 Commences', date: new Date(Date.now() - 86400000 * 9).toISOString(), description: 'Lfg Digi High School welcomes all students to the new academic term starting today.' }
  ];

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 py-20 lg:py-32 text-slate-800 border-b border-slate-200">
        {/* Background Mesh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
              Welcome to <span className="text-amber-500">Lfg Digi High School</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Nurturing minds, fostering innovation, and building leaders of tomorrow in Vasanth Nagar Colony, Nizampet. Join us in our journey of excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                to="/admissions#inquiry-form" 
                className="bg-school-secondary hover:bg-amber-500 text-slate-950 px-8 py-4 rounded-full font-extrabold text-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-school-secondary/15 cursor-pointer"
              >
                Inquire About Admission <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="bg-slate-100 border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200/80 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="w-full h-72 sm:h-96 bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-200 hover:scale-[1.01] transition-transform duration-500">
              <img 
                src={`${import.meta.env.BASE_URL}lfg_school_campus.png`} 
                alt="School Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Playful floating elements */}
            <div className="absolute -top-4 -right-4 bg-school-vibrant p-4 rounded-2xl shadow-xl hidden sm:block hover:rotate-6 transition-transform">
              <Trophy className="text-white" size={32} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-school-accent p-4 rounded-2xl shadow-xl hidden sm:block hover:-rotate-6 transition-transform">
              <BookOpen className="text-white" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Notices Ticker */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5 text-slate-800 overflow-hidden whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
          <span className="font-extrabold text-sm uppercase tracking-wider text-amber-600 flex items-center gap-2 bg-amber-500/10 px-3 py-1 rounded-lg shrink-0">
            <Bell size={16} /> Latest Notices:
          </span>
          <div className="flex-1 overflow-hidden relative w-full">
            <div className="flex animate-marquee items-center gap-8 text-slate-600 text-sm font-semibold">
              {notices.length > 0 ? notices.map(n => (
                <span key={n.id} className="hover:text-slate-950 transition-colors">{n.title} - {new Date(n.date).toLocaleDateString()} |</span>
              )) : (
                <span>Welcome to the new academic session 2026-27! Admissions are open. | Contact the administrative office for prospectus and registration details.</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Choose Lfg Digi High School?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">We provide a high-caliber digital education combined with structural guidelines to prepare students for the future.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Computer size={32} />}
              iconBg="bg-blue-50 text-blue-600"
              title="Smart Classrooms"
              description="Fully digital learning environments with interactive whiteboards and modern tools."
            />
            <FeatureCard 
              icon={<BookOpen size={32} />}
              iconBg="bg-emerald-50 text-emerald-600"
              title="Modern Library"
              description="Extensive collection of books and digital resources to spark curiosity."
            />
            <FeatureCard 
              icon={<Trophy size={32} />}
              iconBg="bg-amber-50 text-amber-600"
              title="Sports Excellence"
              description="Professional coaching and facilities for overall physical development."
            />
            <FeatureCard 
              icon={<Users size={32} />}
              iconBg="bg-rose-50 text-rose-600"
              title="Expert Faculty"
              description="Experienced and passionate educators dedicated to student success."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-slate-100 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-slate-800 shadow-sm relative overflow-hidden border border-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Ready to join our community?</h3>
              <p className="text-lg text-slate-600">Admissions for the current session are closing soon. Don't miss out!</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-extrabold text-lg hover:bg-slate-800 hover:scale-[1.03] active:scale-95 transition-all shadow-lg shrink-0 relative z-10 cursor-pointer"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: any;
  iconBg: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, iconBg, title, description }: FeatureCardProps) => (
  <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 group hover:-translate-y-1">
    <div className={`mb-6 inline-block p-4 rounded-2xl group-hover:scale-110 transition-transform ${iconBg}`}>
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);

export default Home;
