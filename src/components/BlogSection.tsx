import React from 'react';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-brand mb-4">Journal</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter italic">DESIGN <span className="text-white/20 font-normal">THOUGHTS</span></h3>
          </div>
          <a href="#" className="text-brand uppercase text-[11px] font-bold tracking-[0.2em] hover:text-white transition-colors border-b border-brand/30 pb-1">
            View All Articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-8 bg-surface border border-white/5 relative">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">
                <span className="text-brand/80">{post.date}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.readTime}</span>
              </div>
              <h4 className="text-3xl font-bold mb-5 tracking-tight group-hover:text-brand transition-colors flex items-start justify-between gap-4">
                {post.title}
                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 text-brand shrink-0" />
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
