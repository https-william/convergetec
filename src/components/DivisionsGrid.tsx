import DivisionCard from './DivisionCard';
import { Compass, Code2, GraduationCap, Users } from 'lucide-react';

const divisions = [
  {
    id: 'division-tile-1',
    divisionNumber: '01',
    divisionTag: 'Strategy & Delivery',
    title: 'ConvergeTec Consulting',
    description:
      'Executive advisory, business architecture, and transformation roadmaps structured for immediate technical execution.',
    href: '/services/consulting',
    icon: Compass,
    image: '/images/bento-consulting.jpg',
    imageAlt: 'Senior executive partners reviewing enterprise transformation roadmap overlooking Sydney Harbour',
    badges: ['Operating Models', 'Executive Advisory', 'Transformation Roadmaps'],
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'division-tile-2',
    divisionNumber: '02',
    divisionTag: 'Engineering & Cloud',
    title: 'ConvergeTec Digital & Software',
    description:
      'Custom cloud SaaS, enterprise API microservices, and workflow automations engineered around how your business actually runs.',
    href: '/services/digital-software',
    icon: Code2,
    image: '/images/bento-digital.jpg',
    imageAlt: 'Lead software architect and cloud engineer collaborating in modern tech laboratory',
    badges: ['Cloud Native SaaS', 'Microservices', 'Enterprise APIs'],
    isWide: false,
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'division-tile-3',
    divisionNumber: '03',
    divisionTag: 'Workforce Capability',
    title: 'ConvergeTec Academy',
    description:
      'Executive masterclasses and workforce certifications that institutionalise transformation capabilities internally.',
    href: '/services/academy',
    icon: GraduationCap,
    image: '/images/bento-academy.jpg',
    imageAlt: 'Executive masterclass on agile systems thinking in architectural amphitheatre',
    badges: ['Executive Masterclasses', 'Agile Systems', 'Workforce Upskilling'],
    isWide: false,
    colSpan: 'lg:col-span-5',
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
    image: '/images/bento-talent.jpg',
    imageAlt: 'Senior technology specialists and fractional leaders in Melbourne corporate atrium',
    badges: ['Fractional CXOs', 'Lead Architects', 'Embedded Delivery Squads'],
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
];

export default function DivisionsGrid() {
  return (
    <section id="divisions-grid" className="w-full py-24 md:py-32 bg-white border-b border-navy/10">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-offwhite text-navy text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Integrated Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4 tracking-tight">
            One Company. Four Divisions.
          </h2>
          <p className="text-ink/75 text-lg sm:text-xl leading-relaxed">
            Rather than juggling multiple fragmented suppliers, ConvergeTec unites strategy, software,
            training, and talent into one accountable engine.
          </p>
        </div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
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
              image={division.image}
              imageAlt={division.imageAlt}
              badges={division.badges}
              isWide={division.isWide}
              className={division.colSpan}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
