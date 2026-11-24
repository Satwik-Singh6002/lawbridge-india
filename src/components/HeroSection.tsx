import { useState, useEffect } from 'react';
import { Search, ArrowRight, Shield, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HeroScene3D } from '@/components/3d/HeroScene3D';
import { ConstellationBackground } from '@/components/3d/ConstellationBackground';

const placeholders = [
  'I received a suspicious WhatsApp payment request',
  'Someone scammed me with a fake job offer',
  'My salary or dues have not been cleared',
  'I want to file a consumer forum complaint',
  'How do I report cyber fraud to 1930?',
  'I received a fake police or court notice',
  'Need guidance on tenant or property dispute',
];

export const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Trigger subtle celebratory confetti burst
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#f59e0b', '#3b82f6', '#10b981'],
        });
      } catch {
        // Fallback gracefully
      }
      navigate(`/problem/other?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-100/50 dark:from-[#060911] dark:via-[#080e1b] dark:to-[#060911] border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Interactive 3D Background Constellation */}
      <ConstellationBackground />

      {/* Atmospheric lighting glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-amber-500/10 dark:bg-amber-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Search & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Official Badge with Motion */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-amber-500/30 shadow-[0_2px_10px_rgba(15,23,42,0.06)] dark:shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-6"
            >
              <Shield className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 dark:text-amber-400 tracking-wider uppercase">
                India's National Citizen Legal Network
              </span>
            </motion.div>

            {/* Dynamic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.12] tracking-tight mb-6"
            >
              Know Your Laws.{' '}
              <span className="text-gradient-navy">Claim Your Rights.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Demand Justice.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              Aadhikar translates complex Indian legal codes (BNS, BNSS, Cyber Laws, Consumer Acts) into plain, immediate guidance with instant FIR drafting and advocate connections.
            </motion.p>

            {/* Search Input Box with 3D Elevation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl mx-auto lg:mx-0 mb-6"
            >
              <div
                className={`relative flex items-center h-14 md:h-16 rounded-2xl border transition-all duration-300 bg-white dark:bg-[#0c1322] shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_35px_rgba(0,0,0,0.6)] ${
                  isSearchFocused
                    ? 'border-amber-500 ring-4 ring-amber-500/20'
                    : 'border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <Search
                  className={`w-5 h-5 ml-5 shrink-0 transition-colors ${
                    isSearchFocused ? 'text-amber-500' : 'text-slate-400'
                  }`}
                />
                <input
                  id="hero-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={placeholders[placeholderIndex]}
                  className="flex-1 h-full px-4 bg-transparent border-none outline-none text-foreground placeholder:text-slate-400 text-sm md:text-base font-medium"
                  aria-label="Search for legal help"
                />
                <button
                  onClick={handleSearch}
                  className="h-10 md:h-12 px-5 md:px-6 mr-1.5 md:mr-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 shrink-0"
                >
                  <span>Resolve Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Updated for Bharatiya Nyaya Sanhita (BNS)
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Verified Legal Aid Helpline 1930 & 112
              </span>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => navigate('/rights')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-amber-400 dark:text-slate-950" />
                <span>Explore Citizen Rights</span>
              </button>
              <button
                onClick={() => navigate('/ask')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-md transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Ask Vidhi Sahayak AI</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Scales & Constitutional Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full relative max-w-[480px] aspect-square rounded-3xl bg-gradient-to-tr from-slate-100/60 to-white/40 dark:from-[#0c1322]/80 dark:to-[#131c31]/40 border border-slate-200/80 dark:border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden p-2 flex items-center justify-center">
              {/* 3D WebGL Canvas */}
              <HeroScene3D />

              {/* Floating 3D Info Pills */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-lg pointer-events-none">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Legal Intelligence
                </span>
              </div>

              <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-lg pointer-events-none">
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                  ⚖️ Constitutional Justice Core
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
