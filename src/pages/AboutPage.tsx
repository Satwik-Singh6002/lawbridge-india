import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VidhiSahayak } from "@/components/VidhiSahayak";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Scale, Shield, Users, BookOpen, Globe, Sparkles, Heart } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(35_100%_55%_/_0.05),_transparent_50%)]" />
        <div className="container relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Empowering India through <span className="text-gradient">legal awareness</span>
            </h1>
            <p className="text-white/45 text-lg leading-relaxed">
              ADHIKAR (अधिकार) means "right" in Hindi. We believe every Indian citizen deserves to understand the laws that protect them, the rights they are entitled to, and the systems designed to serve them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-saffron/10 border border-saffron/20 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-saffron" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Our Mission</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                  Bridging the gap between law &amp; the common citizen
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  India has one of the most comprehensive legal frameworks in the world, yet millions of citizens remain unaware of the laws that directly affect their lives. ADHIKAR was created to change this — by making Indian law accessible, understandable, and actionable for everyone.
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  Whether you're a student, professional, or someone seeking justice, ADHIKAR provides the knowledge you need — in your own language, powered by AI, and backed by verified legal data.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: "1,500+", desc: "Laws & Acts Covered" },
                  { icon: Users, label: "12+", desc: "Indian Languages" },
                  { icon: Globe, label: "24/7", desc: "AI Legal Assistant" },
                  { icon: Shield, label: "100%", desc: "Free & Open Access" },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="glassy-card rounded-3xl p-6 text-center hover-glow">
                      <item.icon className="w-8 h-8 text-saffron/60 mx-auto mb-4" />
                      <div className="text-2xl font-black text-white mb-1">{item.label}</div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.desc}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Our Core Values</h2>
            <p className="text-white/40 text-base">The principles that guide everything we build at ADHIKAR</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Accuracy First", desc: "Every piece of information is verified against official government sources and legal databases." },
              { icon: Globe, title: "Multilingual Access", desc: "Law shouldn't be limited by language. We provide content in 12+ Indian languages." },
              { icon: Users, title: "Citizen-Centric Design", desc: "Built for the common citizen — not lawyers. Designed for clarity and ease of navigation." },
              { icon: Heart, title: "Social Impact", desc: "ADHIKAR exists to serve. Our goal is to create measurable impact in legal literacy across India." },
              { icon: Sparkles, title: "AI-Powered Intelligence", desc: "Vidhi Sahayak AI provides instant, contextual legal guidance — making expert-level information available to all." },
              { icon: BookOpen, title: "Open Knowledge", desc: "Legal knowledge is a public good. All our content is free and openly accessible to every Indian citizen." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="h-full glassy-card rounded-3xl p-8 hover-glow transition-all">
                  <item.icon className="w-8 h-8 text-saffron mb-6" />
                  <h3 className="text-lg font-black text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="rounded-[2.5rem] bg-amber-500/5 border border-amber-500/20 p-10 text-center">
            <p className="text-base font-bold text-amber-500/80 leading-relaxed">
              ADHIKAR is an educational platform and does not provide professional legal advice. For specific legal matters, please consult a qualified advocate.
            </p>
            <p className="text-[10px] font-black text-amber-500/30 uppercase tracking-[0.3em] mt-4">Educational Platform Disclaimer</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <VidhiSahayak />
  </div>
);

export default AboutPage;
