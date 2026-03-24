import { Navbar } from "@/components/Navbar";
import { DirectorySection } from "@/components/DirectorySection";
import { GovernmentPortalsSection } from "@/components/GovernmentPortalsSection";
import { Footer } from "@/components/Footer";

const FindHelpPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <DirectorySection />
      <GovernmentPortalsSection />
    </div>
    <Footer />
  </div>
);

export default FindHelpPage;
