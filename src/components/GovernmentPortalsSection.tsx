import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { 
  ExternalLink, 
  Scale, 
  ShieldCheck, 
  FileText, 
  HeartHandshake, 
  Users, 
  Gavel, 
  UserCheck, 
  MessageSquare, 
  BookOpen,
  Search,
  X 
} from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const portals = [
  { 
    name: "National Cyber Crime Portal", 
    url: "https://cybercrime.gov.in", 
    desc: "Report cybercrime incidents online", 
    category: "Grievance Portals",
    icon: ShieldCheck,
    color: "saffron"
  },
  { 
    name: "eCourts Services", 
    url: "https://ecourts.gov.in", 
    desc: "Case status, cause lists, court orders", 
    category: "Judicial Services",
    icon: Scale,
    color: "saffron"
  },
  { 
    name: "RTI Online", 
    url: "https://rtionline.gov.in", 
    desc: "File Right to Information applications", 
    category: "Rights & Statutes",
    icon: FileText,
    color: "emerald"
  },
  { 
    name: "Consumer Helpline", 
    url: "https://consumerhelpline.gov.in", 
    desc: "Consumer grievance redressal", 
    category: "Grievance Portals",
    icon: HeartHandshake,
    color: "emerald"
  },
  { 
    name: "NHRC India", 
    url: "https://nhrc.nic.in", 
    desc: "National Human Rights Commission", 
    category: "Grievance Portals",
    icon: Users,
    color: "saffron"
  },
  { 
    name: "NALSA", 
    url: "https://nalsa.gov.in", 
    desc: "Free legal aid for eligible citizens", 
    category: "Judicial Services",
    icon: Gavel,
    color: "saffron"
  },
  { 
    name: "National Commission for Women", 
    url: "https://ncwapps.nic.in", 
    desc: "Register complaints for violence against women", 
    category: "Grievance Portals",
    icon: UserCheck,
    color: "saffron"
  },
  { 
    name: "CPGRAMS", 
    url: "https://pgportal.gov.in", 
    desc: "Public Grievance Redressal Mechanism", 
    category: "Grievance Portals",
    icon: MessageSquare,
    color: "emerald"
  },
  { 
    name: "India Code", 
    url: "https://www.indiacode.nic.in", 
    desc: "Digital repository of all Central/State Acts", 
    category: "Rights & Statutes",
    icon: BookOpen,
    color: "emerald"
  },
];

const categories = ["All", "Judicial Services", "Grievance Portals", "Rights & Statutes"];

export const GovernmentPortalsSection = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortals = useMemo(() => {
    return portals.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="portals">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container px-4 sm:px-0">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            {t("portals.sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("portals.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{t("portals.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            {t("portals.description")}
          </p>
        </ScrollReveal>

        {/* Search Bar */}
        <ScrollReveal className="relative mb-6 max-w-md mx-auto group/search" delay={50}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/search:text-saffron transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search government portals..."
            className="w-full h-11 pl-11 pr-10 rounded-xl bg-white/[0.02] text-xs text-white border border-white/5 outline-none focus:border-saffron/30 placeholder:text-white/20 transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </ScrollReveal>

        {/* Tab Filters */}
        <ScrollReveal className="flex items-center justify-center gap-2 flex-wrap mb-12" delay={100}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "h-9 px-4 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all",
                activeCategory === cat
                  ? "bg-saffron text-white shadow-lg shadow-saffron/20"
                  : "bg-white/[0.02] border border-white/5 text-white/40 hover:bg-white/5 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Portals Grid */}
        {filteredPortals.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filteredPortals.map((p, i) => {
              const IconComponent = p.icon;
              return (
                <ScrollReveal key={p.name} delay={i * 40}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl p-7 transition-all duration-500 spotlight-card hover:-translate-y-1.5 h-full overflow-hidden relative"
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-5 transition-all shadow-inner",
                      p.color === "saffron" 
                        ? "bg-saffron/10 text-saffron group-hover:bg-saffron/20 group-hover:shadow-[0_0_20px_rgba(255,159,28,0.2)]" 
                        : "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    )}>
                      <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-saffron transition-colors mb-2">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                        {p.desc}
                      </p>
                    </div>
                    <div className="mt-auto pt-6">
                      <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-saffron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        {t("portals.visitPortal")} <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <ScrollReveal className="flex flex-col items-center justify-center py-16 text-center" delay={50}>
            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4">
              <Search className="w-5 h-5 text-white/15" />
            </div>
            <h3 className="text-white font-bold text-sm mb-1">No portals found</h3>
            <p className="text-white/20 text-xs">Try adjusting your search query or selected tab.</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
