import { Navbar } from "@/components/Navbar";
import { LegalCategoriesSection } from "@/components/LegalCategoriesSection";
import { Footer } from "@/components/Footer";

const LawsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <LegalCategoriesSection />
    </div>
    <Footer />
  </div>
);

export default LawsPage;
