import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="w-full bg-offwhite py-16 md:py-20">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Left Card: Strategic Vision */}
          <motion.div
            data-glow-zone="true"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden bg-navy text-offwhite p-7 sm:p-9 rounded-2xl shadow-sm flex flex-col justify-between border border-navy-light/90"
          >
            {/* 1px highlight line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
              aria-hidden="true"
            />
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-navy-light/80 mb-6">
                <div className="flex items-center gap-2 text-cyan">
                  <Compass className="w-4 h-4" />
                  <span className="font-mono text-xs tracking-widest uppercase font-bold">
                    Strategic Vision
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                To be Australia&apos;s definitive transformation engine.
              </h3>
              <p className="font-body text-offwhite/80 text-base leading-relaxed m-0">
                Helping modern organisations fundamentally improve operating models, equip internal teams, and deploy cloud technology to scale without limits.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Operational Mission */}
          <motion.div
            data-glow-zone="true"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden bg-navy text-offwhite p-7 sm:p-9 rounded-2xl shadow-sm flex flex-col justify-between border border-navy-light/90"
          >
            {/* 1px highlight line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue/40 to-transparent"
              aria-hidden="true"
            />
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-navy-light/80 mb-6">
                <div className="flex items-center gap-2 text-blue">
                  <Target className="w-4 h-4" />
                  <span className="font-mono text-xs tracking-widest uppercase font-bold text-offwhite/90">
                    Operational Mission
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Turn boardroom strategy into live production outcomes.
              </h3>
              <p className="font-body text-offwhite/80 text-base leading-relaxed m-0">
                Providing pragmatic advisory, skilled delivery talent, enterprise software engineering, and corporate learning that generate verifiable ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
