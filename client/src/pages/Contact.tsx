import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!subject.trim()) {
      alert('Please enter a subject.');
      return;
    }
    if (!message.trim()) {
      alert('Please enter your message.');
      return;
    }

    const whatsappMessage = `Hello LFG Digi High School, I would like to contact you.

Full Name: ${name.trim()}
Email Address: ${email.trim() || 'Not Provided'}
Subject: ${subject.trim()}
Message: ${message.trim()}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919381101044?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 py-16 text-slate-800 text-center border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] pointer-events-none" />
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight relative z-10 text-slate-900">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-sm sm:text-base relative z-10">
          We are here to help you. Reach out to us for any queries or to visit our campus.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-extrabold mb-8 text-slate-900 tracking-tight">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              <ContactInfo 
                icon={<MapPin className="text-indigo-600" />}
                iconBg="bg-indigo-50"
                title="Location"
                text="Rajiv Gruhakalpa, Vasanth Nagar Colony, Nizampet, Hyderabad, Telangana 500090"
              />
              <ContactInfo 
                icon={<Phone className="text-emerald-600" />}
                iconBg="bg-emerald-50"
                title="Phone"
                text="+91 93811 01044 / +91 89770 62765"
              />
              <ContactInfo 
                icon={<Mail className="text-amber-600" />}
                iconBg="bg-amber-50"
                title="Email"
                text="info@lfgdigihigh.edu.in / admissions@lfgdigihigh.edu.in"
              />
              <ContactInfo 
                icon={<Clock className="text-rose-600" />}
                iconBg="bg-rose-50"
                title="Office Hours"
                text="Mon - Sat: 8:30 AM - 4:30 PM"
              />
            </div>
            
            {/* Clickable Map Link */}
            <a 
              href="https://maps.app.goo.gl/KiJwCBDDaHFaczYW8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-80 bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner group cursor-pointer border border-slate-200"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4 z-10 bg-slate-950/40 group-hover:bg-slate-950/60 transition-colors duration-300">
                <MapPin size={48} className="text-school-secondary group-hover:scale-110 transition-transform duration-300" />
                <p className="font-extrabold text-lg">Open in Google Maps</p>
                <p className="text-sm text-slate-200 font-semibold">Lfg Digi High School, Nizampet</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none text-sm transition-all text-slate-900" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none text-sm transition-all text-slate-900" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none text-sm transition-all text-slate-900" 
                  placeholder="Admission Query" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5} 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none text-sm transition-all text-slate-900" 
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-extrabold text-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send size={20} /> Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: any;
  iconBg: string;
  title: string;
  text: string;
}

const ContactInfo = ({ icon, iconBg, title, text }: ContactInfoProps) => (
  <div className="flex gap-6 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
    <div className={`p-4 rounded-2xl shrink-0 ${iconBg}`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default Contact;
