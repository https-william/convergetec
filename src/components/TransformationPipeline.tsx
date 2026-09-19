import { motion } from 'framer-motion';

interface PipelineStep {
  number: string;
  division: string;
  stage: string;
  focus: string;
  detail: string;
  accentBorder: string;
  accentText: string;
}

const steps: PipelineStep[] = [
  {
    number: '01',
    division: 'Consulting',
    stage: 'Advise & Diagnose',
    focus: 'Operational Strategy & Architecture',
    detail:
      'We uncover operational bottlenecks, define target operating models, and structure high-impact roadmaps that are technically validated from day one.',
    accentBorder: 'border-t-navy',
    accentText: 'text-navy',
  },
  {
    number: '02',
    division: 'Digital & Software',
    stage: 'Architect & Build',
    focus: 'Production Software & Platforms',
    detail:
      'Our engineers build the custom applications, API integrations, and cloud infrastructure specified during advisory — with zero vendor friction.',
    accentBorder: 'border-t-blue',
    accentText: 'text-blue',
  },
  {
    number: '03',
    division: 'Academy',
    stage: 'Equip & Upskill',
    focus: 'Internal Workforce Capability',
    detail:
      'Rather than creating permanent vendor dependency, we upskill your internal teams through enterprise masterclasses and transformation curricula.',
    accentBorder: 'border-t-cyan',
    accentText: 'text-[#007b99]',
  },
  {
    number: '04',
    division: 'Resources & Talent',
    stage: 'Staff & Scale',
    focus: 'Embedded Specialists & Leadership',
    detail:
      'We supply vetted contract professionals and fractional technology executives to lead critical workstreams and sustain delivery velocity.',
    accentBorder: 'border-t-blue',
    accentText: 'text-blue',
  },
];

export default function TransformationPipeline() {
  return (
    <section className="w-full bg-offwhite py-20 md:py-28 border-b border-navy/10 relative overflow-hidden">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/75 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Unified Operating Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-5 tracking-tight">
            The Transformation Lifecycle: Strategy to Scale
          </h2>
          <p className="text-ink/80 font-body text-base sm:text-lg leading-relaxed">
            Traditional enterprise transformation stalls during handoffs between consultancies,
            software shops, and staffing agencies. ConvergeTec closes the gaps with a single,
            accountable transformation engine.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Pipeline */}
        <div className="relative">
          {/* Connecting 1px rail on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-navy via-blue to-cyan"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 sm:p-7 border border-navy/10 border-t-4 ${step.accentBorder} shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between`}
              >
                <div>
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-5">
                    <span className="font-mono text-xs tracking-widest uppercase font-bold text-navy/60">
                      STEP {step.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-navy/5 text-navy/80">
                      {step.division}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-navy mb-2 leading-snug">
                    {step.stage}
                  </h3>

                  <div className={`font-mono text-xs uppercase tracking-wider font-semibold mb-4 ${step.accentText}`}>
                    {step.focus}
                  </div>

                  <p className="text-ink/75 font-body text-sm sm:text-base leading-relaxed m-0">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
