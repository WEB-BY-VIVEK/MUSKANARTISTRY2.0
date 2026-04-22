import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-maroon fill-current">
          <path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-maroon/10 text-brand-maroon text-sm font-semibold tracking-wider uppercase mb-6">
            Best Mehndi Artist in Greater Noida West
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
            Adorning Your <span className="italic text-brand-gold">Moments</span> With Fine Art
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Professional Bridal & Event Mehndi Services at Home. Specialized in Traditional, Arabic, and Modern Royal Bridal designs in Greater Noida West.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary flex items-center justify-center space-x-2">
              <MessageCircle size={20} />
              <span>Book on WhatsApp</span>
            </a>
            <a href="#gallery" className="btn-secondary flex items-center justify-center space-x-2">
              <span>View Designs</span>
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-sm text-gray-500 font-medium uppercase tracking-widest">
            <span className="flex items-center space-x-2 decoration-brand-gold decoration-2 underline underline-offset-4">
              <span>Bridal</span>
            </span>
            <span className="flex items-center space-x-2 decoration-brand-gold decoration-2 underline underline-offset-4">
              <span>Wedding</span>
            </span>
            <span className="flex items-center space-x-2 decoration-brand-gold decoration-2 underline underline-offset-4">
              <span>Parties</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 aspect-[4/5] rounded-t-[100px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/beautifulbridalmehndidesign.jpg" 
              alt="Beautiful Bridal Mehndi Design"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-maroon/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        </motion.div>
      </div>
    </section>
  );
}
