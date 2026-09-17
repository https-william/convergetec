import DivisionCard from "./DivisionCard";

export default function DivisionsGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-navy/10">
      <div className="content-container">
        <div className="rounded-2xl border-2 border-dashed border-navy/20 bg-offwhite/80 p-8 md:p-12 text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue bg-blue/10 rounded-full mb-3">
            Component Shell
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-navy">
            DivisionsGrid
          </h2>
          <p className="text-ink/70 max-w-xl mx-auto text-base">
            Placeholder for DivisionsGrid section (Phase 2 content)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DivisionCard title="DivisionCard 1" description="Division 1 placeholder shell" />
          <DivisionCard title="DivisionCard 2" description="Division 2 placeholder shell" />
          <DivisionCard title="DivisionCard 3" description="Division 3 placeholder shell" />
        </div>
      </div>
    </section>
  );
}
