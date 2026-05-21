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
  { name: "National Commission for Women", url: "https://ncwapps.nic.in", desc: "Register complaints for violence against women" },
  { name: "CPGRAMS", url: "https://pgportal.gov.in", desc: "Public Grievance Redressal Mechanism" },
  { name: "India Code", url: "https://www.indiacode.nic.in", desc: "Digital repository of all Central/State Acts" },
];

export const GovernmentPortalsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-[#0a0a0a] relative overflow-hidden" id="portals">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container px-4 sm:px-0">
        <ScrollReveal className="text-center mb-16">
          <p className="text-saffron font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">{t("portals.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("portals.title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("portals.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-medium leading-relaxed">{t("portals.description")}</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portals.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 60}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl p-7 transition-all duration-500 border border-white/[0.06] bg-white/[0.02] hover:border-saffron/20 hover:-translate-y-1 h-full overflow-hidden relative"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mb-5 group-hover:bg-saffron/10 transition-colors shadow-inner">
                  <ExternalLink className="w-5 h-5 text-saffron opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-saffron transition-colors mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{p.desc}</p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-saffron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  {t("portals.visitPortal")} <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
