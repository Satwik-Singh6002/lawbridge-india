import { Navbar } from "@/components/Navbar";
import { GovernmentPortalsSection } from "@/components/GovernmentPortalsSection";
import { Footer } from "@/components/Footer";

const NewsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <GovernmentPortalsSection />
    </div>
    <Footer />
  </div>
);

export default NewsPage;
