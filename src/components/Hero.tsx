import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
        
        {/* Subtle Grid - referencing the HTML snippet style */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="px-5 py-2 bg-brand/10 border border-brand/20 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="text-[13px] tracking-widest font-bold text-brand uppercase">
              Available for New Projects
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[40px] leading-[50px] md:text-[40px] lg:text-[40px] font-display font-extrabold tracking-tighter mb-8 italic uppercase"
        >
          SMART <span className="text-brand">BRANDING</span>. <br />
          CLEAN <span className="text-white/30">DESIGN</span>. <br />
          STRONG <span className="text-brand">VISUAL IDENTITY</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light"
        >
          I'm <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong> — specializing in 
          <span className="text-white font-medium"> Logo Design</span>, 
          <span className="text-white font-medium"> Social Media Design</span> & 
          <span className="text-white font-medium"> Brand Identity</span> that makes an impact.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.6 }}
           className="flex flex-col gap-5 justify-center"
        >
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#work"
              className="group px-10 py-5 bg-brand text-light font-bold rounded-full flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-all duration-300"
            >
              VIEW MY PORTFOLIO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-surface border border-white/10 font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/5 hover:border-brand/40 transition-all transition-all"
            >
              <MessageCircle size={20} className="text-brand" />
              WHATSAPP ME
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <a 
              href={PERSONAL_INFO.behance} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 group bg-brand text-dark shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] px-6 py-3 rounded-full transition-all duration-300 font-bold text-[13px] uppercase tracking-widest border border-brand"
            >
              Follow on Behance <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.dribbble} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 group bg-[#EA4C89] text-white shadow-[0_0_15px_rgba(234,76,137,0.3)] hover:shadow-[0_0_25px_rgba(234,76,137,0.5)] px-6 py-3 rounded-full transition-all duration-300 font-bold text-[13px] uppercase tracking-widest border border-[#EA4C89]"
            >
              Follow on Dribbble <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand/50 to-transparent" />
      </motion.div>
    </section>
  );
};
