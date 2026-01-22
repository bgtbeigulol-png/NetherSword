import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ChomikEasterEgg: React.FC = () => {
  const [isFound, setIsFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 3) {
      setIsFound(true);
      setClickCount(0);
    }
  }, [clickCount]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <motion.div
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setClickCount(prev => prev + 1)}
      >
        {/* Hint sparkles */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-2 bg-amber-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"
        />
        
        <span className="text-2xl opacity-5 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0">
          🐹
        </span>
      </motion.div>
      
      <AnimatePresence>
        {isFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-64 p-6 bg-[#27130a]/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="relative">
              <Sparkles className="absolute -top-10 -left-2 w-6 h-6 text-amber-400 animate-bounce" />
              <h3 className="text-amber-100 font-sans tracking-widest uppercase text-sm mb-2">Secret Found</h3>
              <p className="text-amber-200/60 text-xs leading-relaxed mb-4">
                You've discovered the hidden Chomik! The Twilight State welcomes your curiosity.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl">🐹</span>
                <button 
                  className="text-[10px] tracking-widest uppercase text-amber-500 hover:text-amber-300 transition-colors border-b border-amber-500/30 pb-0.5"
                  onClick={() => setIsFound(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChomikEasterEgg;
