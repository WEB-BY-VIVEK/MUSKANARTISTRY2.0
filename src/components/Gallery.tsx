import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Bridal', 'Arabic', 'Traditional', 'Modern'];

const galleryImages = [
  { url: '/assets/000.webp', title: 'Royal Bridal Portrait', category: 'Bridal' },
  { url: '/assets/01.webp', title: 'Arabic Floral Fusion', category: 'Arabic' },
  { url: '/assets/03.webp', title: 'Intricate Minimalist', category: 'Traditional' },
  { url: '/assets/04.webp', title: 'Full Arm Marigold', category: 'Modern' },
  { url: '/assets/06.webp', title: 'Designer Feet Mehndi', category: 'Modern' },
  { url: '/assets/beautifulbridalmehndidesign.webp', title: 'Celebration Style', category: 'Bridal' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Design <span className="italic text-brand-gold">Gallery</span></h2>
          <p className="text-gray-600 mb-8">Browse through our latest artistic creations and find inspiration for your event.</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-brand-maroon text-white border-brand-maroon shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-maroon'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <p className="text-white/80 text-sm mb-1 uppercase tracking-wider">{image.category}</p>
                   <h3 className="text-white font-serif text-lg md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                   </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow on Instagram for More
           </a>
        </div>
      </div>
    </section>
  );
}
