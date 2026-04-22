import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Get In <span className="italic text-brand-gold">Touch</span></h2>
            <p className="text-gray-600 text-lg mb-12">
              Ready to adorn your hands with beautiful art? Reach out to us for bookings or queries. We provide doorstep services across Greater Noida West and surrounding areas.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-2xl flex items-center justify-center shrink-0">
                   <Phone size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Call Us</h4>
                   <a href="tel:+919599401022" className="text-brand-maroon hover:underline">+91 9599401022</a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-2xl flex items-center justify-center shrink-0">
                   <MessageCircle size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">WhatsApp</h4>
                   <a href="https://wa.me/919599401022" className="text-brand-maroon hover:underline">+91 9599401022</a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-2xl flex items-center justify-center shrink-0">
                   <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Location</h4>
                   <p className="text-gray-600 text-sm">Greater Noida West, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="w-12 h-12 bg-brand-maroon text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 bg-brand-maroon text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="rounded-[40px] overflow-hidden shadow-xl h-[450px] border border-gray-100 relative group">
            <iframe 
              src="https://www.google.com/maps?q=Greater%20Noida%20West,%20Uttar%20Pradesh&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Live Location Map - Greater Noida West"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-brand-maroon/10 scale-90 group-hover:scale-100 transition-transform origin-top-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-maroon text-white rounded-full flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">Greater Noida West</h4>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Primary Service Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
