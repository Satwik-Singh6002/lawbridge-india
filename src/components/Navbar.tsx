import { useState } from "react";
import { Menu, X, Globe, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const navItems = [
    { label: t("nav.laws"), href: "#laws" },
    { label: t("nav.cases"), href: "#cases" },
    { label: t("nav.analytics"), href: "#analytics" },
    { label: t("nav.findHelp"), href: "#directory" },
    { label: t("nav.news"), href: "#news" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
            <Scale className="w-5 h-5 text-saffron" />
          </div>
          <span className="text-xl font-bold text-navy tracking-tight">ADHIKAR</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLangOpen(!langOpen)}
              className="gap-1.5 text-muted-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">{currentLang.short}</span>
            </Button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg p-1 min-w-[140px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-muted transition-colors ${
                      i18n.language === lang.code ? "bg-muted font-semibold text-foreground" : ""
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="hero" size="sm" className="hidden sm:flex">
            {t("nav.vidhiSahayak")}
          </Button>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-2">
            {t("nav.vidhiSahayak")}
          </Button>
        </div>
      )}
    </nav>
  );
};
