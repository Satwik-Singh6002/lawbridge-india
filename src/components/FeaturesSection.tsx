import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Scale, Shield, BarChart3, MessageSquare, ExternalLink, MapPin, ArrowRight, Sparkles, LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  key: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  iconColor: string;
  colSpan: string;
  rowSpan?: string;
  isAI?: boolean;
}

const featuresList: FeatureItem[] = [
  {
    key: "knowRights",
    icon: Shield,
    href: "/laws",
    gradient: "from-amber-500/20 via-saffron/10 to-transparent",
    iconColor: "text-amber-400",
    colSpan: "lg:col-span-4 md:col-span-4 col-span-1",
  },
  {
    key: "aiAssistant",
    icon: MessageSquare,
    href: "#",
    gradient: "from-saffron/20 via-orange-500/10 to-transparent",
    iconColor: "text-saffron animate-pulse",
    colSpan: "lg:col-span-2 md:col-span-2 col-span-1",
    rowSpan: "md:row-span-2",
    isAI: true,
  },
  {
    key: "caseRepo",
    icon: Scale,
    href: "/cases",
    gradient: "from-emerald-500/20 via-green-india/10 to-transparent",
    iconColor: "text-emerald-400",
    colSpan: "lg:col-span-2 md:col-span-2 col-span-1",
  },
  {
    key: "crimeAnalytics",
    icon: BarChart3,
    href: "/analytics",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-violet-400",
    colSpan: "lg:col-span-2 md:col-span-2 col-span-1",
  },
  {
    key: "policeLocator",
    icon: MapPin,
    href: "/find-help",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-sky-400",
    colSpan: "lg:col-span-3 md:col-span-3 col-span-1",
  },
  {
    key: "govPortals",
    icon: ExternalLink,
    href: "/news",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-400",
    colSpan: "lg:col-span-3 md:col-span-3 col-span-1",
  },
];

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const handleOpenVidhi = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-vidhi-sahayak'));
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="features">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-saffron/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-6xl">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("features.sectionLabel")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sovereign <span className="text-gradient">Legal Suite</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            {t("features.description")}
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {featuresList.map((f, i) => {
            const Icon = f.icon;
            const content = (
              <div className="group relative rounded-[2rem] p-8 h-full transition-all duration-500 overflow-hidden flex flex-col justify-between spotlight-card border border-white/5 bg-white/[0.01] hover:border-white/10 hover:-translate-y-1">
                {/* Hover gradient background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  f.gradient
                )} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.06] group-hover:scale-110 transition-all duration-500">
                    <Icon className={cn("w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity", f.iconColor)} />
                  </div>
                  
                  <h3 className="font-bold text-white mb-3 text-lg leading-tight tracking-tight group-hover:text-saffron transition-colors">
                    {t(`features.items.${f.key}.title`)}
                  </h3>
                  
                  <p className="text-sm text-white/50 group-hover:text-white/70 leading-relaxed font-medium">
                    {t(`features.items.${f.key}.desc`)}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-white/30 group-hover:text-saffron transition-all mt-8">
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {f.isAI ? "Activate Assistant" : t("features.learnMore")}
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );

            return (
              <ScrollReveal
                key={f.key}
                delay={i * 60}
                className={cn(f.colSpan, f.rowSpan)}
              >
                {f.isAI ? (
                  <a href={f.href} onClick={handleOpenVidhi} className="block h-full cursor-pointer">
                    {content}
                  </a>
                ) : (
                  <Link to={f.href} className="block h-full">
                    {content}
                  </Link>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
