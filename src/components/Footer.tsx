import { Scale } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const platformLinks = t("footer.platformLinks", { returnObjects: true }) as string[];
  const resourceLinks = t("footer.resourceLinks", { returnObjects: true }) as string[];
  const legalLinks = t("footer.legalLinks", { returnObjects: true }) as string[];

  return (
    <footer className="bg-navy text-primary-foreground/70 py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center group-hover:bg-saffron/30 transition-colors">
                <Scale className="w-4 h-4 text-saffron" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">ADHIKAR</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3 sm:mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-2 text-sm">
              {Array.isArray(platformLinks) && platformLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3 sm:mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-sm">
              {Array.isArray(resourceLinks) && resourceLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-3 sm:mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm">
              {Array.isArray(legalLinks) && legalLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.dataSource")}</p>
        </div>
      </div>
    </footer>
  );
};
