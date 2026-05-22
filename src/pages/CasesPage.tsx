import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import {
  ArrowRight, Search, X, Sparkles, BookOpen, Award, Scale,
  ShieldAlert, Banknote, UserX, Skull, Monitor, Heart, ShoppingCart, Gavel,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const landmarkCases = [
  {
    name: "Kesavananda Bharati v. State of Kerala (1973)",
    citation: "W.P. (Civil) 135 of 1970",
    significance: "Established Basic Structure Doctrine",
    summary: "The Supreme Court ruled that while Parliament has wide powers to amend the Constitution, it cannot alter or destroy its basic structure (e.g., secularism, federalism, democracy).",
    impact: "Saved the core identity of Indian democracy and restricted unchecked amendments.",
    color: "from-amber-500/20 via-saffron/5 to-transparent",
    iconColor: "text-amber-400"
  },
  {
    name: "Maneka Gandhi v. Union of India (1978)",
    citation: "1978 AIR 597",
    significance: "Expanded Personal Liberty under Article 21",
    summary: "The court held that 'procedure established by law' under Article 21 must be fair, just, and reasonable, rather than arbitrary, expanding the right to life and liberty.",
    impact: "Paved the way for subsequent rulings on the right to privacy, clean environment, and free legal aid.",
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    iconColor: "text-emerald-400"
  },
  {
    name: "Vishaka & Others v. State of Rajasthan (1997)",
    citation: "AIR 1997 SC 3011",
    significance: "Guidelines against Sexual Harassment at Workplace",
    summary: "Introduced first-ever legal guidelines for sexual harassment in workplaces, filling a legislative vacuum before the POSH Act was passed in 2013.",
    impact: "Instituted the Internal Complaints Committee (ICC) requirement across Indian workspaces.",
    color: "from-rose-500/20 via-rose-500/5 to-transparent",
    iconColor: "text-rose-400"
  },
  {
    name: "Shreya Singhal v. Union of India (2015)",
    citation: "AIR 2015 SC 1523",
    significance: "Striking Down Section 66A of IT Act",
    summary: "Struck down Section 66A of the IT Act, which allowed arrests for 'offensive' online posts, declaring it unconstitutionally vague and restrictive of free speech.",
    impact: "Protected online free expression and limited police overreach regarding digital speech.",
    color: "from-sky-500/20 via-sky-500/5 to-transparent",
    iconColor: "text-sky-400"
  }
];

const caseTypes = [
  { label: "Rape & Sexual Assault", slug: "rape-sexual-assault", desc: "POCSO Act, IPC 375-376, landmark judgments", icon: ShieldAlert, color: "from-red-500/20 to-red-500/5", iconColor: "text-red-400" },
  { label: "Scam & Fraud", slug: "scam-fraud", desc: "Prevention of Corruption Act, cheating cases", icon: Banknote, color: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-400" },
  { label: "Kidnapping & Abduction", slug: "kidnapping-abduction", desc: "IPC 359-369, missing persons cases", icon: UserX, color: "from-orange-500/20 to-orange-500/5", iconColor: "text-orange-400" },
  { label: "Murder & Homicide", slug: "murder-homicide", desc: "IPC 299-304, culpable homicide", icon: Skull, color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400" },
  { label: "Cybercrime", slug: "cybercrime", desc: "IT Act 2000, online fraud, hacking", icon: Monitor, color: "from-sky-500/20 to-sky-500/5", iconColor: "text-sky-400" },
  { label: "Domestic Violence", slug: "domestic-violence", desc: "DV Act 2005, protection orders", icon: Heart, color: "from-pink-500/20 to-pink-500/5", iconColor: "text-pink-400" },
  { label: "Consumer Grievances", slug: "consumer-grievances", desc: "Consumer Protection Act 2019", icon: ShoppingCart, color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400" },
  { label: "Parliamentary Law", slug: "parliamentary-law", desc: "Anti-Defection & Privilege matters", icon: Gavel, color: "from-indigo-500/20 to-indigo-500/5", iconColor: "text-indigo-400" },
];

const CasesPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLandmarkIdx, setActiveLandmarkIdx] = useState(0);

  const filteredCaseTypes = useMemo(() => {
    return caseTypes.filter(
      (c) =>
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const activeLandmark = landmarkCases[activeLandmarkIdx];

  const handleLandmarkNext = () => {
    setActiveLandmarkIdx((prev) => (prev + 1) % landmarkCases.length);
  };

  const handleLandmarkPrev = () => {
    setActiveLandmarkIdx((prev) => (prev - 1 + landmarkCases.length) % landmarkCases.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Header Hero */}
        <section className="py-16">
          <div className="container">
            <ScrollReveal className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Case Repository</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
                Landmark cases & judgments
              </h1>
              <p className="text-white/45 text-base sm:text-lg leading-relaxed">
                Explore major case categories with linked legal context, relevant provisions, and practical summaries.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Landmark Precedents Showcase */}
        <section className="pb-16">
          <div className="container max-w-5xl">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-4 h-4 text-saffron" />
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">Landmark Indian Precedents</span>
              </div>

              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl p-6 sm:p-10 spotlight-card overflow-hidden">
                {/* Glow layer matching selection */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none transition-all duration-700", activeLandmark.color)} />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={cn("px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[10px] font-black uppercase tracking-wider", activeLandmark.textColor)}>
                        {activeLandmark.citation}
                      </span>
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.15em]">
                        {activeLandmark.significance}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight">
                      {activeLandmark.name}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                      <strong className="text-saffron">Summary:</strong> {activeLandmark.summary}
                    </p>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-white/40 text-xs leading-relaxed font-bold">
                        <strong className="text-emerald-400 block mb-1 uppercase tracking-wider text-[9px]">Sovereign Impact</strong>
                        {activeLandmark.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col justify-between items-center shrink-0 gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleLandmarkPrev}
                        className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                      >
                        <ChevronLeft className="w-4.5 h-4.5" />
                      </button>
                      <button
                        onClick={handleLandmarkNext}
                        className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                      >
                        <ChevronRight className="w-4.5 h-4.5" />
                      </button>
                    </div>

                    <div className="flex md:flex-col items-center gap-1 md:mt-auto">
                      {landmarkCases.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveLandmarkIdx(i)}
                          className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            i === activeLandmarkIdx
                              ? "bg-saffron scale-125 shadow-md shadow-saffron/40"
                              : "bg-white/10 hover:bg-white/30"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Categories browser with search */}
        <section className="pb-16">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-saffron" />
                  <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">Case Classifications</span>
                </div>

                {/* Search field */}
                <div className="relative w-full sm:w-80 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-saffron transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search case categories..."
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
            </ScrollReveal>

            {/* Grid display */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCaseTypes.map((c, i) => {
                const Icon = c.icon;
                return (
                  <ScrollReveal key={c.slug} delay={i * 45}>
                    <Link
                      to={`/cases/${c.slug}`}
                      className="group relative block h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 border border-white/5 bg-white/[0.01] hover:border-white/10 spotlight-card overflow-hidden"
                    >
                      {/* Hover glow */}
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", c.color)} />
                      
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                          <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.06] group-hover:scale-110 transition-all duration-500">
                            <Icon className={cn("w-4.5 h-4.5 opacity-70 group-hover:opacity-100 transition-opacity", c.iconColor)} />
                          </div>
                          
                          <h3 className="font-bold text-white text-[15px] mb-1.5 group-hover:text-saffron transition-colors tracking-tight">
                            {c.label}
                          </h3>
                          
                          <p className="text-xs text-white/40 leading-relaxed font-medium mb-6">
                            {c.desc}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-white/35 group-hover:text-saffron transition-all pt-4 border-t border-white/5">
                          <span className="text-[9px] font-black uppercase tracking-widest">View Precedents</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}

              {filteredCaseTypes.length === 0 && (
                <div className="col-span-full py-16 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white/10" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-1">No categories matched</h4>
                  <p className="text-white/20 text-xs">Try searching for other terms or keywords.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <VidhiSahayak />
    </div>
  );
};

export default CasesPage;
