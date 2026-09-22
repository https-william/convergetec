import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#091124] dark:bg-[#050A18] text-slate-300 border-t border-slate-800 transition-colors duration-200">
      <div className="content-container py-14 md:py-20">
        {/* Top Brand Row */}
        <div className="mb-12 pb-10 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 no-underline group w-fit">
            <img
              src="/logo-icon.svg"
              alt="ConvergeTec logo"
              className="h-8 w-8 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-blue transition-colors">
              ConvergeTec
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium">
            <span>Sydney · Melbourne · Queensland · Nigeria</span>
            <span className="text-slate-700">•</span>
            <span>Enterprise Advisory &amp; Cloud Systems</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-500 font-medium">ABN 88 642 918 203</span>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Practices */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Practices
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link
                  to="/services/consulting"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>ConvergeTec Consulting</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-software"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>Digital &amp; Cloud Software</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/academy"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>Workforce Capability Academy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/resources-talent"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline flex items-center justify-between group"
                >
                  <span>Resources &amp; Embedded Talent</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline"
                >
                  About ConvergeTec
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Leadership &amp; Advisory Team
                </Link>
              </li>
              <li>
                <a
                  href="#divisions-grid"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline"
                >
                  The Transformation Model
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Locations
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue shrink-0" />
                <span className="font-semibold text-white">Sydney Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue shrink-0" />
                <span className="font-semibold text-white">Melbourne Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue shrink-0" />
                <span className="font-semibold text-white">Queensland Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue shrink-0" />
                <span className="font-semibold text-white">Nigeria Practice</span>
              </div>
            </div>
          </div>

          {/* Column 4: Executive Intake */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Engagement
            </h4>
            <div className="rounded-xl bg-[#122040] border border-slate-600/60 p-4 space-y-3">
              <div className="text-xs text-slate-300 leading-relaxed">
                Direct CXO discovery sessions and architecture diagnostics available weekly.
              </div>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-md bg-blue text-white text-xs font-semibold hover:bg-blue/90 transition-colors no-underline shadow-sm"
              >
                <span>Book Practice Intake</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="mailto:contact@convergetec.com.au"
                className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors no-underline pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>contact@convergetec.com.au</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#050A18] border-t border-slate-800/80 py-5">
        <div className="content-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="m-0">
            &copy; {new Date().getFullYear()} ConvergeTec Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Australian Business Number (ABN) Verified</span>
            <span>•</span>
            <span>Sydney · Melbourne · Queensland · Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
