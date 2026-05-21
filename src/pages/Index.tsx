import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { LegalCategoriesSection } from "@/components/LegalCategoriesSection";

import { TrustSafetySection } from "@/components/TrustSafetySection";
import { FAQSection } from "@/components/FAQSection";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { LegalDictionarySection } from "@/components/LegalDictionarySection";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { lazy, Suspense } from "react";

// Lazy-load heavier sections below the fold
const DailyLegalTipSection = lazy(() => import("@/components/DailyLegalTipSection").then(m => ({ default: m.DailyLegalTipSection })));
const LegalQuizSection = lazy(() => import("@/components/LegalQuizSection").then(m => ({ default: m.LegalQuizSection })));
const EmergencyHelplinesSection = lazy(() => import("@/components/EmergencyHelplinesSection").then(m => ({ default: m.EmergencyHelplinesSection })));

const SectionLoader = () => (
  <div className="py-12 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-saffron/30 border-t-saffron animate-spin" />
  </div>
);

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Suspense fallback={<SectionLoader />}>
        <DailyLegalTipSection />
      </Suspense>
      <LegalCategoriesSection />

      <Suspense fallback={<SectionLoader />}>
        <LegalQuizSection />
      </Suspense>
      <TrustSafetySection />
      <Suspense fallback={<SectionLoader />}>
        <EmergencyHelplinesSection />
      </Suspense>
      <LegalDictionarySection />
      <FAQSection />

      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <VidhiSahayak />
    </div>
  );
};

export default Index;
