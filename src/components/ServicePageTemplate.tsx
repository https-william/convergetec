import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import CTASection from './CTASection';
import SEO from './SEO';

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
  heroImage?: string;
  imageCaption?: string;
}

const accentColorMap = {
  navy: {
    text: 'text-navy',
    border: 'border-t-navy',
    heroBg: 'radial-gradient(ellipse at 80% 0%, rgba(11, 30, 77, 0.04), transparent 60%), #F7F9FC',
  },
  blue: {
    text: 'text-blue',
    border: 'border-t-blue',
    heroBg: 'radial-gradient(ellipse at 80% 0%, rgba(0, 120, 224, 0.04), transparent 60%), #F7F9FC',
  },
  cyan: {
    text: 'text-[#007b99]', // WCAG AA compliant cyan tone (5.2:1 contrast on offwhite)
    border: 'border-t-cyan',
    heroBg: 'radial-gradient(ellipse at 80% 0%, rgba(0, 196, 240, 0.04), transparent 60%), #F7F9FC',
  },
};

export default function ServicePageTemplate({
  accentColor,
  eyebrow,
  headline,
  intro,
  pillars,
  crossSell,
  heroImage,
  imageCaption,
}: ServicePageTemplateProps) {
  const accent = accentColorMap[accentColor] || accentColorMap.blue;

  return (
    <div className="w-full">
      <SEO
        title={`${eyebrow} | ConvergeTec`}
        description={intro}
      />
      {/* A) Hero Block */}
      <section
        className="w-full py-16 md:py-24 border-b border-navy/10"
        style={{ background: accent.heroBg }}
      >
        <div className="content-container">
          <div className={heroImage ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center' : ''}>
            <div className={heroImage ? 'lg:col-span-7 xl:col-span-7 max-w-[700px]' : 'max-w-[800px]'}>
              {/* Architectural System Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white/80 text-navy/75 text-xs font-mono tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                Divisional Practice // {eyebrow}
              </div>

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
                <Button
                  to="/contact"
                  variant="primary"
                  className="px-7 py-3.5 text-base sm:text-lg"
                >
                  Book a Discovery Call
                </Button>
              </div>
            </div>

            {/* Right Column (Supporting Hero Photograph) */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="lg:col-span-5 xl:col-span-5 relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-navy/15 shadow-xl shadow-navy/5 bg-navy aspect-[4/3] group">
                  <img
                    src={heroImage}
                    alt={headline}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {imageCaption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-4 pt-10">
                      <div className="flex items-center gap-2 text-offwhite text-xs font-mono tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                        <span>{imageCaption}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className={`group bg-offwhite rounded-xl p-6 sm:p-8 border border-navy/10 border-t-4 ${accent.border} hover:border-navy/25 hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  {/* Architectural Pillar Datum Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-navy/10 mb-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold text-navy/60">
                      [0{index + 1} // CAPABILITY PILLAR]
                    </span>
                    <span className="w-2 h-2 rounded-full bg-navy/20 group-hover:bg-blue group-hover:scale-125 transition-all duration-300" />
                  </div>

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
      <section data-glow-zone="true" className="w-full bg-navy text-offwhite py-16 border-t border-navy-light">
        <div className="content-container text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Integrated Capability Ecosystem
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Explore the other divisions
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {crossSell.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className="rounded-full border border-offwhite/25 bg-offwhite/5 text-offwhite hover:bg-cyan hover:border-cyan hover:text-navy px-6 py-2.5 text-sm sm:text-base font-medium transition-colors duration-200 no-underline inline-flex items-center justify-center shadow-sm"
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
