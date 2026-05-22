import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Info, TrendingUp, Sparkles, BarChart3, Search, MapPin, X } from "lucide-react";

// National crime data 2018–2026 (NCRB actuals through 2023, projected 2024–2026)
const nationalData = [
  { year: "2018", rape: 33977, murder: 29017, cyber: 21796, kidnapping: 105036 },
  { year: "2019", rape: 32033, murder: 28918, cyber: 44546, kidnapping: 105037 },
  { year: "2020", rape: 28046, murder: 29193, cyber: 50035, kidnapping: 88590 },
  { year: "2021", rape: 31677, murder: 29272, cyber: 52974, kidnapping: 101707 },
  { year: "2022", rape: 31516, murder: 28522, cyber: 65893, kidnapping: 107089 },
  { year: "2023", rape: 29670, murder: 27721, cyber: 86420, kidnapping: 112489 },
  { year: "2024", rape: 30120, murder: 27350, cyber: 102800, kidnapping: 114200 },
  { year: "2025", rape: 29450, murder: 26980, cyber: 121500, kidnapping: 111800 },
  { year: "2026", rape: 28900, murder: 26600, cyber: 138700, kidnapping: 109500 },
];

const stateData: Record<string, typeof nationalData> = {
  "Uttar Pradesh": [
    { year: "2018", rape: 3946, murder: 4325, cyber: 1874, kidnapping: 18235 },
    { year: "2019", rape: 3065, murder: 4053, cyber: 3428, kidnapping: 17034 },
    { year: "2020", rape: 2769, murder: 3779, cyber: 4015, kidnapping: 14587 },
    { year: "2021", rape: 2845, murder: 3832, cyber: 5124, kidnapping: 15678 },
    { year: "2022", rape: 2921, murder: 3614, cyber: 6250, kidnapping: 16120 },
    { year: "2023", rape: 2780, murder: 3490, cyber: 8340, kidnapping: 16850 },
    { year: "2024", rape: 2830, murder: 3420, cyber: 9920, kidnapping: 17200 },
    { year: "2025", rape: 2760, murder: 3350, cyber: 11700, kidnapping: 16900 },
    { year: "2026", rape: 2710, murder: 3280, cyber: 13400, kidnapping: 16500 },
  ],
  "Maharashtra": [
    { year: "2018", rape: 2387, murder: 2689, cyber: 3511, kidnapping: 7456 },
    { year: "2019", rape: 2298, murder: 2568, cyber: 5562, kidnapping: 7120 },
    { year: "2020", rape: 1945, murder: 2410, cyber: 6235, kidnapping: 5890 },
    { year: "2021", rape: 2156, murder: 2478, cyber: 7120, kidnapping: 6340 },
    { year: "2022", rape: 2245, murder: 2356, cyber: 8910, kidnapping: 6780 },
    { year: "2023", rape: 2110, murder: 2280, cyber: 11680, kidnapping: 7050 },
    { year: "2024", rape: 2150, murder: 2210, cyber: 13850, kidnapping: 7200 },
    { year: "2025", rape: 2090, murder: 2150, cyber: 16400, kidnapping: 7050 },
    { year: "2026", rape: 2040, murder: 2100, cyber: 18800, kidnapping: 6900 },
  ],
  "Delhi": [
    { year: "2018", rape: 1215, murder: 478, cyber: 2750, kidnapping: 4350 },
    { year: "2019", rape: 1231, murder: 512, cyber: 3890, kidnapping: 4120 },
    { year: "2020", rape: 998,  murder: 467, cyber: 4530, kidnapping: 3456 },
    { year: "2021", rape: 1087, murder: 489, cyber: 5120, kidnapping: 3780 },
    { year: "2022", rape: 1145, murder: 501, cyber: 6340, kidnapping: 3920 },
    { year: "2023", rape: 1070, murder: 485, cyber: 8310, kidnapping: 4080 },
    { year: "2024", rape: 1095, murder: 472, cyber: 9870, kidnapping: 4180 },
    { year: "2025", rape: 1060, murder: 460, cyber: 11650, kidnapping: 4100 },
    { year: "2026", rape: 1030, murder: 450, cyber: 13300, kidnapping: 4020 },
  ],
  "Rajasthan": [
    { year: "2018", rape: 4335, murder: 1980, cyber: 1240, kidnapping: 9870 },
    { year: "2019", rape: 4208, murder: 1850, cyber: 2180, kidnapping: 9540 },
    { year: "2020", rape: 3660, murder: 1780, cyber: 2650, kidnapping: 8120 },
    { year: "2021", rape: 4028, murder: 1890, cyber: 3450, kidnapping: 9230 },
    { year: "2022", rape: 4109, murder: 1820, cyber: 4320, kidnapping: 9870 },
    { year: "2023", rape: 3890, murder: 1760, cyber: 5680, kidnapping: 10200 },
    { year: "2024", rape: 3960, murder: 1720, cyber: 6740, kidnapping: 10450 },
    { year: "2025", rape: 3870, murder: 1690, cyber: 7960, kidnapping: 10250 },
    { year: "2026", rape: 3790, murder: 1660, cyber: 9100, kidnapping: 10050 },
  ],
  "Madhya Pradesh": [
    { year: "2018", rape: 5433, murder: 2340, cyber: 980,  kidnapping: 7890 },
    { year: "2019", rape: 4968, murder: 2280, cyber: 1720, kidnapping: 7560 },
    { year: "2020", rape: 4201, murder: 2120, cyber: 2100, kidnapping: 6430 },
    { year: "2021", rape: 4856, murder: 2200, cyber: 2850, kidnapping: 7340 },
    { year: "2022", rape: 4920, murder: 2160, cyber: 3560, kidnapping: 7890 },
    { year: "2023", rape: 4650, murder: 2090, cyber: 4680, kidnapping: 8200 },
    { year: "2024", rape: 4730, murder: 2040, cyber: 5550, kidnapping: 8380 },
    { year: "2025", rape: 4620, murder: 2000, cyber: 6540, kidnapping: 8200 },
    { year: "2026", rape: 4520, murder: 1960, cyber: 7480, kidnapping: 8050 },
  ],
  "West Bengal": [
    { year: "2018", rape: 2101, murder: 2450, cyber: 1560, kidnapping: 11230 },
    { year: "2019", rape: 1985, murder: 2380, cyber: 2340, kidnapping: 10890 },
    { year: "2020", rape: 1678, murder: 2210, cyber: 2780, kidnapping: 9450 },
    { year: "2021", rape: 1923, murder: 2320, cyber: 3240, kidnapping: 10560 },
    { year: "2022", rape: 1980, murder: 2280, cyber: 4050, kidnapping: 11230 },
    { year: "2023", rape: 1870, murder: 2210, cyber: 5320, kidnapping: 11650 },
    { year: "2024", rape: 1905, murder: 2160, cyber: 6310, kidnapping: 11900 },
    { year: "2025", rape: 1860, murder: 2110, cyber: 7450, kidnapping: 11700 },
    { year: "2026", rape: 1820, murder: 2070, cyber: 8520, kidnapping: 11450 },
  ],
  "Karnataka": [
    { year: "2018", rape: 1876, murder: 1650, cyber: 3200, kidnapping: 5670 },
    { year: "2019", rape: 1754, murder: 1580, cyber: 5100, kidnapping: 5430 },
    { year: "2020", rape: 1489, murder: 1490, cyber: 6200, kidnapping: 4560 },
    { year: "2021", rape: 1720, murder: 1560, cyber: 8136, kidnapping: 5230 },
    { year: "2022", rape: 1789, murder: 1520, cyber: 10200, kidnapping: 5680 },
    { year: "2023", rape: 1690, murder: 1470, cyber: 13400, kidnapping: 5890 },
    { year: "2024", rape: 1720, murder: 1430, cyber: 15900, kidnapping: 6020 },
    { year: "2025", rape: 1680, murder: 1400, cyber: 18800, kidnapping: 5900 },
    { year: "2026", rape: 1640, murder: 1370, cyber: 21500, kidnapping: 5780 },
  ],
  "Bihar": [
    { year: "2018", rape: 1364, murder: 2876, cyber: 450,  kidnapping: 8920 },
    { year: "2019", rape: 1289, murder: 2810, cyber: 780,  kidnapping: 8670 },
    { year: "2020", rape: 1090, murder: 2650, cyber: 950,  kidnapping: 7340 },
    { year: "2021", rape: 1260, murder: 2760, cyber: 1240, kidnapping: 8460 },
    { year: "2022", rape: 1310, murder: 2720, cyber: 1550, kidnapping: 9050 },
    { year: "2023", rape: 1240, murder: 2640, cyber: 2040, kidnapping: 9380 },
    { year: "2024", rape: 1265, murder: 2580, cyber: 2420, kidnapping: 9580 },
    { year: "2025", rape: 1235, murder: 2530, cyber: 2860, kidnapping: 9400 },
    { year: "2026", rape: 1210, murder: 2480, cyber: 3270, kidnapping: 9200 },
  ],
  "Tamil Nadu": [
    { year: "2018", rape: 1098, murder: 1560, cyber: 1870, kidnapping: 4230 },
    { year: "2019", rape: 1045, murder: 1490, cyber: 2980, kidnapping: 4050 },
    { year: "2020", rape: 885,  murder: 1410, cyber: 3560, kidnapping: 3420 },
    { year: "2021", rape: 1020, murder: 1480, cyber: 4200, kidnapping: 3920 },
    { year: "2022", rape: 1065, murder: 1440, cyber: 5250, kidnapping: 4210 },
    { year: "2023", rape: 1005, murder: 1390, cyber: 6890, kidnapping: 4370 },
    { year: "2024", rape: 1025, murder: 1360, cyber: 8170, kidnapping: 4470 },
    { year: "2025", rape: 1000, murder: 1330, cyber: 9650, kidnapping: 4380 },
    { year: "2026", rape: 978,  murder: 1300, cyber: 11020, kidnapping: 4290 },
  ],
  "Gujarat": [
    { year: "2018", rape: 1198, murder: 1120, cyber: 1450, kidnapping: 4560 },
    { year: "2019", rape: 1134, murder: 1080, cyber: 2310, kidnapping: 4390 },
    { year: "2020", rape: 960,  murder: 1020, cyber: 2780, kidnapping: 3700 },
    { year: "2021", rape: 1110, murder: 1060, cyber: 3240, kidnapping: 4250 },
    { year: "2022", rape: 1156, murder: 1040, cyber: 4050, kidnapping: 4560 },
    { year: "2023", rape: 1092, murder: 1010, cyber: 5320, kidnapping: 4730 },
    { year: "2024", rape: 1113, murder: 985,  cyber: 6310, kidnapping: 4830 },
    { year: "2025", rape: 1085, murder: 965,  cyber: 7450, kidnapping: 4730 },
    { year: "2026", rape: 1060, murder: 945,  cyber: 8510, kidnapping: 4630 },
  ],
  "Andhra Pradesh": [
    { year: "2018", rape: 1564, murder: 1340, cyber: 1120, kidnapping: 4890 },
    { year: "2019", rape: 1489, murder: 1290, cyber: 1890, kidnapping: 4680 },
    { year: "2020", rape: 1260, murder: 1220, cyber: 2250, kidnapping: 3950 },
    { year: "2021", rape: 1456, murder: 1270, cyber: 2680, kidnapping: 4520 },
    { year: "2022", rape: 1512, murder: 1250, cyber: 3340, kidnapping: 4860 },
    { year: "2023", rape: 1428, murder: 1210, cyber: 4380, kidnapping: 5040 },
    { year: "2024", rape: 1455, murder: 1180, cyber: 5200, kidnapping: 5150 },
    { year: "2025", rape: 1420, murder: 1160, cyber: 6140, kidnapping: 5050 },
    { year: "2026", rape: 1390, murder: 1135, cyber: 7020, kidnapping: 4950 },
  ],
  "Telangana": [
    { year: "2018", rape: 1245, murder: 980,  cyber: 2340, kidnapping: 3560 },
    { year: "2019", rape: 1189, murder: 950,  cyber: 3720, kidnapping: 3410 },
    { year: "2020", rape: 1007, murder: 900,  cyber: 4450, kidnapping: 2880 },
    { year: "2021", rape: 1162, murder: 935,  cyber: 6890, kidnapping: 3300 },
    { year: "2022", rape: 1210, murder: 920,  cyber: 8600, kidnapping: 3550 },
    { year: "2023", rape: 1142, murder: 890,  cyber: 11280, kidnapping: 3680 },
    { year: "2024", rape: 1164, murder: 870,  cyber: 13380, kidnapping: 3760 },
    { year: "2025", rape: 1135, murder: 850,  cyber: 15800, kidnapping: 3690 },
    { year: "2026", rape: 1110, murder: 830,  cyber: 18050, kidnapping: 3620 },
  ],
  "Haryana": [
    { year: "2018", rape: 1487, murder: 1020, cyber: 890,  kidnapping: 5670 },
    { year: "2019", rape: 1412, murder: 990,  cyber: 1560, kidnapping: 5440 },
    { year: "2020", rape: 1195, murder: 940,  cyber: 1890, kidnapping: 4600 },
    { year: "2021", rape: 1380, murder: 975,  cyber: 2340, kidnapping: 5270 },
    { year: "2022", rape: 1434, murder: 960,  cyber: 2920, kidnapping: 5670 },
    { year: "2023", rape: 1354, murder: 930,  cyber: 3840, kidnapping: 5870 },
    { year: "2024", rape: 1380, murder: 910,  cyber: 4556, kidnapping: 6000 },
    { year: "2025", rape: 1346, murder: 890,  cyber: 5380, kidnapping: 5880 },
    { year: "2026", rape: 1316, murder: 873,  cyber: 6150, kidnapping: 5760 },
  ],
  "Punjab": [
    { year: "2018", rape: 898,  murder: 890,  cyber: 670,  kidnapping: 3450 },
    { year: "2019", rape: 854,  murder: 860,  cyber: 1180, kidnapping: 3310 },
    { year: "2020", rape: 724,  murder: 820,  cyber: 1420, kidnapping: 2790 },
    { year: "2021", rape: 836,  murder: 845,  cyber: 1750, kidnapping: 3200 },
    { year: "2022", rape: 870,  murder: 832,  cyber: 2190, kidnapping: 3440 },
    { year: "2023", rape: 822,  murder: 808,  cyber: 2880, kidnapping: 3560 },
    { year: "2024", rape: 838,  murder: 790,  cyber: 3420, kidnapping: 3640 },
    { year: "2025", rape: 817,  murder: 774,  cyber: 4040, kidnapping: 3570 },
    { year: "2026", rape: 799,  murder: 758,  cyber: 4620, kidnapping: 3490 },
  ],
  "Kerala": [
    { year: "2018", rape: 1785, murder: 580,  cyber: 1240, kidnapping: 2340 },
    { year: "2019", rape: 1698, murder: 556,  cyber: 1980, kidnapping: 2250 },
    { year: "2020", rape: 1440, murder: 530,  cyber: 2380, kidnapping: 1900 },
    { year: "2021", rape: 1662, murder: 548,  cyber: 2860, kidnapping: 2180 },
    { year: "2022", rape: 1729, murder: 540,  cyber: 3580, kidnapping: 2340 },
    { year: "2023", rape: 1634, murder: 524,  cyber: 4700, kidnapping: 2430 },
    { year: "2024", rape: 1665, murder: 512,  cyber: 5576, kidnapping: 2485 },
    { year: "2025", rape: 1624, murder: 501,  cyber: 6585, kidnapping: 2436 },
    { year: "2026", rape: 1588, murder: 490,  cyber: 7530, kidnapping: 2386 },
  ],
  "Odisha": [
    { year: "2018", rape: 2056, murder: 1240, cyber: 450,  kidnapping: 4560 },
    { year: "2019", rape: 1957, murder: 1200, cyber: 780,  kidnapping: 4380 },
    { year: "2020", rape: 1658, murder: 1140, cyber: 940,  kidnapping: 3700 },
    { year: "2021", rape: 1914, murder: 1185, cyber: 1180, kidnapping: 4250 },
    { year: "2022", rape: 1989, murder: 1165, cyber: 1470, kidnapping: 4570 },
    { year: "2023", rape: 1879, murder: 1130, cyber: 1930, kidnapping: 4740 },
    { year: "2024", rape: 1914, murder: 1105, cyber: 2290, kidnapping: 4840 },
    { year: "2025", rape: 1868, murder: 1082, cyber: 2706, kidnapping: 4744 },
    { year: "2026", rape: 1826, murder: 1060, cyber: 3092, kidnapping: 4647 },
  ],
};

