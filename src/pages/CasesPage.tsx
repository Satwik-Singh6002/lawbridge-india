import { Navbar } from "@/components/Navbar";
import { ChatbotSection } from "@/components/ChatbotSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

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
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Case Repository</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">Landmark Cases & Judgments</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Explore landmark and high-profile cases across every major category with court judgments and punishments.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseTypes.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 60}>
                  <Link
                    to={`/laws/${c.slug}`}
                    className="block bg-card rounded-xl p-5 shadow-sm hover:shadow-md border border-border/40 transition-all group"
                  >
                    <BookOpen className="w-6 h-6 text-muted-foreground group-hover:text-saffron transition-colors mb-3" />
                    <h3 className="font-semibold text-foreground text-sm mb-1">{c.label}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                    <span className="text-xs text-saffron font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Cases <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CasesPage;
