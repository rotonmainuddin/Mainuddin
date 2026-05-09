import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Twitter, Linkedin, Palette } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-dark/85 backdrop-blur-xl border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-lg">
        <a href="/" className="font-display font-extrabold text-xl tracking-tighter flex items-center gap-2 group">
          <span>Md. Main <span className="text-brand">Uddin</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.15em] font-bold text-gray-400 hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-brand text-light font-bold text-[13px] uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:scale-105 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex gap-4">
              <Instagram size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
