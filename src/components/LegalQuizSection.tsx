import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, Brain } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const LegalQuizSection = () => {
  const { t } = useTranslation();
  const questions = t("quiz.questions", { returnObjects: true }) as QuizQuestion[];
  const safeQuestions = Array.isArray(questions) ? questions : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(safeQuestions.length).fill(null));

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || safeQuestions.length === 0) return;
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
    if (index === safeQuestions[currentQuestion].correct) {
      setScore((s) => s + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < safeQuestions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizComplete(false);
    setAnswers(new Array(safeQuestions.length).fill(null));
  };

  if (safeQuestions.length === 0) return null;

  const q = safeQuestions[currentQuestion];
  const progressPercent = ((currentQuestion + (showResult ? 1 : 0)) / safeQuestions.length) * 100;

  const getScoreLabel = () => {
    const pct = (score / safeQuestions.length) * 100;
    if (pct >= 80) return { text: t("quiz.expert"), color: "text-emerald-400", emoji: "🏆" };
    if (pct >= 60) return { text: t("quiz.good"), color: "text-blue-400", emoji: "⚖️" };
    if (pct >= 40) return { text: t("quiz.learning"), color: "text-amber-400", emoji: "📚" };
    return { text: t("quiz.start"), color: "text-rose-400", emoji: "🌱" };
  };

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="legal-quiz">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-saffron/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-6">
            <Brain className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">{t("quiz.sectionLabel")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
            {t("quiz.title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("quiz.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg font-medium">
            {t("quiz.description")}
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {!quizComplete ? (
            <ScrollReveal>
              <div className="spotlight-card rounded-3xl overflow-hidden">
                <div className="h-1.5 bg-white/5 w-full">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-saffron transition-all duration-700 ease-out"
                    style={{ width: `${progressPercent}%` }} />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">
                      {t("quiz.question", { current: currentQuestion + 1, total: safeQuestions.length })}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {safeQuestions.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentQuestion ? "bg-violet-400 scale-125"
                            : answers[i] !== null
                            ? answers[i] === safeQuestions[i].correct ? "bg-emerald-400" : "bg-rose-400"
                            : "bg-white/10"
                        }`} />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-8">{q.question}</h3>

                  <div className="space-y-3 mb-6">
                    {q.options.map((option, i) => {
                      let optionStyle = "border-white/[0.08] bg-white/[0.02] text-white/60 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-white cursor-pointer";
                      if (showResult) {
                        if (i === q.correct) optionStyle = "border-emerald-500/60 bg-emerald-500/10 text-emerald-300 cursor-default";
                        else if (i === selectedAnswer) optionStyle = "border-rose-500/60 bg-rose-500/10 text-rose-300 cursor-default";
                        else optionStyle = "border-white/[0.04] bg-white/[0.01] text-white/25 cursor-default";
                      }
                      return (
                        <button key={i} onClick={() => handleAnswer(i)}
                          className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 font-medium text-sm ${optionStyle}`}>
                          <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-black shrink-0 ${
                            showResult && i === q.correct ? "border-emerald-400 text-emerald-400" :
                            showResult && i === selectedAnswer ? "border-rose-400 text-rose-400" :
                            "border-white/20 text-white/40"
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span>{option}</span>
                          {showResult && i === q.correct && <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto shrink-0" />}
                          {showResult && i === selectedAnswer && i !== q.correct && <XCircle className="w-4 h-4 text-rose-400 ml-auto shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {showResult && (
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 mb-6">
                      <p className="text-white/60 text-sm leading-relaxed">
                        <span className="text-saffron font-bold mr-1">💡 {t("quiz.explanation")}</span>
                        {q.explanation}
                      </p>
                    </div>
                  )}

                  {showResult && (
                    <button onClick={handleNext}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300">
                      {currentQuestion < safeQuestions.length - 1 ? (
                        <>{t("quiz.nextQuestion")} <ChevronRight className="w-4 h-4" /></>
                      ) : (
                        <>{t("quiz.seeResults")} <Trophy className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="spotlight-card rounded-3xl p-10 text-center">
                <div className="text-6xl mb-4">{getScoreLabel().emoji}</div>
                <h3 className={`text-3xl font-black mb-2 ${getScoreLabel().color}`}>{getScoreLabel().text}</h3>
                <p className="text-white/60 text-lg mb-8">
                  {t("quiz.scored", { score, total: safeQuestions.length })}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { label: t("quiz.correct"), value: score, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                    { label: t("quiz.wrong"), value: safeQuestions.length - score, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
                    { label: t("quiz.scorePercent"), value: `${Math.round((score / safeQuestions.length) * 100)}%`, color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-2xl border p-4 ${item.bg}`}>
                      <div className={`text-2xl font-black ${item.color}`}>{item.value}</div>
                      <div className="text-white/30 text-xs font-bold uppercase tracking-widest mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                <button onClick={handleReset}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-white font-bold text-sm hover:bg-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">
                  <RotateCcw className="w-4 h-4" /> {t("quiz.tryAgain")}
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
};
