import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, User, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-brand mb-4">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-8 italic">
              START A <span className="text-white/20 font-normal">PROJECT</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
              Ready to elevate your brand identity? I'm currently accepting new projects and 
              would love to hear about your vision. Let's create something extraordinary together.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-400 hover:text-brand transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Me</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              <a href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-brand transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">WhatsApp</p>
                  <p className="text-lg font-medium">{PERSONAL_INFO.whatsapp}</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface p-10 rounded-3xl border border-white/5 relative"
          >
            {submitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <CheckCircle size={60} className="text-green-500 mb-6" />
                <h4 className="text-3xl font-bold mb-4">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <User className="absolute left-0 bottom-3 text-gray-600 transition-colors group-focus-within:text-brand" size={18} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 py-3 pl-8 focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-medium"
                    required
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-0 bottom-3 text-gray-600 transition-colors group-focus-within:text-brand" size={18} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/10 py-3 pl-8 focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-medium"
                    required
                  />
                </div>
                <div className="relative group">
                  <MessageSquare className="absolute left-0 top-1 text-gray-600 transition-colors group-focus-within:text-brand" size={18} />
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-1 pl-8 focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-medium resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-brand text-light font-bold uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
