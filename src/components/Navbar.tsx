import { useState } from "react";
import { Menu, X, Globe, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = ["English", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "ಕನ್ನಡ", "ગુજરાતી"];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: "Laws", href: "#laws" },
    { label: "Cases", href: "#cases" },
    { label: "Analytics", href: "#analytics" },
    { label: "Find Help", href: "#directory" },
    { label: "News", href: "#news" },
  ];

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
              <span className="hidden sm:inline text-xs">EN</span>
            </Button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg p-1 min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLangOpen(false)}
                    className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="hero" size="sm" className="hidden sm:flex">
            Vidhi Sahayak
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
            Vidhi Sahayak
          </Button>
        </div>
      )}
    </nav>
  );
};
