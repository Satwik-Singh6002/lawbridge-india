import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { languages } from '@/i18n';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) ||
    languages.find((l) => i18n.language.startsWith(l.code)) ||
    languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:border-amber-500/40 text-xs font-bold transition-all shadow-sm active:scale-95"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-amber-500" />
        <span>{currentLanguage.short}</span>
        <ChevronDown
          className={cn('w-3 h-3 text-slate-400 transition-transform duration-200', isOpen ? 'rotate-180' : '')}
        />
      </button>

      {/* Dropdown Menu (Styled exactly matching user screenshot) */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-[#090e1a]/95 dark:bg-[#070b14]/95 border border-slate-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl p-2.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 py-1.5 select-none">
            SELECT LANGUAGE
          </div>

          <div className="space-y-1 mt-1">
            {languages.map((lang) => {
              const isActive = currentLanguage.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all',
                    isActive
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  )}
                >
                  <span className="tracking-wide">{lang.label}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
