import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { cn } from '../lib/utils';

export const WorkGrid = () => {
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-brand mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">SELECTED <span className="text-white/20 italic font-normal">WORKS</span></h3>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all",
                activeCategory === cat 
                  ? "bg-brand border-brand text-light shadow-[0_0_15px_rgba(255,107,53,0.3)]" 
                  : "bg-surface border-white/5 text-gray-500 hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.behanceUrl}
                target="_blank"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                   {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-bold mb-3 block">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight mb-4 group-hover:text-brand transition-colors">{project.title}</h4>
                  <p className="text-sm text-gray-500 font-light mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/[0.03] text-[9px] uppercase font-bold tracking-widest text-gray-500 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

