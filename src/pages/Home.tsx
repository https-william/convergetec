import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ConvergenceTransition from '../components/ConvergenceTransition';
import DivisionsGrid from '../components/DivisionsGrid';
import Differentiator from '../components/Differentiator';
import CTASection from '../components/CTASection';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Crossfade: tile accent circle opacity ramps from 0 at progress 0.75 to 0.35 at progress 1.0
  const tileAccentOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 0.35]);

  return (
    <>
      <SEO
        title="ConvergeTec | Business Transformation & Technology Partner"
        description="ConvergeTec helps organisations improve how they operate, equip their people, and use technology to scale."
        path="/"
      />
      <Hero />
      <ConvergenceTransition
        containerRef={containerRef}
        scrollYProgress={scrollYProgress}
      />
      <DivisionsGrid tileAccentOpacity={tileAccentOpacity} />
      <Differentiator />
      <CTASection />
    </>
  );
}
