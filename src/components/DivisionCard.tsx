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
  image: string;
  imageAlt: string;
  badges: string[];
  isWide?: boolean;
  className?: string;
  delay?: number;
}

export default function DivisionCard({
  id,
  divisionNumber,
  divisionTag,
  title,
  description,
  href,
  icon: Icon,
  image,
  imageAlt,
  badges = [],
  isWide = false,
  className = '',
  delay = 0,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={`group relative bg-white rounded-3xl p-6 sm:p-8 border border-navy/10 hover:border-navy/20 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 flex flex-col justify-between h-full ${className}`}
    >
      <div>
        {/* Supporting Photographic Visual Stage */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden mb-6 border border-navy/10 bg-navy ${
            isWide ? 'aspect-[16/10] sm:aspect-[21/10]' : 'aspect-[16/10] sm:aspect-[4/3]'
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Subtle Contrast Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Division Chip */}
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/85 backdrop-blur-md border border-white/20 text-offwhite text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            {divisionTag}
          </div>

          {/* Floating Division Number Index */}
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 font-mono text-[11px] sm:text-xs font-bold text-offwhite/90 px-2.5 py-1 rounded-full bg-navy/85 backdrop-blur-md border border-white/20">
            {divisionNumber}
          </div>
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-offwhite border border-navy/10 text-navy flex items-center justify-center group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-colors duration-200 shrink-0 mt-0.5">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <Link
              to={href}
              className="font-display font-bold text-xl sm:text-2xl text-navy group-hover:text-blue transition-colors block no-underline leading-snug"
            >
              {title}
            </Link>
          </div>
        </div>

        {/* Concise Description */}
        <p className="text-ink/75 text-sm sm:text-base leading-relaxed mb-5">
          {description}
        </p>

        {/* Deliverable Capability Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[11px] text-navy/80 bg-offwhite px-2.5 py-1 rounded-md border border-navy/10 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Clean Link Footer */}
      <div className="pt-4 border-t border-navy/5 mt-auto flex items-center justify-between">
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
