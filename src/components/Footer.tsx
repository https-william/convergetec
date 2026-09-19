import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer data-glow-zone="true" className="w-full bg-navy text-offwhite border-t border-navy-light">
      <div className="content-container py-12 md:py-16">
        {/* Brand & Tagline Header */}
        <div className="mb-10 pb-8 border-b border-navy-light/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <img
              src="/logo-icon.svg"
              alt="ConvergeTec logo"
              className="h-8 w-8 object-contain shrink-0"
            />
            <span className="font-display font-bold text-xl text-white tracking-wide group-hover:text-cyan transition-colors">
              ConvergeTec
            </span>
          </Link>
          <p className="font-display font-medium text-offwhite/80 text-sm md:text-base tracking-wide">
            Advise. Transform. Build. Equip. Scale.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Company */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-4 tracking-wide uppercase text-sm">
              Company
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-4 tracking-wide uppercase text-sm">
              Services
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <Link
                  to="/services/consulting"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-software"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  Digital & Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/academy"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/resources-talent"
                  className="text-sm text-offwhite/70 hover:text-cyan transition-colors no-underline"
                >
                  Resources & Talent
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operations & Engagement */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-4 tracking-wide uppercase text-sm">
              Operations
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-navy-light/50 border border-navy-light/80 p-3 text-xs text-offwhite/80">
                <div className="font-semibold text-white mb-0.5">Sydney &amp; Melbourne</div>
                <div className="text-offwhite/60">Australian Business Transformation</div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:underline uppercase tracking-wider no-underline pt-1"
              >
                <span>Schedule Discovery Call</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-light border-t border-navy-light/80 py-4">
        <div className="content-container flex items-center justify-between">
          <p className="text-xs text-offwhite/70 m-0">
            &copy; 2026 ConvergeTec
          </p>
          <p className="text-xs text-offwhite/40 m-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
