import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
  Lightbulb, ChevronLeft, ChevronRight, Share2, Copy, Check, 
  Brain, CheckCircle, XCircle, RotateCcw, Trophy, 
  Book, Search, X, Languages, Sparkles 
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { legalDictionary } from "@/data/legalDictionary";
import { cn } from "@/lib/utils";

interface TipItem {
  tip: string;
  category: string;
  article: string;
  icon: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const getDailyIndex = (total: number) => {
  const start = new Date("2024-01-01").getTime();
  const now = new Date().getTime();
  const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return dayDiff % total;
};

export const CitizenSandbox = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"tip" | "quiz" | "dictionary">("tip");

  // === Daily Tip State & Logic ===
  const tips = t("dailyTip.tips", { returnObjects: true }) as TipItem[];
  const safeTips = Array.isArray(tips) ? tips : [];
  const [tipIndex, setTipIndex] = useState(0);
  const [tipCopied, setTipCopied] = useState(false);
  const [tipAnimating, setTipAnimating] = useState(false);

  useEffect(() => {
    if (safeTips.length > 0) {
      setTipIndex(getDailyIndex(safeTips.length));
    }
  }, [safeTips.length]);

  const handleTipNavigate = (dir: "prev" | "next") => {
    if (tipAnimating || safeTips.length === 0) return;
    setTipAnimating(true);
    setTimeout(() => {
      setTipIndex((i) =>
        dir === "next"
          ? (i + 1) % safeTips.length
          : (i - 1 + safeTips.length) % safeTips.length
      );
      setTipAnimating(false);
    }, 200);
  };

  const handleTipCopy = () => {
    if (safeTips.length === 0) return;
    navigator.clipboard.writeText(
      `💡 ${safeTips[tipIndex].tip} (${safeTips[tipIndex].article}) — via ADHIKAR`
    );
    setTipCopied(true);
    setTimeout(() => setTipCopied(false), 2000);
  };

  // === Quiz State & Logic ===
  const questions = t("quiz.questions", { returnObjects: true }) as QuizQuestion[];
  const safeQuestions = Array.isArray(questions) ? questions : [];
  const [quizQuestionIdx, setQuizQuestionIdx] = useState(0);
  const [quizSelectedAns, setQuizSelectedAns] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizShowResult, setQuizShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([]);

  useEffect(() => {
    if (safeQuestions.length > 0) {
      setQuizAnswers(new Array(safeQuestions.length).fill(null));
    }
  }, [safeQuestions.length]);

  const handleQuizAnswer = (index: number) => {
    if (quizSelectedAns !== null || safeQuestions.length === 0) return;
    setQuizSelectedAns(index);
    const newAnswers = [...quizAnswers];
    newAnswers[quizQuestionIdx] = index;
    setQuizAnswers(newAnswers);
    if (index === safeQuestions[quizQuestionIdx].correct) {
      setQuizScore((s) => s + 1);
    }
    setQuizShowResult(true);
  };

