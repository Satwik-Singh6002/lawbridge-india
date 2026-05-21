import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

export const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as FaqItem[];
  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  return (
    <section id="faq" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_45%)]" />
      <div className="container relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">{t("faq.sectionLabel")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">{t("faq.title")}</h2>
          <p className="text-white/45 text-base sm:text-lg leading-relaxed">
            {t("faq.description")}
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="glassy-card rounded-3xl p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {safeFaqs.map((f, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-white font-bold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/55 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
