import DivisionCard from './DivisionCard';
import { Compass, Code2, GraduationCap, Users } from 'lucide-react';

const divisions = [
  {
    id: 'division-tile-1',
    divisionNumber: '01',
    divisionTag: 'Strategy & Delivery',
    title: 'ConvergeTec Consulting',
    description:
      'Executive advisory, enterprise business analysis, and transformation delivery structured for technical execution.',
    href: '/services/consulting',
    icon: Compass,
    borderColorClass: 'border-t-navy',
    accentColor: 'navy' as const,
    tags: ['Business Analysis', 'Project Delivery', 'Change Management', 'AI Strategy'],
    deliverable: 'Defensible roadmaps engineered to survive contact with reality.',
  },
  {
    id: 'division-tile-2',
    divisionNumber: '02',
    divisionTag: 'Engineering & Cloud',
    title: 'ConvergeTec Digital & Software',
    description:
      'Custom cloud SaaS, enterprise API microservices, and workflow automation engines built for real operating rhythms.',
    href: '/services/digital-software',
    icon: Code2,
    borderColorClass: 'border-t-blue',
    accentColor: 'blue' as const,
    tags: ['Custom SaaS', 'Cloud Microservices', 'API Integration', 'Automations'],
    deliverable: 'Production software deployed with zero handoff friction.',
  },
  {
    id: 'division-tile-3',
    divisionNumber: '03',
    divisionTag: 'Workforce Capability',
    title: 'ConvergeTec Academy',
    description:
      'Executive masterclasses, capability bootcamps, and transformation certifications that institutionalise skills internally.',
    href: '/services/academy',
    icon: GraduationCap,
    borderColorClass: 'border-t-cyan',
    accentColor: 'cyan' as const,
    tags: ['Enterprise Upskilling', 'Methodology Certs', 'Agile Leadership'],
    deliverable: 'Permanent capability retained within your internal workforce.',
  },
  {
    id: 'division-tile-4',
    divisionNumber: '04',
    divisionTag: 'Contract & Fractional',
    title: 'ConvergeTec Resources & Talent',
    description:
      'Pre-vetted fractional executives, delivery leads, and technical specialists embedded directly into mission-critical initiatives.',
    href: '/services/resources-talent',
    icon: Users,
    borderColorClass: 'border-t-blue',
    accentColor: 'blue' as const,
    tags: ['Fractional Executives', 'Delivery Leads', 'Embedded Squads'],
    deliverable: 'Elite transformation talent deployed with rapid precision.',
  },
];

export default function DivisionsGrid() {
  return (
    <section id="divisions-grid" className="w-full py-20 md:py-28 bg-white border-b border-navy/10">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-offwhite text-navy text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Interlocking Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4 tracking-tight">
            One Company. Four Divisions.
          </h2>
          <p className="text-ink/75 font-body text-base sm:text-lg leading-relaxed">
            Rather than juggling four fragmented suppliers, ConvergeTec unites strategy, software,
            training, and talent into one accountable engine.
          </p>
        </div>

        {/* 2x2 Bento Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1140px] mx-auto">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.href}
              id={division.id}
              divisionNumber={division.divisionNumber}
              divisionTag={division.divisionTag}
              title={division.title}
              description={division.description}
              href={division.href}
              icon={division.icon}
              tags={division.tags}
              deliverable={division.deliverable}
              borderColorClass={division.borderColorClass}
              accentColor={division.accentColor}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
