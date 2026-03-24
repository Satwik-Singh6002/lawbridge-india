import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ArrowRight, Scale, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ctaStats = [
  { icon: BookOpen, value: "395", label: "Articles" },
  { icon: Scale, value: "106", label: "Amendments" },
  { icon: Shield, value: "12", label: "Schedules" },
];

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 45% 12%) 0%, hsl(220 40% 18%) 50%, hsl(220 45% 14%) 100%)" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-saffron text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">Know Your Constitution</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Every citizen deserves to understand their{" "}
              <span style={{
                background: "linear-gradient(135deg, hsl(35 85% 55%), hsl(35 90% 65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                rights & laws
              </span>
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Explore the complete Indian Constitution, landmark judgments, and AI-powered legal guidance — all in your language.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                to="/laws"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-saffron text-white font-semibold rounded-xl hover:bg-saffron/90 transition-all shadow-lg shadow-saffron/20 hover:shadow-saffron/30 hover:-translate-y-0.5"
              >
                Browse Laws <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white/70 font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all"
              >
                Explore Cases
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md mx-auto">
              {ctaStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-saffron/60 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/30 mt-1 font-medium tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
