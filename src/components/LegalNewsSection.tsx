import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Search, X, TrendingUp, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { newsItems } from "@/data/legalNews";


const categories = ["All", "Criminal Law", "Constitutional Law", "Civil Rights", "Election Law", "Property Law", "Privacy Law", "Human Rights"];

export const LegalNewsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);


  const filtered = useMemo(() => {
    return newsItems.filter(n => {
      const matchCategory = activeCategory === "All" || n.category === activeCategory;
      const matchSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="py-24 bg-background" id="legal-news">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("news.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">{t("news.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("news.description")}
          </p>
        </ScrollReveal>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={cn(
                    "whitespace-nowrap px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "bg-saffron text-white shadow-lg shadow-saffron/20" 
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search landmark cases..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/5 text-white text-xs font-medium placeholder:text-white/20 focus:outline-none focus:border-saffron/30 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3 h-3 text-white/20 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
                <div className="group relative h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => navigate(`/news/${item.id}`)}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-saffron/90 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <TrendingUp className="w-3.5 h-3.5 text-saffron" />
                      Landmark
                    </div>
                    <h3 
                      onClick={() => navigate(`/news/${item.id}`)}
                      className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-saffron transition-colors cursor-pointer text-gradient-hover"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold text-white/20 uppercase tracking-widest">#{tag}</span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-4 mt-2">
                        <Link 
                          to={`/news/${item.id}`} 
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron hover:text-saffron-light transition-colors"
                        >
                          Read Analysis <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        {item.sourceUrl && (
                          <a 
                            href={item.sourceUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/10 transition-all"
                          >
                            {item.sourceName || "Source"} <ExternalLink className="w-3 h-3 text-saffron/80" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
            </ScrollReveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-navy text-white rounded-full font-semibold hover:bg-navy/90 transition-colors"
            >
              {t("news.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
