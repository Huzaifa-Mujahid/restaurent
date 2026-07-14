'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      const whatsappNumber = "923207013160";
      const message = `New Contact Form Submission:%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(whatsappUrl, '_blank');

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-surface-container-low p-8 md:p-10 rounded-lg border border-outline-variant/10 shadow-2xl relative overflow-hidden">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-primary text-on-primary py-4 px-6 text-center font-label-caps font-semibold tracking-widest z-10"
          >
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="font-headline-md text-2xl text-on-surface mb-8">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-label-caps text-on-surface-variant mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-surface-dim border ${errors.name ? 'border-error' : 'border-outline-variant/30 focus:border-primary'} rounded px-4 py-3 text-on-surface focus:outline-none transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-error text-xs mt-1 font-label-caps">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-label-caps text-on-surface-variant mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-surface-dim border ${errors.email ? 'border-error' : 'border-outline-variant/30 focus:border-primary'} rounded px-4 py-3 text-on-surface focus:outline-none transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-error text-xs mt-1 font-label-caps">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block font-label-caps text-on-surface-variant mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full bg-surface-dim border ${errors.message ? 'border-error' : 'border-outline-variant/30 focus:border-primary'} rounded px-4 py-3 text-on-surface focus:outline-none transition-colors resize-none`}
            placeholder="How can we help you?"
          ></textarea>
          {errors.message && <p className="text-error text-xs mt-1 font-label-caps">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-on-primary font-label-caps font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:brightness-110 active:scale-[0.98]'}`}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  );
}
