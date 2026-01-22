import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const DiscordInvite: React.FC = () => {
  return (
    <motion.a
      href="https://discord.gg/5n8cprqpC2"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md border border-amber-500/20 text-amber-50 font-sans tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden rounded-sm"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Moving Light Beam */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex items-center gap-3">
        <MessageCircle className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-light">Enter the State</span>
        <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
      
      {/* Decorative corner accents - more subtle */}
      <div className="absolute top-0 left-0 w-4 h-[1px] bg-amber-500/50 group-hover:w-full transition-all duration-500" />
      <div className="absolute top-0 left-0 h-4 w-[1px] bg-amber-500/50 group-hover:h-full transition-all duration-500" />
      
      <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-amber-500/50 group-hover:w-full transition-all duration-500" />
      <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-amber-500/50 group-hover:h-full transition-all duration-500" />
      
      {/* Outer Glow on hover */}
      <div className="absolute inset-0 shadow-[0_0_30px_rgba(245,158,11,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
};

export default DiscordInvite;
