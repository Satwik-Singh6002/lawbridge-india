import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Database, Info, Scale } from "lucide-react";

const icons = [Scale, Database, ShieldCheck, Info];

interface TrustItem {
  title: string;
  description: string;
}

export const TrustSafetySection = () => {
  const { t } = useTranslation();
  const items = t("trust.items", { returnObjects: true }) as TrustItem[];
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section id="trust" className="relative py-16 sm:py-20 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(19,136,8,0.10),_transparent_40%)]" />
      <div className="container relative z-10">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">{t("trust.sectionLabel")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">{t("trust.title")}</h2>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed">
              {t("trust.description")}
            </p>
          </div>
          <div className="glassy-card rounded-3xl p-6 max-w-xl">
            <p className="text-white/55 text-sm leading-relaxed">
              <span className="text-saffron font-bold">Tip:</span> {t("trust.tip")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeItems.map((it, idx) => {
            const Icon = icons[idx] || Scale;
            return (
              <ScrollReveal key={idx} delay={idx * 70} className="glassy-card rounded-3xl p-7">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-saffron" />
                </div>
                <h3 className="text-white font-black tracking-tight mb-2">{it.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{it.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
