import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1621236304845-81149472dc06?auto=format&fit=crop&q=80&w=600', title: 'Royal Bridal Portrait' },
  { url: 'https://images.unsplash.com/photo-1612450756770-5f2f53488219?auto=format&fit=crop&q=80&w=600', title: 'Arabic Floral Fusion' },
  { url: 'https://images.unsplash.com/photo-1596484552979-3300f451ea96?auto=format&fit=crop&q=80&w=600', title: 'Intricate Minimalist' },
  { url: 'https://images.unsplash.com/photo-1621236304724-4f014e3b7470?auto=format&fit=crop&q=80&w=600', title: 'Full Arm Marigold' },
  { url: 'https://images.unsplash.com/photo-1616422896590-73df9cbad4d7?auto=format&fit=crop&q=80&w=600', title: 'Designer Feet Mehndi' },
  { url: 'https://images.unsplash.com/photo-1621236304603-9d0d348a7356?auto=format&fit=crop&q=80&w=600', title: 'Celebration Style' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Design <span className="italic text-brand-gold">Gallery</span></h2>
          <p className="text-gray-600">Browse through our latest artistic creations and finds inspiration for your event.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <span className="text-white font-serif text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow on Instagram for More
           </a>
        </div>
      </div>
    </section>
  );
}
