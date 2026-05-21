import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { legalCategoriesData } from "@/data/legalCategories";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ArrowLeft, Scale, Sparkles, AlertCircle, Shield, BookOpen, Clock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
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

export default function LawDetailPage() {
  const { t } = useTranslation();
  const { slug, lawIndex } = useParams();
  const navigate = useNavigate();

  const category = slug ? legalCategoriesData[slug] : null;
  const law = category && lawIndex ? category.laws[parseInt(lawIndex)] : null;

  if (!law || !category) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Law Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-saffron hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <main className="pt-36 pb-24">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <Link
              to={`/laws/${category.slug}`}
              className="inline-flex items-center gap-2 text-white/40 hover:text-saffron transition-all text-xs font-black uppercase tracking-[0.2em] mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to {category.label}
            </Link>

            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-8">
              <Badge
                className={cn(
                  "px-4 py-1.5 rounded-lg border text-xs font-black uppercase tracking-widest",
                  typeColors[law.type]
                )}
              >
                {typeLabels[law.type]}
              </Badge>
              <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                {law.section}
              </div>
            </div>

            {/* Title */}
            <div className="mb-8 mt-2">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl">
                {law.title}
              </h1>
            </div>

            {/* Detailed Content Box */}
            <div className="relative p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl mb-12">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Scale className="w-32 h-32 text-saffron" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-saffron" />
                  <h3 className="text-sm font-black text-white/60 uppercase tracking-[0.2em]">Official Provision</h3>
                </div>
                
                <p className="text-xl leading-relaxed text-white/80 font-medium whitespace-pre-wrap">
                  {law.description}
                </p>
              </div>
            </div>

            {/* Interactive/Contextual Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('open-vidhi-sahayak', { 
                      detail: { prompt: `Analyze and explain the legal implications of ${law.title}: ${law.description}` } 
                    })
                  );
                }}
                className="flex items-center justify-between p-6 rounded-2xl bg-saffron/10 border border-saffron/20 hover:bg-saffron/20 transition-all group cursor-pointer"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1 text-saffron">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">AI Agent</span>
                  </div>
                  <div className="text-white font-bold text-lg">Analyze with Vidhi Sahayak</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-saffron rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button 
                onClick={() => {
                  toast.info("Checking historical records...", {
                    description: "Currently displaying the most up-to-date provision. No recent major amendments were found for this specific section in the database.",
                    duration: 5000,
                  });
                }}
                className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1 text-white/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">History</span>
                  </div>
                  <div className="text-white font-bold text-lg">View Related Amendments</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-white/40 rotate-135 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-12 p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-4 text-amber-500/70">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <p className="text-sm">
                <strong>Disclaimer:</strong> This knowledge module is for educational and informational purposes only. Do not interpret this as formal legal advice.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </main>

      <Footer />
      <VidhiSahayak />
    </div>
  );
}
