import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="w-full bg-offwhite py-12 md:py-20">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Card: Vision */}
          <motion.div
            data-glow-zone="true"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
            className="relative overflow-hidden bg-navy text-offwhite p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-start border border-navy-light"
          >
            {/* Precision 1px cyan highlight rail */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between pb-3.5 border-b border-navy-light/80 mb-5">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold text-cyan">
                [01 // STRATEGIC VISION]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            </div>
            <p className="font-display text-lg sm:text-xl font-medium leading-relaxed text-offwhite/95 m-0">
              To become a leading Australian business transformation and technology
              company that helps organisations improve how they operate, equip
              their people, and use technology to scale.
            </p>
          </motion.div>

          {/* Right Card: Mission */}
          <motion.div
            data-glow-zone="true"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden bg-navy text-offwhite p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-start border border-navy-light"
          >
            {/* Precision 1px cyan highlight rail */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between pb-3.5 border-b border-navy-light/80 mb-5">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold text-cyan">
                [02 // OPERATIONAL MISSION]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            </div>
            <p className="font-display text-lg sm:text-xl font-medium leading-relaxed text-offwhite/95 m-0">
              To provide organisations with practical consulting, skilled
              professionals, digital solutions, training and business resources
              that turn strategy into measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
