import { BookOpen, Target, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: BookOpen,
    title: 'Plain-Language Laws',
    description: 'Statutory provisions, BNS sections, and court rulings translated into straightforward language free from dense legal jargon.',
    color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  },
  {
    icon: Target,
    title: 'Actionable Protocols',
    description: 'Clear, step-by-step instructions on who to call, what evidence to safeguard, and where to lodge complaints officially.',
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Authorities',
    description: 'Direct verification through official Supreme Court records, NCRB statistics, Cyber Crime 1930, and NALSA aid.',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  {
    icon: Users,
    title: 'Universal Citizen Access',
    description: 'Engineered for every citizen across Indian languages, making constitutional empowerment accessible to all communities.',
    color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  },
];

export function WhyAadhikar() {
  return (
    <section className="section-light py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            Why Aadhikar?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Bridging the gap between the Indian legal justice framework and the citizens it protects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="trust-card p-6 flex flex-col items-start hover:shadow-xl dark:hover:border-amber-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
