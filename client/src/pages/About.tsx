import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-16 text-white text-center border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight relative z-10">About Our School</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-sm sm:text-base relative z-10">
          Founded on the principles of excellence and innovation, Lfg Digi High School has been a beacon of learning in Hyderabad.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To be a globally recognized institution that empowers students with knowledge, skills, and values to thrive in an ever-changing world.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To provide a holistic and digital-first education that fosters critical thinking, creativity, and a lifelong passion for learning.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Values</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Integrity, Respect, Excellence, and Inclusivity are at the core of everything we do at Lfg Digi High School.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-900 italic leading-snug">
            "Education is not the learning of facts, but the training of the mind to think."
          </h2>
          <p className="text-slate-500 mb-6 leading-relaxed text-sm sm:text-base">
            As the Principal of Lfg Digi High School, I am honored to lead an institution that prioritizes both academic rigor and the emotional well-being of our students. In today's digital age, we strive to blend modern technology with traditional values, ensuring our students are not only tech-savvy but also grounded in empathy and integrity.
          </p>
          <p className="text-slate-500 mb-8 leading-relaxed text-sm sm:text-base">
            We believe that every child has a unique potential, and our role is to provide the right environment for that potential to flourish.
          </p>
          <div className="inline-block border-l-4 border-school-secondary pl-4 py-1 text-left">
            <p className="font-extrabold text-xl text-slate-900">K. Lata</p>
            <p className="text-slate-500 text-sm font-medium">Principal, Lfg Digi High School</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
