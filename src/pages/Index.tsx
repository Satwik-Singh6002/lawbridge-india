import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSelector } from '@/components/ProblemSelector';
import { WhyAadhikar } from '@/components/WhyAadhikar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { ScamCard } from '@/components/ScamCard';
import { RightsCard } from '@/components/RightsCard';
import { CaseCard } from '@/components/CaseCard';
import { ResourceCard } from '@/components/ResourceCard';
import { scamAlertsData } from '@/data/scamAlerts';
import { rightsArticlesData } from '@/data/rightsArticles';
import { casesData } from '@/data/cases';
import { officialResourcesData } from '@/data/resources';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, BookOpen, Scale, Users, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSelector />

      {/* Scam Alert Center Preview */}
      <section className="section-light py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <AlertTriangle className="w-3.5 h-3.5" />
                Scam Prevention Advisory
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Scam Alert Center</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base">Real-time intelligence on active digital fraud, fake job offers, and UPI traps.</p>
            </div>
            <Link to="/scam-alerts" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 dark:text-amber-400 hover:text-amber-600 transition-colors">
              <span>View All 12 Scam Alerts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scamAlertsData.slice(0, 6).map((scam, i) => (
              <motion.div
                key={scam.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ScamCard {...scam} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Know Your Rights Preview */}
      <section className="section-muted py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Constitutional & Legal Rights
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Know Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base">Comprehensive legal protections simplified for consumers, tenants, employees, and digital citizens.</p>
            </div>
            <Link to="/rights" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 dark:text-amber-400 hover:text-amber-600 transition-colors">
              <span>Explore All Legal Rights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rightsArticlesData.slice(0, 8).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <RightsCard {...article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cases Preview */}
      <section className="section-light py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Scale className="w-3.5 h-3.5" />
                Judicial Precedents
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Landmark Cases Explained</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base">Important Supreme Court and High Court judgments summarized in plain English.</p>
            </div>
            <Link to="/cases" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 dark:text-amber-400 hover:text-amber-600 transition-colors">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casesData.slice(0, 6).map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <CaseCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Lawyer Banner */}
      <section className="section-muted py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(15,23,42,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              Verified Directory
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">Looking for Legal Representation?</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Search verified advocates by practice area, bar enrollment state, language, and consultation format.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/lawyers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-bold hover:brightness-110 transition-all shadow-md active:scale-95"
              >
                <span>Search Advocates Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources Preview */}
      <section className="section-muted py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <ExternalLink className="w-3.5 h-3.5" />
                Government Redressal Portals
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Official Government Resources</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base">Verified statutory links, e-filing portals, and 24x7 emergency citizen helplines.</p>
            </div>
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 dark:text-amber-400 hover:text-amber-600 transition-colors">
              <span>View All 20+ Resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officialResourcesData.slice(0, 8).map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <ResourceCard {...resource} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyAadhikar />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
