import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constitutionBook from "@/assets/constitution-book.png";

gsap.registerPlugin(ScrollTrigger);

const bookPages = [
  {
    front: {
      title: "PREAMBLE",
      content:
        "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity…",
    },
    back: {
      title: "Part I — The Union & Territory",
      content:
        "Article 1: India, that is Bharat, shall be a Union of States.\n\nArticle 2: Parliament may by law admit into the Union, or establish, new States.\n\nArticle 3: Formation of new States and alteration of areas, boundaries or names.",
    },
  },
  {
    front: {
      title: "Part III — Fundamental Rights",
      content:
        "Article 14: Equality before law\nArticle 19: Freedom of speech & expression\nArticle 21: Right to life & personal liberty\nArticle 21A: Right to education\nArticle 25: Freedom of religion\nArticle 32: Right to constitutional remedies",
    },
    back: {
      title: "Part IV — Directive Principles",
      content:
        "Article 38: State to secure social order\nArticle 39: Equal pay for equal work\nArticle 39A: Free legal aid\nArticle 41: Right to work\nArticle 44: Uniform Civil Code\nArticle 47: Duty to raise nutrition",
    },
  },
  {
    front: {
      title: "Part IVA — Fundamental Duties",
      content:
        "Article 51A: It shall be the duty of every citizen of India—\n(a) to abide by the Constitution\n(b) to cherish the noble ideals of freedom struggle\n(e) to renounce practices derogatory to the dignity of women\n(h) to develop scientific temper",
    },
    back: {
      title: "Schedules & Amendments",
      content:
        "12 Schedules • 105 Amendments\n\n10th Schedule: Anti-Defection Law\n7th Schedule: Union, State & Concurrent Lists\n\nLatest: BNS, BNSS & BSA replaced IPC, CrPC & Evidence Act (2024)",
    },
  },
];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bookContainerRef.current,
        { scale: 0.4, opacity: 0, rotateY: -20 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.4 }
      )
        .fromTo(
          ".hero-title-line",
          { y: 80, opacity: 0, skewY: 3 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.8, stagger: 0.15 },
          "-=0.8"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          searchRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-tag",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        );

      // Scroll timeline: cover opens, then pages turn one by one
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
        },
      });

      // Step 1: Open cover (0 → 0.2)
      scrollTl.to(
        coverRef.current,
        { rotateY: -160, duration: 0.2, ease: "power2.inOut" },
        0
      );

      // Step 2: Fade text out as book opens
      scrollTl.to(
        textRef.current,
        { opacity: 0, x: -80, duration: 0.15, ease: "power2.in" },
        0.05
      );

      // Step 3: Center and scale book as cover opens
      scrollTl.to(
        bookContainerRef.current,
        {
          x: 0,
          scale: 1.15,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.05
      );

      // Step 4: Turn pages one by one
      bookPages.forEach((_, i) => {
        const pageEl = pagesRef.current[i];
        if (!pageEl) return;
        const startTime = 0.25 + i * 0.25;
        scrollTl.to(
          pageEl,
          {
            rotateY: -160,
            duration: 0.22,
            ease: "power2.inOut",
          },
          startTime
        );
      });

      // Glow
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(220,30%,6%)]" />
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(35 80% 52% / 0.3) 0%, hsl(220 45% 20% / 0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-saffron" />

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30 text-xs animate-pulse">
        <span>Scroll to open</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="container relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left: Text */}
          <div ref={textRef} className="text-center lg:text-left order-2 lg:order-1">
            <p className="hero-subtitle text-saffron font-semibold text-sm tracking-widest uppercase mb-6">
              India's Legal & Democratic Empowerment Platform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              <span className="hero-title-line block">Know Your Laws.</span>
              <span className="hero-title-line block text-saffron">Claim Your Rights.</span>
            </h1>
            <p className="hero-subtitle text-white/60 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
              Search any Indian law, explore landmark cases, find advocates, and get AI-powered legal guidance — all in your language.
            </p>
            <div ref={searchRef} className="max-w-xl mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder='Search laws, acts, cases… e.g. "Section 302 IPC"'
                  className="w-full h-13 pl-12 pr-4 rounded-xl bg-white/10 backdrop-blur-md text-white text-base placeholder:text-white/40 shadow-xl shadow-black/30 border border-white/10 outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron/30 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/40">
              <span>Popular:</span>
              {["POCSO Act", "RTI Filing", "Cybercrime", "Consumer Rights", "FIR Process"].map((tag) => (
                <button key={tag} className="hero-tag px-3 py-1 rounded-full border border-white/15 hover:border-saffron hover:text-saffron transition-colors">
                  {tag}
                </button>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {[
                { value: "1,500+", label: "Central & State Acts" },
                { value: "10,000+", label: "Case Summaries" },
                { value: "12", label: "Indian Languages" },
                { value: "24/7", label: "AI Legal Assistant" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-saffron tabular-nums">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Book */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
           <div
              ref={bookContainerRef}
              className="relative will-change-transform"
              style={{ perspective: "2200px" }}
            >
              <div
                className="relative"
                style={{
                  width: "320px",
                  height: "440px",
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-8deg) rotateX(2deg)",
                }}
              >
                {/* Page edges (right side - visible thickness) */}
                <div
                  className="absolute"
                  style={{
                    right: "-2px",
                    top: "8px",
                    bottom: "8px",
                    width: "28px",
                    transform: "rotateY(90deg) translateZ(318px)",
                    background: "repeating-linear-gradient(to bottom, hsl(42 30% 92%), hsl(38 20% 86%) 1px, hsl(42 30% 92%) 1px, hsl(42 30% 92%) 3px)",
                    borderRadius: "0 2px 2px 0",
                    boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Page edges (bottom - visible thickness) */}
                <div
                  className="absolute"
                  style={{
                    bottom: "-2px",
                    left: "12px",
                    right: "8px",
                    height: "28px",
                    transform: "rotateX(-90deg) translateZ(438px)",
                    background: "repeating-linear-gradient(to right, hsl(42 30% 90%), hsl(38 20% 84%) 1px, hsl(42 30% 90%) 1px, hsl(42 30% 90%) 3px)",
                    borderRadius: "0 0 2px 2px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Spine */}
                <div
                  className="absolute"
                  style={{
                    left: "-28px",
                    top: "-2px",
                    bottom: "-2px",
                    width: "30px",
                    transform: "rotateY(-90deg) translateZ(0px)",
                    background: "linear-gradient(90deg, hsl(220 50% 14%) 0%, hsl(220 45% 20%) 40%, hsl(220 50% 16%) 100%)",
                    borderRadius: "4px 0 0 4px",
                    boxShadow: "-4px 0 15px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-saffron/60 text-[8px] font-bold tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                      Constitution of India
                    </span>
                  </div>
                </div>

                {/* Book spine / back cover */}
                <div
                  className="absolute inset-0 rounded-r-md"
                  style={{
                    background: "linear-gradient(135deg, hsl(220 40% 18%) 0%, hsl(220 40% 12%) 100%)",
                    transform: "translateZ(-30px)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.4)",
                    borderRight: "3px solid hsl(35 80% 40%)",
                  }}
                >
                  <div className="flex items-center justify-center h-full p-6">
                    <p className="text-white/30 text-xs text-center font-serif italic leading-relaxed">
                      "India is not a country of the Hindus alone, nor of the Muslims alone, nor of any other community alone — it is a country of all."
                      <br />
                      <span className="text-saffron/50 mt-2 block">— Dr. B.R. Ambedkar</span>
                    </p>
                  </div>
                </div>

                {/* Inner pages (stacked, each flips) */}
                {bookPages.map((page, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      pagesRef.current[i] = el;
                    }}
                    className="absolute inset-0"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center",
                      transform: "rotateY(0deg)",
                      zIndex: bookPages.length - i,
                    }}
                  >
                    {/* Page front */}
                    <div
                      className="absolute inset-0 rounded-r-md overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        background: "linear-gradient(175deg, hsl(42 30% 92%) 0%, hsl(38 25% 85%) 100%)",
                        borderLeft: "2px solid hsl(35 40% 70%)",
                        boxShadow: "inset -3px 0 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="p-6 h-full flex flex-col">
                        <div className="text-center mb-4 pb-3 border-b border-amber-800/20">
                          <h3 className="font-bold text-amber-900 text-sm tracking-wide uppercase">
                            {page.front.title}
                          </h3>
                        </div>
                        <p className="text-amber-950/80 text-xs leading-[1.8] font-serif whitespace-pre-line flex-1">
                          {page.front.content}
                        </p>
                        <div className="text-center mt-3 pt-2 border-t border-amber-800/10">
                          <span className="text-amber-800/30 text-[10px]">— {i * 2 + 1} —</span>
                        </div>
                      </div>
                    </div>

                    {/* Page back */}
                    <div
                      className="absolute inset-0 rounded-l-md overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "linear-gradient(175deg, hsl(40 28% 90%) 0%, hsl(36 22% 84%) 100%)",
                        borderRight: "2px solid hsl(35 40% 70%)",
                        boxShadow: "inset 3px 0 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <div className="p-6 h-full flex flex-col">
                        <div className="text-center mb-4 pb-3 border-b border-amber-800/20">
                          <h3 className="font-bold text-amber-900 text-sm tracking-wide uppercase">
                            {page.back.title}
                          </h3>
                        </div>
                        <p className="text-amber-950/80 text-xs leading-[1.8] font-serif whitespace-pre-line flex-1">
                          {page.back.content}
                        </p>
                        <div className="text-center mt-3 pt-2 border-t border-amber-800/10">
                          <span className="text-amber-800/30 text-[10px]">— {i * 2 + 2} —</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Front cover (flips open first) */}
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
                  {/* Cover front */}
                  <div
                    className="absolute inset-0 rounded-r-md overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      boxShadow: "5px 5px 30px rgba(0,0,0,0.4), 0 0 80px rgba(218,165,32,0.15)",
                    }}
                  >
                    <img
                      src={constitutionBook}
                      alt="Constitution of India"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Cover back (inside cover) */}
                  <div
                    className="absolute inset-0 rounded-l-md overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "linear-gradient(135deg, hsl(220 35% 22%) 0%, hsl(220 30% 15%) 100%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <div className="w-16 h-0.5 bg-saffron/40 mb-6" />
                      <h3 className="text-saffron/90 text-lg font-bold tracking-wide mb-3">
                        CONSTITUTION OF INDIA
                      </h3>
                      <p className="text-white/40 text-xs leading-relaxed max-w-[220px]">
                        As modified up to the One Hundred and Sixth Amendment Act, 2023
                      </p>
                      <div className="w-16 h-0.5 bg-saffron/40 mt-6 mb-6" />
                      <p className="text-white/25 text-[10px] uppercase tracking-widest">
                        Government of India
                      </p>
                      <p className="text-white/20 text-[10px] mt-1">
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
