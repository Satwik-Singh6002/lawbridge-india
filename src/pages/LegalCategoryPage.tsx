import { useParams, Link } from "react-router-dom";
import { legalCategoriesData } from "@/data/legalCategories";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Scale, BookOpen, Landmark, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CategoryAnalyticsGraph } from "@/components/CategoryAnalyticsGraph";

const typeColors: Record<string, string> = {
  constitutional: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  statutory: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  ipc: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  bns: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  special: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
};

const typeLabels: Record<string, string> = {
  constitutional: "Constitutional",
  statutory: "Statutory Law",
  ipc: "Indian Penal Code",
  bns: "Bharatiya Nyaya Sanhita",
  special: "Special Act",
};

const LegalCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? legalCategoriesData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Link to="/#laws" className="text-primary hover:underline">← Back to all categories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy text-white py-20 pt-28">
        <div className="container">
          <Link to="/#laws" className="inline-flex items-center gap-2 text-saffron hover:underline text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to all categories
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">{category.label}</h1>
          <p className="text-lg text-white/70">{category.subtitle}</p>
          <p className="text-white/80 mt-4 max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Laws */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Scale className="w-6 h-6 text-saffron" />
              <h2 className="text-2xl font-bold text-foreground">Applicable Laws & Provisions</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {category.laws.map((law, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="bg-card border border-border/50 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-foreground text-base">{law.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[law.type]}`}>
                      {typeLabels[law.type]}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{law.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fundamental Rights */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-saffron" />
              <h2 className="text-2xl font-bold text-foreground">Fundamental Rights & Constitutional Protections</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {category.fundamentalRights.map((right, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="bg-card border border-border/50 rounded-xl p-5 flex gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{right}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Judgments */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Landmark className="w-6 h-6 text-saffron" />
              <h2 className="text-2xl font-bold text-foreground">Landmark Judgments</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.keyJudgments.map((j, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-3">{j.year}</Badge>
                  <h3 className="font-semibold text-foreground mb-2">{j.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{j.summary}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Analytics Graph */}
      <CategoryAnalyticsGraph slug={category.slug} label={category.label} />

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="container">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-center">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice.
              Please consult a qualified advocate for specific legal matters.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCategoryPage;
