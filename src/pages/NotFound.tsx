import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Scale, ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, hsl(220 35% 5%) 0%, hsl(220 40% 8%) 40%, hsl(220 30% 6%) 100%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(35 85% 55% / 0.15) 0%, transparent 60%)" }} />
      
      <div className="relative z-10 text-center px-6 max-w-lg">
        {/* Large 404 number */}
        <div className="relative mb-8">
          <div className="text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter" style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-saffron/10 border border-saffron/20 flex items-center justify-center backdrop-blur-md">
              <Scale className="w-12 h-12 text-saffron/60" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-white/40 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-saffron text-white font-black text-xs uppercase tracking-[0.15em] hover:bg-saffron/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-saffron/20"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/laws"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 font-black text-xs uppercase tracking-[0.15em] hover:bg-white/[0.06] hover:text-white transition-all"
          >
            <Search className="w-4 h-4" />
            Browse Laws
          </Link>
        </div>

        {/* Requested path */}
        <div className="mt-12 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 inline-flex items-center gap-2">
          <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Requested:</span>
          <code className="text-xs text-saffron/50 font-mono">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
