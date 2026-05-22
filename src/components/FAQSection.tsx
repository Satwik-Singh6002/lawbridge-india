import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Database, Info, Scale, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface TrustItem {
  title: string;
  description: string;
}

const trustIcons = [Scale, Database, ShieldCheck, Info];

export const FAQSection = () => {
  const { t } = useTranslation();
  
  // Load FAQs
  const faqs = t("faq.items", { returnObjects: true }) as FaqItem[];
  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  // Load Trust Items
  const trustItems = t("trust.items", { returnObjects: true }) as TrustItem[];
  const safeTrustItems = Array.isArray(trustItems) ? trustItems : [];

  return (
    <section id="faq" className="relative py-20 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,159,28,0.03),_transparent_50%)] pointer-events-none" />
      
      <div className="container relative z-10 max-w-6xl">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron/[0.08] backdrop-blur-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-saffron" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">FAQ &amp; Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Trust &amp; <span className="text-gradient">Common Questions</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Everything you need to know about the ADHIKAR platform's safety guidelines, source publications, and operations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* FAQ Column (Left on desktop) */}
          <ScrollReveal className="lg:col-span-7">
            <div className="spotlight-card rounded-3xl p-6 sm:p-8 border border-white/5 bg-white/[0.01]">
              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-saffron/80" />
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {safeFaqs.map((f, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-white/10 last:border-none">
                    <AccordionTrigger className="text-left text-white font-bold hover:no-underline py-4 text-sm sm:text-base transition-colors hover:text-saffron">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 leading-relaxed text-sm pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>

          {/* Trust & Safety Column (Right on desktop) */}
          <ScrollReveal className="lg:col-span-5 flex flex-col gap-6">
            {/* Safety posture disclaimer box */}
            <div className="glassy-card rounded-3xl p-6 border border-saffron/20 shadow-[0_0_30px_rgba(255,159,28,0.04)] bg-saffron/[0.02]">
              <h4 className="text-saffron font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-saffron" />
                Responsible Use Notice
              </h4>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {t("trust.tip")}
              </p>
            </div>

            {/* List of trust factors */}
            <div className="spotlight-card rounded-3xl p-6 sm:p-8 border border-white/5 bg-white/[0.01]">
              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-saffron/80" />
                Platform Safety Posture
              </h3>
              <div className="space-y-6">
                {safeTrustItems.map((it, idx) => {
                  const Icon = trustIcons[idx] || Scale;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-saffron" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white mb-1 tracking-tight">{it.title}</h4>
                        <p className="text-xs text-white/50 leading-relaxed">{it.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
