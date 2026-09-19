import { DoodleUnderline } from './Doodles';

export default function ContactHero() {
  return (
    <section className="w-full bg-offwhite pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="content-container">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white text-navy text-xs font-mono tracking-widest uppercase mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Direct Engagement // Get in Touch
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.1] tracking-tight mb-6">
            Let&apos;s talk about where you&apos;re trying to{' '}
            <span className="relative inline-block">
              go.
              <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full pointer-events-none">
                <DoodleUnderline color="#0078E0" className="w-full h-auto" />
              </span>
            </span>
          </h1>

          <p className="font-body text-ink/80 text-lg sm:text-xl leading-relaxed max-w-[560px] mx-auto">
            Book an executive discovery session, or send an inquiry directly to our Australian practice leads.
          </p>
        </div>
      </div>
    </section>
  );
}
