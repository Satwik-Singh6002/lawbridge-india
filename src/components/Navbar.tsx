import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const navItems = [
    { label: t("nav.laws"), href: "/laws" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.analytics"), href: "/analytics" },
    { label: t("nav.findHelp"), href: "/find-help" },
    { label: t("nav.news"), href: "/news" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    if (langOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  // Close logo modal on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLogoModalOpen(false);
    };
    if (logoModalOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [logoModalOpen]);

  const isActive = (href: string) => location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-navy/80 backdrop-blur-[30px] shadow-2xl border-b border-white/5 py-0"
            : "bg-transparent border-b border-transparent py-4"
        )}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo — clicking opens modal */}
          <button
            onClick={() => {
              navigate("/");
              setLogoModalOpen(true);
            }}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="View ADHIKAR logo"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-saffron/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-saffron/10 group-hover:border-saffron/30 transition-all duration-500 relative bg-navy/20">
                <Scale className="w-5 h-5 text-saffron transition-transform group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col select-none">
              <span className="text-xl font-black text-white tracking-[0.15em] uppercase leading-none mb-0.5">ADHIKAR</span>
              <span className="text-[9px] font-bold text-saffron/60 tracking-[0.4em] uppercase leading-none">LawBridge India</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-inner shadow-white/5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative h-10 px-6 flex items-center text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-500",
                  isActive(item.href)
                    ? "text-saffron bg-saffron/10 border border-saffron/20"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-saffron rounded-full blur-[1px]" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div ref={langRef} className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLangOpen(!langOpen)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className="gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/5 rounded-xl h-10 px-4"
              >
                <Globe className="w-3.5 h-3.5 text-saffron/60" />
                <span className="hidden sm:inline">{currentLang.short}</span>
              </Button>
              {langOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 top-full mt-4 bg-navy/95 border border-white/10 rounded-2xl shadow-2xl p-2 min-w-[200px] z-50 backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-500 max-h-[70vh] overflow-auto"
                >
                  <div className="px-3 py-2 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">{t("selectLanguage")}</div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-3 text-xs font-bold rounded-xl transition-all",
                        i18n.language === lang.code
                          ? "bg-saffron/10 text-saffron ring-1 ring-saffron/30"
                          : "text-white/40 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>



            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 border border-white/5 rounded-xl transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-700 ease-out border-t border-white/5 bg-navy/95 backdrop-blur-2xl px-6",
            mobileOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          )}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-6 py-4 text-xs font-black uppercase tracking-[0.3em] rounded-2xl transition-all",
                  isActive(item.href)
                    ? "bg-saffron/10 text-saffron ring-1 ring-saffron/30"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      </nav>

      {/* Logo Modal/Lightbox */}
      {logoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl cursor-pointer animate-in fade-in duration-300"
          onClick={() => setLogoModalOpen(false)}
        >
          <div
            className="relative flex flex-col items-center gap-8 p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-3xl max-w-md w-full mx-6 cursor-default animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLogoModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Logo */}
            <div className="relative">
              <div className="absolute -inset-8 bg-saffron/15 rounded-full blur-[60px] pointer-events-none animate-pulse" />
              <div className="relative w-32 h-32 rounded-[2rem] bg-gradient-to-br from-saffron/20 to-saffron/5 border-2 border-saffron/30 flex items-center justify-center shadow-[0_0_60px_rgba(255,153,51,0.3)]">
                <Scale className="w-16 h-16 text-saffron drop-shadow-[0_0_20px_rgba(255,153,51,0.5)]" />
              </div>
            </div>

            {/* Branding */}
            <div className="text-center">
              <h2 className="text-4xl font-black text-white tracking-[0.2em] uppercase mb-2">ADHIKAR</h2>
              <p className="text-sm font-bold text-saffron/60 tracking-[0.5em] uppercase mb-6">LawBridge India</p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-saffron/30 to-transparent mb-6" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto italic">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Tri-color bar */}
            <div className="flex w-full rounded-full overflow-hidden h-1">
              <div className="flex-1 bg-saffron" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-green-india" />
            </div>
          </div>
        </div>
      )}

    </>
  );
};
