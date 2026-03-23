import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      {/* Saffron accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-saffron" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-6">
              India's Legal & Democratic Empowerment Platform
            </p>
          </div>

          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] tracking-tight mb-6">
            Know Your Laws.{" "}
            <span className="text-saffron">Claim Your Rights.</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 text-primary-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Search any Indian law, explore landmark cases, find advocates, and get AI-powered legal guidance — all in your language.
          </p>

          {/* Search bar */}
          <div className="animate-fade-in-up animation-delay-300 max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder='Search laws, acts, cases… e.g. "Section 302 IPC"'
                className="w-full h-13 pl-12 pr-4 rounded-xl bg-card text-foreground text-base placeholder:text-muted-foreground shadow-xl shadow-black/20 border-0 outline-none focus:ring-2 focus:ring-saffron/50"
              />
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-400 flex flex-wrap items-center justify-center gap-3 text-sm text-primary-foreground/50">
            <span>Popular:</span>
            {["POCSO Act", "RTI Filing", "Cybercrime", "Consumer Rights", "FIR Process"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full border border-primary-foreground/20 hover:border-saffron hover:text-saffron transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "1,500+", label: "Central & State Acts" },
              { value: "10,000+", label: "Case Summaries" },
              { value: "12", label: "Indian Languages" },
              { value: "24/7", label: "AI Legal Assistant" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-saffron tabular-nums">{stat.value}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
