import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useState } from "react";

const nationalData = [
  { year: "2018", rape: 33977, murder: 29017, cyber: 21796, kidnapping: 105036 },
  { year: "2019", rape: 32033, murder: 28918, cyber: 44546, kidnapping: 105037 },
  { year: "2020", rape: 28046, murder: 29193, cyber: 50035, kidnapping: 88590 },
  { year: "2021", rape: 31677, murder: 29272, cyber: 52974, kidnapping: 101707 },
  { year: "2022", rape: 31516, murder: 28522, cyber: 65893, kidnapping: 107089 },
];

const stateData: Record<string, typeof nationalData> = {
  "Uttar Pradesh": [
    { year: "2018", rape: 3946, murder: 4325, cyber: 1874, kidnapping: 18235 },
    { year: "2019", rape: 3065, murder: 4053, cyber: 3428, kidnapping: 17034 },
    { year: "2020", rape: 2769, murder: 3779, cyber: 4015, kidnapping: 14587 },
    { year: "2021", rape: 2845, murder: 3832, cyber: 5124, kidnapping: 15678 },
    { year: "2022", rape: 2921, murder: 3614, cyber: 6250, kidnapping: 16120 },
  ],
  "Maharashtra": [
    { year: "2018", rape: 2387, murder: 2689, cyber: 3511, kidnapping: 7456 },
    { year: "2019", rape: 2298, murder: 2568, cyber: 5562, kidnapping: 7120 },
    { year: "2020", rape: 1945, murder: 2410, cyber: 6235, kidnapping: 5890 },
    { year: "2021", rape: 2156, murder: 2478, cyber: 7120, kidnapping: 6340 },
    { year: "2022", rape: 2245, murder: 2356, cyber: 8910, kidnapping: 6780 },
  ],
  "Delhi": [
    { year: "2018", rape: 1215, murder: 478, cyber: 2750, kidnapping: 4350 },
    { year: "2019", rape: 1231, murder: 512, cyber: 3890, kidnapping: 4120 },
    { year: "2020", rape: 998, murder: 467, cyber: 4530, kidnapping: 3456 },
    { year: "2021", rape: 1087, murder: 489, cyber: 5120, kidnapping: 3780 },
    { year: "2022", rape: 1145, murder: 501, cyber: 6340, kidnapping: 3920 },
  ],
};

const states = ["National", "Uttar Pradesh", "Maharashtra", "Delhi"];

export const AnalyticsSection = () => {
  const { t } = useTranslation();
  const [selectedState, setSelectedState] = useState("National");
  const data = selectedState === "National" ? nationalData : stateData[selectedState];

  return (
    <section className="py-24 bg-cream" id="analytics">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("analytics.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">{t("analytics.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("analytics.description")}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {states.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedState(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-[0.97] ${
                  selectedState === s
                    ? "bg-navy text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {s === "National" ? t("analytics.national") : s}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-1">{t("analytics.casesByCategory")}</h3>
              <p className="text-xs text-muted-foreground mb-6">2018–2022 · {selectedState === "National" ? t("analytics.national") : selectedState}</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
                  <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(220 15% 90%)", fontSize: "13px" }} />
                  <Bar dataKey="rape" fill="hsl(0 72% 51%)" radius={[3, 3, 0, 0]} name="Rape" />
                  <Bar dataKey="murder" fill="hsl(220 45% 20%)" radius={[3, 3, 0, 0]} name="Murder" />
                  <Bar dataKey="cyber" fill="hsl(35 80% 52%)" radius={[3, 3, 0, 0]} name="Cybercrime" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-1">{t("analytics.kidnappingTrend")}</h3>
              <p className="text-xs text-muted-foreground mb-6">2018–2022 · {selectedState === "National" ? t("analytics.national") : selectedState}</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
                  <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(220 15% 90%)", fontSize: "13px" }} />
                  <Line type="monotone" dataKey="kidnapping" stroke="hsl(35 80% 52%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(35 80% 52%)" }} name="Kidnapping" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
