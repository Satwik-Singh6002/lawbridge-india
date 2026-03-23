import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LegalCategoriesSection } from "@/components/LegalCategoriesSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { ChatbotSection } from "@/components/ChatbotSection";
import { DirectorySection } from "@/components/DirectorySection";
import { GovernmentPortalsSection } from "@/components/GovernmentPortalsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LegalCategoriesSection />
      <AnalyticsSection />
      <ChatbotSection />
      <DirectorySection />
      <GovernmentPortalsSection />
      <Footer />
    </div>
  );
};

export default Index;
