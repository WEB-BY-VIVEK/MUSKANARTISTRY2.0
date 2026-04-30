import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const bridalFavorite = 'https://placehold.co/1000x1200/6b0d0d/white?text=Bridal+Special';

export default function BridalSpecial() {
  return (
    <section className="section-padding bg-brand-beige">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl border border-brand-maroon/5">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/5] lg:aspect-auto">
             <img 
               src={bridalFavorite} 
               alt="Bridal Special Mehndi" 
               className="w-full h-full object-cover"
             />
             <div className="absolute top-8 left-8 bg-brand-maroon text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                Bridal Favorite
             </div>
          </div>
          
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-brand-gold mb-6">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
               Exclusive <span className="italic text-brand-gold">Bridal Special</span> Packages
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our signature bridal mehndi isn't just about designs; it's a storytelling art. We include hidden groom names, elegant portrait sketches, and deep intricate detailing inspired by royal Indian traditions.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="font-medium text-gray-700">Customizable Hidden Groom Name Design</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="font-medium text-gray-700">Full Hand & Full Leg Coordination</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="font-medium text-gray-700">Special Post-Application Stain Care Kit</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="font-medium text-gray-700">Premium 100% Organic Henna Cone Service</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#booking" className="btn-primary flex-1 text-center">Book Bridal Package</a>
               <a href="tel:+919599401022" className="btn-secondary flex-1 text-center">Consult for Free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
