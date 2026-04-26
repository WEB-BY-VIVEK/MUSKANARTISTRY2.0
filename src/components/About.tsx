import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const leadArtist = '/assets/leadartist.png';
const detailedWork = '/assets/detailed_work.png';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block relative">
             <div className="aspect-square rounded-3xl overflow-hidden shadow-xl rotate-3">
                <img 
                  src={leadArtist} 
                  alt="Muskan - Professional Mehndi Artist" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl -rotate-6 border-8 border-white">
                <img 
                  src={detailedWork} 
                  alt="Muskan's Detailed Art Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              About <span className="italic text-brand-gold">Muskan Artistry</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Muskan Artistry is a trusted name for professional mehndi services in <strong>Greater Noida West</strong>. With years of experience and a passion for art, we provide creative, intricate, and unique mehndi designs that make your special occasions even more memorable.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed text-sm md:text-base">
              Whether it's your big wedding day or a local festival like Karwa Chauth, we bring our expertise right to your doorstep, ensuring a comfortable experience and stunning results with deep, rich henna color.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Expert Bridal Specialist',
                'Home Service Available',
                'Deep Organic Stain',
                'Trending Design Styles',
                'Affordable Packages',
                '100% Client Satisfaction'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <a href="#booking" className="btn-primary">Learn More About Us</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
