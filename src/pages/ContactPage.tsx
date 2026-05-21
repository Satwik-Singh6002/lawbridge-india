import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MapPin, MessageSquare, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully!", { description: "We'll get back to you as soon as possible." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-24">
          <div className="container">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">Contact</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Get in touch with us
              </h1>
              <p className="text-white/45 text-lg leading-relaxed">
                Have a question, suggestion, or feedback? We'd love to hear from you.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@adhikar.in", desc: "For general inquiries" },
                  { icon: MapPin, label: "Location", value: "India", desc: "Serving all of India" },
                  { icon: MessageSquare, label: "AI Support", value: "Vidhi Sahayak", desc: "24/7 AI legal assistant" },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="glassy-card rounded-2xl p-6 hover-glow">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-saffron/10 border border-saffron/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-saffron" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
                          <div className="text-sm font-bold text-white">{item.value}</div>
                          <div className="text-xs text-white/30">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={240}>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-vidhi-sahayak'))}
                    className="w-full flex items-center justify-between p-6 rounded-2xl bg-saffron/10 border border-saffron/20 hover:bg-saffron/20 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-saffron" />
                      <span className="text-sm font-bold text-saffron">Ask Vidhi Sahayak</span>
                    </div>
                    <Send className="w-4 h-4 text-saffron group-hover:translate-x-1 transition-transform" />
                  </button>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-2">
                <ScrollReveal delay={100}>
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-white/[0.02] border border-white/5">
                      <div className="w-20 h-20 rounded-full bg-green-india/10 border border-green-india/20 flex items-center justify-center mb-6">
                        <Send className="w-8 h-8 text-green-india" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                      <p className="text-white/40 text-sm mb-6">Thank you for reaching out. We'll respond as soon as possible.</p>
                      <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} className="text-saffron text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 block">Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-sm text-white outline-none transition-all focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 placeholder:text-white/15"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 block">Email *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-sm text-white outline-none transition-all focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 placeholder:text-white/15"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 block">Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-sm text-white outline-none transition-all focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 placeholder:text-white/15"
                          placeholder="What is this about?"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2 block">Message *</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          rows={6}
                          className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-sm text-white outline-none transition-all focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 placeholder:text-white/15 resize-none"
                          placeholder="Tell us what's on your mind..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 h-14 rounded-2xl bg-saffron text-white font-black uppercase tracking-[0.15em] text-xs hover:bg-saffron/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-saffron/20"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VidhiSahayak />
    </div>
  );
};

export default ContactPage;
