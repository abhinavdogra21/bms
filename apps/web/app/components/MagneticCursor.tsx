'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MagneticCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 700 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 700 });
  const scaleVal = useMotionValue(1);
  const scale = useSpring(scaleVal, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    setIsMobile(!isDesktop);
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const grow = () => scaleVal.set(2.5);
    const shrink = () => scaleVal.set(1);

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, .magnetic, .social-link, .btn-glow, .btn-ghost, .project-inner, .nav-link');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, [cursorX, cursorY, scaleVal]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          scale,
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(0, 255, 65, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#00ff41',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
}
