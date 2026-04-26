import React from 'react';

const logo = '/assets/logo.webp';

export default function Footer() {
  return (
    <footer className="bg-brand-maroon text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                Muskan <span className="text-brand-gold italic">Artistry</span>
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering traditional art with modern creativity. Bespoke Mehndi designs for your most cherished moments in Greater Noida West.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Design Gallery</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Muskan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-gold">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Bridal Mehndi</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Engagement Mehndi</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Arabic Designs</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Home Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-white/70 text-xs mb-4">Get updates on our latest designs and festival offers.</p>
            <div className="flex bg-white/10 rounded-xl p-1">
              <input type="email" placeholder="Your email" className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full" />
              <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-lg font-bold text-xs uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <p>© 2026 Muskan Artistry. Managed by Muskan. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <p>Built with ❤️ for Greater Noida West</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
