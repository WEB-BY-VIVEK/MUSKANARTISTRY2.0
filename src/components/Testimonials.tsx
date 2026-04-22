import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priyanka Sharma',
    location: 'Noida Extension',
    text: 'Muskan applied my bridal mehndi and it was absolutely stunning! The designs were so intricate and the color was so rich. Everyone loved it!',
    rating: 5
  },
  {
    name: 'Anjali Verma',
    location: 'Greater Noida West',
    text: 'Best mehndi artist in town! She is very patient, punctual and her designs are very modern yet traditional. Highly recommend for any event.',
    rating: 5
  },
  {
    name: 'Shweta Gupta',
    location: 'Gaur City',
    text: 'I booked her for my Karwa Chauth and I was amazed by the speed and neatness of her work. The Arabic design was exactly what I wanted.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Happy <span className="italic text-brand-gold">Clients</span></h2>
          <p className="text-gray-600">See what our customers from Greater Noida West say about our services.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-brand-beige rounded-3xl relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-maroon text-white rounded-full flex items-center justify-center shadow-lg">
                 <Quote size={20} />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" className="text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h4 className="font-serif font-bold text-lg text-brand-maroon">{testimonial.name}</h4>
                <p className="text-xs font-semibold text-brand-gold uppercase tracking-widest">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
