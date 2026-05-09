import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

export const WhatsAppButton = () => {
  const whatsappNumber = PERSONAL_INFO.whatsapp.replace(/\D/g, ''); 
  const message = encodeURIComponent("Hi! I'm interested in starting a project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};
