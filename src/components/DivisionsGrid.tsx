import DivisionCard from './DivisionCard';
import { Compass, Code2, GraduationCap, Users } from 'lucide-react';

const divisions = [
  {
    id: 'division-tile-1',
    divisionNumber: '01',
    divisionTag: 'Strategy & Advisory',
    title: 'ConvergeTec Consulting',
    description:
      'Executive advisory, business architecture, and transformation roadmaps structured for immediate technical execution.',
    href: '/services/consulting',
    icon: Compass,
    image: '/images/practice-consulting.jpg',
    imageAlt: 'Senior executive partners reviewing enterprise transformation roadmap in Sydney',
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
    image: '/images/practice-software.jpg',
    imageAlt: 'Lead software architect and cloud engineer collaborating in modern tech studio',
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
    image: '/images/practice-academy.jpg',
    imageAlt: 'Executive capability masterclass and training session with corporate professionals',
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
    image: '/images/practice-talent.jpg',
    imageAlt: 'Senior fractional technology executives and delivery leads in Sydney corporate lounge',
    isWide: true,
    colSpan: 'lg:col-span-7',
  },
];

export default function DivisionsGrid() {
  return (
    <section id="divisions-grid" className="w-full py-16 md:py-20 bg-white dark:bg-[#070D1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
            <span>Integrated Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy dark:text-white mb-4 tracking-tight">
            One Company. Four Divisions.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
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
