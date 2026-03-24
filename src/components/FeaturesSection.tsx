import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Scale, Shield, FileText, Users, MapPin, BarChart3,
  MessageSquare, ExternalLink, ArrowRight
} from "lucide-react";

const featureKeys = [
  { key: "legalDb", icon: FileText, href: "/laws", gradient: "from-amber-500/10 to-orange-500/5", iconBg: "bg-saffron-pale", iconColor: "text-saffron" },
  { key: "caseRepo", icon: Scale, href: "/cases", gradient: "from-emerald-500/10 to-green-500/5", iconBg: "bg-green-india-pale", iconColor: "text-green-india" },
  { key: "aiAssistant", icon: MessageSquare, href: "#", gradient: "from-blue-500/10 to-indigo-500/5", iconBg: "bg-saffron-pale", iconColor: "text-saffron" },
  { key: "crimeAnalytics", icon: BarChart3, href: "/analytics", gradient: "from-violet-500/10 to-purple-500/5", iconBg: "bg-green-india-pale", iconColor: "text-green-india" },
  { key: "advocateDir", icon: Users, href: "/find-help", gradient: "from-amber-500/10 to-yellow-500/5", iconBg: "bg-saffron-pale", iconColor: "text-saffron" },
  { key: "policeLocator", icon: MapPin, href: "/find-help", gradient: "from-rose-500/10 to-red-500/5", iconBg: "bg-green-india-pale", iconColor: "text-green-india" },
  { key: "knowRights", icon: Shield, href: "/laws", gradient: "from-teal-500/10 to-cyan-500/5", iconBg: "bg-saffron-pale", iconColor: "text-saffron" },
  { key: "govPortals", icon: ExternalLink, href: "/news", gradient: "from-slate-500/10 to-gray-500/5", iconBg: "bg-green-india-pale", iconColor: "text-green-india" },
];

export const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-cream" id="features">
      <div className="container">
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <p className="text-saffron font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">{t("features.sectionLabel")}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            {t("features.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featureKeys.map((f, i) => (
            <ScrollReveal key={f.key} delay={i * 60}>
              <Link to={f.href} className="block h-full">
                <div className={`group relative bg-card rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-border/50 hover:border-saffron/20 hover:-translate-y-1 overflow-hidden`}>
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-11 h-11 rounded-xl ${f.iconBg} ${f.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <f.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{t(`features.items.${f.key}.title`)}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">{t(`features.items.${f.key}.desc`)}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-saffron opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
