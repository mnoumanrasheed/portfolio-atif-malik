import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExecutivePreloaderProps {
  onComplete?: () => void;
}

export const ExecutivePreloader: React.FC<ExecutivePreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 1350; // 1.35s smooth executive intro

    let animationFrameId: number;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      // Ease-out cubic curve for smooth progress acceleration
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = originalOverflow;
          onComplete?.();
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="executive-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-3%',
            filter: 'blur(8px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06161B] text-white select-none overflow-hidden"
          aria-live="polite"
          aria-label="Loading Atif I. Malik Executive Portfolio"
        >
          {/* Ambient Emerald Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute w-[520px] h-[520px] rounded-full bg-[#286252]/25 blur-[110px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Architectural Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none [background-image:linear-gradient(rgba(84,203,168,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(84,203,168,0.7)_1px,transparent_1px)] [background-size:40px_40px]"
            aria-hidden="true"
          />

          {/* Top Specular Accent Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54CBA8]/60 to-transparent"
            aria-hidden="true"
          />

          {/* Centerpiece Content */}
          <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
            {/* Logo Container with Subtle Luminous Halo */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Soft pulse ring behind emblem */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -inset-6 rounded-full bg-[#286252]/20 blur-xl pointer-events-none"
              />

              <img
                src="/logo-dark.png"
                alt="Atif I. Malik"
                className="h-20 sm:h-24 w-auto object-contain relative z-10 drop-shadow-[0_8px_24px_rgba(40,98,82,0.35)]"
                loading="eager"
              />
            </motion.div>

            {/* Executive Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#54CBA8] text-center"
            >
              Technology &amp; AI Executive &middot; AI Product Innovator
            </motion.p>

            {/* Smooth Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: '60%' }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 w-full max-w-[220px] space-y-2.5"
            >
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#286252] via-[#54CBA8] to-[#286252] rounded-full shadow-[0_0_12px_#54CBA8]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.16em] text-slate-400">
                <span className="uppercase">Initializing</span>
                <span className="text-[#54CBA8] font-semibold tabular-nums">{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
