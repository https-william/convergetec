import DivisionCard from './DivisionCard';

const divisions = [
  {
    title: 'ConvergeTec Consulting',
    description:
      'Advisory and transformation services across business analysis, project delivery, change management, data and AI.',
    href: '/services/consulting',
    borderColorClass: 'border-navy',
  },
  {
    title: 'ConvergeTec Digital & Software',
    description:
      'Custom software, SaaS products, automation and systems integration.',
    href: '/services/digital-software',
    borderColorClass: 'border-blue',
  },
  {
    title: 'ConvergeTec Academy',
    description:
      'Corporate training and online learning in business analysis, project management, transformation, technology and leadership.',
    href: '/services/academy',
    borderColorClass: 'border-cyan',
  },
  {
    title: 'ConvergeTec Resources & Talent',
    description:
      'Skilled contract professionals and fractional executives, placed where you need them.',
    href: '/services/resources-talent',
    borderColorClass: 'border-blue',
  },
];

export default function DivisionsGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-navy/10">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy mb-4">
            One Company. Four Divisions.
          </h2>
          <p className="text-ink font-body text-base sm:text-lg leading-relaxed text-ink/80">
            Each division stands on its own. Together, they carry a client&apos;s
            whole journey — from advice to implementation.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.href}
              title={division.title}
              description={division.description}
              href={division.href}
              borderColorClass={division.borderColorClass}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
