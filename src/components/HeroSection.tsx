import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constitutionBook from "@/assets/constitution-book.png";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bookRef.current,
        { scale: 0.3, opacity: 0, rotateY: -30, rotateX: 10 },
        { scale: 1, opacity: 1, rotateY: -5, rotateX: 2, duration: 1.4 }
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

      // Scroll-driven book scaling — book enlarges as you scroll down
      gsap.to(bookRef.current, {
        scale: 2.5,
        rotateY: 0,
        rotateX: 0,
        opacity: 0.15,
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Parallax text fading out on scroll
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "60% top",
          scrub: 1,
        },
      });

      // Glow pulse animation
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
      className="relative min-h-[100vh] flex items-center pt-16 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-[hsl(220,30%,6%)]" />

      {/* Radial glow behind book */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(35 80% 52% / 0.25) 0%, hsl(220 45% 20% / 0.15) 40%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Saffron accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-saffron" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div ref={textRef} className="text-center lg:text-left order-2 lg:order-1">
            <p className="hero-subtitle text-saffron font-semibold text-sm tracking-widest uppercase mb-6">
              India's Legal & Democratic Empowerment Platform
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              <span className="hero-title-line block">Know Your Laws.</span>
              <span className="hero-title-line block text-saffron">
                Claim Your Rights.
              </span>
            </h1>

            <p className="hero-subtitle text-white/60 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
              Search any Indian law, explore landmark cases, find advocates, and
              get AI-powered legal guidance — all in your language.
            </p>

            {/* Search bar */}
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
              {["POCSO Act", "RTI Filing", "Cybercrime", "Consumer Rights", "FIR Process"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="hero-tag px-3 py-1 rounded-full border border-white/15 hover:border-saffron hover:text-saffron transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
            >
              {[
                { value: "1,500+", label: "Central & State Acts" },
                { value: "10,000+", label: "Case Summaries" },
                { value: "12", label: "Indian Languages" },
                { value: "24/7", label: "AI Legal Assistant" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-saffron tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Constitution Book */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-[30px] bg-black/40 blur-2xl rounded-full" />
              <img
                ref={bookRef}
                src={constitutionBook}
                alt="Constitution of India"
                width={1024}
                height={1024}
                className="w-[280px] sm:w-[340px] lg:w-[420px] h-auto drop-shadow-[0_20px_60px_rgba(218,165,32,0.25)] will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
