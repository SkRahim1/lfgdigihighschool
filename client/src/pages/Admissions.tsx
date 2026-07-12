import { useState, useEffect } from 'react';
import { ClipboardCheck, FileText, CreditCard, Users } from 'lucide-react';

const Admissions = () => {
  const steps = [
    { title: 'Inquiry', description: 'Fill out the online inquiry form or visit the campus.', icon: <ClipboardCheck size={24} /> },
    { title: 'Interaction', description: 'Schedule a parent interaction and student assessment.', icon: <Users size={24} /> },
    { title: 'Documentation', description: 'Submit required documents and application form.', icon: <FileText size={24} /> },
    { title: 'Confirmation', description: 'Pay the admission fee to confirm the seat.', icon: <CreditCard size={24} /> },
  ];

  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('Select Grade');

  useEffect(() => {
    if (window.location.hash.endsWith('#inquiry-form')) {
      const element = document.getElementById('inquiry-form');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!studentName.trim()) {
      alert("Please enter the student's name.");
      return;
    }
    if (!phone.trim()) {
      alert('Please enter your phone number.');
      return;
    }
    if (grade === 'Select Grade') {
      alert('Please select a grade.');
      return;
    }

    const message = `Hello LFG Digi High School, I would like to inquire about admission.

Parent Name: ${parentName.trim()}
Student Name: ${studentName.trim()}
Email Address: ${email.trim() || 'Not Provided'}
Phone Number: ${phone.trim()}
Grade: ${grade}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919381101044?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 py-16 text-slate-800 text-center border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] pointer-events-none" />
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight relative z-10 text-slate-900">Admissions Open 2026-27</h1>
        <p className="text-slate-600 max-w-2xl mx-auto px-4 text-sm sm:text-base relative z-10 font-medium">
          Your child's future starts here. Follow our simple 4-step process to join the Lfg Digi High School family.
        </p>
      </section>

      {/* Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">Admission Process</h2>
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-amber-400/50 -translate-y-1/2 -z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-school-secondary text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-school-secondary/15">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Inquiry Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl text-slate-800 shadow-xl relative overflow-hidden max-w-xl w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(245,158,11,0.05),transparent)] pointer-events-none" />
          <h3 className="text-2xl font-bold mb-6 text-center relative z-10 text-slate-900">Online Inquiry Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <input 
              type="text" 
              placeholder="Parent Name" 
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full p-4 rounded-xl text-slate-900 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 text-sm" 
            />
            <input 
              type="text" 
              placeholder="Student Name" 
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-4 rounded-xl text-slate-900 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 text-sm" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl text-slate-900 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 text-sm" 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-xl text-slate-900 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 text-sm" 
            />
            <select 
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-4 rounded-xl text-slate-800 bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 text-sm animate-in fade-in"
            >
              <option value="Select Grade">Select Grade</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1st Class">1st Class</option>
              <option value="2nd Class">2nd Class</option>
              <option value="3rd Class">3rd Class</option>
              <option value="4th Class">4th Class</option>
              <option value="5th Class">5th Class</option>
              <option value="6th Class">6th Class</option>
              <option value="7th Class">7th Class</option>
              <option value="8th Class">8th Class</option>
              <option value="9th Class">9th Class</option>
              <option value="10th Class">10th Class</option>
            </select>
            <button 
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-extrabold text-lg hover:scale-[1.01] transition-transform shadow-lg shadow-slate-950/10 cursor-pointer"
            >
              Submit Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
