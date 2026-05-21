import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ArrowRight, Scale, Shield, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ctaStats = [
  { icon: BookOpen, value: "395", label: "Articles" },
  { icon: Scale, value: "106", label: "Amendments" },
  { icon: Shield, value: "12", label: "Schedules" },
];

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--saffron-pale),_transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0m60 60L30 30' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron/20 via-saffron-light/10 to-saffron/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 sm:p-16 lg:p-20 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
              
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 mb-8 transition-transform hover:scale-105">
                  <Sparkles className="w-3.5 h-3.5 text-saffron" />
                  <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("cta.sectionLabel")}</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                  {t("cta.title1")} <br />
                  <span className="text-gradient">{t("cta.title2")}</span>
                </h2>
                
                <p className="text-white/40 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                  {t("cta.description")}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                  <Button asChild size="lg" className="h-14 px-10 rounded-2xl bg-saffron text-white font-black uppercase tracking-widest hover:bg-saffron/90 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,153,51,0.3)] transition-all">
                    <Link to="/laws" className="flex items-center gap-3">
                      {t("cta.browseLaws")} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="h-14 px-10 rounded-2xl border-white/10 bg-white/5 text-white/70 font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all">
                    <Link to="/cases">{t("cta.exploreCases")}</Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 max-w-2xl mx-auto pt-10 border-t border-white/5">
                  {ctaStats.map((stat) => (
                    <div key={stat.label} className="group/stat text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 group-hover/stat:border-saffron/30 transition-colors">
                        <stat.icon className="w-6 h-6 text-saffron/60 group-hover/stat:text-saffron transition-all" />
                      </div>
                      <div className="text-3xl font-black text-white tabular-nums mb-1 tracking-tighter">{stat.value}</div>
                      <div className="text-[10px] text-white/30 font-black tracking-[0.2em] uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
