import { motion } from 'framer-motion';

export default function WhyOneCompany() {
  return (
    <section className="w-full bg-offwhite py-16 md:py-24 border-t border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Heading (~40%) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy leading-tight tracking-tight">
              Why one company, four divisions
            </h2>
          </div>

          {/* Right Column: Quote + Supporting Paragraph (~60%) */}
          <div className="lg:col-span-7">
            <blockquote className="m-0 p-0 mb-6">
              <p className="font-display text-blue text-xl sm:text-2xl font-medium leading-relaxed border-l-4 border-cyan pl-6 m-0">
                &ldquo;We do not simply advise organisations on what they should
                do. We help design the future, provide the people, build the
                technology, train the workforce, and support the organisation
                through implementation.&rdquo;
              </p>
            </blockquote>

            <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed pl-6 sm:pl-7">
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
