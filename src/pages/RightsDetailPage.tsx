import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { rightsArticlesData } from '@/data/rightsArticles';
import { ArrowLeft, CheckCircle, FileText, ExternalLink, Phone, Clock, BookOpen } from 'lucide-react';

const RightsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = rightsArticlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/rights" className="text-navy font-semibold">← Back to Know Your Rights</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { content } = article;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/rights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Know Your Rights
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-lg bg-navy-pale text-navy text-xs font-semibold">{article.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> Last reviewed {article.lastReviewed}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{article.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{article.description}</p>

          <Disclaimer variant="compact" className="mb-8" />

          <div className="space-y-8">
            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-navy" /> What Is the Issue?
              </h2>
              <p className="text-muted-foreground leading-relaxed">{content.whatIsTheIssue}</p>
            </section>

            <section className="trust-card p-6 md:p-8 border-navy/10">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-india" /> Your Basic Rights
              </h2>
              <ul className="space-y-3">
                {content.yourBasicRights.map((right, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-india mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{right}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-saffron" /> What You Can Do
              </h2>
              <ol className="space-y-3">
                {content.whatYouCanDo.map((action, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="step-number text-xs w-7 h-7">{i + 1}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed pt-1">{action}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-trust" /> Where to Complain
              </h2>
              <div className="space-y-3">
                {content.whereToComplain.map((place, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted">
                    <span className="text-sm font-medium text-foreground">{place.name}</span>
                    {place.url && (
                      <a href={place.url} target="_blank" rel="noopener noreferrer" className="text-xs text-navy font-semibold flex items-center gap-1 hover:text-saffron transition-colors">
                        Visit <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="trust-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-navy" /> Important Documents
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.importantDocuments.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted">
                    <FileText className="w-3.5 h-3.5 text-navy shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </section>

            <section className="trust-card p-6 md:p-8 border-green-india/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-india" /> Useful Official Resources
              </h2>
              <div className="space-y-3">
                {content.usefulResources.map((resource) => (
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

export default RightsDetailPage;
