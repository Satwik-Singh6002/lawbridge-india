import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  Gavel, ShieldAlert, Banknote, UserX, Skull,
  Monitor, Heart, ShoppingCart, ChevronRight, Search, X, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { icon: ShieldAlert, label: "Rape & Sexual Assault", count: "POCSO, IPC 375-376", color: "from-red-500/20 to-red-500/5", iconColor: "text-red-400", borderColor: "hover:border-red-500/30", slug: "rape-sexual-assault", group: "Safety & Protection" },
  { icon: Banknote, label: "Scam & Fraud", count: "Prevention of Corruption Act", color: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-400", borderColor: "hover:border-amber-500/30", slug: "scam-fraud", group: "Financial & Cyber" },
  { icon: UserX, label: "Kidnapping & Abduction", count: "IPC 359-369", color: "from-orange-500/20 to-orange-500/5", iconColor: "text-orange-400", borderColor: "hover:border-orange-500/30", slug: "kidnapping-abduction", group: "Criminal Law" },
  { icon: Skull, label: "Murder & Homicide", count: "IPC 299-304", color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400", borderColor: "hover:border-rose-500/30", slug: "murder-homicide", group: "Criminal Law" },
  { icon: Monitor, label: "Cybercrime", count: "IT Act 2000", color: "from-sky-500/20 to-sky-500/5", iconColor: "text-sky-400", borderColor: "hover:border-sky-500/30", slug: "cybercrime", group: "Financial & Cyber" },
  { icon: Heart, label: "Domestic Violence", count: "DV Act 2005", color: "from-pink-500/20 to-pink-500/5", iconColor: "text-pink-400", borderColor: "hover:border-pink-500/30", slug: "domestic-violence", group: "Safety & Protection" },
  { icon: ShoppingCart, label: "Consumer Grievances", count: "Consumer Protection Act 2019", color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400", borderColor: "hover:border-emerald-500/30", slug: "consumer-grievances", group: "Civil & Constitutional" },
  { icon: Gavel, label: "Parliamentary Law", count: "Anti-Defection & Privilege", color: "from-indigo-500/20 to-indigo-500/5", iconColor: "text-indigo-400", borderColor: "hover:border-indigo-500/30", slug: "parliamentary-law", group: "Civil & Constitutional" },
];

const groups = ["All", "Criminal Law", "Safety & Protection", "Financial & Cyber", "Civil & Constitutional"];

export const LegalCategoriesSection = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");

  const filteredCategories = useMemo(() => {
    return categories.filter((cat) => {
      const matchesSearch = cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cat.count.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGroup = activeGroup === "All" || cat.group === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, activeGroup]);

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="laws">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-saffron/5 via-violet-500/5 to-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-4">
            <Gavel className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("categories.sectionLabel")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Browse Indian <span className="text-gradient">Legal Database</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Explore key sections, provisions, and landmark protections by dynamic classifications.
          </p>
        </ScrollReveal>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          {/* Group Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none custom-scrollbar">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={cn(
                  "h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-wider shrink-0 transition-all",
                  activeGroup === group
                    ? "bg-saffron text-white shadow-lg shadow-saffron/20"
                    : "bg-white/[0.02] border border-white/5 text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-saffron transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search acts, codes or sections..."
              className="w-full h-11 pl-11 pr-10 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white placeholder:text-white/20 outline-none focus:border-saffron/30 font-medium tracking-wide transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 40}>
              <Link 
                to={`/laws/${cat.slug}`} 
                className="group relative block w-full text-left rounded-3xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-white/5 bg-white/[0.01] hover:border-white/10 spotlight-card"
              >
                {/* Glow layer on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.06] group-hover:scale-110 transition-all duration-500">
                        <cat.icon className={`w-4.5 h-4.5 ${cat.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-saffron/60 transition-colors">
                        {cat.group}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-white text-[15px] mb-1.5 group-hover:text-saffron transition-colors tracking-tight">
                      {cat.label}
                    </h3>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider leading-relaxed mb-6">
                      {cat.count}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-white/35 group-hover:text-saffron transition-all pt-4 border-t border-white/5">
                    <span className="text-[9px] font-black uppercase tracking-widest">Explore provisions</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-6 h-6 text-white/10" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">No categories matched</h4>
              <p className="text-white/20 text-xs">Try different filters or search keywords.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
