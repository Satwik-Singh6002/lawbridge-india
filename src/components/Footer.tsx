import { Scale, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function resolveFooterLink(label: string): string {
  const s = label.trim().toLowerCase();

  if (s.includes("legal database") || s.includes("laws")) return "/laws";
  if (s.includes("case")) return "/cases";
  if (s.includes("analytics") || s.includes("crime")) return "/analytics";
  if (s.includes("advocate") || s.includes("find help") || s.includes("directory")) return "/find-help";
  if (s.includes("news")) return "/news";
  if (s.includes("ai") || s.includes("assistant") || s.includes("vidhi")) return "/#chatbot";

  if (s.includes("privacy")) return "/privacy";
  if (s.includes("terms") || s.includes("disclaimer")) return "/terms";
  if (s.includes("contact")) return "/contact";
  if (s.includes("about")) return "/about";
  if (s.includes("rights") || s.includes("rti") || s.includes("fir") || s.includes("consumer") || s.includes("cyber")) return "/laws";

  return "/";
}

export const Footer = () => {
  const { t } = useTranslation();
  const platformLinks = t("footer.platformLinks", { returnObjects: true }) as string[];
  const resourceLinks = t("footer.resourceLinks", { returnObjects: true }) as string[];
  const legalLinks = t("footer.legalLinks", { returnObjects: true }) as string[];

  return (
    <footer className="relative bg-[#050505] pt-16 pb-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--navy-light),_transparent_40%)]" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-saffron/30 transition-all duration-500">
                <Scale className="w-5 h-5 text-saffron" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-[0.1em] uppercase leading-none">ADHIKAR</span>
                <span className="text-[9px] font-bold text-saffron/40 tracking-[0.4em] uppercase mt-1">{t("footer.sovereignEdition")}</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 italic">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 text-white/20">
              <Sparkles className="w-4 h-4 text-saffron/30" />
              <span className="text-[10px] font-black uppercase tracking-widest">{t("footer.builtWith")}</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">{t("footer.platform")}</h4>
            <ul className="space-y-4">
              {Array.isArray(platformLinks) && platformLinks.map((item) => (
                <li key={item}>
                  <Link to={resolveFooterLink(item)} className="text-sm font-medium text-white/40 hover:text-saffron transition-all flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/0 group-hover/link:bg-saffron/50 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">{t("footer.resources")}</h4>
            <ul className="space-y-4">
              {Array.isArray(resourceLinks) && resourceLinks.map((item) => (
                <li key={item}>
                  <Link to={resolveFooterLink(item)} className="text-sm font-medium text-white/40 hover:text-saffron transition-all flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/0 group-hover/link:bg-saffron/50 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              {Array.isArray(legalLinks) && legalLinks.map((item) => (
                <li key={item}>
                  <Link to={resolveFooterLink(item)} className="text-sm font-medium text-white/40 hover:text-saffron transition-all flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/0 group-hover/link:bg-saffron/50 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">                {t("footer.copyright")}
              </p>
              <div className="h-1 w-12 bg-saffron/20 rounded-full" />
            </div>
            
            <div className="flex items-center gap-6">
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest bg-white/[0.02] px-4 py-2 rounded-full border border-white/5">
                {t("footer.dataSource")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />
    </footer>
  );
};
