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
  badges?: string[];
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
  image,
  imageAlt,
  isWide = false,
  className = '',
  delay = 0,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={`group relative bg-white dark:bg-[#0D162B] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden ${className}`}
    >
      <div>
        {/* Supporting Visual: Clean Authentic Editorial Photo (No Information Pills or Overlays) */}
        <div
          className={`relative w-full rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 ${
            isWide ? 'aspect-[16/10] sm:aspect-[21/10]' : 'aspect-[16/10] sm:aspect-[4/3]'
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Pop Print Editorial Header: Graphic Numeral & Category */}
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-sm font-bold tracking-wide uppercase text-blue dark:text-cyan">
            {divisionTag}
          </span>
          <span className="font-display font-black text-2xl sm:text-3xl text-slate-400 dark:text-slate-600 group-hover:text-blue/40 dark:group-hover:text-cyan/40 transition-colors">
            {divisionNumber}
          </span>
        </div>

        {/* Pop Print Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight group-hover:text-blue dark:group-hover:text-cyan transition-colors mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-white group-hover:text-blue dark:group-hover:text-cyan transition-colors no-underline"
        >
          <span>Explore Practice Capabilities</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
