import { Search, FileQuestion } from 'lucide-react';

interface EmptyStateProps {
  icon?: 'search' | 'file';
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
}

export function EmptyState({ icon = 'search', title, description, action }: EmptyStateProps) {
  const Icon = icon === 'search' ? Search : FileQuestion;
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-md mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export function LoadingSkeleton({ count = 6, type = 'card' }: { count?: number; type?: 'card' | 'list' }) {
  if (type === 'list') {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border/60">
            <div className="w-12 h-12 skeleton-shimmer rounded-xl" />
            <div className="flex-1 space-y-2">
              <div className="h-4 skeleton-shimmer rounded w-3/4" />
              <div className="h-3 skeleton-shimmer rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-6 rounded-2xl border border-border/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-5 skeleton-shimmer rounded w-20" />
            <div className="h-5 skeleton-shimmer rounded w-16" />
          </div>
          <div className="h-5 skeleton-shimmer rounded w-full mb-2" />
          <div className="h-4 skeleton-shimmer rounded w-3/4 mb-4" />
          <div className="space-y-2 mb-4">
            <div className="h-3 skeleton-shimmer rounded w-full" />
            <div className="h-3 skeleton-shimmer rounded w-5/6" />
          </div>
          <div className="h-px bg-border/60 mb-3" />
          <div className="flex justify-between">
            <div className="h-3 skeleton-shimmer rounded w-24" />
            <div className="h-3 skeleton-shimmer rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
