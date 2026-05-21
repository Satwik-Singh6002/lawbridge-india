import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Search, BookOpen, Bot, MapPin } from "lucide-react";

const stepIcons = [Search, BookOpen, Bot, MapPin];

interface Step {
  title: string;
  description: string;
}

export const AboutSection = () => {
  const { t } = useTranslation();
  const steps = t("about.steps", { returnObjects: true }) as Step[];
  const safeSteps = Array.isArray(steps) ? steps : [];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,159,28,0.03),_transparent_50%)]" />
      <div className="container relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron/[0.08] backdrop-blur-sm mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">{t("about.sectionLabel")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
            {t("about.title")}
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            {t("about.description")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeSteps.map((s, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <ScrollReveal key={idx} delay={idx * 70} className="spotlight-card rounded-3xl p-7 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-saffron/10 border border-saffron/20 flex items-center justify-center mb-5 group-hover:scale-115 transition-transform duration-500">
                  <Icon className="w-5 h-5 text-saffron" />
                </div>
                <h3 className="text-white font-black tracking-tight mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mt-auto">{s.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
