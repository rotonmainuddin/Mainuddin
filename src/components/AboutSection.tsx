import React from 'react';
import { Paintbrush, Layout, Zap, Smartphone, Target, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

const SERVICES = [
  {
    title: 'Logo Design',
    desc: 'Memorable, versatile logos built on strategy and crafted with precision to represent your values.',
    icon: <Target size={32} />,
  },
  {
    title: 'Brand Identity',
    desc: 'Complete visual systems — colors, typography, and guidelines that keep brands consistent.',
    icon: <Fingerprint size={32} />,
  },
  {
    title: 'Social Media Design',
    desc: 'Eye-catching posts, covers, and templates that stop the scroll and drive engagement.',
    icon: <Smartphone size={32} />,
  },
  {
    title: 'Graphic Stationery',
    desc: 'Business cards, letterheads, and brand collateral that leave a professional invitation.',
    icon: <Paintbrush size={32} />,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-dark rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 relative group"
          >
             <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10" />
            <img
              src="/src/assets/images/regenerated_image_1777795137034.png"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>

          <div>
            <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-brand mb-4">About Me</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              I'm <strong>{PERSONAL_INFO.name}</strong>, a passionate graphic designer based in {PERSONAL_INFO.location} with over 13 years of expertise in creating powerful visual identities that help brands stand out. I combine strategic thinking with creative execution to deliver designs that are not just beautiful — but effective.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
               Whether you're a startup building your brand from scratch or an established business looking for a refresh, I deliver smart, clean, and strategic design solutions tailored to your unique market.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/5">
              <div>
                <p className="text-4xl font-display font-black text-brand tracking-tighter">500+</p>
                <p className="text-[11px] uppercase tracking-widest font-bold text-gray-500 mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-display font-black text-brand tracking-tighter">95%</p>
                <p className="text-[11px] uppercase tracking-widest font-bold text-gray-500 mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-dark rounded-2xl border border-white/5 hover:border-brand/30 transition-all group"
            >
              <div className="text-brand mb-8 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
