import { ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="w-full bg-white dark:bg-[#0D162B] border-b border-slate-200/80 dark:border-slate-800 py-6 transition-colors duration-200">
      <div className="content-container flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center md:text-left shrink-0">
          Mission-Critical Sectors
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-navy dark:text-white">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue dark:text-cyan" />
            Banking & Financial Services
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:block">•</span>
          <span>Healthcare & MedTech</span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:block">•</span>
          <span>Energy & Utilities</span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:block">•</span>
          <span>Enterprise SaaS</span>
        </div>
      </div>
    </div>
  );
}
