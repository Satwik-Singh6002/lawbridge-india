import { Navbar } from "@/components/Navbar";
import { LegalNewsSection } from "@/components/LegalNewsSection";
import { GovernmentPortalsSection } from "@/components/GovernmentPortalsSection";
import { Footer } from "@/components/Footer";

const NewsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <LegalNewsSection />
      <GovernmentPortalsSection />
    </div>
    <Footer />
  </div>
);

export default NewsPage;
