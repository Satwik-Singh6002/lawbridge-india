import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { lawyersData } from '@/data/lawyers';
import { ArrowLeft, MapPin, Star, User, GraduationCap, Clock, CheckCircle, Phone, Video, Calendar, ShieldAlert } from 'lucide-react';

const LawyerDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const lawyer = lawyersData.find((l) => l.slug === slug);

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Lawyer Profile Not Found</h1>
          <Link to="/lawyers" className="text-navy font-semibold">← Back to Find a Lawyer</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <Link to="/lawyers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Lawyer Directory
        </Link>

        {/* Demo profile disclaimer notice */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-8 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900">
            <strong>Demonstration Profile:</strong> This profile is for prototype/educational evaluation on Aadhikar. In production, only Bar Council verified advocates with verified enrollment numbers are listed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main profile */}
          <div className="lg:col-span-2 space-y-6">
            <div className="trust-card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-navy-pale flex items-center justify-center shrink-0">
                  <User className="w-10 h-10 text-navy" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">{lawyer.name}</h1>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                      Verification: {lawyer.verificationStatus}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" /> {lawyer.city}, {lawyer.state} • {lawyer.experience} years experience
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-saffron fill-saffron" />
                      <span className="text-sm font-bold">{lawyer.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({lawyer.reviewCount} verified client reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Practice Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {lawyer.practiceAreas.map((area) => (
                      <span key={area} className="px-3 py-1 rounded-lg bg-navy-pale text-navy text-xs font-semibold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Languages Spoken</h3>
                  <p className="text-sm text-foreground">{lawyer.languages.join(', ')}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">About & Experience</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lawyer.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Education & Credentials</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-navy" /> {lawyer.education}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation booking card */}
          <div>
            <div className="trust-card p-6 sticky top-28 space-y-5">
              <h2 className="text-lg font-bold text-foreground">Consultation Options</h2>
              
              <div className="space-y-2">
                {lawyer.consultationOptions.map((opt) => (
                  <div key={opt} className="flex items-center gap-2 p-3 rounded-xl bg-muted text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-green-india" />
                    <span>{opt} Consultation</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-navy-pale/50 text-xs text-navy space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5" /> Availability
                </div>
                <p>{lawyer.availability}</p>
              </div>

              <button
                onClick={() => alert('Consultation scheduling will be enabled with verified backend integration.')}
                className="w-full py-3.5 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors shadow-md shadow-navy/10"
              >
                Request Legal Consultation
              </button>

              <Disclaimer variant="compact" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LawyerDetailPage;
