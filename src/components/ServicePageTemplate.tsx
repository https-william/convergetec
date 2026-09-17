import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from './CTASection';

export interface Pillar {
  title: string;
  description: string;
}

export interface CrossSellItem {
  name: string;
  route: string;
}

export interface ServicePageTemplateProps {
  accentColor: 'navy' | 'blue' | 'cyan';
  eyebrow: string;
  headline: string;
  intro: string;
  pillars: Pillar[];
  crossSell: CrossSellItem[];
}

const accentColorMap = {
  navy: {
    text: 'text-navy',
    border: 'border-t-navy',
  },
  blue: {
    text: 'text-blue',
    border: 'border-t-blue',
  },
  cyan: {
    text: 'text-cyan',
    border: 'border-t-cyan',
  },
};

export default function ServicePageTemplate({
  accentColor,
  eyebrow,
  headline,
  intro,
  pillars,
  crossSell,
}: ServicePageTemplateProps) {
  const accent = accentColorMap[accentColor] || accentColorMap.blue;

  return (
    <div className="w-full">
      {/* A) Hero Block */}
      <section className="w-full bg-offwhite py-16 md:py-24 border-b border-navy/10">
        <div className="content-container">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <span
              className={`font-body text-xs sm:text-sm font-semibold uppercase tracking-widest ${accent.text} mb-4 inline-block`}
            >
              {eyebrow}
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-6">
              {headline}
            </h1>

            {/* Intro Paragraph (max-width 680px) */}
            <p className="font-body text-ink/85 text-lg sm:text-xl leading-relaxed max-w-[680px] mb-8 sm:mb-10">
              {intro}
            </p>

            {/* Primary CTA Button */}
            <div>
              <Link
                to="/contact"
                className="bg-blue text-offwhite hover:bg-cyan hover:text-navy transition-colors duration-200 font-semibold px-7 py-3.5 rounded-lg text-base sm:text-lg inline-flex items-center justify-center no-underline shadow-sm"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* B) Pillars Grid */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-navy/10">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className={`bg-offwhite rounded-xl shadow-sm p-6 sm:p-8 border-t-[3px] ${accent.border} hover:shadow-md transition-shadow duration-200 flex flex-col justify-between`}
              >
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-navy mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-ink/80 font-body text-base leading-relaxed m-0">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C) Cross-Sell Strip */}
      <section className="w-full bg-navy text-offwhite py-16 border-t border-navy-light">
        <div className="content-container text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Explore the other divisions
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {crossSell.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className="rounded-full border border-offwhite/80 text-offwhite hover:bg-cyan hover:border-cyan hover:text-navy px-6 py-2.5 text-sm sm:text-base font-medium transition-colors duration-200 no-underline inline-flex items-center justify-center shadow-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* D) Existing CTASection */}
      <CTASection />
    </div>
  );
}
