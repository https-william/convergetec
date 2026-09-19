import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [canHover] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const [isVisible, setIsVisible] = useState(false);

  // Center the 300px circle on the cursor with smooth spring trailing lag
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (!canHover) return;

    const handlePointerMove = (e: PointerEvent) => {
      // Offset by half the 300px circle width/height (150px)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);

      // Only show when hovering a designated dark navy section
      const target = e.target as HTMLElement | null;
      const inGlowZone = !!target?.closest('[data-glow-zone="true"]');
      setIsVisible(inGlowZone);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [canHover, mouseX, mouseY]);

  if (!canHover) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-40"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          'radial-gradient(circle, rgba(0, 196, 240, 0.25), transparent 70%)',
        filter: 'blur(20px)',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    />
  );
}
