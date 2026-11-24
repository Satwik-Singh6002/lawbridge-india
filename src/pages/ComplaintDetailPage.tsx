import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { complaintGuidesData } from '@/data/complaintGuides';
import { ArrowLeft, CheckCircle, FileText, ExternalLink, AlertTriangle, Clock } from 'lucide-react';

const ComplaintDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = complaintGuidesData.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <Link to="/complaints" className="text-navy font-semibold">← Back to Complaint Guides</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/complaints" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complaint Guides
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-lg bg-saffron-pale text-saffron text-xs font-semibold">{guide.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> Reviewed {guide.lastReviewed}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{guide.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{guide.description}</p>

          <Disclaimer variant="compact" className="mb-8" />

          <div className="space-y-8">
            {/* Steps */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-6">Step-by-Step Guide</h2>
              <div className="space-y-4">
                {guide.steps.map((step) => (
                  <div key={step.stepNumber} className="trust-card p-5 md:p-6 flex items-start gap-4">
                    <span className="step-number shrink-0">{step.stepNumber}</span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-navy" /> Required Documents
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guide.requiredDocuments.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted">
                    <FileText className="w-3.5 h-3.5 text-navy shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </section>

            {/* Important Warnings */}
            <section className="trust-card p-6 md:p-8 border-alert-amber/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-alert-amber" /> Important Warnings
              </h2>
              <ul className="space-y-3">
                {guide.importantWarnings.map((warning, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-alert-amber mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{warning}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Official Links */}
            <section className="trust-card p-6 md:p-8 border-green-india/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-india" /> Official Links
              </h2>
              <div className="space-y-3">
                {guide.officialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-green-india-pale hover:bg-green-india/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-india" />
                      <span className="text-sm font-semibold text-foreground">{link.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-india group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </section>

            {/* Follow-up Steps */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-trust" /> Follow-Up Steps
              </h2>
              <ul className="space-y-3">
                {guide.followUpSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-trust mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <Disclaimer className="mt-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplaintDetailPage;
