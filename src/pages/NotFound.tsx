import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-navy-pale flex items-center justify-center mx-auto mb-6">
            <Scale className="w-10 h-10 text-navy" />
          </div>
          <h1 className="text-6xl font-extrabold text-navy mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Looks like this page took a wrong turn.
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors"
            >
              <Home className="w-4 h-4" /> Back Home
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              <Search className="w-4 h-4" /> Search Aadhikar
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
