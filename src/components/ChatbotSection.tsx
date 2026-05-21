import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Bot, Send, Shield, Sparkles } from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ChatbotSection = () => {
  const { t } = useTranslation();
  const { messages, input, setInput, isLoading, handleSend } = useChatbot();

  const features = t("chatbot.features", { returnObjects: true }) as string[];

  return (
    <section className="py-16 sm:py-20 bg-[#060606] relative overflow-hidden" id="chatbot">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-saffron/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-green-india/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              {t("chatbot.sectionLabel")}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
              {t("chatbot.title")}
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-lg font-medium">
              {t("chatbot.description")}
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {Array.isArray(features) && features.map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-saffron/30 transition-colors group">
                  <div className="w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                    <Shield className="w-3 h-3 text-saffron" />
                  </div>
                  <span className="text-sm text-white/40 leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal> 

          <ScrollReveal direction="right">
            <div className="rounded-[32px] overflow-hidden ambient-shadow max-w-md mx-auto w-full flex flex-col min-h-[520px] bg-white/[0.02] border border-white/[0.06]">
              {/* Header */}
              <div className="bg-[#0A0E1A] p-6 flex items-center gap-4 border-b border-white/[0.06]">
                <div className="w-12 h-12 rounded-2xl bg-saffron/10 flex items-center justify-center ring-1 ring-saffron/20 shadow-inner">
                  <Bot className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <p className="text-white text-lg font-bold leading-none mb-1">{t("chatbot.botName")}</p>
                  <p className="text-saffron/60 text-xs font-medium uppercase tracking-wider">{t("chatbot.botRole")}</p>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-black/20 custom-scrollbar">
                {/* Welcome Message */}
                <div className="flex flex-col items-start animate-fade-in-up">
                  <div className="max-w-[90%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm bg-card/80 text-foreground border border-white/5 rounded-bl-sm">
                    {t("chatbot.greeting")}
                  </div>
                </div>

                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} animate-fade-in-up`}>
                    <div className={cn(
                      "max-w-[90%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm",
                      msg.role === "user"
                        ? "bg-navy text-white rounded-br-sm glow-sm"
                        : "bg-card/80 text-foreground border border-white/5 rounded-bl-sm"
                    )}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start">
                    <div className="bg-card/80 text-foreground border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 animate-pulse">
                      <div className="w-1.5 h-1.5 bg-saffron/50 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-saffron/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-saffron/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#0A0E1A]/50 border-t border-white/[0.06] flex gap-3">
                <div className="relative flex-1 gavel-line">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder={t("chatbot.placeholder")}
                    disabled={isLoading}
                    className="w-full h-12 px-4 rounded-xl bg-white/5 text-sm text-white placeholder:text-white/20 outline-none focus:bg-white/10 transition-all disabled:opacity-50"
                  />
                </div>
                <Button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="h-12 w-12 rounded-xl bg-saffron text-navy hover:bg-saffron/90 flex items-center justify-center shadow-lg active:scale-95 transition-all"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

