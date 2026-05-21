import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Scale, Shield, FileText, Users, MapPin, BarChart3,
  MessageSquare, ExternalLink, ArrowRight, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const featureKeys = [
  { key: "caseRepo", icon: Scale, href: "/cases", gradient: "from-emerald-500/20 to-green-500/5", iconColor: "text-emerald-400" },
  { key: "aiAssistant", icon: MessageSquare, href: "#", gradient: "from-blue-500/20 to-indigo-500/5", iconColor: "text-blue-400" },
  { key: "crimeAnalytics", icon: BarChart3, href: "/analytics", gradient: "from-violet-500/20 to-purple-500/5", iconColor: "text-violet-400" },
  { key: "knowRights", icon: Shield, href: "/laws", gradient: "from-teal-500/20 to-cyan-500/5", iconColor: "text-teal-400" },
  { key: "govPortals", icon: ExternalLink, href: "/news", gradient: "from-sky-500/20 to-blue-500/5", iconColor: "text-sky-400" },
];

export const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="features">
      {/* Ambient background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("features.sectionLabel")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            {t("features.title")}
          </h2>
          <p className="text-white/45 mt-6 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            {t("features.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-5 px-4 sm:px-0">
          {featureKeys.map((f, i) => (
            <ScrollReveal 
              key={f.key} 
              delay={i * 50}
              className={cn(
                "col-span-1 sm:col-span-2 lg:col-span-2",
                i === 4 && "sm:col-start-2 lg:col-start-auto",
                i === 3 && "lg:col-start-2"
              )}
            >
              <Link to={f.href} className="block h-full">
                <div className="group relative rounded-[2rem] p-8 h-full transition-all duration-500 overflow-hidden flex flex-col justify-between spotlight-card">
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.06] group-hover:scale-110 transition-all duration-500`}>
                      <f.icon className={`w-5 h-5 ${f.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-[15px] leading-tight group-hover:text-white transition-colors tracking-tight">{t(`features.items.${f.key}.title`)}</h3>
                    <p className="text-sm text-white/45 group-hover:text-white/60 leading-relaxed mb-6 font-medium">{t(`features.items.${f.key}.desc`)}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-2 text-white/30 group-hover:text-saffron transition-all mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest">{t("features.learnMore")}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
