import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <img src={logo} alt="Muskan Mehndi Studio Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight ${scrolled ? 'text-brand-maroon' : 'text-brand-maroon'}`}>
            Muskan <span className="text-gold italic">Artistry</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors text-gray-700"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+919599401022" className="btn-primary py-2 px-6 text-sm flex items-center space-x-2">
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-maroon p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+91XXXXXXXXXX" className="btn-primary flex items-center space-x-2">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
