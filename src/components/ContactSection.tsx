import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Mail, Globe, Github, Linkedin, MapPin } from "lucide-react";

const contacts = [
  { labelKey: "Email", value: "connect@adhikar.in", href: "mailto:connect@adhikar.in", icon: Mail },
  { labelKey: "Website", value: "adhikar.lawbridge.in", href: "https://adhikar.lawbridge.in", icon: Globe },
  { labelKey: "GitHub", value: "github.com/Satwik-Singh6002", href: "https://github.com/Satwik-Singh6002", icon: Github },
  { labelKey: "LinkedIn", value: "linkedin.com/company/lawbridge-india", href: "https://www.linkedin.com/", icon: Linkedin },
];

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-16 sm:py-20 border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,159,28,0.03),_transparent_50%)]" />
      <div className="container relative z-10">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron/[0.08] backdrop-blur-sm mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-saffron">{t("contact.sectionLabel")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">{t("contact.title")}</h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              {t("contact.description")}
            </p>
          </div>
          <div className="glassy-card rounded-3xl p-6 border-saffron/20">
            <div className="flex items-center gap-3 text-white/70">
              <MapPin className="w-4 h-4 text-saffron" />
              <span className="text-sm font-medium">{t("contact.location")}</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c, idx) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={c.labelKey} delay={idx * 70} className="spotlight-card rounded-3xl p-7 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-115 transition-transform duration-500">
                  <Icon className="w-5 h-5 text-saffron" />
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  {c.labelKey}
                </div>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-white font-bold text-sm hover:text-saffron transition-colors break-words mt-auto"
                >
                  {c.value}
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
