interface DivisionCardProps {
  title?: string;
  description?: string;
}

export default function DivisionCard({
  title = "DivisionCard",
  description = "Placeholder for division card item",
}: DivisionCardProps) {
  return (
    <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm hover:border-blue/40 transition-colors">
      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan bg-cyan/10 rounded mb-2">
        Card Shell
      </span>
      <h3 className="text-xl font-bold font-display text-navy mb-2">
        {title}
      </h3>
      <p className="text-ink/70 text-sm">
        {description}
      </p>
    </div>
  );
}
