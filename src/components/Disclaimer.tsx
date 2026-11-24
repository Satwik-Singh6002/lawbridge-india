import { AlertTriangle, Info, ShieldCheck } from 'lucide-react';

interface DisclaimerProps {
  variant?: 'default' | 'compact' | 'ai';
  className?: string;
}

export function Disclaimer({ variant = 'default', className = '' }: DisclaimerProps) {
  if (variant === 'ai') {
    return (
      <div className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 backdrop-blur-xl shadow-lg ${className}`}>
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
        </div>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-amber-500">
            Statutory AI Advisory
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
            AI-generated legal summaries are educational and citation-backed, but do not replace certified advocate representation. Verify critical filings with official gazettes.
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 ${className}`}>
        <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>For general civic awareness only. Not a substitute for formal advocate representation.</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-amber-500/20 bg-white/70 dark:bg-[#070b14]/80 backdrop-blur-xl p-4 sm:p-5 shadow-lg ${className}`}>
      {/* Subtle ambient gradient lighting */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
      
      <div className="flex items-start gap-3.5 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <ShieldCheck className="w-5 h-5 text-amber-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              National Citizen Legal Notice
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            <strong>ADHIKAR LawBridge India</strong> is an independent non-commercial legal education and civic empowerment platform. Content provided herein translates Indian statutes (including BNS, BNSS & IT Acts) into plain English for public awareness and does not constitute formal legal counsel.
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
            For court filings or active criminal/civil defense, connect with accredited advocates through the Bar Council of India or NALSA Free Legal Aid.
          </p>
        </div>
      </div>
    </div>
  );
}
