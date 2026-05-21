import { Navbar } from "@/components/Navbar";
import { LegalNewsSection } from "@/components/LegalNewsSection";

import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";

const NewsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24">
      <section className="py-16">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">News</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Legal updates and explainers
            </h1>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed">
              Track major legal developments and learn the background—laws, procedures, and practical implications.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <LegalNewsSection />

    </main>
    <Footer />
    <VidhiSahayak />
  </div>
);

export default NewsPage;
