import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FileText } from "lucide-react";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing and using ADHIKAR (\"the Platform\"), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the Platform." },
  { title: "2. Nature of the Platform", content: "ADHIKAR is an educational and informational platform that provides:\n\n• Curated summaries of Indian laws, acts, and constitutional provisions.\n• AI-powered legal information through Vidhi Sahayak.\n• Crime analytics and trend data from public sources.\n• Directory of legal aid services and government portals.\n\nImportant: ADHIKAR does NOT provide professional legal advice. The information presented is for educational purposes only." },
  { title: "3. Disclaimer of Legal Advice", content: "Nothing on this platform constitutes legal advice, solicitation, or the creation of an attorney-client relationship. The content provided is intended to be a general guide and should not be relied upon for making legal decisions. Always consult a licensed advocate for specific legal matters." },
  { title: "4. AI Assistant Limitations", content: "Vidhi Sahayak, our AI assistant:\n\n• Provides general information based on its training data.\n• May not always reflect the most recent amendments or judicial interpretations.\n• Should not be considered a replacement for professional legal counsel.\n• May occasionally produce inaccurate or incomplete information." },
  { title: "5. Data Accuracy", content: "While we strive for accuracy:\n\n• Legal information may not reflect the latest amendments.\n• Crime analytics data is sourced from publicly available government reports and may have inherent limitations.\n• Users are encouraged to verify critical information from official government sources." },
  { title: "6. User Conduct", content: "Users agree to:\n\n• Use the Platform solely for lawful, educational purposes.\n• Not misrepresent information obtained from the Platform as professional legal advice.\n• Not attempt to reverse-engineer, scrape, or misuse Platform features.\n• Respect intellectual property rights of the content presented." },
  { title: "7. Intellectual Property", content: "All original content, design, and code of ADHIKAR are protected by applicable intellectual property laws. Indian legal texts and government data referenced on the platform are public domain materials." },
  { title: "8. Limitation of Liability", content: "ADHIKAR and its creators shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this Platform or reliance on any information provided herein." },
  { title: "9. Modifications", content: "We reserve the right to modify these terms at any time. Continued use of the Platform after modifications constitutes acceptance of the updated terms." },
  { title: "10. Governing Law", content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India." },
];

const TermsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24">
      <section className="py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <FileText className="w-3 h-3 text-saffron" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">Terms of Service</h1>
            <p className="text-white/30 text-sm mb-12">Last updated: May 2026</p>
          </ScrollReveal>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h2 className="text-xl font-black text-white tracking-tight mb-4">{section.title}</h2>
                  <p className="text-white/50 text-sm leading-[1.8] whitespace-pre-line">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <VidhiSahayak />
  </div>
);

export default TermsPage;
