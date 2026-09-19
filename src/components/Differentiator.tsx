import { motion } from 'framer-motion';
import { Shield, Layers, Award } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Single Accountability',
    description: 'One trusted leadership team accountable from boardroom strategy to running production software.',
  },
  {
    icon: Layers,
    title: 'Co-Architected Systems',
    description: 'Engineers and advisors build software tailored directly to your operating rhythm — zero handoff loss.',
  },
  {
    icon: Award,
    title: 'Permanent IP Retention',
    description: 'Workforce academies and masterclasses ensure modern capabilities stay inside your organisation.',
  },
];

export default function Differentiator() {
  return (
    <section data-glow-zone="true" className="relative w-full bg-navy text-offwhite py-24 md:py-32 overflow-hidden border-t border-navy-light/60">
      <div className="content-container relative z-10">
        <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            The Difference
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Why settle for fragmented consulting when you can have a single accountable partner?
          </h2>

          <p className="font-tiempos text-xl sm:text-2xl text-offwhite/80 leading-relaxed font-normal max-w-[640px] mx-auto">
            Traditional enterprise transformation stalls during handoffs between advisory firms, software agencies, and recruiters. ConvergeTec unites all disciplines under one accountable engine.
          </p>
        </div>

        {/* 3 Calm, Elegant Luxury Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-navy-light/40 rounded-2xl p-8 sm:p-9 border border-navy-light/80 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue/15 border border-blue/30 text-cyan flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-offwhite/75 font-tiempos text-base leading-relaxed m-0">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
