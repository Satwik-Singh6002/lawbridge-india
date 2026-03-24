import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LegalCategoryPage from "./pages/LegalCategoryPage.tsx";
import LawsPage from "./pages/LawsPage.tsx";
import CasesPage from "./pages/CasesPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import FindHelpPage from "./pages/FindHelpPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laws" element={<LawsPage />} />
          <Route path="/laws/:slug" element={<LegalCategoryPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/find-help" element={<FindHelpPage />} />
          <Route path="/news" element={<NewsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
