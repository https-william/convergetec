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
  delay?: number;
}

export default function DivisionCard({
  id,
  divisionNumber,
  title,
  description,
  href,
  icon: Icon,
  delay = 0,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className="group relative bg-white rounded-2xl p-8 sm:p-9 border border-navy/10 hover:border-navy/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Clean, Quiet Header with Icon and Division Number */}
        <div className="flex items-center justify-between pb-5 border-b border-navy/5 mb-6">
          <div className="w-11 h-11 rounded-xl bg-offwhite border border-navy/10 text-navy flex items-center justify-center group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-colors duration-200">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs text-ink/40 tracking-widest uppercase font-semibold">
            {divisionNumber}
          </span>
        </div>

        {/* Title */}
        <Link
          to={href}
          className="font-display font-bold text-2xl text-navy group-hover:text-blue transition-colors block mb-3 no-underline leading-snug"
        >
          {title}
        </Link>

        {/* Concise Description */}
        <p className="text-ink/70 font-body text-base leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Clean Link */}
      <div className="pt-4 border-t border-navy/5 mt-auto">
        <Link
          to={href}
          className="text-sm font-display font-semibold text-blue group-hover:text-navy transition-colors inline-flex items-center gap-2 no-underline"
        >
          <span>Explore Practice</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}
