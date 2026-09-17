import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-navy text-offwhite border-t border-navy-light">
      <div className="content-container py-12 md:py-16">
        {/* Brand & Tagline Header */}
        <div className="mb-10 pb-8 border-b border-navy-light/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <img
              src="/logo.png"
              alt="ConvergeTec"
              className="h-8 w-auto object-contain"
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

          {/* Column 3: Social / Contact Info (Placeholder) */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-4 tracking-wide uppercase text-sm">
              Connect
            </h4>
            {/* social links TBD */}
            <div className="space-y-3">
              <div className="h-9 w-full max-w-xs rounded-md bg-navy-light/60 border border-navy-light/80 flex items-center px-3 text-xs text-offwhite/50">
                // social links TBD
              </div>
              <div className="h-9 w-full max-w-xs rounded-md bg-navy-light/40 border border-dashed border-navy-light/60 flex items-center px-3 text-xs text-offwhite/40">
                // contact info TBD
              </div>
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
