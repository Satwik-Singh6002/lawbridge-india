import { Scale } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center">
                <Scale className="w-4 h-4 text-saffron" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">ADHIKAR</span>
            </div>
            <p className="text-sm leading-relaxed">
              India's unified platform for legal awareness, democratic empowerment, and citizen rights.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              {["Legal Database", "Case Repository", "Crime Analytics", "AI Assistant", "Advocate Directory"].map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {["Know Your Rights", "File an FIR", "RTI Guide", "Consumer Complaint", "Cyber Crime Report"].map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              {["Privacy Policy", "Terms of Service", "Disclaimer", "Contact Us"].map((item) => (
                <li key={item}><a href="#" className="hover:text-saffron transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 ADHIKAR. For informational purposes only — not legal advice.</p>
          <p>Data sourced from NCRB, IndiaCode, eCourts & government publications.</p>
        </div>
      </div>
    </footer>
  );
};
