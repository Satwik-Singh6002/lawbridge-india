import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Lightbulb, ChevronLeft, ChevronRight, Share2, Copy, Check } from "lucide-react";

interface TipItem {
  tip: string;
  category: string;
  article: string;
  icon: string;
}

const getDailyIndex = (total: number) => {
  const start = new Date("2024-01-01").getTime();
  const now = new Date().getTime();
  const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return dayDiff % total;
};

export const DailyLegalTipSection = () => {
  const { t } = useTranslation();
  const tips = t("dailyTip.tips", { returnObjects: true }) as TipItem[];
  const safeTips = Array.isArray(tips) ? tips : [];

  const [currentIndex, setCurrentIndex] = useState(getDailyIndex(safeTips.length || 1));
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (dir: "prev" | "next") => {
    if (isAnimating || safeTips.length === 0) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((i) =>
        dir === "next"
          ? (i + 1) % safeTips.length
          : (i - 1 + safeTips.length) % safeTips.length
      );
      setIsAnimating(false);
    }, 200);
  };

  const handleCopy = () => {
    if (safeTips.length === 0) return;
    navigator.clipboard.writeText(
      `💡 ${safeTips[currentIndex].tip} (${safeTips[currentIndex].article}) — via ADHIKAR`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (safeTips.length === 0) return null;
  const tip = safeTips[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-[#060608] relative overflow-hidden" id="daily-tip">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-[10px] font-black tracking-[0.3em] uppercase">{t("dailyTip.sectionLabel")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
            {t("dailyTip.title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("dailyTip.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-lg font-medium">
            {t("dailyTip.description")}
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className={`relative rounded-3xl border border-amber-500/[0.15] bg-amber-500/[0.03] overflow-hidden transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <div className="h-1 bg-gradient-to-r from-saffron via-amber-400 to-saffron" />

              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-4xl">{tip.icon}</span>
                  <div>
                    <span className="block text-[9px] font-black tracking-[0.3em] uppercase text-white/25">{t("dailyTip.category")}</span>
                    <span className="text-amber-400 font-bold text-sm">{tip.category}</span>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/30 text-[10px] font-bold tracking-wider">
                      {tip.article}
                    </span>
                  </div>
                </div>

                <p className="text-white/80 text-xl sm:text-2xl leading-relaxed font-medium italic mb-10">
                  "{tip.tip}"
                </p>

                <div className="w-full h-px bg-white/[0.06] mb-8" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => navigate("prev")}
                      className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={() => navigate("next")}
                      className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1 ml-2">
                      {safeTips.map((_, i) => (
                        <button key={i} onClick={() => setCurrentIndex(i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === currentIndex ? "w-5 h-1.5 bg-saffron" : "w-1.5 h-1.5 bg-white/15 hover:bg-white/30"
                          }`} />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={handleCopy}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all duration-200 text-xs font-bold">
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? t("dailyTip.copied") : t("dailyTip.copy")}
                    </button>
                    <button onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: "ADHIKAR", text: `💡 ${tip.tip} (${tip.article}) — via ADHIKAR` });
                        }
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all duration-200 text-xs font-bold">
                      <Share2 className="w-3.5 h-3.5" />
                      {t("dailyTip.share")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-center text-white/20 text-xs mt-6 font-medium">
              {t("dailyTip.tipOf", { current: currentIndex + 1, total: safeTips.length })}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
