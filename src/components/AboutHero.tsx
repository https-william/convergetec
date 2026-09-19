import { motion } from 'framer-motion';
import { DoodleUnderline } from './Doodles';

export default function AboutHero() {
  return (
    <section className="w-full bg-offwhite pt-20 pb-16 md:pt-28 md:pb-24 border-b border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white text-navy text-xs font-mono tracking-widest uppercase mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            About ConvergeTec
          </div>

          {/* Headline with Hand-drawn Doodle Underline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-6">
            One partner. Every stage of the{' '}
            <span className="relative inline-block">
              journey.
              <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full pointer-events-none">
                <DoodleUnderline color="#0078E0" className="w-full h-auto" />
              </span>
            </span>
          </h1>

          {/* Clean 2-Sentence Intro in Claude's Editorial Serif */}
          <p className="font-claude text-xl sm:text-2xl text-ink/80 leading-relaxed max-w-[640px] mx-auto font-normal">
            ConvergeTec unifies strategic advisory, custom software engineering,
            corporate training, and specialist talent to deliver lasting enterprise scale.
          </p>
        </motion.div>

        {/* Feature Hero Image with Subtle Glassmorphic Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-navy/15 shadow-xl shadow-navy/5 bg-navy aspect-[16/9] group">
            <img
              src="/images/about-transformation-team.jpg"
              alt="ConvergeTec leadership and advisory team in strategic session"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Overlay Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-5 sm:p-7 pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-offwhite text-xs sm:text-sm font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-semibold uppercase text-cyan">Active Practice</span>
                <span className="text-offwhite/40">|</span>
                <span className="text-offwhite/90">Multidisciplinary Advisory Session // Sydney &amp; Melbourne</span>
              </div>
              <span className="text-xs font-mono text-offwhite/60 uppercase tracking-widest hidden sm:inline-block">
                END-TO-END DELIVERY
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
