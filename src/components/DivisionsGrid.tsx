import type { MotionValue } from 'framer-motion';
import DivisionCard from './DivisionCard';

const divisions = [
  {
    id: 'division-tile-1',
    divisionNumber: '01',
    divisionTag: 'ADVISORY',
    title: 'ConvergeTec Consulting',
    description:
      'Executive advisory, business analysis, and project delivery that bridges board-level transformation strategy directly into technical reality.',
    href: '/services/consulting',
    ctaText: 'Explore Advisory Practice',
    borderColorClass: 'border-t-navy',
    accentCorner: 'top-right' as const,
    accentColor: 'navy' as const,
    tags: ['Business Analysis', 'Project Delivery', 'Change Management', 'Data & AI Strategy'],
    deliverable: 'Defensible roadmaps engineered to survive contact with implementation.',
  },
  {
    id: 'division-tile-2',
    divisionNumber: '02',
    divisionTag: 'SOFTWARE',
    title: 'ConvergeTec Digital & Software',
    description:
      'Custom cloud software, bespoke SaaS applications, enterprise integrations, and process automation engines built around your real operating rhythm.',
    href: '/services/digital-software',
    ctaText: 'Explore Software & Platforms',
    borderColorClass: 'border-t-blue',
    accentCorner: 'bottom-left' as const,
    accentColor: 'blue' as const,
    tags: ['Custom SaaS', 'Cloud Microservices', 'API Integration', 'Workflow Automation'],
    deliverable: 'Scalable production software tailored to real operating models.',
  },
  {
    id: 'division-tile-3',
    divisionNumber: '03',
    divisionTag: 'CAPABILITY',
    title: 'ConvergeTec Academy',
    description:
      'Corporate executive masterclasses, transformation academies, and workforce upskilling that institutionalise modern capabilities internally.',
    href: '/services/academy',
    ctaText: 'Explore Corporate Academy',
    borderColorClass: 'border-t-cyan',
    accentCorner: 'top-left' as const,
    accentColor: 'cyan' as const,
    tags: ['Workforce Upskilling', 'Transformation Leadership', 'Methodology Certs', 'Enterprise Learning'],
    deliverable: 'Lasting capability retention that outlives external consulting teams.',
  },
  {
    id: 'division-tile-4',
    divisionNumber: '04',
    divisionTag: 'TALENT',
    title: 'ConvergeTec Resources & Talent',
    description:
      'Pre-vetted contract professionals, delivery squad leads, and fractional technology executives deployed directly into mission-critical initiatives.',
    href: '/services/resources-talent',
    ctaText: 'Explore Talent Placements',
    borderColorClass: 'border-t-blue',
    accentCorner: 'bottom-right' as const,
    accentColor: 'blue' as const,
    tags: ['Fractional Executives', 'Delivery Leads', 'Specialist Placement', 'Embedded Squads'],
    deliverable: 'Senior, proven transformation talent deployed with speed and precision.',
  },
];

interface DivisionsGridProps {
  tileAccentOpacity?: MotionValue<number> | number;
}

export default function DivisionsGrid({ tileAccentOpacity }: DivisionsGridProps) {
  return (
    <section id="divisions-grid" className="w-full py-20 md:py-28 bg-white border-b border-navy/10">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-offwhite text-navy/75 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Enterprise Capability Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4 tracking-tight">
            One Company. Four Interlocking Divisions.
          </h2>
          <p className="text-ink/80 font-body text-base sm:text-lg leading-relaxed">
            Rather than four disconnected suppliers, ConvergeTec unites strategic advisory,
            custom software, internal training, and elite contract talent into a single accountable engine.
          </p>
        </div>

        {/* 2x2 Bento Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1200px] mx-auto">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.href}
              id={division.id}
              divisionNumber={division.divisionNumber}
              divisionTag={division.divisionTag}
              title={division.title}
              description={division.description}
              href={division.href}
              ctaText={division.ctaText}
              tags={division.tags}
              deliverable={division.deliverable}
              borderColorClass={division.borderColorClass}
              accentCorner={division.accentCorner}
              accentColor={division.accentColor}
              accentOpacity={tileAccentOpacity}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