  const handleQuizNext = () => {
    if (quizQuestionIdx < safeQuestions.length - 1) {
      setQuizQuestionIdx((q) => q + 1);
      setQuizSelectedAns(null);
      setQuizShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleQuizReset = () => {
    setQuizQuestionIdx(0);
    setQuizSelectedAns(null);
    setQuizScore(0);
    setQuizShowResult(false);
    setQuizComplete(false);
    setQuizAnswers(new Array(safeQuestions.length).fill(null));
  };

  // === Dictionary State & Logic ===
  const [dictSearch, setDictSearch] = useState("");
  const [dictActiveLetter, setDictActiveLetter] = useState("All");

  const dictLetters = useMemo(() => {
    const lettersSet = new Set(legalDictionary.map((item) => item.term[0].toUpperCase()));
    return ["All", ...Array.from(lettersSet).sort()];
  }, []);

  const filteredDictionary = useMemo(() => {
    return legalDictionary.filter((item) => {
      const matchLetter = dictActiveLetter === "All" || item.term[0].toUpperCase() === dictActiveLetter;
      const matchSearch = item.term.toLowerCase().includes(dictSearch.toLowerCase()) || 
                          item.definition.toLowerCase().includes(dictSearch.toLowerCase());
      return matchLetter && matchSearch;
    });
  }, [dictActiveLetter, dictSearch]);

  const activeTip = safeTips[tipIndex];
  const activeQuizQ = safeQuestions[quizQuestionIdx];
  const quizProgressPercent = safeQuestions.length > 0 
    ? ((quizQuestionIdx + (quizShowResult ? 1 : 0)) / safeQuestions.length) * 100 
    : 0;

  const getQuizScoreLabel = () => {
    if (safeQuestions.length === 0) return { text: "", color: "text-white", emoji: "" };
    const pct = (quizScore / safeQuestions.length) * 100;
    if (pct >= 80) return { text: t("quiz.expert"), color: "text-emerald-400", emoji: "🏆" };
    if (pct >= 60) return { text: t("quiz.good"), color: "text-blue-400", emoji: "⚖️" };
    if (pct >= 40) return { text: t("quiz.learning"), color: "text-amber-400", emoji: "📚" };
    return { text: t("quiz.start"), color: "text-rose-400", emoji: "🌱" };
  };

  const handleTriggerAIAnalysis = (term: string) => {
    window.dispatchEvent(
      new CustomEvent("open-vidhi-sahayak", {
        detail: {
          prompt: `Deep dive: Explain the legal term "${term}" in simple words and give real-life examples of its usage in Indian law.`,
        },
      })
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="sandbox">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-saffron/5 via-violet-500/5 to-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-5xl">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">Citizen Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Interactive <span className="text-gradient">Legal Playground</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Test your legal literacy, explore critical constitutional rights, and demystify complex legal terms in seconds.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-inner shadow-white/5 gap-1.5">
            {([
              { id: "tip", label: "Daily Legal Tip", icon: Lightbulb },
              { id: "quiz", label: "Interactive Quiz", icon: Brain },
              { id: "dictionary", label: "Term Lookup", icon: Book },
            ] as const).map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 h-11 px-5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-saffron text-white shadow-lg shadow-saffron/20"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Box */}
        <div className="relative min-h-[460px] flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl p-6 sm:p-10 spotlight-card overflow-hidden">
          {/* Daily Tip Tab Content */}
          {activeTab === "tip" && activeTip && (
            <div className={cn("flex flex-col justify-between h-full flex-1 transition-opacity duration-300", tipAnimating ? "opacity-0" : "opacity-100")}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{activeTip.icon}</span>
                  <div>
                    <span className="block text-[8px] font-black tracking-[0.2em] uppercase text-white/35">{t("dailyTip.category")}</span>
                    <span className="text-saffron font-bold text-sm">{activeTip.category}</span>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 text-[10px] font-black uppercase tracking-wider">
                      {activeTip.article}
                    </span>
                  </div>
                </div>

                <blockquote className="text-white/90 text-lg sm:text-2xl leading-relaxed font-semibold italic mb-8 border-l-2 border-saffron/40 pl-6 py-1">
                  "{activeTip.tip}"
                </blockquote>
              </div>

              <div className="mt-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleTipNavigate("prev")}
                    className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                  >
                    <ChevronLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={() => handleTipNavigate("next")}
                    className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                  >
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                  <span className="text-white/25 text-[10px] font-black uppercase tracking-widest ml-3">
                    Tip {tipIndex + 1} of {safeTips.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleTipCopy}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/55 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all text-xs font-bold"
                  >
                    {tipCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {tipCopied ? t("dailyTip.copied") : t("dailyTip.copy")}
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: "ADHIKAR Daily Tip", text: `💡 ${activeTip.tip} (${activeTip.article}) — via ADHIKAR` });
                      }
                    }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/55 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all text-xs font-bold"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {t("dailyTip.share")}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Tab Content */}
          {activeTab === "quiz" && activeQuizQ && (
            <div className="flex flex-col justify-between h-full flex-1 transition-opacity duration-300">
              {!quizComplete ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-white/35 text-[10px] font-black tracking-widest uppercase">
                      Question {quizQuestionIdx + 1} of {safeQuestions.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {safeQuestions.map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            i === quizQuestionIdx
                              ? "bg-saffron scale-125 shadow-md shadow-saffron/50"
                              : quizAnswers[i] !== null
                              ? quizAnswers[i] === safeQuestions[i].correct
                                ? "bg-emerald-500"
                                : "bg-rose-500"
                              : "bg-white/10"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="h-1 bg-white/5 w-full rounded-full mb-6 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-saffron to-amber-400 transition-all duration-500"
                      style={{ width: `${quizProgressPercent}%` }}
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
                    {activeQuizQ.question}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {activeQuizQ.options.map((option, i) => {
                      let btnStyle = "border-white/5 bg-white/[0.01] hover:border-saffron/30 hover:bg-saffron/5 hover:text-white";
                      if (quizShowResult) {
                        if (i === activeQuizQ.correct) {
                          btnStyle = "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-bold";
                        } else if (i === quizSelectedAns) {
                          btnStyle = "border-rose-500/40 bg-rose-500/10 text-rose-300";
                        } else {
                          btnStyle = "border-white/5 bg-transparent text-white/30";
                        }
                      }
                      return (
                        <button
                          key={i}
                          onClick={() => handleQuizAnswer(i)}
                          disabled={quizShowResult}
                          className={cn(
                            "text-left px-5 py-4 rounded-xl border text-sm transition-all duration-300 flex items-center gap-3.5",
                            btnStyle
                          )}
                        >
                          <span
                            className={cn(
                              "w-6 h-6 rounded-lg border flex items-center justify-center text-[10px] font-black shrink-0",
                              quizShowResult && i === activeQuizQ.correct
                                ? "border-emerald-400 text-emerald-400 bg-emerald-950/20"
                                : quizShowResult && i === quizSelectedAns
                                ? "border-rose-400 text-rose-400 bg-rose-950/20"
                                : "border-white/20 text-white/40 bg-white/5"
                            )}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="flex-1">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizShowResult && (
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mb-6 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <p className="text-white/60 leading-relaxed">
                        <span className="text-saffron font-bold mr-1">💡 Explanation:</span>
                        {activeQuizQ.explanation}
                      </p>
                    </div>
                  )}

                  {quizShowResult && (
                    <button
                      onClick={handleQuizNext}
                      className="w-full h-12 rounded-xl bg-saffron text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-saffron/90 hover:scale-[1.01] transition-all"
                    >
                      {quizQuestionIdx < safeQuestions.length - 1 ? (
                        <>Next Question <ChevronRight className="w-4 h-4" /></>
                      ) : (
                        <>See Final Results <Trophy className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center py-4 flex flex-col items-center justify-center flex-1 animate-in zoom-in-95 duration-500">
                  <div className="text-6xl mb-4">{getQuizScoreLabel().emoji}</div>
                  <h3 className={cn("text-2xl sm:text-3xl font-black mb-2", getQuizScoreLabel().color)}>
                    {getQuizScoreLabel().text}
                  </h3>
                  <p className="text-white/60 text-base mb-8 max-w-sm">
                    {t("quiz.scored", { score: quizScore, total: safeQuestions.length })}
                  </p>

                  <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-8">
                    {[
                      { label: "Correct", value: quizScore, color: "text-emerald-400", bg: "bg-emerald-500/5 border-emerald-500/10" },
                      { label: "Wrong", value: safeQuestions.length - quizScore, color: "text-rose-400", bg: "bg-rose-500/5 border-rose-500/10" },
                      { label: "Accuracy", value: `${Math.round((quizScore / (safeQuestions.length || 1)) * 100)}%`, color: "text-saffron", bg: "bg-saffron/5 border-saffron/10" },
                    ].map((card) => (
                      <div key={card.label} className={cn("rounded-xl border p-4 text-center", card.bg)}>
                        <div className={cn("text-xl font-black leading-none", card.color)}>{card.value}</div>
                        <div className="text-white/25 text-[9px] font-black uppercase tracking-wider mt-2">{card.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleQuizReset}
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white/[0.04] border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Dictionary Tab Content */}
          {activeTab === "dictionary" && (
            <div className="flex flex-col h-full flex-1 transition-opacity duration-300">
              {/* Search Bar & Letter Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1 group">
                  <Search className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-saffron transition-colors" />
                  <input
                    type="text"
                    value={dictSearch}
                    onChange={(e) => setDictSearch(e.target.value)}
                    placeholder="Search legal terms (e.g. Affidavit, Habeas Corpus)..."
                    className="w-full h-12 pl-11 pr-10 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-semibold text-white outline-none focus:border-saffron/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                  />
                  {dictSearch && (
                    <button
                      onClick={() => setDictSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Quick alphabet filter row */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full md:max-w-[400px] scrollbar-none custom-scrollbar">
                  {dictLetters.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => setDictActiveLetter(letter)}
                      className={cn(
                        "h-8 px-2.5 min-w-[32px] rounded-lg text-[10px] font-black uppercase tracking-wider shrink-0 transition-all",
                        dictActiveLetter === letter
                          ? "bg-saffron text-white"
                          : "text-white/40 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms Results Grid */}
              <div className="grid sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredDictionary.map((item) => (
                  <div
                    key={item.term}
                    className="group/term relative p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-saffron/10 border border-saffron/20 text-[8px] font-black text-saffron uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-base font-black text-white group-hover/term:text-saffron transition-colors mb-1.5">
                        {item.term}
                      </h4>
                      <p className="text-white/50 text-xs leading-relaxed font-medium">
                        {item.definition}
                      </p>
                    </div>

                    <button
                      onClick={() => handleTriggerAIAnalysis(item.term)}
                      className="mt-4 inline-flex items-center gap-1.5 text-[9px] font-black text-white/30 uppercase tracking-widest hover:text-saffron transition-colors"
                    >
                      Contextual AI Analysis
                      <Sparkles className="w-3 h-3 text-saffron/60" />
                    </button>
                  </div>
                ))}

                {filteredDictionary.length === 0 && (
                  <div className="col-span-full py-16 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-4">
                      <Book className="w-6 h-6 text-white/10" />
                    </div>
                    <h4 className="text-white font-bold text-base mb-1">No terms found</h4>
                    <p className="text-white/20 text-xs">Try different filters or search keywords.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
