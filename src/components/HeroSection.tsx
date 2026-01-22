import React from 'react';
import { motion } from 'framer-motion';
import DiscordInvite from './DiscordInvite';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Title Section */}
      <div className="relative mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent blur-2xl"
        />
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-sans font-thin tracking-[0.3em] text-amber-50/90 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] mb-4"
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          TWILIGHT STATE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-amber-200/60 text-sm md:text-base tracking-[0.5em] uppercase font-light"
        >
          Official Navigation Hub
        </motion.p>
      </div>

      {/* Banner Image Container */}
      <motion.div 
        className="group relative w-full max-w-5xl aspect-[21/9] mb-20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Animated border gradient */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/20 via-orange-500/40 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <img 
          src="/banner.png" 
          alt="Twilight State Banner" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Subtle scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent opacity-60" />
        
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-amber-500/30 group-hover:border-amber-500/60 transition-colors" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-amber-500/30 group-hover:border-amber-500/60 transition-colors" />
      </motion.div>

      {/* CTA and Additional Info */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <DiscordInvite />
        <div className="flex gap-12 text-amber-200/40 text-xs tracking-widest uppercase font-medium">
          <span className="hover:text-amber-400 transition-colors cursor-default">AIGC Style</span>
          <span className="hover:text-amber-400 transition-colors cursor-default">Geometric Rendering</span>
          <span className="hover:text-amber-400 transition-colors cursor-default">Community Driven</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-amber-200/40 uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 text-amber-200/40" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
