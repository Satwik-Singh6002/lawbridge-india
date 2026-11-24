import { ExternalLink, Phone, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface ResourceCardProps {
  name: string;
  description: string;
  websiteUrl: string;
  type: 'government' | 'aadhikar';
  icon: string;
  helplineNumber?: string;
  lastVerified: string;
}

export function ResourceCard({
  name,
  description,
  websiteUrl,
  type,
  icon,
  helplineNumber,
  lastVerified,
}: ResourceCardProps) {
  const IconComponent =
    (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon] ||
    LucideIcons.Globe;

  return (
    <div className="group relative rounded-3xl p-6 transition-all duration-300 bg-white/70 dark:bg-[#0c1322]/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-[0_12px_36px_-6px_rgba(16,185,129,0.18)] flex flex-col justify-between h-full">
      
      {/* Top subtle ambient glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        {/* Header: Icon + Name + Official Badge */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <IconComponent className="w-6 h-6 text-emerald-500" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-emerald-500 transition-colors mb-1.5">
              {name}
            </h3>
            
            {type === 'government' ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Verified Govt Portal
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25">
                Civic Resource
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {description}
        </p>
      </div>

      {/* Action Buttons & Verification Footer */}
      <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Visit Portal Button */}
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-sm group/btn"
          >
            <span>Visit Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {/* Emergency Helpline Pill */}
          {helplineNumber && (
            <a
              href={`tel:${helplineNumber.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 font-black text-xs transition-all shadow-[0_0_12px_rgba(245,158,11,0.1)] active:scale-95"
            >
              <Phone className="w-3 h-3 text-amber-500 animate-pulse" />
              <span>{helplineNumber}</span>
            </a>
          )}
        </div>

        {/* Timestamp */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          <Clock className="w-3 h-3" />
          <span>Statute Verified {lastVerified}</span>
        </div>
      </div>

    </div>
  );
}
