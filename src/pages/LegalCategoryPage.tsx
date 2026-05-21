import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { legalCategoriesData } from "@/data/legalCategories";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Scale, BookOpen, Landmark, Shield, Sparkles, ChevronRight, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CategoryAnalyticsGraph } from "@/components/CategoryAnalyticsGraph";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  constitutional: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  statutory: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ipc: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  bns: "bg-saffron/10 text-saffron border-saffron/20",
  special: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const typeLabels: Record<string, string> = {
  constitutional: "Constitutional",
  statutory: "Statutory Law",
  ipc: "Indian Penal Code",
  bns: "Bharatiya Nyaya Sanhita",
  special: "Special Act",
};

const LegalCategoryPage = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const isCasesRoute = location.pathname.startsWith("/cases");
  const basePath = isCasesRoute ? "/cases" : "/laws";
  const backLink = isCasesRoute ? "/cases" : "/#laws";
  const category = slug ? legalCategoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">{t("legalCategory.notFound")}</h1>
          <Link to={backLink} className="text-saffron hover:underline">← {t("legalCategory.backToAll")}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-36 pb-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--navy-light),_transparent_60%)]" />
        <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-saffron/5 blur-[120px] rounded-full" />
        
        <div className="container relative z-10">
          <ScrollReveal>
            <Link 
              to={backLink} 
              className="group inline-flex items-center gap-2 text-white/40 hover:text-saffron transition-all text-xs font-black uppercase tracking-[0.2em] mb-10"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> 
              {t("legalCategory.backToAll") || "Back to Wisdom Repository"}
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1px w-8 bg-saffron/50" />
                  <span className="text-saffron font-bold text-[10px] tracking-[0.4em] uppercase">Sovereign Directory</span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-6">
                  {category.label}
                </h1>
                <p className="text-xl sm:text-2xl text-white/60 font-medium tracking-tight mb-4 leading-tight">
                  <span className="text-saffron/80">{category.subtitle}</span>
                </p>
                <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              </div>
              
              <div className="hidden lg:block">
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                  <Scale className="w-12 h-12 text-saffron/20 mb-4" />
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Category Authored By</div>
                  <div className="text-sm font-bold text-white/60 mt-1">Lawbridge Sovereign AI</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Laws Section */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-saffron/10 border border-saffron/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tight">{t("legalCategory.lawsTitle")}</h2>
                  <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Primary Statutes & Provisions</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {category.laws.map((law, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Link to={`${basePath}/${category.slug}/law/${i}`} className="group relative block h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative h-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-all duration-300 backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <Badge className={cn("px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest", typeColors[law.type])}>
                        {typeLabels[law.type]}
                      </Badge>
                      <Sparkles className="w-4 h-4 text-white/10 group-hover:text-saffron transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-saffron transition-colors">{law.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{law.description}</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Knowledge Module</span>
                      <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-saffron transition-all group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01]" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-10 rounded-xl bg-green-india/10 border border-green-india/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-india" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">{t("legalCategory.rightsTitle")}</h2>
                <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Constitutional Safeguards</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.fundamentalRights.map((right, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="h-full bg-[#111] border border-white/5 rounded-2xl p-6 flex gap-4 hover:border-green-india/30 transition-colors">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5">
                    <BookOpen className="w-3 h-3 text-white/20" />
                  </div>
                  <p className="text-sm font-medium text-white/70 leading-relaxed">{right}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Judgments Section */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">{t("legalCategory.judgmentsTitle")}</h2>
                <p className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Landmark Precedents</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.keyJudgments.map((j, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group h-full bg-white/[0.01] border border-white/5 rounded-[2rem] p-8 flex flex-col hover:bg-white/[0.03] transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="rounded-lg border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest px-2 py-0.5">
                      {j.year}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">{j.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1 italic">"{j.summary}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-24 bg-white/[0.01] border-y border-white/5">
        <CategoryAnalyticsGraph slug={category.slug} label={category.label} />
      </div>

      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-amber-500/5 border border-amber-500/20 p-8 sm:p-12 text-center">
            <div className="absolute top-0 right-0 p-4">
              <Info className="w-6 h-6 text-amber-500/20" />
            </div>
            <p className="text-base sm:text-lg font-bold text-amber-500/80 leading-relaxed uppercase tracking-tight">
              {t("legalCategory.disclaimer")}
            </p>
            <p className="text-[10px] font-black text-amber-500/30 uppercase tracking-[0.3em] mt-4">Educational Reference Only</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCategoryPage;
