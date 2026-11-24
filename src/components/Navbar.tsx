import { useState, useEffect, useRef } from 'react';
import {
  Scale,
  Sun,
  Moon,
  ChevronDown,
  BookOpen,
  AlertTriangle,
  FileText,
  Users,
  ExternalLink,
  PhoneCall,
  Menu,
  X,
  Search,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { LanguageSelector } from '@/components/LanguageSelector';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showHelplineModal, setShowHelplineModal] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickQuery.trim()) {
      setSearchModalOpen(false);
      navigate(`/problem/other?q=${encodeURIComponent(quickQuery.trim())}`);
      setQuickQuery('');
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8',
          scrolled ? 'pt-2' : 'pt-3'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-2xl transition-all duration-300',
            scrolled
              ? 'bg-white/85 dark:bg-[#070b14]/85 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.7)]'
              : 'bg-white/70 dark:bg-[#070b14]/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/50 shadow-sm'
          )}
        >
          {/* Main Navigation Pill Bar */}
          <div className="flex items-center justify-between h-16 sm:h-[68px] px-4 sm:px-6">
            
            {/* 1. Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Aadhikar Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 dark:from-amber-500/20 dark:to-amber-500/5 border border-slate-800 dark:border-amber-500/30 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-amber-500/50 transition-all">
                <Scale className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-foreground tracking-tight leading-none">
                    ADHIKAR
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase leading-none mt-1">
                  LawBridge India
                </span>
              </div>
            </Link>

            {/* 2. Desktop Organized Hubs */}
            <nav className="hidden lg:flex items-center gap-1.5" role="navigation">
              <Link
                to="/"
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                  location.pathname === '/'
                    ? 'text-amber-500 dark:text-amber-400 bg-amber-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                )}
              >
                Home
              </Link>

              {/* Legal Knowledge Hub Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('knowledge')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                    ['/rights', '/cases', '/scam-alerts', '/news'].some((p) =>
                      location.pathname.startsWith(p)
                    ) || activeDropdown === 'knowledge'
                      ? 'text-amber-500 dark:text-amber-400 bg-amber-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  )}
                  aria-expanded={activeDropdown === 'knowledge'}
                >
                  <span>Legal Knowledge</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeDropdown === 'knowledge' ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {/* Knowledge Mega-Menu Panel */}
                {activeDropdown === 'knowledge' && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-2.5 space-y-1 animate-in fade-in-0 zoom-in-95 duration-150">
                    <Link
                      to="/rights"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-105 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-amber-500 transition-colors">
                          Know Your Rights
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          Fundamental, consumer, labor & digital rights
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/cases"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">
                          Landmark Cases
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          Key Supreme Court verdicts in simple English
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/scam-alerts"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-red-500 transition-colors">
                          Scam Alert Center
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          UPI traps, digital arrest fraud & fake jobs
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/news"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                          Legal News & Updates
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          Bharatiya Nyaya Sanhita & judicial updates
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Citizen Services Hub Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all',
                    ['/complaints', '/lawyers', '/resources'].some((p) =>
                      location.pathname.startsWith(p)
                    ) || activeDropdown === 'services'
                      ? 'text-amber-500 dark:text-amber-400 bg-amber-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-foreground hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  )}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Citizen Services</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {/* Services Mega-Menu Panel */}
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-2.5 space-y-1 animate-in fade-in-0 zoom-in-95 duration-150">
                    <Link
                      to="/complaints"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 shrink-0 group-hover:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-teal-500 transition-colors">
                          Complaint Guides
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          FIR filing, Consumer Forums & Cyber 1930
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/lawyers"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-purple-500 transition-colors">
                          Verified Lawyers
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          Bar-enrolled advocates across 28 Indian states
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/resources"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-105 transition-transform">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                          Official Portals
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          Direct statutory links, eCourts & NALSA aid
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Emergency Helpline Pill */}
              <button
                onClick={() => setShowHelplineModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all ml-1"
                title="View Emergency Indian Legal Helplines"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Helplines: 1930 / 112</span>
              </button>
            </nav>

            {/* 3. Right Action Tools (Search, Theme, Ask AI) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Quick Search Trigger Pill */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 hover:border-amber-500/40 hover:text-foreground text-xs font-medium transition-all"
                aria-label="Quick search laws and cases"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Laws...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                  ⌘K
                </kbd>
              </button>

              {/* Language Selector */}
              <LanguageSelector />

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95"
                aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-45" />
                )}
              </button>

              {/* Mobile Drawer Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* 4. Mobile Drawer Overlay */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-slate-200/80 dark:border-slate-800/80 px-4 pt-4 pb-6 space-y-4 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-2xl rounded-b-2xl animate-in slide-in-from-top-4 duration-200">
              
              {/* Mobile Search Input */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder="Search legal rights, scams, cases..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm outline-none focus:border-amber-500 text-foreground"
                />
              </form>

              {/* Legal Knowledge Section */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-500 px-3 mb-2">
                  Legal Knowledge
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <Link
                    to="/rights"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>Citizen Rights</span>
                  </Link>
                  <Link
                    to="/cases"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground flex items-center gap-2"
                  >
                    <Scale className="w-4 h-4 text-blue-500" />
                    <span>Case Precedents</span>
                  </Link>
                  <Link
                    to="/scam-alerts"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground flex items-center gap-2"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span>Scam Alerts</span>
                  </Link>
                  <Link
                    to="/news"
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4 text-emerald-500" />
                    <span>Legal News</span>
                  </Link>
                </div>
              </div>

              {/* Citizen Services Section */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-500 px-3 mb-2">
                  Citizen Services
                </div>
                <div className="space-y-1.5">
                  <Link
                    to="/complaints"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-500" />
                      <span>Step-by-Step Complaint Guides</span>
                    </div>
                  </Link>
                  <Link
                    to="/lawyers"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Find Verified Advocates</span>
                    </div>
                  </Link>
                  <Link
                    to="/resources"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs font-bold text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-emerald-500" />
                      <span>Official Government Portals</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Language Selection in Mobile */}
              <div className="pt-1">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <Globe className="w-4 h-4 text-amber-500" />
                    <span>Language / भाषा</span>
                  </div>
                  <LanguageSelector />
                </div>
              </div>

              {/* Emergency Contacts Button in Mobile */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setShowHelplineModal(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 font-bold text-xs"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>View Emergency Citizen Helplines</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ═══ 5. Emergency Helpline Quick Modal ═══ */}
      {showHelplineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <PhoneCall className="w-5 h-5" />
                <h3 className="text-lg font-black text-foreground">National Legal Helplines</h3>
              </div>
              <button
                onClick={() => setShowHelplineModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Toll-free emergency statutory assistance lines operated 24x7 by the Government of India:
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:1930"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Cyber Crime & Financial Fraud</div>
                  <div className="text-base font-black text-amber-500">Call 1930</div>
                </div>
                <span className="text-xs font-bold text-amber-500 px-3 py-1 rounded-full bg-amber-500/10">Dial Now</span>
              </a>

              <a
                href="tel:112"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">All-India Emergency Response</div>
                  <div className="text-base font-black text-red-500">Call 112 (Police, Fire, Medical)</div>
                </div>
                <span className="text-xs font-bold text-red-500 px-3 py-1 rounded-full bg-red-500/10">Dial Now</span>
              </a>

              <a
                href="tel:181"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Women in Distress / Legal Support</div>
                  <div className="text-base font-black text-purple-500">Call 181</div>
                </div>
                <span className="text-xs font-bold text-purple-500 px-3 py-1 rounded-full bg-purple-500/10">Dial Now</span>
              </a>

              <a
                href="tel:15100"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">National Consumer Helpline</div>
                  <div className="text-base font-black text-emerald-500">Call 15100</div>
                </div>
                <span className="text-xs font-bold text-emerald-500 px-3 py-1 rounded-full bg-emerald-500/10">Dial Now</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowHelplineModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ 6. Quick Search Modal (Cmd+K) ═══ */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-150">
          <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 p-4 shadow-2xl space-y-3">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-amber-500" />
              <input
                type="text"
                autoFocus
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="Search laws, rights, scam alerts, consumer complaints..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-base font-medium outline-none focus:border-amber-500 text-foreground"
              />
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="absolute right-4 text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-500"
              >
                ESC
              </button>
            </form>

            <div className="px-2 pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Cyber Fraud 1930', 'Landlord Eviction', 'Consumer Forum', 'Fake Job Offer', 'Cheque Bounce BNS'].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSearchModalOpen(false);
                        navigate(`/problem/other?q=${encodeURIComponent(tag)}`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-amber-500/10 hover:text-amber-500 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
