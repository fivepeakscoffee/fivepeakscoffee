import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative w-64 h-px bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-accent"
            />
          </div>
          
          <div className="mt-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs mono-label tracking-[0.3em] text-accent mb-2"
            >
              FIVE PEAKS COFFEE
            </motion.div>
            <div className="text-4xl md:text-6xl font-display tracking-tighter overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block"
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </div>

          <div className="absolute bottom-12 left-12">
            <div className="flex gap-4">
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-75" />
              <div className="w-1 h-1 bg-accent/20 rounded-full animate-pulse delay-150" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
