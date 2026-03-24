import { Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const platformLinks = t("footer.platformLinks", { returnObjects: true }) as string[];
  const resourceLinks = t("footer.resourceLinks", { returnObjects: true }) as string[];
  const legalLinks = t("footer.legalLinks", { returnObjects: true }) as string[];

  return (
    <footer className="bg-navy text-primary-foreground/70 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center">
                <Scale className="w-4 h-4 text-saffron" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">ADHIKAR</span>
            </div>
            <p className="text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-2.5 text-sm">
              {Array.isArray(platformLinks) && platformLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2.5 text-sm">
              {Array.isArray(resourceLinks) && resourceLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2.5 text-sm">
              {Array.isArray(legalLinks) && legalLinks.map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.dataSource")}</p>
        </div>
      </div>
    </footer>
  );
};
