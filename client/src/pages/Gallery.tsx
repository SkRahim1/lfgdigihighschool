import { useState } from 'react';
import { Image as ImageIcon, Search } from 'lucide-react';

const Gallery = () => {
  const [category, setCategory] = useState('All');
  const photos = [
    { id: 1, title: 'Lfg Digi High School Campus', url: `${import.meta.env.BASE_URL}lfg_school_campus.png`, category: 'Campus' },
    { id: 2, title: 'Interactive Science Lab', url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800', category: 'Labs' },
    { id: 3, title: 'Annual Basketball Tournament', url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800', category: 'Sports' },
    { id: 4, title: 'Digital Smart Classroom', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800', category: 'Campus' },
    { id: 5, title: 'Modern Robotics Lab', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800', category: 'Labs' }
  ];

  const categories = ['All', 'Events', 'Campus', 'Sports', 'Labs'];
  const filteredPhotos = category === 'All' ? photos : photos.filter(p => p.category === category);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 py-16 text-slate-800 text-center border-b border-slate-100">
        <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-3 text-slate-900">
          <ImageIcon /> School Gallery
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto px-4">Capturing the vibrant life and milestones of Lfg Digi High School.</p>
      </section>

      {/* Filter */}
      <section className="py-8 border-b sticky top-20 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer ${
                category === cat ? 'bg-school-secondary text-slate-950 shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                  <span className="bg-school-secondary text-slate-950 px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">
                    {photo.category}
                  </span>
                  <h3 className="text-xl font-bold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <Search size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No photos found in this category yet.</p>
            <p className="text-gray-400">Please check back later for updates.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
