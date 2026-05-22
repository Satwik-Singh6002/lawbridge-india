import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LegalCategoriesSection } from "@/components/LegalCategoriesSection";
import { CitizenSandbox } from "@/components/CitizenSandbox";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { VidhiSahayak } from "@/components/VidhiSahayak";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LegalCategoriesSection />
      <CitizenSandbox />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <VidhiSahayak />
    </div>
  );
};

export default Index;
