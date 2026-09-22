import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import CTASection from './CTASection';
import SEO from './SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

export default function ServicePageTemplate({
  eyebrow,
  headline,
  intro,
  pillars,
  crossSell,
  heroImage,
  imageCaption,
}: ServicePageTemplateProps) {
  return (
    <div className="w-full">
      <SEO
        title={`${eyebrow} | ConvergeTec`}
        description={intro}
      />

      {/* A) Hero Block */}
      <section className="relative w-full py-16 md:py-24 border-b border-slate-200/80 overflow-hidden bg-offwhite">
        <div className="content-container relative z-10">
          <div className={heroImage ? 'grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center' : ''}>
            <div className={heroImage ? 'lg:col-span-7 xl:col-span-7 max-w-[660px]' : 'max-w-[760px]'}>
              {/* Pop Print Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                <span>Practice Division — {eyebrow}</span>
              </div>

              {/* Pop Print Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.08] tracking-tight mb-6">
                {headline}
              </h1>

              {/* Intro Paragraph */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[620px] mb-8 sm:mb-10 font-normal">
                {intro}
              </p>

              {/* Primary Action Button */}
              <div>
                <Button
                  to="/contact"
                  variant="primary"
                  className="px-7 py-3.5 text-base font-display font-semibold rounded-md shadow-sm"
                >
                  Book a Practice Discovery Call
                </Button>
              </div>
            </div>

            {/* Right Column: Clean Hero Photograph (No Subtitles or Pills on the Image) */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="lg:col-span-5 xl:col-span-5 relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl shadow-navy/5 bg-navy aspect-[4/3] group">
                  <img
                    src={heroImage}
                    alt={headline}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>

                {/* Clean Caption Below Image */}
                {imageCaption && (
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{imageCaption}</span>
                    <span className="text-slate-400 hidden sm:inline">Active Practice</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* B) Pillars Grid */}
      <section className="w-full bg-white py-20 md:py-28 border-b border-slate-200/80">
        <div className="content-container">
          <div className="max-w-[640px] mb-14 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-2">
              <span className="w-2 h-2 bg-blue inline-block" />
              <span>Capabilities &amp; Deliverables</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
              Core Practice Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="group bg-slate-50/70 rounded-xl p-7 sm:p-8 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4">
                    <span className="font-mono text-xs tracking-wider uppercase font-semibold text-slate-500">
                      Pillar 0{index + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-blue transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-navy mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed m-0">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C) Cross-Sell Strip */}
      <section className="w-full bg-[#0B132B] text-slate-300 py-16 md:py-20 border-t border-slate-800">
        <div className="content-container text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 font-semibold mb-3">
            <span className="w-2 h-2 bg-blue inline-block" />
            <span>Interlocking Capabilities</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Explore our complementary divisions
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            {crossSell.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className="rounded-md border border-white/15 bg-white/5 text-slate-200 hover:bg-white hover:text-navy px-5 py-2.5 text-sm font-semibold transition-all no-underline inline-flex items-center gap-2"
              >
                <span>{item.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* D) CTASection */}
      <CTASection />
    </div>
  );
}
