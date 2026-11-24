import { Link } from 'react-router-dom';
import { Calendar, Scale, ArrowRight } from 'lucide-react';

interface CaseCardProps {
  title: string;
  slug: string;
  court: string;
  year: number;
  category: string;
  summary: string;
  keyIssue: string;
}

export function CaseCard({ title, slug, court, year, category, summary }: CaseCardProps) {
  return (
    <Link
      to={`/cases/${slug}`}
      className="group relative rounded-3xl p-6 transition-all duration-300 bg-white/70 dark:bg-[#0c1322]/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/40 shadow-sm hover:shadow-[0_12px_36px_-6px_rgba(59,130,246,0.18)] flex flex-col justify-between h-full"
    >
      {/* Ambient Blue Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-500 text-[10px] font-black uppercase tracking-wider">
            <Scale className="w-3 h-3" />
            {court}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
            {category}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-black text-foreground mb-2 group-hover:text-blue-500 transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {summary}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Calendar className="w-3.5 h-3.5" />
          <span>Judged {year}</span>
        </div>
        <span className="text-xs font-bold text-blue-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
          <span>Read Verdict</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
