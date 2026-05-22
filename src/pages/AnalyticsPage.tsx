import { Navbar } from "@/components/Navbar";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";

const AnalyticsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <section className="py-16">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Analytics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Crime & case trend insights
            </h1>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed">
              Explore state-wise trends sourced from public reports. Use this to understand patterns—not to predict outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <AnalyticsSection />
    </main>
    <Footer />
    <VidhiSahayak />
  </div>
);

export default AnalyticsPage;
