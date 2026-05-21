import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTop } from "@/components/BackToTop";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LegalCategoryPage from "./pages/LegalCategoryPage.tsx";
import LawDetailPage from "./pages/LawDetailPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";
import LawsPage from "./pages/LawsPage.tsx";
import CasesPage from "./pages/CasesPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import FindHelpPage from "./pages/FindHelpPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/laws" element={<LawsPage />} />
            <Route path="/laws/:slug" element={<LegalCategoryPage />} />
            <Route path="/laws/:slug/law/:lawIndex" element={<LawDetailPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:slug" element={<LegalCategoryPage />} />
            <Route path="/cases/:slug/law/:lawIndex" element={<LawDetailPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/find-help" element={<FindHelpPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
