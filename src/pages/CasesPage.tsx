import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { VidhiSahayak } from "@/components/VidhiSahayak";

const caseTypes = [
  { label: "Rape & Sexual Assault", slug: "rape-sexual-assault", desc: "POCSO Act, IPC 375-376, landmark judgments" },
  { label: "Scam & Fraud", slug: "scam-fraud", desc: "Prevention of Corruption Act, cheating cases" },
  { label: "Kidnapping & Abduction", slug: "kidnapping-abduction", desc: "IPC 359-369, missing persons cases" },
  { label: "Murder & Homicide", slug: "murder-homicide", desc: "IPC 299-304, culpable homicide" },
  { label: "Cybercrime", slug: "cybercrime", desc: "IT Act 2000, online fraud, hacking" },
  { label: "Domestic Violence", slug: "domestic-violence", desc: "DV Act 2005, protection orders" },
  { label: "Consumer Grievances", slug: "consumer-grievances", desc: "Consumer Protection Act 2019" },
  { label: "Parliamentary Law", slug: "parliamentary-law", desc: "Anti-Defection & Privilege matters" },
];

const CasesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16">
          <div className="container">
            <ScrollReveal className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Case Repository</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
                Landmark cases & judgments
              </h1>
              <p className="text-white/45 text-base sm:text-lg leading-relaxed">
                Explore major case categories with linked context, relevant provisions, and practical summaries.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseTypes.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 60}>
                  <Link
                    to={`/cases/${c.slug}`}
                    className="block glassy-card rounded-3xl p-6 hover-glow transition-all group"
                  >
                    <BookOpen className="w-6 h-6 text-white/35 group-hover:text-saffron transition-colors mb-3" />
                    <h3 className="font-black text-white text-sm mb-1">{c.label}</h3>
                    <p className="text-xs text-white/45 mb-3 leading-relaxed">{c.desc}</p>
                    <span className="text-xs text-saffron font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Cases <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VidhiSahayak />
    </div>
  );
};

export default CasesPage;
