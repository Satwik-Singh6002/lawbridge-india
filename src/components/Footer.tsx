import { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  PhoneCall,
  Mail,
  ArrowRight,
  ExternalLink,
  BookOpen,
  AlertTriangle,
  FileText,
  Users,
  CheckCircle2,
  Activity,
  Award,
  ArrowUpRight,
  ShieldAlert,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast.success('Subscribed to Weekly Legal Brief!', {
        description: `Alerts will be delivered to ${email}`,
      });
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-[#05070f] text-white border-t border-slate-800/80 relative overflow-hidden" role="contentinfo">
      
      {/* ═══ 1. Floating Emergency Response Dock ═══ */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#080d1a] to-[#05070f] py-10 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-black uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  National Emergency Dispatch
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Under Immediate Threat or Cyber Fraud?
                </h3>
              </div>
              <p className="text-xs text-slate-400 max-w-md md:text-right">
                Toll-free statutory assistance lines active 24x7 across all Indian states and UTs.
              </p>
            </div>

            {/* 4 Spacious Glowing Hotline Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 1930 Cyber Fraud */}
              <a
                href="tel:1930"
                className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/25 hover:border-amber-400 hover:bg-amber-500/15 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    Freeze Funds
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">Cyber Crime & Fraud</div>
                  <div className="text-2xl font-black text-amber-400 tracking-tight mt-0.5">1930</div>
                </div>
              </a>

              {/* 112 Police & Fire */}
              <a
                href="tel:112"
                className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/25 hover:border-red-400 hover:bg-red-500/15 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                    24x7 Dispatch
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">All-India Emergency</div>
                  <div className="text-2xl font-black text-red-400 tracking-tight mt-0.5">112</div>
                </div>
              </a>

              {/* 181 Women Safety */}
              <a
                href="tel:181"
                className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/25 hover:border-purple-400 hover:bg-purple-500/15 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    Confidential
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">Women in Distress</div>
                  <div className="text-2xl font-black text-purple-400 tracking-tight mt-0.5">181</div>
                </div>
              </a>

              {/* 15100 Consumer Redressal */}
              <a
                href="tel:15100"
                className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/25 hover:border-emerald-400 hover:bg-emerald-500/15 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Govt Forum
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">National Consumer Line</div>
                  <div className="text-2xl font-black text-emerald-400 tracking-tight mt-0.5">15100</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 2. Spacious Main Body (Left: Brand & AI Copilot | Right: 3 Broad Pillars) ═══ */}
      <div className="container py-14 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Emblem + Interactive AI Box + Digest (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-all">
                <Scale className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-white tracking-tight">ADHIKAR</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  India's Legal & Democratic Hub
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Translating complex statutory codes (Bharatiya Nyaya Sanhita, Cyber Regulations, Consumer Acts) into plain-language, actionable guidance for every citizen.
            </p>

            {/* Newsletter Input */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Weekly Legal & Scam Alerts</span>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: 3 Spacious, Uncrowded Pillars (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Pillar 1: Citizen Rights */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5 border-b border-amber-500/20 pb-2">
                <BookOpen className="w-3.5 h-3.5" />
                Citizen Rights
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/rights" className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block">
                    Fundamental Rights
                  </Link>
                </li>
                <li>
                  <Link to="/rights/consumer-protection" className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block">
                    Consumer Rights
                  </Link>
                </li>
                <li>
                  <Link to="/rights/tenant-rights" className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block">
                    Tenant & Rent Protections
                  </Link>
                </li>
                <li>
                  <Link to="/rights/workplace-rights" className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block">
                    Employment & Wages
                  </Link>
                </li>
                <li>
                  <Link to="/rights/digital-privacy" className="hover:text-amber-400 hover:translate-x-1 transition-all inline-block">
                    Digital Data Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/scam-alerts" className="text-red-400 font-bold hover:text-red-300 hover:translate-x-1 transition-all inline-block">
                    Active Scam Intel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Judicial Precedents */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-blue-400 flex items-center gap-1.5 border-b border-blue-500/20 pb-2">
                <Scale className="w-3.5 h-3.5" />
                Judicial Precedents
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/cases" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                    Supreme Court Cases
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                    Puttaswamy (Privacy)
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                    D.K. Basu (Arrest Laws)
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                    Basic Structure Doctrine
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                    Gazette & Court News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Citizen Services */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-teal-400 flex items-center gap-1.5 border-b border-teal-500/20 pb-2">
                <FileText className="w-3.5 h-3.5" />
                Citizen Redressal
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link to="/complaints" className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block">
                    Step-by-Step FIR Guide
                  </Link>
                </li>
                <li>
                  <Link to="/complaints" className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block">
                    Cyber 1930 Portal
                  </Link>
                </li>
                <li>
                  <Link to="/complaints" className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block">
                    Consumer Forum Filing
                  </Link>
                </li>
                <li>
                  <Link to="/lawyers" className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block">
                    Find Verified Advocates
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:text-teal-400 hover:translate-x-1 transition-all inline-block">
                    NALSA Free Legal Aid
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ═══ 3. Elegant Centered Constitutional Seal ═══ */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-amber-500/5 via-[#0c1322] to-amber-500/5 border border-amber-500/20 text-center shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2">
              ⚖️ THE CONSTITUTION OF INDIA • PREAMBLE
            </div>
            <p className="text-xs sm:text-sm italic text-amber-100/80 leading-relaxed font-serif">
              "WE, THE PEOPLE OF INDIA, solemnly resolve to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY."
            </p>
          </div>
        </div>

        {/* ═══ 4. Bottom Governance Links & System Status Bar ═══ */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Live System Engine Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-emerald-400 font-mono font-bold">Java Spring Boot 3 Engine: Live (Port 8080)</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-mono">BNS 2024 Synced</span>
          </div>

          {/* Governance Links */}
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500">© {new Date().getFullYear()} ADHIKAR India</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
