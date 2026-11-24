import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { ScamBadge } from '@/components/ScamCard';
import { scamAlertsData } from '@/data/scamAlerts';
import { ArrowLeft, AlertTriangle, Shield, FileText, Phone, ExternalLink, Ban, CheckCircle, Clock } from 'lucide-react';

const ScamDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const scam = scamAlertsData.find((s) => s.slug === slug);

  if (!scam) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Scam Alert Not Found</h1>
          <Link to="/scam-alerts" className="text-navy font-semibold">← Back to Scam Alerts</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/scam-alerts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Scam Alerts
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 rounded-lg bg-navy-pale text-navy text-xs font-semibold">{scam.category}</span>
            <ScamBadge level={scam.riskLevel} />
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> Updated {scam.lastReviewed}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{scam.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{scam.description}</p>

          <Disclaimer variant="compact" className="mb-8" />

          <div className="space-y-8">
            {/* How this scam works */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-alert" /> How This Scam Works
              </h2>
              <p className="text-muted-foreground leading-relaxed">{scam.howItWorks}</p>
            </section>

            {/* Warning Signs */}
            <section className="trust-card p-6 md:p-8 border-alert/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5 text-alert-amber" /> Warning Signs
              </h2>
              <ul className="space-y-3">
                {scam.warningSigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-alert-amber mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Example Scenario */}
            <section className="trust-card p-6 md:p-8 bg-amber-50/50">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-saffron" /> Example Scenario
              </h2>
              <p className="text-muted-foreground leading-relaxed italic">"{scam.exampleScenario}"</p>
              <p className="text-xs text-muted-foreground mt-3">Note: This is a representative scenario for educational purposes.</p>
            </section>

            {/* How to Stay Safe */}
            <section className="trust-card p-6 md:p-8 border-green-india/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-india" /> How to Stay Safe
              </h2>
              <ul className="space-y-3">
                {scam.prevention.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-india mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What to Do If You Lost Money */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-navy" /> What to Do If You Already Lost Money
              </h2>
              <ol className="space-y-3">
                {scam.whatToDo.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="step-number text-xs w-7 h-7">{i + 1}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Where to Report */}
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-trust" /> Where to Report
              </h2>
              <ul className="space-y-2">
                {scam.whereToReport.map((place, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-navy font-medium">•</span> {place}
                  </li>
                ))}
              </ul>
            </section>

            {/* Official Resources */}
            <section className="trust-card p-6 md:p-8 border-green-india/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-india" /> Official Resources
              </h2>
              <div className="space-y-3">
                {scam.officialResources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-green-india-pale hover:bg-green-india/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-india" />
                      <span className="text-sm font-semibold text-foreground">{resource.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-india group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <Disclaimer className="mt-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScamDetailPage;
