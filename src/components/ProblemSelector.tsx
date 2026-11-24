import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wifi,
  Smartphone,
  Landmark,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  Phone,
  Home,
  Building2,
  ShoppingBag,
  Users,
  Shield,
  CreditCard,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Smartphone,
  Landmark,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  Phone,
  Home,
  Building2,
  ShoppingBag,
  Users,
  Shield,
  CreditCard,
  HelpCircle,
};

const categories = [
  { id: 'cyber-fraud', label: 'Cyber Fraud', icon: 'Wifi', iconColor: 'text-red-500', iconBg: 'bg-red-500/10 border-red-500/20' },
  { id: 'upi-fraud', label: 'UPI Fraud', icon: 'Smartphone', iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10 border-amber-500/20' },
  { id: 'banking-fraud', label: 'Banking Fraud', icon: 'Landmark', iconColor: 'text-orange-500', iconBg: 'bg-orange-500/10 border-orange-500/20' },
  { id: 'online-shopping', label: 'Online Shopping Scam', icon: 'ShoppingCart', iconColor: 'text-purple-500', iconBg: 'bg-purple-500/10 border-purple-500/20' },
  { id: 'job-scam', label: 'Job Scam', icon: 'Briefcase', iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10 border-blue-500/20' },
  { id: 'investment-scam', label: 'Investment Scam', icon: 'TrendingUp', iconColor: 'text-emerald-500', iconBg: 'bg-emerald-500/10 border-emerald-500/20' },
  { id: 'fake-govt-call', label: 'Fake Government Call', icon: 'Phone', iconColor: 'text-rose-500', iconBg: 'bg-rose-500/10 border-rose-500/20' },
  { id: 'property-dispute', label: 'Property Dispute', icon: 'Home', iconColor: 'text-teal-500', iconBg: 'bg-teal-500/10 border-teal-500/20' },
  { id: 'employment-issue', label: 'Employment Issue', icon: 'Building2', iconColor: 'text-indigo-500', iconBg: 'bg-indigo-500/10 border-indigo-500/20' },
  { id: 'consumer-complaint', label: 'Consumer Complaint', icon: 'ShoppingBag', iconColor: 'text-cyan-500', iconBg: 'bg-cyan-500/10 border-cyan-500/20' },
  { id: 'family-legal', label: 'Family / Personal Legal', icon: 'Users', iconColor: 'text-pink-500', iconBg: 'bg-pink-500/10 border-pink-500/20' },
  { id: 'police-cyber', label: 'Police / Cyber Crime', icon: 'Shield', iconColor: 'text-amber-400', iconBg: 'bg-amber-400/10 border-amber-400/20' },
  { id: 'loan-financial', label: 'Loan / Financial Problem', icon: 'CreditCard', iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10 border-amber-500/20' },
  { id: 'other', label: 'Other Inquiries', icon: 'HelpCircle', iconColor: 'text-slate-400', iconBg: 'bg-slate-500/10 border-slate-500/20' },
];

export function ProblemSelector() {
  return (
    <section className="section-muted py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Instant Action Guides
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            What Issue Are You Facing?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Select your scenario for immediate legal steps, official cyber reporting portals, and advocate directories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4 max-w-5xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || HelpCircle;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={`/problem/${cat.id}`}
                  className="group flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-slate-800/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-[0_12px_24px_-4px_rgba(245,158,11,0.12)] transition-all duration-200 h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${cat.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-center text-slate-800 dark:text-slate-200 group-hover:text-amber-500 transition-colors leading-tight">
                    {cat.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
