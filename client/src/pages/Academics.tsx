import { Book, Code, Music, Palette, FlaskConical, Globe, Heart, Target } from 'lucide-react';

const Academics = () => {
  const levels = [
    { name: 'Primary (I-V)', description: 'Building foundations with interactive and play-based learning methods.', icon: <Heart className="text-pink-500" /> },
    { name: 'Middle (VI-VIII)', description: 'Developing critical thinking and exploring subject interests.', icon: <Book className="text-blue-500" /> },
    { name: 'Secondary (IX-X)', description: 'Focused preparation for board exams and career guidance.', icon: <Target className="text-red-500" /> },
  ];

  const subjects = [
    { name: 'Digital Literacy', icon: <Code />, color: 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100' },
    { name: 'Science & Innovation', icon: <FlaskConical />, color: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100' },
    { name: 'Arts & Design', icon: <Palette />, color: 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100' },
    { name: 'Global Languages', icon: <Globe />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100' },
    { name: 'Performing Arts', icon: <Music />, color: 'bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100' },
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 py-16 text-slate-800 text-center border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] pointer-events-none" />
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight relative z-10 text-slate-900">Academics</h1>
        <p className="text-slate-600 max-w-2xl mx-auto px-4 text-sm sm:text-base relative z-10">
          A comprehensive and future-ready curriculum designed for the digital age.
        </p>
      </section>

      {/* Levels */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">Academic Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                {level.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{level.name}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{level.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Beyond the Textbook</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              We integrate technology and hands-on projects into every subject to make learning engaging and relevant.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {subjects.map((s, i) => (
              <div key={i} className={`${s.color} px-8 py-5 rounded-2xl border flex items-center gap-4 font-bold text-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}>
                {s.icon}
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-50 to-slate-100 border border-slate-200 rounded-3xl p-8 lg:p-12 text-slate-800 flex flex-col lg:flex-row items-center gap-12 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
          <div className="flex-grow text-center lg:text-left relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-slate-900">Academic Calendar 2026-27</h2>
            <p className="text-slate-600 mb-8 max-w-lg text-sm sm:text-base">
              Download our full academic calendar to stay updated with exams, holidays, and school events.
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-extrabold text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-lg cursor-pointer">
              Download PDF (Mock)
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md relative z-10 shrink-0">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <p className="text-amber-500 font-bold text-2xl">June 17</p>
              <p className="text-sm text-slate-600 font-semibold">Session Begins</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <p className="text-amber-500 font-bold text-2xl">Aug 15</p>
              <p className="text-sm text-slate-600 font-semibold">Independence Day</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <p className="text-amber-500 font-bold text-2xl">Oct 10-20</p>
              <p className="text-sm text-slate-600 font-semibold">Dussera Holidays</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <p className="text-amber-500 font-bold text-2xl">Dec 24-Jan 2</p>
              <p className="text-sm text-slate-600 font-semibold">Winter Break</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
