import { motion } from 'framer-motion';
import { DoodleUnderline } from './Doodles';

export default function AboutHero() {
  return (
    <section className="w-full bg-offwhite pt-24 pb-16 md:pt-32 md:pb-24 border-b border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto text-center mb-14 sm:mb-20"
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

          {/* Clean 2-Sentence Intro */}
          <p className="text-xl sm:text-2xl text-ink/80 leading-relaxed max-w-[640px] mx-auto font-normal">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
