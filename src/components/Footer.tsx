import React from 'react';
import { Instagram, Twitter, Linkedin, Github, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <a href="/" className="font-display font-black text-2xl tracking-tighter mb-4 flex items-center gap-2 group">
              <span>Md. Main <span className="text-brand">Uddin</span></span>
            </a>
            <p className="text-gray-500 max-w-sm font-light text-sm">
              Designing the future with bold visuals and strategic thinking. 
              Let's build something iconic for your business.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Palette size={20} />, href: PERSONAL_INFO.behance, label: 'Behance' },
              { icon: <Instagram size={20} />, href: "#", label: 'Instagram' },
              { icon: <Linkedin size={20} />, href: "#", label: 'LinkedIn' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-brand hover:text-brand hover:scale-110 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
          <p>© 2025 {PERSONAL_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
