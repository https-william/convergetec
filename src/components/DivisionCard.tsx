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
  accentCorner = 'top-right',
  accentColor = 'blue',
  accentOpacity = 0.35,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={`group relative overflow-hidden bg-offwhite rounded-xl shadow-sm p-6 border-t-4 ${borderColorClass} hover:border-t-cyan hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-out flex flex-col justify-between h-full`}
    >
      {/* Native Accent Glow Circle */}
      <motion.div
        aria-hidden="true"
        className={`absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full pointer-events-none blur-sm ${
          cornerClasses[accentCorner]
        } ${colorClasses[accentColor]}`}
        style={{ opacity: accentOpacity }}
      />
      <div>
        <Link
          to={href}
          className="font-display font-bold text-xl text-navy group-hover:text-blue transition-colors block mb-3 no-underline leading-snug"
        >
          {title}
        </Link>
        <p className="text-ink/80 font-body text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="pt-2">
        <Link
          to={href}
          className="text-xs font-semibold uppercase tracking-wider text-blue group-hover:text-navy group-hover:underline group-hover:decoration-cyan transition-colors inline-flex items-center gap-1.5 no-underline"
        >
          <span>Explore Division</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
