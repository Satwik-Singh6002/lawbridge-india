import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Scale, Shield, FileText, Users, MapPin, BarChart3,
  MessageSquare, ExternalLink
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Complete Legal Database",
    description: "Full texts of every central and major state act, searchable by section, keyword, or topic.",
    color: "bg-saffron-pale text-saffron",
  },
  {
    icon: Scale,
    title: "Case Repository",
    description: "Landmark judgments, punishments, and linked news for major case types across India.",
    color: "bg-green-india-pale text-green-india",
  },
  {
    icon: MessageSquare,
    title: "AI Legal Assistant",
    description: "Vidhi Sahayak explains complex laws in simple language, in Hindi, English, and 10+ languages.",
    color: "bg-saffron-pale text-saffron",
  },
  {
    icon: BarChart3,
    title: "Crime Analytics",
    description: "National and state-wise case trend graphs sourced from NCRB data, filterable by offence type.",
    color: "bg-green-india-pale text-green-india",
  },
  {
    icon: Users,
    title: "Advocate Directory",
    description: "Find verified advocates by location, language, specialization, and fee range.",
    color: "bg-saffron-pale text-saffron",
  },
  {
    icon: MapPin,
    title: "Police & Court Locator",
    description: "Locate nearby police stations, women's help desks, and courts on an interactive map.",
    color: "bg-green-india-pale text-green-india",
  },
  {
    icon: Shield,
    title: "Know Your Rights",
    description: "Interactive guides on fundamental rights, RTI filing, FIR procedures, and more.",
    color: "bg-saffron-pale text-saffron",
  },
  {
    icon: ExternalLink,
    title: "Government Portals",
    description: "Direct links to NHRC, eCourts, Cyber Crime Portal, Consumer Helpline, and more.",
    color: "bg-green-india-pale text-green-india",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-cream" id="features">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Platform Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Everything You Need for Legal Empowerment
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From understanding laws to finding help — one unified platform for every Indian citizen.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 70}>
              <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
