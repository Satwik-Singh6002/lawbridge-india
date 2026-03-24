import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

const portals = [
  { name: "National Cyber Crime Portal", url: "https://cybercrime.gov.in", desc: "Report cybercrime incidents online" },
  { name: "eCourts Services", url: "https://ecourts.gov.in", desc: "Case status, cause lists, court orders" },
  { name: "RTI Online", url: "https://rtionline.gov.in", desc: "File Right to Information applications" },
  { name: "Consumer Helpline", url: "https://consumerhelpline.gov.in", desc: "Consumer grievance redressal" },
  { name: "NHRC India", url: "https://nhrc.nic.in", desc: "National Human Rights Commission" },
  { name: "NALSA", url: "https://nalsa.gov.in", desc: "Free legal aid for eligible citizens" },
];

export const GovernmentPortalsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-cream" id="news">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("portals.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">{t("portals.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("portals.description")}</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {portals.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 60}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm hover:shadow-md border border-border/50 transition-all active:scale-[0.98]"
              >
                <div className="w-9 h-9 rounded-lg bg-green-india-pale flex items-center justify-center shrink-0 mt-0.5">
                  <ExternalLink className="w-4 h-4 text-green-india" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-saffron transition-colors">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
