import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, ChevronRight, ShieldAlert, ArrowRight } from 'lucide-react';

interface ScamCardProps {
  title: string;
  slug: string;
  category: string;
  description: string;
  riskLevel: 'high' | 'medium' | 'low';
  warningSigns: string[];
  lastReviewed: string;
}

export function ScamBadge({ level }: { level: 'high' | 'medium' | 'low' }) {
  const config = {
    high: {
      label: 'Critical Risk',
      className: 'bg-red-500/10 text-red-500 border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.2)]',
    },
    medium: {
      label: 'Active Threat',
      className: 'bg-amber-500/10 text-amber-500 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.2)]',
    },
    low: {
      label: 'Emerging Pattern',
      className: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    },
  };
  const { label, className } = config[level];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${className}`}>
      <AlertTriangle className="w-3 h-3" />
      {label}
    </span>
  );
}

export function ScamCard({
  title,
  slug,
  category,
  description,
  riskLevel,
  warningSigns,
  lastReviewed,
}: ScamCardProps) {
  return (
    <Link
      to={`/scam-alerts/${slug}`}
      className="group relative rounded-3xl p-6 transition-all duration-300 bg-white/70 dark:bg-[#0c1322]/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-red-500/50 dark:hover:border-red-500/40 shadow-sm hover:shadow-[0_12px_36px_-6px_rgba(239,68,68,0.18)] flex flex-col justify-between h-full"
    >
      {/* Ambient Red Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold">
            {category}
          </span>
          <ScamBadge level={riskLevel} />
        </div>

        <h3 className="text-base sm:text-lg font-black text-foreground mb-2 group-hover:text-red-500 transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Warning Indicators */}
        <div className="space-y-2 mb-4 bg-red-500/5 dark:bg-red-500/10 rounded-2xl p-3 border border-red-500/10">
          <div className="text-[10px] font-bold uppercase tracking-wider text-red-500 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" />
            Red Flags & Signs
          </div>
          {warningSigns.slice(0, 2).map((sign, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <span className="text-red-500 font-bold shrink-0">•</span>
              <span className="line-clamp-1">{sign}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Clock className="w-3 h-3" />
          <span>Intel {lastReviewed}</span>
        </div>
        <span className="text-xs font-bold text-red-500 group-hover:text-red-400 flex items-center gap-1 transition-colors">
          Protection Steps <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
