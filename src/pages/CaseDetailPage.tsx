import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { casesData } from '@/data/cases';
import { ArrowLeft, Scale, Calendar, BookOpen, Lightbulb, FileText, CheckCircle, ExternalLink } from 'lucide-react';

const CaseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const legalCase = casesData.find((c) => c.slug === slug);

  if (!legalCase) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Not Found</h1>
          <Link to="/cases" className="text-navy font-semibold">← Back to Important Cases</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/cases" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Important Cases
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 rounded-lg bg-navy text-white text-xs font-bold flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              {legalCase.court}
            </span>
            <span className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-semibold">
              {legalCase.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" /> {legalCase.year}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{legalCase.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{legalCase.summary}</p>

          <Disclaimer variant="compact" className="mb-8" />

          <div className="space-y-8">
            {/* Key Legal Issue */}
            <section className="trust-card p-6 md:p-8 border-navy/20">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-navy" /> The Key Question
              </h2>
              <p className="text-foreground/90 leading-relaxed font-medium">{legalCase.keyIssue}</p>
            </section>

            {/* Background & Facts */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-saffron" /> What Happened (Background)
              </h2>
              <p className="text-muted-foreground leading-relaxed">{legalCase.whatHappened}</p>
            </section>

            {/* Court's Decision */}
            <section className="trust-card p-6 md:p-8 border-green-india/20 bg-green-50/20">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-green-india" /> What the Court Decided
              </h2>
              <p className="text-foreground/90 leading-relaxed">{legalCase.decision}</p>
            </section>

            {/* Why it Matters */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" /> Why This Judgment Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed">{legalCase.whyItMatters}</p>
            </section>

            {/* What Citizens Should Learn */}
            <section className="trust-card p-6 md:p-8 bg-navy-pale/50 border-navy/20">
              <h2 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" /> What You Should Know as a Citizen
              </h2>
              <p className="text-navy/90 leading-relaxed font-medium">{legalCase.whatCitizensShouldLearn}</p>
            </section>

            {/* Official Citation / Source */}
            <section className="trust-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Official Case Citation
              </h3>
              <p className="text-sm font-mono text-foreground">{legalCase.officialSource}</p>
            </section>
          </div>

          <Disclaimer className="mt-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseDetailPage;
