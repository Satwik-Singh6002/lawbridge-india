import { useState, useEffect, useRef } from "react";
import { Scale, ArrowRight, Sparkles, Search, X, Gavel } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { legalCategoriesData } from "@/data/legalCategories";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import constitutionBook from "@/assets/constitution-book.png";

export const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const searchResults = searchQuery.trim().length > 1 
    ? Object.values(legalCategoriesData).filter(cat => 
        cat.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.laws.some(law => law.title.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const particlesEl = particlesRef.current;

    const ctx = gsap.context(() => {
      if (particlesEl && !prefersReducedMotion) {
        const count = window.innerWidth < 768 ? 6 : 12;
        for (let i = 0; i < count; i++) {
          const dot = document.createElement("div");
          dot.className = "absolute rounded-full";
          const size = 2 + Math.random() * 2;
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.background = i % 3 === 0 ? "hsl(35 85% 55% / 0.5)" : "hsl(0 0% 100% / 0.12)";
          particlesEl.appendChild(dot);
          gsap.set(dot, { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 });
          gsap.to(dot, {
            y: `-=${150 + Math.random() * 200}`, x: `+=${(Math.random() - 0.5) * 100}`,
            opacity: Math.random() * 0.4 + 0.1, duration: 8 + Math.random() * 6,
            repeat: -1, delay: Math.random() * 4, ease: "none",
          });
        }
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-badge", { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.2)
        .fromTo(".hero-title-line", { y: 60, opacity: 0, skewY: 3 }, { y: 0, opacity: 1, skewY: 0, duration: 0.8, stagger: 0.1 }, 0.3)
        .fromTo(".hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.6)
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, 0.8)
        .fromTo(".hero-stat", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 }, 1.0)
        .fromTo(bookRef.current, { scale: 0.8, opacity: 0, rotateY: -15 }, { scale: 1, opacity: 1, rotateY: 0, duration: 1.2 }, 0.3);

      if (!prefersReducedMotion) {
        gsap.to(glowRef.current, { scale: 1.3, opacity: 0.4, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      }
    }, sectionRef);

    return () => { ctx.revert(); if (particlesEl) particlesEl.innerHTML = ""; };
  }, []);

  const tags = t("hero.tags", { returnObjects: true }) as string[];

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,159,28,0.02),transparent_40%,rgba(16,185,129,0.01)_100%)] pointer-events-none" />
      <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 100% 55% / 0.12) 0%, hsl(240 50% 25% / 0.03) 50%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0v1h40V0zM0 40v1h40v-1z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-saffron/40 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 backdrop-blur-sm mb-6">
              <Scale className="w-3.5 h-3.5 text-saffron" />
              <span className="text-saffron text-xs font-semibold tracking-widest uppercase">
                {t("hero.subtitle")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              <span className="hero-title-line block text-white/95">{t("hero.title1")}</span>
              <span className="hero-title-line block mt-2 text-gradient-gold drop-shadow-[0_2px_10px_rgba(255,159,28,0.15)]">{t("hero.title2")}</span>
            </h1>

            <p className="hero-subtitle text-white/60 text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-medium mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            <div className="hero-search relative max-w-xl mb-8 group/search mx-auto lg:mx-0">
              <div className={cn(
                "relative flex items-center h-16 px-6 rounded-2xl bg-white/[0.02] border transition-all duration-500 backdrop-blur-xl glassy-card",
                isSearchFocused ? "border-saffron/40 bg-white/[0.05] shadow-[0_0_40px_rgba(255,159,28,0.15)]" : "border-white/10 group-hover/search:border-white/20"
              )}>
                <Search className={cn("w-5 h-5 transition-colors duration-300", isSearchFocused ? "text-saffron" : "text-white/30")} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  placeholder={t("hero.searchPlaceholder") || "Search laws, sections, or keywords..."}
                  className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-white/20 font-medium"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-4 h-4 text-white/40" />
                  </button>
                )}
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 ml-2">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter">Enter</span>
                </div>
              </div>

              {/* Live search results dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {searchResults.map((result) => (
                    <button
                      key={result.slug}
                      onClick={() => navigate(`/laws/${result.slug}`)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all text-left group/result"
                    >
                      <div className="w-10 h-10 rounded-lg bg-saffron/10 border border-saffron/20 flex items-center justify-center shrink-0 group-hover/result:bg-saffron group-hover/result:border-saffron transition-all">
                        <Gavel className="w-5 h-5 text-saffron group-hover/result:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm truncate">{result.label}</div>
                        <div className="text-white/40 text-[10px] uppercase font-black tracking-widest truncate">{result.subtitle}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover/result:text-saffron group-hover/result:translate-x-1 transition-all" />
                    </button>
                  ))}
                  <div className="p-2 border-t border-white/5 mt-2">
                    <Link to="/laws" className="block w-full text-center py-2 text-[10px] font-black text-saffron uppercase tracking-[0.2em] hover:text-white transition-colors">
                      View all categories
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button 
                onClick={() => {
                  if (searchQuery.trim()) {
                    // Logic to handle direct search hit or navigate to laws
                    navigate('/laws');
                  } else {
                    navigate('/laws');
                  }
                }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-saffron text-white font-black text-xs uppercase tracking-[0.15em] hover:bg-saffron/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-saffron/20">
                {t("hero.browseLaws")} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-vidhi-sahayak'));
                }}
                className="hero-cta inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 font-black text-xs uppercase tracking-[0.15em] hover:bg-white/[0.06] hover:text-white transition-all">
                <Sparkles className="w-3.5 h-3.5 text-saffron" />
                {t("hero.askVidhi")}
              </button>
            </div>

            <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm mb-8">
              <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">{t("hero.popular")}</span>
              {Array.isArray(tags) && tags.slice(0, 4).map((tag) => (
                <button key={tag}
                  className="hero-tag px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-white/40 text-[10px] font-bold uppercase tracking-widest hover:border-saffron/40 hover:text-saffron hover:bg-saffron/5 transition-all duration-300">
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-8 max-w-md border-t border-white/5 pt-6 mx-auto lg:mx-0">
              {[
                { value: "1,500+", label: t("hero.stats.acts") },
                { value: "10,000+", label: t("hero.stats.cases") },
                { value: "12+", label: t("hero.stats.languages") },
                { value: "24/7", label: t("hero.stats.ai") },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat flex flex-col items-center lg:items-start group/stat">
                  <div className="text-xl sm:text-2xl font-black tabular-nums group-hover/stat:scale-110 transition-transform duration-500" style={{
                    background: "linear-gradient(180deg, #fff 0%, #aaa 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-saffron font-bold mt-1 tracking-[0.2em] uppercase opacity-60 group-hover/stat:opacity-100 transition-opacity">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div ref={bookRef} className="relative will-change-transform group/book" style={{ perspective: "1200px" }}>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[40px] rounded-full blur-2xl pointer-events-none bg-saffron/10 group-hover/book:bg-saffron/20 transition-all duration-700" />
              <div className="relative w-[260px] sm:w-[300px] h-[360px] sm:h-[400px] transition-all duration-700 group-hover/book:rotate-y-[-5deg] group-hover/book:scale-105 animate-float-book"
                style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute" style={{
                  left: "-20px", top: "-1px", bottom: "-1px", width: "22px",
                  transform: "rotateY(-90deg) translateZ(0px)",
                  background: "linear-gradient(90deg, hsl(220 50% 12%), hsl(220 45% 18%) 50%, hsl(220 45% 15%))",
                  borderRadius: "3px 0 0 3px",
                }}>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-[6px] font-bold tracking-[0.3em] uppercase"
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed",
                        background: "linear-gradient(180deg, hsl(35 80% 55% / 0.6), hsl(35 70% 40% / 0.3))",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      Constitution of India
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-r-lg overflow-hidden"
                  style={{ border: "1px solid hsl(35 60% 40% / 0.2)" }}>
                  <img src={constitutionBook} alt="Constitution of India" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(125deg, rgba(255,255,255,0.10) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />
                  <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-saffron/20 via-saffron/5 to-saffron/20" />
                </div>
                <div className="absolute inset-0 rounded-r-lg"
                  style={{ background: "hsl(220 40% 12%)", transform: "translateZ(-22px)", borderRight: "2px solid hsl(35 70% 35% / 0.3)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
