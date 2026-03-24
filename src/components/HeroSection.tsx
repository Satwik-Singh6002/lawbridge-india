import { useEffect, useRef, useCallback } from "react";
import { Search, ChevronDown, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constitutionBook from "@/assets/constitution-book.png";

gsap.registerPlugin(ScrollTrigger);

const bookPages = [
  {
    front: {
      title: "PREAMBLE",
      subtitle: "The Soul of the Constitution",
      content:
        "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:\n\nJUSTICE — social, economic and political;\nLIBERTY — of thought, expression, belief, faith and worship;\nEQUALITY — of status and of opportunity;\n\nand to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation.",
    },
    back: {
      title: "Part I — Union & Territory",
      subtitle: "Articles 1–4",
      content:
        "Article 1 — India, that is Bharat, shall be a Union of States.\n\nArticle 2 — Parliament may by law admit into the Union, or establish, new States.\n\nArticle 3 — Formation of new States and alteration of areas, boundaries or names of existing States.\n\nArticle 4 — Laws made under Articles 2 and 3.",
    },
  },
  {
    front: {
      title: "Fundamental Rights",
      subtitle: "Part III — Articles 12–35",
      content:
        "Art. 14 — Equality before law\nArt. 15 — Prohibition of discrimination\nArt. 16 — Equality of opportunity\nArt. 19 — Freedom of speech & expression\nArt. 21 — Right to life & personal liberty\nArt. 21A — Right to education (6–14 yrs)\nArt. 23 — Prohibition of trafficking\nArt. 25 — Freedom of conscience & religion\nArt. 32 — Right to constitutional remedies",
    },
    back: {
      title: "Directive Principles",
      subtitle: "Part IV — Articles 36–51",
      content:
        "Art. 38 — State to secure social order\nArt. 39 — Equal pay for equal work\nArt. 39A — Free legal aid for the poor\nArt. 41 — Right to work & education\nArt. 43 — Living wage for workers\nArt. 44 — Uniform Civil Code\nArt. 47 — Duty to raise nutrition levels\nArt. 48A — Protection of environment\nArt. 51 — Promotion of international peace",
    },
  },
  {
    front: {
      title: "Fundamental Duties",
      subtitle: "Part IVA — Article 51A",
      content:
        "Every citizen of India shall have the duty—\n\n(a) To abide by the Constitution and respect its ideals\n(b) To cherish the noble ideals of freedom struggle\n(c) To uphold sovereignty, unity & integrity of India\n(d) To defend the country and render national service\n(e) To renounce practices derogatory to women's dignity\n(f) To value the rich heritage of our composite culture\n(h) To develop the scientific temper & humanism\n(k) To safeguard public property",
    },
    back: {
      title: "Schedules & Amendments",
      subtitle: "The Living Constitution",
      content:
        "12 Schedules • 106 Amendments (as of 2023)\n\n1st Schedule — States & Union Territories\n7th Schedule — Union, State & Concurrent Lists\n8th Schedule — 22 Official Languages\n9th Schedule — Land Reform Laws\n10th Schedule — Anti-Defection Law\n\n━━━━━━━━━━━━━━━━━━━\nLatest: BNS, BNSS & BSA replaced\nIPC, CrPC & Evidence Act (2024)",
    },
  },
];

export const HeroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const setPageRef = useCallback((el: HTMLDivElement | null, i: number) => {
    pagesRef.current[i] = el;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating particles — created imperatively to avoid React/GSAP DOM conflict
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
          const dot = document.createElement("div");
          dot.className = "absolute rounded-full";
          const size = 2 + Math.random() * 3;
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.background = i % 3 === 0 ? "hsl(35 85% 55% / 0.6)" : "hsl(0 0% 100% / 0.15)";
          particlesRef.current.appendChild(dot);

          gsap.set(dot, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          });
          gsap.to(dot, {
            y: `-=${200 + Math.random() * 300}`,
            x: `+=${(Math.random() - 0.5) * 150}`,
            opacity: Math.random() * 0.5 + 0.1,
            duration: 6 + Math.random() * 8,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "none",
          });
        }
      }

      // Entry animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        bookContainerRef.current,
        { scale: 0.3, opacity: 0, rotateY: -30, y: 60 },
        { scale: 1, opacity: 1, rotateY: 0, y: 0, duration: 1.6 }
      )
        .fromTo(
          ".hero-badge",
          { y: -20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5 },
          "-=0.9"
        )
        .fromTo(
          ".hero-title-line",
          { y: 100, opacity: 0, skewY: 4 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.9, stagger: 0.12 },
          "-=0.7"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          searchRef.current,
          { y: 40, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-tag",
          { y: 20, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.04 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.2"
        );

      // Scroll-driven book opening
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.5,
          pin: true,
        },
      });

      // Fade text & center book
      scrollTl.to(textRef.current, { opacity: 0, x: -100, scale: 0.95, duration: 0.15, ease: "power2.in" }, 0.02);
      scrollTl.to(bookContainerRef.current, { x: 0, scale: 1.25, duration: 0.2, ease: "power2.inOut" }, 0.05);

      // Open cover
      scrollTl.to(coverRef.current, { rotateY: -165, duration: 0.22, ease: "power2.inOut" }, 0);

      // Turn each page
      bookPages.forEach((_, i) => {
        const pageEl = pagesRef.current[i];
        if (!pageEl) return;
        scrollTl.to(pageEl, { rotateY: -165, duration: 0.24, ease: "power3.inOut" }, 0.25 + i * 0.25);
      });

      // Ambient glow pulse
      gsap.to(glowRef.current, {
        scale: 1.4,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tags = t("hero.tags", { returnObjects: true }) as string[];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, hsl(220 35% 5%) 0%, hsl(220 40% 8%) 40%, hsl(220 30% 6%) 100%)" }} />

      {/* Ambient glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(35 85% 55% / 0.25) 0%, hsl(220 50% 25% / 0.1) 35%, transparent 65%)",
        }}
      />

      {/* Secondary accent glow */}
      <div
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)" }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0v1h40V0zM0 40v1h40v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles — container only, children created by GSAP */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Saffron top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/25 text-[11px] tracking-[0.2em] uppercase font-medium">{t("hero.scrollToOpen")}</span>
        <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-saffron/60 animate-bounce" />
        </div>
      </div>

      <div className="container relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div ref={textRef} className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron/5 backdrop-blur-sm mb-8">
              <Scale className="w-3.5 h-3.5 text-saffron" />
              <span className="text-saffron text-xs font-semibold tracking-widest uppercase">
                {t("hero.subtitle")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-white leading-[1.06] tracking-tight mb-7">
              <span className="hero-title-line block">{t("hero.title1")}</span>
              <span className="hero-title-line block mt-1" style={{
                background: "linear-gradient(135deg, hsl(35 85% 55%), hsl(35 90% 65%), hsl(30 80% 50%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {t("hero.title2")}
              </span>
            </h1>

            <p className="hero-subtitle text-white/50 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
              {t("hero.description")}
            </p>

            {/* Search bar */}
            <div ref={searchRef} className="max-w-xl mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron/20 via-saffron/5 to-saffron/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    placeholder={t("hero.searchPlaceholder")}
                    className="w-full h-14 pl-13 pr-5 rounded-2xl bg-white/[0.06] backdrop-blur-xl text-white text-base placeholder:text-white/25 border border-white/[0.08] outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/20 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-sm">
              <span className="text-white/30 text-xs font-medium">{t("hero.popular")}</span>
              {Array.isArray(tags) &&
                tags.map((tag) => (
                  <button
                    key={tag}
                    className="hero-tag px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-xs hover:border-saffron/40 hover:text-saffron hover:bg-saffron/5 transition-all duration-300"
                  >
                    {tag}
                  </button>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl">
              {[
                { value: "1,500+", label: t("hero.stats.acts") },
                { value: "10,000+", label: t("hero.stats.cases") },
                { value: "12", label: t("hero.stats.languages") },
                { value: "24/7", label: t("hero.stats.ai") },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold tabular-nums" style={{
                    background: "linear-gradient(180deg, hsl(35 85% 60%), hsl(35 75% 45%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/30 mt-1.5 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Constitution Book */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={bookContainerRef}
              className="relative will-change-transform"
              style={{ perspective: "2400px" }}
            >
              {/* Subtle reflection glow under book */}
              <div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[280px] h-[60px] rounded-full blur-2xl pointer-events-none"
                style={{ background: "hsl(35 80% 50% / 0.1)" }}
              />

              <div
                className="relative"
                style={{
                  width: "340px",
                  height: "460px",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-10deg) rotateX(3deg)",
                }}
              >
                {/* Spine */}
                <div
                  className="absolute"
                  style={{
                    left: "-30px",
                    top: "-2px",
                    bottom: "-2px",
                    width: "32px",
                    transform: "rotateY(-90deg) translateZ(0px)",
                    background: "linear-gradient(90deg, hsl(220 50% 12%) 0%, hsl(220 45% 18%) 30%, hsl(220 40% 22%) 60%, hsl(220 45% 15%) 100%)",
                    borderRadius: "4px 0 0 4px",
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <span
                      className="text-[7px] font-bold tracking-[0.35em] uppercase"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        background: "linear-gradient(180deg, hsl(35 80% 55% / 0.7), hsl(35 70% 40% / 0.4))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Constitution of India
                    </span>
                  </div>
                </div>

                {/* Back cover */}
                <div
                  className="absolute inset-0 rounded-r-lg"
                  style={{
                    background: "linear-gradient(160deg, hsl(220 40% 16%) 0%, hsl(220 45% 10%) 100%)",
                    transform: "translateZ(-32px)",
                    borderRight: "3px solid hsl(35 70% 35%)",
                  }}
                >
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center">
                      <div className="w-12 h-[1px] bg-saffron/20 mx-auto mb-5" />
                      <p className="text-white/25 text-[11px] font-serif italic leading-relaxed max-w-[240px]">
                        "India is not a country of the Hindus alone, nor of the Muslims alone — it is a country of all."
                      </p>
                      <p className="text-saffron/40 text-[10px] mt-3 font-medium tracking-wide">
                        — Dr. B.R. Ambedkar
                      </p>
                      <div className="w-12 h-[1px] bg-saffron/20 mx-auto mt-5" />
                    </div>
                  </div>
                </div>

                {/* Inner pages */}
                {bookPages.map((page, i) => (
                  <div
                    key={i}
                    ref={(el) => setPageRef(el, i)}
                    className="absolute inset-0"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center",
                      transform: "rotateY(0deg)",
                      zIndex: bookPages.length - i,
                    }}
                  >
                    {/* Front of page */}
                    <div
                      className="absolute inset-0 rounded-r-lg overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        background: "linear-gradient(178deg, hsl(43 35% 93%) 0%, hsl(40 28% 88%) 50%, hsl(38 25% 85%) 100%)",
                        borderLeft: "2px solid hsl(35 30% 72%)",
                      }}
                    >
                      {/* Page texture overlay */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000'/%3E%3C/svg%3E")`,
                      }} />
                      <div className="p-7 h-full flex flex-col relative">
                        {/* Decorative corner */}
                        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber-800/10" />
                        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-amber-800/10" />

                        <div className="text-center mb-5 pb-3 border-b-2 border-amber-800/15">
                          <h3 className="font-bold text-amber-900 text-[13px] tracking-widest uppercase">
                            {page.front.title}
                          </h3>
                          <p className="text-amber-700/50 text-[9px] mt-1 tracking-wider font-medium">
                            {page.front.subtitle}
                          </p>
                        </div>
                        <p className="text-amber-950/75 text-[11px] leading-[2] font-serif whitespace-pre-line flex-1">
                          {page.front.content}
                        </p>
                        <div className="text-center mt-3 pt-2 border-t border-amber-800/10">
                          <span className="text-amber-800/25 text-[9px] font-medium tracking-widest">— {i * 2 + 1} —</span>
                        </div>
                      </div>
                    </div>

                    {/* Back of page */}
                    <div
                      className="absolute inset-0 rounded-l-lg overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "linear-gradient(178deg, hsl(41 32% 91%) 0%, hsl(38 25% 86%) 50%, hsl(36 22% 83%) 100%)",
                        borderRight: "2px solid hsl(35 30% 72%)",
                      }}
                    >
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000'/%3E%3C/svg%3E")`,
                      }} />
                      <div className="p-7 h-full flex flex-col relative">
                        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber-800/10" />
                        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber-800/10" />

                        <div className="text-center mb-5 pb-3 border-b-2 border-amber-800/15">
                          <h3 className="font-bold text-amber-900 text-[13px] tracking-widest uppercase">
                            {page.back.title}
                          </h3>
                          <p className="text-amber-700/50 text-[9px] mt-1 tracking-wider font-medium">
                            {page.back.subtitle}
                          </p>
                        </div>
                        <p className="text-amber-950/75 text-[11px] leading-[2] font-serif whitespace-pre-line flex-1">
                          {page.back.content}
                        </p>
                        <div className="text-center mt-3 pt-2 border-t border-amber-800/10">
                          <span className="text-amber-800/25 text-[9px] font-medium tracking-widest">— {i * 2 + 2} —</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Front cover */}
                <div
                  ref={coverRef}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "left center",
                    transform: "rotateY(0deg)",
                    zIndex: bookPages.length + 1,
                  }}
                >
                  {/* Cover front face */}
                  <div
                    className="absolute inset-0 rounded-r-lg overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      border: "1px solid hsl(35 60% 40% / 0.2)",
                    }}
                  >
                    <img
                      src={constitutionBook}
                      alt="Constitution of India"
                      className="w-full h-full object-cover"
                    />
                    {/* Glossy light reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(125deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.08) 100%)",
                      }}
                    />
                    {/* Edge highlight */}
                    <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-saffron/20 via-saffron/5 to-saffron/20" />
                  </div>

                  {/* Cover back face (inside front cover) */}
                  <div
                    className="absolute inset-0 rounded-l-lg overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "linear-gradient(160deg, hsl(220 35% 20%) 0%, hsl(220 38% 14%) 100%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-saffron/40 to-transparent mb-8" />
                      <h3 className="text-lg font-bold tracking-[0.15em] mb-4" style={{
                        background: "linear-gradient(180deg, hsl(35 85% 60%), hsl(35 70% 45%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>
                        CONSTITUTION OF INDIA
                      </h3>
                      <p className="text-white/35 text-[11px] leading-relaxed max-w-[220px]">
                        As modified up to the One Hundred and Sixth Amendment Act, 2023
                      </p>
                      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-saffron/40 to-transparent mt-8 mb-8" />
                      <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium">
                        Government of India
                      </p>
                      <p className="text-white/15 text-[8px] mt-1 tracking-widest">
                        Ministry of Law and Justice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
