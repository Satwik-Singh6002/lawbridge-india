import { Navbar } from "@/components/Navbar";
import { DirectorySection } from "@/components/DirectorySection";
import { Footer } from "@/components/Footer";

const FindHelpPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <DirectorySection />
    </div>
    <Footer />
  </div>
);

export default FindHelpPage;
