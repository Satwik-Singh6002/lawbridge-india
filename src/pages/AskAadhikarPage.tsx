import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { MessageSquare, Send, ArrowRight, Sparkles, FileText, ExternalLink, AlertTriangle, CheckCircle } from 'lucide-react';

const exampleQuestions = [
  'I lost money through UPI fraud.',
  'My employer has not paid my salary.',
  'I received a suspicious legal notice.',
  'Someone is threatening me online.',
  'I received a fake courier delivery message.',
  'How do I file an FIR?',
];

// Simple keyword-based guidance engine (future AI hookpoint)
function getGuidance(query: string): { situation: string; steps: string[]; documents: string[]; resources: { name: string; url: string }[]; legalAdvice: string } | null {
  const q = query.toLowerCase();
  if (q.includes('upi') || q.includes('payment') || q.includes('money') || q.includes('fraud') || q.includes('scam')) {
    return {
      situation: 'It sounds like you may have experienced a financial fraud or scam. This is unfortunately common, but there are clear steps you can take.',
      steps: [
        'Call the Cyber Crime Helpline at 1930 immediately',
        'Contact your bank to report the unauthorized transaction',
        'File a complaint on cybercrime.gov.in',
        'Save all evidence — screenshots, transaction IDs, messages',
        'File an FIR at your local police station'
      ],
      documents: ['Transaction details', 'Screenshots of messages', 'Bank statements', 'Scammer\'s phone/UPI ID'],
      resources: [
        { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
        { name: 'RBI Banking Ombudsman', url: 'https://cms.rbi.org.in' }
      ],
      legalAdvice: 'If the amount is significant or the bank is not cooperating, consulting a lawyer who specializes in cyber crime may be beneficial.'
    };
  }
  if (q.includes('salary') || q.includes('employer') || q.includes('paid') || q.includes('work') || q.includes('job')) {
    return {
      situation: 'It appears you may be dealing with an employment-related issue such as unpaid wages or workplace disputes.',
      steps: [
        'Send a written complaint to your employer via email or registered post',
        'Contact the Labour Commissioner\'s office in your district',
        'Check your PF contributions on epfindia.gov.in',
        'For harassment, use She-Box portal (shebox.nic.in)',
        'Seek free legal aid through NALSA if needed'
      ],
      documents: ['Appointment letter', 'Salary slips', 'Employment contract', 'Written communications'],
      resources: [
        { name: 'Ministry of Labour', url: 'https://labour.gov.in' },
        { name: 'EPFO', url: 'https://www.epfindia.gov.in' }
      ],
      legalAdvice: 'For wrongful termination or sustained non-payment, consider approaching the Labour Court with help from a labor law attorney.'
    };
  }
  if (q.includes('fir') || q.includes('police') || q.includes('arrest') || q.includes('complaint')) {
    return {
      situation: 'You seem to need guidance on dealing with the police or filing a complaint.',
      steps: [
        'Visit the nearest police station to file an FIR',
        'You can file a Zero FIR at any police station regardless of jurisdiction',
        'Police cannot refuse to register an FIR for cognizable offenses',
        'Get a copy of the FIR — it is your right',
        'If police refuse, write to the SP/SSP or approach a Magistrate'
      ],
      documents: ['ID proof (Aadhaar/Voter ID)', 'Evidence of the incident', 'Witness details', 'Written description'],
      resources: [
        { name: 'NALSA (Free Legal Aid)', url: 'https://nalsa.gov.in' },
        { name: 'NHRC', url: 'https://nhrc.nic.in' }
      ],
      legalAdvice: 'For serious criminal matters, immediately consult a criminal lawyer. Free legal aid is available through NALSA (helpline: 15100).'
    };
  }
  if (q.includes('threat') || q.includes('harass') || q.includes('online') || q.includes('message') || q.includes('cyber')) {
    return {
      situation: 'You may be experiencing online harassment or cyber threats. This is a serious matter and there are legal protections available.',
      steps: [
        'Take screenshots of all threatening messages and content',
        'Report on cybercrime.gov.in',
        'Call 1930 (Cyber Crime Helpline)',
        'Report the account on the social media platform',
        'File an FIR at your local police station'
      ],
      documents: ['Screenshots', 'Profile URLs', 'Message timestamps', 'Any related evidence'],
      resources: [
        { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
        { name: 'Women Helpline: 181', url: 'tel:181' }
      ],
      legalAdvice: 'Cyber harassment is a criminal offense under the IT Act. If the threats are severe or ongoing, consult a lawyer immediately.'
    };
  }
  return null;
}

const AskAadhikarPage = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<ReturnType<typeof getGuidance>>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (query.trim()) {
      const guidance = getGuidance(query);
      setResult(guidance);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron-pale text-saffron text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              Get Guidance
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Ask Aadhikar</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Describe your situation in simple words and get step-by-step guidance.
            </p>
          </div>

          {/* Input */}
          <div className="trust-card p-6 md:p-8 mb-8">
            <label htmlFor="ask-input" className="block text-sm font-semibold text-foreground mb-3">
              What's your situation?
            </label>
            <textarea
              id="ask-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your problem in a few sentences..."
              className="w-full h-32 p-4 bg-muted border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-muted-foreground">Examples below ↓</p>
              <button
                onClick={handleSubmit}
                disabled={!query.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" /> Get Guidance
              </button>
            </div>
          </div>

          {/* Example questions */}
          {!submitted && (
            <div className="mb-8">
              <p className="text-sm font-semibold text-muted-foreground mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => { setQuery(q); }}
                    className="px-3 py-2 rounded-lg bg-muted text-sm text-muted-foreground hover:bg-navy-pale hover:text-navy transition-colors"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {submitted && result && (
            <div className="space-y-6 animate-fade-in-up">
              <section className="trust-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-saffron" /> Understanding Your Situation
                </h2>
                <p className="text-muted-foreground leading-relaxed">{result.situation}</p>
              </section>

              <section className="trust-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-india" /> Possible Next Steps
                </h2>
                <ol className="space-y-3">
                  {result.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="step-number text-xs w-7 h-7">{i + 1}</span>
                      <span className="text-muted-foreground text-sm leading-relaxed pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="trust-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-navy" /> Documents You May Need
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {result.documents.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted">
                      <FileText className="w-3.5 h-3.5 text-navy shrink-0" /> {doc}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="trust-card p-6 md:p-8 border-green-india/20">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-green-india" /> Official Resources
                </h2>
                <div className="space-y-2">
                  {result.resources.map((r) => (
                    <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-green-india-pale hover:bg-green-india/10 transition-colors group">
                      <span className="text-sm font-semibold text-foreground">{r.name}</span>
                      <ExternalLink className="w-4 h-4 text-green-india" />
                    </a>
                  ))}
                </div>
              </section>

              <section className="trust-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-saffron" /> When to Seek Professional Help
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{result.legalAdvice}</p>
              </section>

              <button
                onClick={() => { setSubmitted(false); setQuery(''); setResult(null); }}
                className="text-sm font-semibold text-navy hover:text-saffron transition-colors"
              >
                ← Ask another question
              </button>
            </div>
          )}

          {submitted && !result && (
            <div className="trust-card p-8 text-center animate-fade-in-up">
              <p className="text-muted-foreground mb-4">
                We couldn't find specific guidance for your query. Try describing your situation differently, or explore our resources:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/scam-alerts" className="px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold">Scam Alerts</a>
                <a href="/rights" className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-semibold">Know Your Rights</a>
                <a href="/complaints" className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-semibold">Complaint Guides</a>
              </div>
            </div>
          )}

          <Disclaimer variant="ai" className="mt-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AskAadhikarPage;
