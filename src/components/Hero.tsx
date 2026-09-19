import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite min-h-[85vh] flex items-center overflow-hidden py-16 md:py-24">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column (max-width 800px) */}
          <div className="lg:col-span-7 xl:col-span-8 max-w-[800px] relative z-10">
            {/* Architectural System Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/75 text-xs font-mono tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              Australian Business &amp; Technology Partner
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Advise. Transform. Build. Equip. Scale.
            </h1>

            <p className="font-body text-lg sm:text-xl leading-relaxed max-w-[640px] mb-8 sm:mb-10 text-ink/90">
              ConvergeTec is an Australian business transformation and technology
              partner — helping organisations improve how they operate, equip
              their people, and use technology to scale.
            </p>

            {/* CTAs: Decisive Primary Action + Architectural Page-Progression Anchor */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Button
                to="/contact"
                variant="primary"
                className="px-7 py-3.5 text-base sm:text-lg"
              >
                Book a Discovery Call
              </Button>
              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base sm:text-lg font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline"
              >
                <span>Explore the Four Divisions</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three Interlocked Circles Graphic (Mobile only: <900px / lg:hidden. Desktop uses ConvergenceTransition) */}
          <div className="absolute inset-0 m-auto flex items-center justify-center opacity-20 pointer-events-none lg:hidden">
            <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] relative">
              <svg
                viewBox="0 0 380 380"
                className="w-full h-full overflow-visible"
                aria-hidden="true"
              >
                {/* Circle 1: Navy (#0B1E4D) - top-left, offset -120px x/y */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="90"
                  fill="#0B1E4D"
                  fillOpacity="0.85"
                  initial={{ x: -120, y: -120, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 0.85 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
                  style={{ mixBlendMode: 'multiply' }}
                />

                {/* Circle 2: Blue (#0078E0) - top-right, offset +120px x, -120px y */}
                <motion.circle
                  cx="230"
                  cy="150"
                  r="90"
                  fill="#0078E0"
                  fillOpacity="0.85"
                  initial={{ x: 120, y: -120, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 0.85 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
                  style={{ mixBlendMode: 'multiply' }}
                />

                {/* Circle 3: Cyan (#00C4F0) - bottom, offset +120px y */}
                <motion.circle
                  cx="190"
                  cy="230"
                  r="90"
                  fill="#00C4F0"
                  fillOpacity="0.85"
                  initial={{ x: 0, y: 120, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 0.85 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  style={{ mixBlendMode: 'multiply' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
