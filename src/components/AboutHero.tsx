import { motion } from 'framer-motion';

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

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-6">
            One partner. Every stage of the journey.
          </h1>

          {/* Clean 2-Sentence Intro */}
          <p className="text-xl sm:text-2xl text-ink/80 leading-relaxed max-w-[640px] mx-auto font-normal">
            ConvergeTec unifies strategic advisory, custom software engineering,
            corporate training, and specialist talent to deliver lasting enterprise scale.
          </p>
        </motion.div>

        {/* Feature Hero Image with 2.5D Connected Art */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden border border-navy/15 shadow-2xl shadow-navy/10 bg-navy aspect-[16/9] group">
            <img
              src="/images/art-25d-about.jpg"
              alt="2.5D editorial illustration of ConvergeTec practice leadership team presenting agile roadmap and cloud architecture"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Floating chip badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/85 backdrop-blur-md border border-white/20 text-offwhite text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Unified Practice Leadership
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
