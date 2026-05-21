import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as TestimonialItem[];
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-india/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container px-4 sm:px-0">
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-saffron font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">{t("testimonials.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("testimonials.title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("testimonials.title").split(" ").slice(-1)}</span>
          </h2>
        </ScrollReveal>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {safeItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group rounded-3xl p-8 sm:p-10 transition-all duration-500 h-full flex flex-col hover:-translate-y-1 relative overflow-hidden spotlight-card">
                <Star className="absolute -top-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                
                <div className="flex gap-1 mb-6 relative">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-saffron text-saffron drop-shadow-[0_0_8px_rgba(255,153,51,0.5)]" />
                  ))}
                </div>
                
                <p className="text-base sm:text-lg text-white/80 leading-relaxed flex-1 italic relative mb-8">
                  "{item.quote}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-orange-600 flex items-center justify-center font-bold text-white shadow-lg">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white group-hover:text-saffron transition-colors">{item.name}</p>
                    <p className="text-sm text-white/40 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
