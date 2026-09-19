import { useState, useEffect } from 'react';
import type { RefObject } from 'react';
import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface ConvergenceTransitionProps {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}

export default function ConvergenceTransition({
  containerRef,
  scrollYProgress,
}: ConvergenceTransitionProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMedia = () => {
      const isWide = window.innerWidth >= 900;
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      setIsDesktop(isWide);
      setPrefersReducedMotion(reducedMotion);
    };

    checkMedia();
    window.addEventListener('resize', checkMedia);
    return () => window.removeEventListener('resize', checkMedia);
  }, []);

  // 1. Ring Navy (#0B1E4D) -> Tile 1 Top-Right
  const navyX = useTransform(scrollYProgress, [0, 1], ['71%', '28%']);
  const navyY = useTransform(scrollYProgress, [0, 1], ['42%', '52%']);
  const navyScale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const navyOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [0.85, 0.85, 0]
  );

  // 2. Ring Blue (#0078E0) -> Tile 2 Bottom-Left
  const blueX = useTransform(scrollYProgress, [0, 1], ['77%', '33%']);
  const blueY = useTransform(scrollYProgress, [0, 1], ['42%', '76%']);
  const blueScale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const blueOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [0.85, 0.85, 0]
  );

  // 3. Ring Cyan (#00C4F0) -> Tile 3 Top-Left
  const cyanX = useTransform(scrollYProgress, [0, 1], ['74%', '51%']);
  const cyanY = useTransform(scrollYProgress, [0, 1], ['50%', '52%']);
  const cyanScale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const cyanOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [0.85, 0.85, 0]
  );

  // 4. Ring Blue Clone (#0078E0) -> Tile 4 Bottom-Right (arrives late at progress 0.4)
  const cloneX = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ['77%', '77%', '82%']
  );
  const cloneY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ['42%', '42%', '76%']
  );
  const cloneScale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const cloneOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    [0, 0.85, 0.85, 0]
  );

  // Disable scroll scrub on mobile (<900px) or if user prefers reduced motion
  if (!isDesktop || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: '160vh' }}
      className="-mt-[85vh] pointer-events-none z-20"
      aria-hidden="true"
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
        className="w-full"
      >
        {/* Ring 1: Navy */}
        <motion.div
          id="ring-navy"
          className="absolute w-[180px] h-[180px] rounded-full bg-navy pointer-events-none"
          style={{
            left: navyX,
            top: navyY,
            scale: navyScale,
            opacity: navyOpacity,
            translateX: '-50%',
            translateY: '-50%',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Ring 2: Blue */}
        <motion.div
          id="ring-blue"
          className="absolute w-[180px] h-[180px] rounded-full bg-blue pointer-events-none"
          style={{
            left: blueX,
            top: blueY,
            scale: blueScale,
            opacity: blueOpacity,
            translateX: '-50%',
            translateY: '-50%',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Ring 3: Cyan */}
        <motion.div
          id="ring-cyan"
          className="absolute w-[180px] h-[180px] rounded-full bg-cyan pointer-events-none"
          style={{
            left: cyanX,
            top: cyanY,
            scale: cyanScale,
            opacity: cyanOpacity,
            translateX: '-50%',
            translateY: '-50%',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Ring 4: Blue Clone (id="ring-blue-clone") */}
        <motion.div
          id="ring-blue-clone"
          className="absolute w-[180px] h-[180px] rounded-full bg-blue pointer-events-none"
          style={{
            left: cloneX,
            top: cloneY,
            scale: cloneScale,
            opacity: cloneOpacity,
            translateX: '-50%',
            translateY: '-50%',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </div>
  );
}
