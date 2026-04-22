import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Bridal Mehndi',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare WhatsApp Message
    const whatsappNumber = '919599401022'; // Updated with real number
    const text = `*New Mehndi Inquiry - Muskan Artistry*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Event Date:* ${formData.date}%0A` +
                 `*Event Type:* ${formData.eventType}%0A` +
                 `*Location:* ${formData.location}%0A` +
                 `*Message:* ${formData.message || 'No additional message'}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Redirect after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking" className="section-padding bg-brand-beige">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-brand-maroon/5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4">Book Your <span className="italic text-brand-gold">Appointment</span></h2>
          <p className="text-gray-600">Fill the form below to share your details via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Muskan" 
                className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
              <input 
                required 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="+91 XXXXX XXXXX" 
                className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Event Date</label>
              <input 
                required 
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date" 
                className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Event Type</label>
              <select 
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all"
              >
                <option>Bridal Mehndi</option>
                <option>Wedding Guest Mehndi</option>
                <option>Engagement Ceremony</option>
                <option>Festival (Karwa Chauth/Eid)</option>
                <option>Party/Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Location in Greater Noida West</label>
            <input 
              required 
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text" 
              placeholder="Apartment / Sector Name" 
              className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Message (Optional)</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements?" 
              rows={3} 
              className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon transition-all"
            ></textarea>
          </div>

          <button disabled={isSubmitting} type="submit" className="w-full btn-primary py-4 flex items-center justify-center space-x-2 text-lg">
            {isSubmitting ? 'Opening WhatsApp...' : (
              <>
                <span>Enquire via WhatsApp</span>
                <MessageCircle size={24} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
