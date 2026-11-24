import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTop } from "@/components/BackToTop";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Lazy-loaded pages for optimal bundle size and initial load performance
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const RightsPage = lazy(() => import("./pages/RightsPage.tsx"));
const RightsDetailPage = lazy(() => import("./pages/RightsDetailPage.tsx"));
const ScamAlertsPage = lazy(() => import("./pages/ScamAlertsPage.tsx"));
const ScamDetailPage = lazy(() => import("./pages/ScamDetailPage.tsx"));
const CasesPage = lazy(() => import("./pages/CasesPage.tsx"));
const CaseDetailPage = lazy(() => import("./pages/CaseDetailPage.tsx"));
const LawyersPage = lazy(() => import("./pages/LawyersPage.tsx"));
const LawyerDetailPage = lazy(() => import("./pages/LawyerDetailPage.tsx"));
const ComplaintsPage = lazy(() => import("./pages/ComplaintsPage.tsx"));
const ComplaintDetailPage = lazy(() => import("./pages/ComplaintDetailPage.tsx"));
const ProblemGuidePage = lazy(() => import("./pages/ProblemGuidePage.tsx"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage.tsx"));
const AskAadhikarPage = lazy(() => import("./pages/AskAadhikarPage.tsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.tsx"));
const NewsPage = lazy(() => import("./pages/NewsPage.tsx"));
const NewsDetailPage = lazy(() => import("./pages/NewsDetailPage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const TermsPage = lazy(() => import("./pages/TermsPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));

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
            <Route path="/rights" element={<RightsPage />} />
            <Route path="/rights/:slug" element={<RightsDetailPage />} />
            <Route path="/scam-alerts" element={<ScamAlertsPage />} />
            <Route path="/scam-alerts/:slug" element={<ScamDetailPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:slug" element={<CaseDetailPage />} />
            <Route path="/lawyers" element={<LawyersPage />} />
            <Route path="/lawyers/:slug" element={<LawyerDetailPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/complaints/:slug" element={<ComplaintDetailPage />} />
            <Route path="/problem/:slug" element={<ProblemGuidePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/ask" element={<AskAadhikarPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
