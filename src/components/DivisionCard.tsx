import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface DivisionCardProps {
  title: string;
  description: string;
  href: string;
  borderColorClass: string;
  delay?: number;
  id?: string;
  divisionNumber?: string;
  divisionTag?: string;
  ctaText?: string;
  tags?: string[];
  deliverable?: string;
  accentCorner?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  accentColor?: 'navy' | 'blue' | 'cyan';
  accentOpacity?: MotionValue<number> | number;
}

const cornerClasses = {
  'top-right': '-top-5 -right-5',
  'bottom-left': '-bottom-5 -left-5',
  'top-left': '-top-5 -left-5',
  'bottom-right': '-bottom-5 -right-5',
};

const colorClasses = {
  navy: 'bg-navy',
  blue: 'bg-blue',
  cyan: 'bg-cyan',
};

export default function DivisionCard({
  title,
  description,
  href,
  borderColorClass,
  delay = 0,
  id,
  divisionNumber,
  divisionTag,
  ctaText,
  tags = [],
  deliverable,
  accentCorner = 'top-right',
  accentColor = 'blue',
  accentOpacity = 0.35,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={`group relative overflow-hidden bg-offwhite rounded-2xl p-7 sm:p-8 border border-navy/15 border-t-4 ${borderColorClass} hover:border-navy/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full`}
    >
      {/* Native Accent Glow Circle */}
      <motion.div
        aria-hidden="true"
        className={`absolute w-24 h-24 rounded-full pointer-events-none blur-md ${
          cornerClasses[accentCorner]
        } ${colorClasses[accentColor]}`}
        style={{ opacity: accentOpacity }}
      />

      <div>
        {/* Architectural Bay Datum Header */}
        <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold text-navy/70">
            [{divisionNumber || '01'} // {divisionTag || 'DIVISION'}]
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-navy/20 group-hover:bg-blue group-hover:scale-125 transition-all duration-300" />
        </div>

        <Link
          to={href}
          className="font-display font-bold text-2xl sm:text-[1.65rem] text-navy group-hover:text-blue transition-colors block mb-3 no-underline leading-snug"
        >
          {title}
        </Link>
        <p className="text-ink/80 font-body text-base sm:text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Capability Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono tracking-wide bg-white border border-navy/10 text-navy/80 shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-5 border-t border-navy/10 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {deliverable && (
          <div className="text-xs font-body text-ink/70 max-w-sm">
            <span className="font-semibold text-navy">Outcome:</span> {deliverable}
          </div>
        )}

        <Link
          to={href}
          className="text-xs font-semibold uppercase tracking-wider text-blue group-hover:text-navy transition-colors inline-flex items-center gap-1.5 no-underline shrink-0"
        >
          <span>{ctaText || 'Explore Division'}</span>
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200 text-blue group-hover:text-navy"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
