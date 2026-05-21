import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Phone, Shield, Scale, AlertCircle, ExternalLink, PhoneCall } from "lucide-react";

const iconMap = [Scale, Shield, AlertCircle, Phone, Shield, Scale];
const colorMap = [
  { color: "from-saffron/20 to-amber-500/5", iconColor: "text-saffron", borderColor: "border-saffron/20" },
  { color: "from-rose-500/20 to-pink-500/5", iconColor: "text-rose-400", borderColor: "border-rose-500/20" },
  { color: "from-blue-500/20 to-indigo-500/5", iconColor: "text-blue-400", borderColor: "border-blue-500/20" },
  { color: "from-emerald-500/20 to-green-500/5", iconColor: "text-emerald-400", borderColor: "border-emerald-500/20" },
  { color: "from-violet-500/20 to-purple-500/5", iconColor: "text-violet-400", borderColor: "border-violet-500/20" },
  { color: "from-teal-500/20 to-cyan-500/5", iconColor: "text-teal-400", borderColor: "border-teal-500/20" },
];

interface HelplineItem {
  name: string;
  shortName: string;
  number: string;
  description: string;
  available: string;
}

interface QuickLink {
  name: string;
  url: string;
}

export const EmergencyHelplinesSection = () => {
  const { t } = useTranslation();
  const helplines = t("helplines.items", { returnObjects: true }) as HelplineItem[];
  const quickLinks = t("helplines.links", { returnObjects: true }) as QuickLink[];
  const safeHelplines = Array.isArray(helplines) ? helplines : [];
  const safeLinks = Array.isArray(quickLinks) ? quickLinks : [];

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="helplines">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
            <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-rose-400 text-[10px] font-black tracking-[0.3em] uppercase">{t("helplines.sectionLabel")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
            {t("helplines.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{t("helplines.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto text-lg font-medium">
            {t("helplines.description")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {safeHelplines.map((h, i) => {
            const Icon = iconMap[i] || Scale;
            const colors = colorMap[i] || colorMap[0];
            return (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`group relative rounded-2xl p-6 border ${colors.borderColor} bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                      </div>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/25 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                        {h.available}
                      </span>
                    </div>

                    <div className="mb-4 flex-1">
                      <p className="text-[9px] font-black tracking-[0.2em] uppercase text-white/30 mb-1">{h.shortName}</p>
                      <h3 className="text-white font-bold text-sm leading-snug mb-2">{h.name}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{h.description}</p>
                    </div>

                    <a href={`tel:${h.number}`} className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06] group/link">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.06] group-hover/link:scale-110 transition-transform`}>
                        <Phone className={`w-3.5 h-3.5 ${colors.iconColor}`} />
                      </div>
                      <span className={`text-2xl font-black ${colors.iconColor} tracking-wider`}>{h.number}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
            <p className="text-white/30 text-[10px] font-black tracking-[0.3em] uppercase mb-5 text-center">
              {t("helplines.quickLinks")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {safeLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-saffron/30 hover:bg-saffron/5 transition-all duration-300">
                  <ExternalLink className="w-3.5 h-3.5 text-white/25 group-hover:text-saffron transition-colors shrink-0" />
                  <span className="text-white/50 text-xs font-medium group-hover:text-white/80 transition-colors leading-snug">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
