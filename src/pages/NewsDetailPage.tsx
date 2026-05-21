import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { newsItems } from "@/data/legalNews";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ArrowLeft, Calendar, Sparkles, AlertCircle, Share2, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const newsId = parseInt(id || "");
  const item = newsItems.find(n => n.id === newsId);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">News Not Found</h1>
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
              to="/news"
              className="inline-flex items-center gap-2 text-white/40 hover:text-saffron transition-all text-xs font-black uppercase tracking-[0.2em] mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Legal News
            </Link>

            <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden mb-12 border border-white/5">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute top-8 left-8">
                <Badge className="px-4 py-1.5 rounded-xl bg-saffron/90 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest border-none">
                  {item.category}
                </Badge>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-2">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4 text-saffron" />
                  {item.date}
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <Clock className="w-4 h-4" />
                  Landmark Judgment
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {item.title}
                </h1>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 text-white/40 hover:border-white/20 hover:text-white transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-2xl leading-relaxed text-white/80 font-medium mb-12 italic border-l-4 border-saffron/40 pl-8">
                {item.summary}
              </p>
              
              <div className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl mb-12">
                <h3 className="text-white font-bold text-xl mb-6">Detailed Legal Analysis</h3>
                <p className="text-white/60 leading-[1.8] text-lg whitespace-pre-wrap">
                  {item.content || "As of now, the full legal analysis for this landmark case is being compiled by our experts. This judgment represents a cornerstone of Indian jurisprudence, having refined the interpretation of constitutional mandates and legal provisions."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              {item.tags.map(tag => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest">
                  <Tag className="w-3 h-3" />
                  {tag}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-1 gap-4 mb-24">
              <button 
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('open-vidhi-sahayak', { 
                      detail: { prompt: `Give me a professional summary and analysis of the landmark case: ${item.title}. Explain the key legal points discussed.` } 
                    })
                  );
                }}
                className="flex items-center justify-between p-8 rounded-[2rem] bg-saffron/10 border border-saffron/20 hover:bg-saffron/20 transition-all group cursor-pointer"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-2 text-saffron">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Vidhi Sahayak AI</span>
                  </div>
                  <div className="text-white font-black text-2xl tracking-tight">Generate AI Case Brief</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-saffron text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-saffron/20">
                  <ArrowLeft className="w-6 h-6 rotate-135" />
                </div>
              </button>
            </div>

          </ScrollReveal>
        </div>
      </main>

      <Footer />
      <VidhiSahayak />
    </div>
  );
}
