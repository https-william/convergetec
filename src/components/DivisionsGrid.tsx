import type { MotionValue } from 'framer-motion';
import DivisionCard from './DivisionCard';

const divisions = [
  {
    id: 'division-tile-1',
    divisionNumber: '01',
    divisionTag: 'ADVISORY',
    title: 'ConvergeTec Consulting',
    description:
      'Advisory and transformation services across business analysis, project delivery, change management, data and AI.',
    href: '/services/consulting',
    ctaText: 'Explore Advisory Practice',
    borderColorClass: 'border-navy',
    accentCorner: 'top-right' as const,
    accentColor: 'navy' as const,
  },
  {
    id: 'division-tile-2',
    divisionNumber: '02',
    divisionTag: 'SOFTWARE',
    title: 'ConvergeTec Digital & Software',
    description:
      'Custom software, SaaS products, automation and systems integration.',
    href: '/services/digital-software',
    ctaText: 'Explore Software & Platforms',
    borderColorClass: 'border-blue',
    accentCorner: 'bottom-left' as const,
    accentColor: 'blue' as const,
  },
  {
    id: 'division-tile-3',
    divisionNumber: '03',
    divisionTag: 'CAPABILITY',
    title: 'ConvergeTec Academy',
    description:
      'Corporate training and online learning in business analysis, project management, transformation, technology and leadership.',
    href: '/services/academy',
    ctaText: 'Explore Corporate Academy',
    borderColorClass: 'border-cyan',
    accentCorner: 'top-left' as const,
    accentColor: 'cyan' as const,
  },
  {
    id: 'division-tile-4',
    divisionNumber: '04',
    divisionTag: 'TALENT',
    title: 'ConvergeTec Resources & Talent',
    description:
      'Skilled contract professionals and fractional executives, placed where you need them.',
    href: '/services/resources-talent',
    ctaText: 'Explore Talent Placements',
    borderColorClass: 'border-blue',
    accentCorner: 'bottom-right' as const,
    accentColor: 'blue' as const,
  },
];

interface DivisionsGridProps {
  tileAccentOpacity?: MotionValue<number> | number;
}

export default function DivisionsGrid({ tileAccentOpacity }: DivisionsGridProps) {
  return (
    <section id="divisions-grid" className="w-full py-16 md:py-24 bg-white border-b border-navy/10">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-offwhite text-navy/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Integrated Operating Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4">
            One Company. Four Divisions.
          </h2>
          <p className="text-ink font-body text-base sm:text-lg leading-relaxed text-ink/80">
            Each division stands on its own. Together, they carry a client&apos;s
            whole journey — from advice to implementation.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
