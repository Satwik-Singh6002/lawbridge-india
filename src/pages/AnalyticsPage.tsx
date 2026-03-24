import { Navbar } from "@/components/Navbar";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { Footer } from "@/components/Footer";

const AnalyticsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <AnalyticsSection />
    </div>
    <Footer />
  </div>
);

export default AnalyticsPage;
