import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Star, PartyPopper } from 'lucide-react';

const services = [
  {
    title: 'Bridal Mehndi',
    desc: 'Exquisite full hand and leg designs for the modern royal bride.',
    icon: <Star className="text-brand-gold" />,
    styles: ['Traditional', 'Royal Portrait', 'Zardosi Style']
  },
  {
    title: 'Engagement Mehndi',
    desc: 'Stylish and elegant patterns tailored for engagement functions.',
    icon: <Heart className="text-brand-gold" />,
    styles: ['Modern Floral', 'Minimalist', 'Finger Cuffs']
  },
  {
    title: 'Arabic Mehndi',
    desc: 'Bold, thick, and beautiful floral motifs with stunning flow.',
    icon: <Sparkles className="text-brand-gold" />,
    styles: ['Stylish Bel', '3D Designs', 'Indo-Arabic']
  },
  {
    title: 'Events & Parties',
    desc: 'Quick and beautiful designs for Baby Showers, Birthdays, and Events.',
    icon: <PartyPopper className="text-brand-gold" />,
    styles: ['Party Bel', 'Tattoo Style', 'Kids Mehndi']
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Our Exceptional <span className="italic text-brand-gold">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer a wide range of mehndi services in Greater Noida West, ensuring premium quality and professional finishes for every occasion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium p-8 group"
            >
              <div className="w-14 h-14 bg-brand-maroon/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 28, className: 'group-hover:text-white transition-colors' })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <div className="space-y-2">
                {service.styles.map(style => (
                  <div key={style} className="text-xs font-semibold text-brand-maroon bg-brand-maroon/5 px-3 py-1 rounded-full inline-block mr-2 mt-1">
                    {style}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
