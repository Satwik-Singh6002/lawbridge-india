import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { problemGuidesData, problemCategories } from '@/data/problemGuides';
import { ArrowLeft, Shield, AlertTriangle, FileText, Phone, ExternalLink, CheckCircle, Ban, HelpCircle } from 'lucide-react';

const ProblemGuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = problemGuidesData.find((g) => g.slug === slug);
  const categoryMeta = problemCategories.find((c) => c.id === slug);

  const title = categoryMeta?.label || (slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Problem Guide');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-pale text-alert text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Guidance & Action Plan
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{title}</h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {guide?.whatHappened || `Here is immediate, step-by-step guidance on how to protect yourself, preserve critical evidence, and contact the authorized departments regarding ${title}.`}
          </p>

          <Disclaimer variant="compact" className="mb-8" />

          {guide ? (
            <div className="space-y-8">
              {/* Immediate Steps */}
              <section className="trust-card p-6 md:p-8 border-alert/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-alert" /> Immediate Action Required
                </h2>
                <ol className="space-y-3">
                  {guide.immediateSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="step-number text-xs w-7 h-7">{i + 1}</span>
                      <span className="text-foreground/90 text-sm leading-relaxed pt-1 font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* What to Avoid */}
              <section className="trust-card p-6 md:p-8 bg-red-50/40 border-red-200/50">
                <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <Ban className="w-5 h-5 text-red-600" /> What to Avoid (Do Not Do This)
                </h2>
                <ul className="space-y-2.5">
                  {guide.whatToAvoid.map((avoid, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-red-800">
                      <span className="font-bold text-red-600">✕</span> {avoid}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Documents to Keep */}
              <section className="trust-card p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-navy" /> Documents & Evidence to Preserve
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {guide.documentsToKeep.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-3 rounded-xl bg-muted">
                      <FileText className="w-4 h-4 text-navy shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Authorities to Contact */}
              <section className="trust-card p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-trust" /> Authorities & Helplines
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {guide.authorities.map((auth, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted flex flex-col justify-between">
                      <span className="text-sm font-bold text-foreground mb-1">{auth.name}</span>
                      <div className="flex items-center gap-2 mt-2">
                        {auth.contact && (
                          <a href={`tel:${auth.contact}`} className="text-xs font-bold text-alert flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {auth.contact}
                          </a>
                        )}
                        {auth.url && (
                          <a href={auth.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-navy flex items-center gap-1 hover:text-saffron">
                            Portal <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Official Resources */}
              <section className="trust-card p-6 md:p-8 border-green-india/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-green-india" /> Official Portals
                </h2>
                <div className="space-y-3">
                  {guide.officialResources.map((res) => (
                    <a
                      key={res.name}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-green-india-pale hover:bg-green-india/10 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-india" />
                        <span className="text-sm font-semibold text-foreground">{res.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-green-india group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </section>

              {/* When to Seek Legal Advice */}
              <section className="trust-card p-6 md:p-8 bg-navy-pale/40">
                <h2 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-navy" /> When Should You Consult a Lawyer?
                </h2>
                <p className="text-navy/80 text-sm leading-relaxed font-medium mb-4">{guide.whenToSeekLegal}</p>
                <Link
                  to="/lawyers"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-light transition-colors"
                >
                  Find a Specialized Lawyer →
                </Link>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="trust-card p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">Recommended Emergency Steps</h2>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="step-number text-xs w-7 h-7">1</span>
                    <span className="text-muted-foreground text-sm leading-relaxed pt-1">
                      If this involves monetary theft or cyber crime, dial <strong>1930</strong> or report on <strong>cybercrime.gov.in</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="step-number text-xs w-7 h-7">2</span>
                    <span className="text-muted-foreground text-sm leading-relaxed pt-1">
                      Preserve every piece of documentary evidence: transaction IDs, receipts, WhatsApp chats, agreements, and notices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="step-number text-xs w-7 h-7">3</span>
                    <span className="text-muted-foreground text-sm leading-relaxed pt-1">
                      Check your corresponding legal rights in our <Link to="/rights" className="text-navy font-bold hover:underline">Know Your Rights</Link> portal.
                    </span>
                  </li>
                </ol>
              </section>
              <div className="flex gap-4">
                <Link to="/ask" className="px-6 py-3 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light">
                  Ask Aadhikar for Detailed Help
                </Link>
                <Link to="/lawyers" className="px-6 py-3 rounded-xl border border-border text-foreground text-sm font-semibold hover:bg-muted">
                  Consult a Lawyer
                </Link>
              </div>
            </div>
          )}

          <Disclaimer className="mt-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProblemGuidePage;
