import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { ScrollReveal } from "@/components/ScrollReveal";
import { categoryAnalyticsData, indianStates } from "@/data/categoryAnalytics";
import { BarChart3, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CategoryAnalyticsGraphProps {
  slug: string;
  label: string;
}

export const CategoryAnalyticsGraph = ({ slug, label }: CategoryAnalyticsGraphProps) => {
  const [selectedRegion, setSelectedRegion] = useState("national");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const categoryData = categoryAnalyticsData[slug];
  if (!categoryData) return null;

  const availableStates = useMemo(() => {
    return Object.keys(categoryData).filter((k) => k !== "national");
  }, [categoryData]);

  const filteredStates = useMemo(() => {
    if (!searchQuery) return availableStates;
    return availableStates.filter((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, availableStates]);

  const data = selectedRegion === "national" ? categoryData.national : categoryData[selectedRegion];
  const regionLabel = selectedRegion === "national" ? "National" : selectedRegion;

  if (!data) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-6 h-6 text-saffron" />
            <h2 className="text-2xl font-bold text-foreground">
              {label} – Case Analytics (2021–2026)
            </h2>
          </div>
        </ScrollReveal>

        {/* Region selector */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => {
                setSelectedRegion("national");
                setSearchQuery("");
                setShowDropdown(false);
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedRegion === "national"
                  ? "bg-navy text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              National
            </button>

            <div className="relative flex-1 max-w-xs">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search state..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  className="pl-9 pr-8"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setShowDropdown(false);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {showDropdown && (
                <div className="absolute z-20 top-full mt-1 w-full bg-card border border-border rounded-lg shadow-lg max-h-56 overflow-y-auto">
                  {filteredStates.length === 0 ? (
                    <p className="px-4 py-3 text-sm text-muted-foreground">No data available for this state</p>
                  ) : (
                    filteredStates.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedRegion(state);
                          setSearchQuery(state);
                          setShowDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                          selectedRegion === state ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {state}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {selectedRegion !== "national" && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-saffron/10 text-saffron rounded-lg text-sm font-medium">
                Showing: {regionLabel}
              </span>
            )}
          </div>
        </ScrollReveal>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-1">Cases Registered vs Convictions</h3>
              <p className="text-xs text-muted-foreground mb-6">2021–2026 · {regionLabel}</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
                  <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v: number) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v))}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid hsl(220 15% 90%)",
                      fontSize: "13px",
                    }}
                    formatter={(value: number) => value.toLocaleString()}
                  />
                  <Legend />
                  <Bar dataKey="cases" fill="hsl(220 45% 20%)" radius={[3, 3, 0, 0]} name="Cases Registered" />
                  <Bar dataKey="convictions" fill="hsl(142 60% 40%)" radius={[3, 3, 0, 0]} name="Convictions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-1">Case Pendency Trend</h3>
              <p className="text-xs text-muted-foreground mb-6">2021–2026 · {regionLabel}</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
                  <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v: number) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v))}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid hsl(220 15% 90%)",
                      fontSize: "13px",
                    }}
                    formatter={(value: number) => value.toLocaleString()}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pendency"
                    stroke="hsl(0 72% 51%)"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "hsl(0 72% 51%)" }}
                    name="Pending Cases"
                  />
                  <Line
                    type="monotone"
                    dataKey="cases"
                    stroke="hsl(35 80% 52%)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "hsl(35 80% 52%)" }}
                    name="Cases Registered"
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Data sourced from NCRB reports & judicial statistics. 2025–2026 figures are projected estimates.
        </p>
      </div>
    </section>
  );
};
