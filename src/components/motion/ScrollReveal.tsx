import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Graceful reduction for reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    if (direction === 'up') y = distance;
    if (direction === 'down') y = -distance;
    if (direction === 'left') x = distance;
    if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x,
          y
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, direction, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

