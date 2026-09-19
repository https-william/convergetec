import { motion } from 'framer-motion';

export default function WhyOneCompany() {
  return (
    <section className="w-full bg-offwhite py-16 md:py-24 border-t border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Heading (~40%) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/70 text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              Integrated Model
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy leading-tight tracking-tight">
              Why one company, four divisions
            </h2>
          </div>

          {/* Right Column: Quote Callout + Supporting Paragraph (~60%) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-navy/10 p-6 sm:p-8 shadow-sm mb-6 border-l-4 border-l-blue">
              <blockquote className="m-0 p-0">
                <p className="font-display text-navy text-xl sm:text-2xl font-semibold leading-relaxed m-0">
                  &ldquo;We do not simply advise organisations on what they should
                  do. We help design the future, provide the people, build the
                  technology, train the workforce, and support the organisation
                  through implementation.&rdquo;
                </p>
              </blockquote>
            </div>

            <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed pl-1 sm:pl-2">
              Because these four divisions sit inside one company, a client
              engaging ConvergeTec for a single problem can be progressively
              introduced to software, training, and resourcing — creating a
              deeper, longer-term relationship than a single-service competitor
              can offer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
