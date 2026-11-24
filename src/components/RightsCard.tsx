import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface RightsCardProps {
  title: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
}

export function RightsCard({ title, slug, description, icon, category }: RightsCardProps) {
  const IconComponent =
    (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon] ||
    LucideIcons.FileText;

  return (
    <Link
      to={`/rights/${slug}`}
      className="group relative rounded-3xl p-6 transition-all duration-300 bg-white/70 dark:bg-[#0c1322]/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 shadow-sm hover:shadow-[0_12px_36px_-6px_rgba(245,158,11,0.18)] flex flex-col justify-between h-full"
    >
      {/* Ambient Gold Glow on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.12)]">
          <IconComponent className="w-6 h-6 text-amber-500 group-hover:text-slate-950 transition-colors" />
        </div>

        <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 mb-2 block">
          {category}
        </span>

        <h3 className="text-base sm:text-lg font-black text-foreground mb-2 group-hover:text-amber-500 transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="relative z-10 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <span className="text-xs font-bold text-amber-500 group-hover:text-amber-400 transition-colors flex items-center gap-1">
          <span>Explore Rights</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
