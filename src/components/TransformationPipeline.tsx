import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cpu, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

interface PipelineStep {
  number: string;
  division: string;
  stage: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  outputs: string[];
  accentColor: string;
  accentBorder: string;
}

const steps: PipelineStep[] = [
  {
    number: '01',
    division: 'Consulting',
    stage: 'Diagnose & Blueprint',
    icon: Search,
    tagline: 'We uncover operational bottlenecks and design executable technical roadmaps.',
    outputs: ['Target Operating Model', 'Data & AI Architecture', 'Investment Feasibility'],
    accentColor: 'text-navy',
    accentBorder: 'border-t-navy',
  },
  {
    number: '02',
    division: 'Digital & Software',
    stage: 'Architect & Build',
    icon: Cpu,
    tagline: 'Our engineers build production-ready cloud software directly from the blueprint.',
    outputs: ['Custom SaaS Systems', 'Enterprise API Mesh', 'Automated Workflows'],
    accentColor: 'text-blue',
    accentBorder: 'border-t-blue',
  },
  {
    number: '03',
    division: 'Academy',
    stage: 'Equip & Upskill',
    icon: Award,
    tagline: 'We train your internal teams to operate and scale the technology independently.',
    outputs: ['Executive Masterclasses', 'Methodology Certifications', 'Knowledge Transfer'],
    accentColor: 'text-[#007b99]',
    accentBorder: 'border-t-cyan',
  },
  {
    number: '04',
    division: 'Resources & Talent',
    stage: 'Staff & Scale',
    icon: TrendingUp,
    tagline: 'Embedded fractional leaders and specialists maintain velocity as you grow.',
    outputs: ['Fractional Executives', 'Specialist Delivery Leads', 'High-Velocity Squads'],
    accentColor: 'text-blue',
    accentBorder: 'border-t-blue',
  },
];

export default function TransformationPipeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = steps[activeStep];

  return (
    <section className="w-full bg-offwhite py-20 md:py-28 border-b border-navy/10 relative overflow-hidden">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-[640px] mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white text-navy text-xs font-mono tracking-widest uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            End-to-End Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4 tracking-tight">
            From Blueprint to Sustained Scale
          </h2>
          <p className="text-ink/75 font-body text-base sm:text-lg leading-relaxed">
            Eliminating the traditional friction of handoffs between separate consultancies,
            software developers, and recruitment agencies.
          </p>
        </div>

        {/* 4-Step Interactive Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 max-w-[1140px] mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue shadow-lg ring-1 ring-blue/20'
                    : 'bg-white/60 border-navy/10 hover:bg-white hover:border-navy/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy/10">
                    <span className="font-mono text-xs font-bold text-ink/50">
                      STEP {step.number}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-navy/5 text-navy font-semibold">
                      {step.division}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-blue text-white' : 'bg-navy/5 text-navy'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-navy m-0">
                      {step.stage}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-navy/5 flex items-center justify-between text-xs font-mono text-ink/60">
                  <span>{isSelected ? 'ACTIVE VIEW' : 'CLICK TO INSPECT'}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue' : 'bg-navy/20'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Inspection Card */}
        <div className="max-w-[1140px] mx-auto bg-white rounded-2xl border border-navy/10 p-6 sm:p-8 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-7">
                <span className="font-mono text-xs uppercase tracking-widest text-blue font-bold block mb-1">
                  Stage {current.number} Focus // {current.division}
                </span>
                <h4 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-3">
                  {current.stage}
                </h4>
                <p className="text-ink/80 font-body text-base leading-relaxed m-0">
                  {current.tagline}
                </p>
              </div>

              <div className="md:col-span-5 bg-offwhite p-5 rounded-xl border border-navy/10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 font-bold block mb-3">
                  Core Stage Deliverables
                </span>
                <div className="space-y-2">
                  {current.outputs.map((out) => (
                    <div key={out} className="flex items-center gap-2 text-sm text-navy font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
