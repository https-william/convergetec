export default function Footer() {
  return (
    <footer className="w-full py-12 bg-navy text-offwhite/70 border-t border-navy-light">
      <div className="content-container">
        <div className="rounded-2xl border-2 border-dashed border-navy-light bg-navy-light/40 p-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-3">
            Component Shell
          </span>
          <h4 className="text-xl font-bold font-display text-white mb-2">
            Footer
          </h4>
          <p className="text-sm text-offwhite/60 mb-4">
            Placeholder for Footer section (Phase 2 content)
          </p>
          <p className="text-xs text-offwhite/40">
            &copy; {new Date().getFullYear()} ConvergeTec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