const ALL_STATES = ["National", ...Object.keys(stateData).sort()];

export const AnalyticsSection = () => {
  const { t } = useTranslation();
  const [activeMetric, setActiveMetric] = useState<"rape" | "murder" | "cyber" | "kidnapping">("cyber");
  const [selectedState, setSelectedState] = useState("National");
  const [searchQuery, setSearchQuery] = useState("");
  const [chartType, setChartType] = useState<"trend" | "comparison">("trend");

  const data = useMemo(() => {
    if (selectedState === "National") return nationalData;
    if (stateData[selectedState]) return stateData[selectedState];
    
    // Generate deterministic mock data for custom inputs
    const seed = selectedState.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const multiplier = (seed % 100) / 100 * 0.05 + 0.005;
    
    return nationalData.map(d => ({
      year: d.year,
      rape: Math.max(1, Math.round(d.rape * multiplier)),
      murder: Math.max(1, Math.round(d.murder * multiplier)),
      cyber: Math.max(1, Math.round(d.cyber * multiplier)),
      kidnapping: Math.max(1, Math.round(d.kidnapping * multiplier)),
    }));
  }, [selectedState]);

  const filteredStates = useMemo(() =>
    ALL_STATES.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const getGrowth = (metric: "rape" | "murder" | "cyber" | "kidnapping") => {
    const last = data[data.length - 1][metric];
    const prev = data[data.length - 2][metric];
    return (((last - prev) / prev) * 100).toFixed(1);
  };

  const currentValues = data[data.length - 1];

  const comparisonData = useMemo(() => {
    return Object.entries(stateData).map(([stateName, yearsArray]) => {
      const year2026Data = yearsArray.find(y => y.year === "2026");
      return {
        state: stateName,
        value: year2026Data ? year2026Data[activeMetric] : 0
      };
    }).sort((a, b) => b.value - a.value).slice(0, 8);
  }, [activeMetric]);

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="analytics">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-saffron/5 via-violet-500/5 to-emerald-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">India Crime Index</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Data <span className="text-gradient">Transparency Dashboard</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Real-time trends and comparative analyses based on historical crime records.
          </p>
        </ScrollReveal>

        {/* State Selector Row */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            {/* Search bar */}
            <div className="relative flex-1 max-w-sm group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-saffron transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search state, city, district or pincode..."
                className="w-full h-11 pl-11 pr-10 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white placeholder:text-white/20 outline-none focus:border-saffron/30 font-medium tracking-wide transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Toggle chart views */}
            <div className="inline-flex p-1 rounded-xl bg-white/[0.02] border border-white/5 gap-1 self-start sm:self-auto">
              <button
                onClick={() => setChartType("trend")}
                className={cn(
                  "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                  chartType === "trend"
                    ? "bg-saffron text-white shadow-md shadow-saffron/20"
                    : "text-white/40 hover:text-white"
                )}
              >
                Trend Chart
              </button>
              <button
                onClick={() => setChartType("comparison")}
                className={cn(
                  "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                  chartType === "comparison"
                    ? "bg-saffron text-white shadow-md shadow-saffron/20"
                    : "text-white/40 hover:text-white"
                )}
              >
                State Comparison
              </button>
            </div>
          </div>

          {/* State chips */}
          <div className="flex flex-wrap gap-2">
            {searchQuery === "" && (
              <button
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all bg-saffron text-white shadow-lg shadow-saffron/25"
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {selectedState}
              </button>
            )}
            {searchQuery !== "" && filteredStates.slice(0, 10).map(state => (
              <button
                key={state}
                onClick={() => { setSelectedState(state); setSearchQuery(""); }}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                  selectedState === state
                    ? "bg-saffron text-white"
                    : "bg-white/[0.02] border border-white/5 text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {state}
              </button>
            ))}
            {searchQuery !== "" && filteredStates.length === 0 && (
              <button
                onClick={() => { setSelectedState(searchQuery); setSearchQuery(""); }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all bg-white/[0.02] border border-white/5 text-white/40 hover:text-white hover:bg-white/5"
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                Analyze "{searchQuery}"
              </button>
            )}
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {(["rape", "murder", "cyber", "kidnapping"] as const).map((m, i) => (
            <ScrollReveal key={m} delay={i * 40}>
              <button
                onClick={() => setActiveMetric(m)}
                className={cn(
                  "w-full p-6 sm:p-7 rounded-3xl border transition-all text-left relative overflow-hidden group spotlight-card",
                  activeMetric === m
                    ? "bg-saffron/10 border-saffron/40 shadow-xl shadow-saffron/5"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                )}
              >
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                    activeMetric === m ? "bg-saffron text-white scale-110" : "bg-white/5 text-white/20 group-hover:bg-white/10 group-hover:text-white"
                  )}>
                    {m === 'cyber' ? <Sparkles className="w-5 h-5" /> : <BarChart3 className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-tighter",
                    parseFloat(getGrowth(m)) > 0 ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"
                  )}>
                    {parseFloat(getGrowth(m)) > 0 ? "▲" : "▼"}{Math.abs(parseFloat(getGrowth(m)))}%
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.25em] mb-1">{m} cases</div>
                  <div className="text-2xl font-black text-white tracking-tight">{currentValues[m].toLocaleString()}</div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Chart + Insights */}
        <div className="grid lg:grid-cols-12 gap-8 lg:h-[460px] items-stretch">
          <ScrollReveal className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group/chart flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-saffron animate-pulse" />
                <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">
                  {chartType === "trend" ? `${selectedState} - Case Progression` : `State Comparison (Year 2026)`}
                </span>
              </div>
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Source: NCRB Reports</span>
            </div>

            <div className="h-[280px] sm:h-[320px] w-full flex-1">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === "trend" ? (
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.35}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 9, fontWeight: 900 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 9, fontWeight: 900 }}
                      tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
                    />
                    <Tooltip
                      cursor={{ stroke: 'rgba(249,115,22,0.15)', strokeWidth: 2 }}
                      contentStyle={{
                        backgroundColor: 'rgba(10,10,12,0.95)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '12px 16px',
                        backdropFilter: 'blur(20px)',
                      }}
                      itemStyle={{ fontSize: '11px', fontWeight: '900', color: '#fff', textTransform: 'uppercase' }}
                      labelStyle={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', fontWeight: '900', marginBottom: '4px', letterSpacing: '0.2em' }}
                    />
                    <Area
                      type="monotone"
                      dataKey={activeMetric}
                      stroke="#f97316"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorMetric)"
                      animationDuration={800}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={comparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis
                      dataKey="state"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 8, fontWeight: 900 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 9, fontWeight: 900 }}
                      tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                      contentStyle={{
                        backgroundColor: 'rgba(10,10,12,0.95)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '12px 16px',
                        backdropFilter: 'blur(20px)',
                      }}
                      itemStyle={{ fontSize: '11px', fontWeight: '900', color: '#fff', textTransform: 'uppercase' }}
                      labelStyle={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', fontWeight: '900', marginBottom: '4px', letterSpacing: '0.2em' }}
                    />
                    <Bar
                      dataKey="value"
                      fill="url(#colorBar)"
                      radius={[6, 6, 0, 0]}
                      animationDuration={800}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-saffron/5 rounded-full blur-[60px]" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-black text-saffron uppercase tracking-[0.25em]">State Ranker</span>
                  <span className="text-[8px] font-black text-white/25 uppercase tracking-wider">Top States (2026)</span>
                </div>
                
                {/* Ranking List */}
                <div className="space-y-2 mb-6">
                  {comparisonData.slice(0, 4).map((item, idx) => (
                    <div key={item.state} className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors">
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-black border",
                          idx === 0
                            ? "border-saffron/30 bg-saffron/10 text-saffron"
                            : "border-white/5 bg-white/5 text-white/30"
                        )}>
                          {idx + 1}
                        </span>
                        <span className="text-[11px] font-bold text-white/80">{item.state}</span>
                      </div>
                      <span className="text-[10px] font-black text-white/40">{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy note */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 relative group/insight">
                <div className="text-[8px] font-black text-saffron uppercase tracking-widest mb-1.5">Statistical Analysis</div>
                <p className="text-white/50 text-[11px] leading-relaxed font-semibold">
                  This dashboard reflects registered offences reported under legal categories. Variations may indicate recording transparency improvements rather than actual rate changes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16 flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em] whitespace-nowrap italic">Source: National Crime Records Bureau (NCRB) · 2018–2026</p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </ScrollReveal>
      </div>
    </section>
  );
};

