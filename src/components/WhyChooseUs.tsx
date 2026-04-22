import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Palette, ShieldCheck, Tag, Home, Clock } from 'lucide-react';

const reasons = [
  { icon: <UserCheck />, title: 'Experienced Artist', desc: 'Years of expertise in intricate bridal & custom designs.' },
  { icon: <Palette />, title: 'Trending Designs', desc: 'Stay updated with the latest bridal and Arabic mehndi trends.' },
  { icon: <ShieldCheck />, title: 'Hygienic Service', desc: '100% natural henna with no chemicals for safe application.' },
  { icon: <Tag />, title: 'Affordable Packages', desc: 'Premium services at competitive prices with clear packages.' },
  { icon: <Home />, title: 'Home Service', desc: 'Enjoy professional mehndi services in the comfort of your home.' },
  { icon: <Clock />, title: 'On Time Booking', desc: 'Value for your time with punctual arrival for assignments.' }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-green text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Why <span className="italic text-brand-gold">Choose Us</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Discover why we are the preferred mehndi artist for brides in Greater Noida West.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="w-12 h-12 bg-brand-gold text-brand-maroon rounded-full flex items-center justify-center shrink-0 shadow-lg">
                {React.cloneElement(reason.icon as React.ReactElement, { size: 24 })}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-gold">{reason.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
