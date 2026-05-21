import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield } from "lucide-react";

const sections = [
  { title: "1. Information We Collect", content: "ADHIKAR is designed with privacy in mind. We collect minimal data necessary to provide our services:\n\n• Usage Data: Anonymous analytics to improve our platform.\n• Language Preference: Stored locally in your browser.\n• Chat Data: Processed in real-time and not permanently stored on our servers." },
  { title: "2. How We Use Your Information", content: "We use collected information solely to:\n\n• Improve and optimize the ADHIKAR platform.\n• Provide personalized language preferences.\n• Enhance the AI assistant's response quality.\n• Generate aggregate, anonymized usage statistics." },
  { title: "3. Data Storage & Security", content: "• All user preferences are stored locally on your device.\n• We do not maintain user accounts or collect personally identifiable information (PII).\n• Our platform uses HTTPS encryption for all data transmissions.\n• AI chat interactions are processed via secure, encrypted API connections." },
  { title: "4. Third-Party Services", content: "ADHIKAR uses the following third-party services:\n\n• AI Processing: We use OpenRouter API for Vidhi Sahayak AI responses.\n• Fonts: Google Fonts (Plus Jakarta Sans, Noto Sans Devanagari).\n• We do not sell, trade, or share your data with any third parties for marketing purposes." },
  { title: "5. Cookies", content: "ADHIKAR uses minimal cookies and localStorage for:\n\n• Storing your language preference.\n• No tracking cookies or advertising cookies are used." },
  { title: "6. Your Rights", content: "As a user of ADHIKAR, you have the right to:\n\n• Clear all locally stored data by clearing your browser's localStorage.\n• Use the platform without providing any personal information.\n• Contact us with any privacy concerns." },
  { title: "7. Changes to This Policy", content: "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date." },
  { title: "8. Contact", content: "For privacy-related inquiries, please reach out through our Contact page." },
];

const PrivacyPolicyPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24">
      <section className="py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <Shield className="w-3 h-3 text-saffron" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">Privacy Policy</h1>
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

export default PrivacyPolicyPage;
