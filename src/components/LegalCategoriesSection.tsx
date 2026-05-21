import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Gavel, ShieldAlert, Banknote, UserX, Skull,
  Monitor, Heart, ShoppingCart, ChevronRight
} from "lucide-react";

const categories = [
  { icon: ShieldAlert, label: "Rape & Sexual Assault", count: "POCSO, IPC 375-376", color: "from-red-500/20 to-red-500/5", iconColor: "text-red-400", borderColor: "hover:border-red-500/30", slug: "rape-sexual-assault" },
  { icon: Banknote, label: "Scam & Fraud", count: "Prevention of Corruption Act", color: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-400", borderColor: "hover:border-amber-500/30", slug: "scam-fraud" },
  { icon: UserX, label: "Kidnapping & Abduction", count: "IPC 359-369", color: "from-orange-500/20 to-orange-500/5", iconColor: "text-orange-400", borderColor: "hover:border-orange-500/30", slug: "kidnapping-abduction" },
  { icon: Skull, label: "Murder & Homicide", count: "IPC 299-304", color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400", borderColor: "hover:border-rose-500/30", slug: "murder-homicide" },
  { icon: Monitor, label: "Cybercrime", count: "IT Act 2000", color: "from-sky-500/20 to-sky-500/5", iconColor: "text-sky-400", borderColor: "hover:border-sky-500/30", slug: "cybercrime" },
  { icon: Heart, label: "Domestic Violence", count: "DV Act 2005", color: "from-pink-500/20 to-pink-500/5", iconColor: "text-pink-400", borderColor: "hover:border-pink-500/30", slug: "domestic-violence" },
  { icon: ShoppingCart, label: "Consumer Grievances", count: "Consumer Protection Act 2019", color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400", borderColor: "hover:border-emerald-500/30", slug: "consumer-grievances" },
  { icon: Gavel, label: "Parliamentary Law", count: "Anti-Defection & Privilege", color: "from-indigo-500/20 to-indigo-500/5", iconColor: "text-indigo-400", borderColor: "hover:border-indigo-500/30", slug: "parliamentary-law" },
];

export const LegalCategoriesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="laws">
      {/* Subtle background orbs */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-saffron/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />

      <div className="container px-4 sm:px-0 relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-6">
            <Gavel className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("categories.sectionLabel")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            {t("categories.title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("categories.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-medium leading-relaxed text-lg">
            {t("categories.description")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 50}>
              <Link 
                to={`/laws/${cat.slug}`} 
                className="group relative block w-full text-left rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 overflow-hidden spotlight-card"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.08] group-hover:scale-110 transition-all duration-500`}>
                    <cat.icon className={`w-5 h-5 ${cat.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <h3 className="font-bold text-white text-[15px] mb-2 group-hover:text-white transition-colors tracking-tight">{cat.label}</h3>
                  <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.15em] mb-6">{cat.count}</p>
                  
                  <div className="flex items-center gap-1.5 text-white/40 group-hover:text-saffron transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
