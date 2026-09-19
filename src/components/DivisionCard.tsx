import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DivisionCardProps {
  id?: string;
  divisionNumber: string;
  divisionTag: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tags: string[];
  deliverable: string;
  borderColorClass: string;
  accentColor: 'navy' | 'blue' | 'cyan';
  delay?: number;
}

const accentMap = {
  navy: {
    iconBg: 'bg-navy/5 text-navy border-navy/15',
    topBorder: 'border-t-navy',
    link: 'text-navy group-hover:text-blue',
  },
  blue: {
    iconBg: 'bg-blue/10 text-blue border-blue/20',
    topBorder: 'border-t-blue',
    link: 'text-blue group-hover:text-navy',
  },
  cyan: {
    iconBg: 'bg-cyan/15 text-[#007b99] border-cyan/30',
    topBorder: 'border-t-cyan',
    link: 'text-[#007b99] group-hover:text-navy',
  },
};

export default function DivisionCard({
  id,
  divisionNumber,
  divisionTag,
  title,
  description,
  href,
  icon: Icon,
  tags = [],
  deliverable,
  accentColor = 'blue',
  delay = 0,
}: DivisionCardProps) {
  const accent = accentMap[accentColor] || accentMap.blue;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={`group relative overflow-hidden bg-white rounded-2xl p-7 sm:p-9 border border-navy/10 border-t-4 ${accent.topBorder} hover:border-navy/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full`}
    >
      <div>
        {/* Header Bar with Division Number & Icon */}
        <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${accent.iconBg}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-wider uppercase font-bold text-navy/70 block">
                Division {divisionNumber}
              </span>
              <span className="font-mono text-[10px] text-ink/50 uppercase tracking-widest block">
                {divisionTag}
              </span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-navy/20 group-hover:bg-blue group-hover:scale-125 transition-all duration-300" />
        </div>

        {/* Title */}
        <Link
          to={href}
          className="font-display font-bold text-2xl sm:text-[1.65rem] text-navy group-hover:text-blue transition-colors block mb-3 no-underline leading-snug"
        >
          {title}
        </Link>

        {/* Concise Description */}
        <p className="text-ink/75 font-body text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Capability Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-offwhite border border-navy/10 text-navy/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Deliverable & CTA */}
      <div className="pt-5 border-t border-navy/10 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs font-body text-ink/70 max-w-xs">
          <span className="font-semibold text-navy">Outcome:</span> {deliverable}
        </div>

        <Link
          to={href}
          className={`text-xs font-semibold uppercase tracking-wider ${accent.link} transition-colors inline-flex items-center gap-1.5 no-underline shrink-0`}
        >
          <span>Explore Practice</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}
