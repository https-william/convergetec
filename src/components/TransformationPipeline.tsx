import { motion } from 'framer-motion';
import { Compass, Code2, GraduationCap, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    stage: 'Advise & Diagnose',
    division: 'Consulting',
    icon: Compass,
    description: 'Uncovering operational bottlenecks and architecting executable technical roadmaps.',
  },
  {
    number: '02',
    stage: 'Architect & Build',
    division: 'Digital & Software',
    icon: Code2,
    description: 'Engineering production-ready custom cloud software directly from the strategic blueprint.',
  },
  {
    number: '03',
    stage: 'Equip & Upskill',
    division: 'Academy',
    icon: GraduationCap,
    description: 'Training internal workforce capability so your teams own and operate the systems.',
  },
  {
    number: '04',
    stage: 'Staff & Scale',
    division: 'Resources & Talent',
    icon: Users,
    description: 'Deploying embedded fractional leaders and specialist squads to sustain velocity.',
  },
];

export default function TransformationPipeline() {
  return (
    <section className="w-full bg-offwhite py-24 md:py-32 border-b border-navy/10 relative overflow-hidden">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-[660px] mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white text-navy text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Operating Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4 tracking-tight">
            The Transformation Lifecycle
          </h2>
          <p className="text-ink/75 text-lg sm:text-xl leading-relaxed">
            A cohesive path from strategic diagnosis to sustained operational scale — with zero vendor friction.
          </p>
        </div>

        {/* 4-Step Clean Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-navy/10 hover:border-navy/20 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-navy/5 mb-5">
                    <span className="font-mono text-sm font-bold text-blue">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-offwhite text-navy/70 uppercase tracking-wider font-semibold">
                      {step.division}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-offwhite text-navy flex items-center justify-center mb-4 border border-navy/10">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-navy mb-2">
                    {step.stage}
                  </h3>

                  <p className="text-ink/75 text-sm sm:text-base leading-relaxed m-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
