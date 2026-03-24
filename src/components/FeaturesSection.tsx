import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import {
  Scale, Shield, FileText, Users, MapPin, BarChart3,
  MessageSquare, ExternalLink
} from "lucide-react";

const featureKeys = [
  { key: "legalDb", icon: FileText, color: "bg-saffron-pale text-saffron" },
  { key: "caseRepo", icon: Scale, color: "bg-green-india-pale text-green-india" },
  { key: "aiAssistant", icon: MessageSquare, color: "bg-saffron-pale text-saffron" },
  { key: "crimeAnalytics", icon: BarChart3, color: "bg-green-india-pale text-green-india" },
  { key: "advocateDir", icon: Users, color: "bg-saffron-pale text-saffron" },
  { key: "policeLocator", icon: MapPin, color: "bg-green-india-pale text-green-india" },
  { key: "knowRights", icon: Shield, color: "bg-saffron-pale text-saffron" },
  { key: "govPortals", icon: ExternalLink, color: "bg-green-india-pale text-green-india" },
];

export const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-cream" id="features">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("features.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t("features.description")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureKeys.map((f, i) => (
            <ScrollReveal key={f.key} delay={i * 70}>
              <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(`features.items.${f.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`features.items.${f.key}.desc`)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
