import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Gavel, ShieldAlert, Banknote, UserX, Skull,
  Monitor, Heart, ShoppingCart
} from "lucide-react";

const categories = [
  { icon: ShieldAlert, label: "Rape & Sexual Assault", count: "POCSO, IPC 375-376", accent: "border-l-red-500", slug: "rape-sexual-assault" },
  { icon: Banknote, label: "Scam & Fraud", count: "Prevention of Corruption Act", accent: "border-l-amber-500", slug: "scam-fraud" },
  { icon: UserX, label: "Kidnapping & Abduction", count: "IPC 359-369", accent: "border-l-orange-500", slug: "kidnapping-abduction" },
  { icon: Skull, label: "Murder & Homicide", count: "IPC 299-304", accent: "border-l-rose-500", slug: "murder-homicide" },
  { icon: Monitor, label: "Cybercrime", count: "IT Act 2000", accent: "border-l-sky-500", slug: "cybercrime" },
  { icon: Heart, label: "Domestic Violence", count: "DV Act 2005", accent: "border-l-pink-500", slug: "domestic-violence" },
  { icon: ShoppingCart, label: "Consumer Grievances", count: "Consumer Protection Act 2019", accent: "border-l-emerald-500", slug: "consumer-grievances" },
  { icon: Gavel, label: "Parliamentary Law", count: "Anti-Defection & Privilege", accent: "border-l-indigo-500", slug: "parliamentary-law" },
];

export const LegalCategoriesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="laws">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("categories.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {t("categories.title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t("categories.description")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 60}>
              <Link to={`/laws/${cat.slug}`} className={`block w-full text-left bg-card rounded-xl p-5 border-l-4 ${cat.accent} shadow-sm hover:shadow-md transition-all active:scale-[0.98] group border border-border/40`}>
                <cat.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{cat.label}</h3>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
