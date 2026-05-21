import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Bot, Send, Shield, Sparkles, ChevronRight, ChevronDown, Cpu, RotateCcw, Check, Zap } from "lucide-react";
import { useChatbot, AI_MODELS, type AIModel } from "@/hooks/useChatbot";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const defaultQuestions = [
  "How to register a trademark in India?",
  "Fundamental Rights in Constitution",
  "RTI application process",
  "Consumer protection laws",
];

const parseMessageText = (text: string) => {
  const thinkRegex = /<think>([\s\S]*?)(?:<\/think>|$)/i;
  const match = text.match(thinkRegex);
  
  if (match) {
    const thinking = match[1].trim();
    const answer = text.replace(/<think>[\s\S]*?(?:<\/think>|$)/gi, "").trim();
    return { thinking, answer };
  }
  
  return { thinking: "", answer: text };
};

const MessageContent = ({ text, isBot }: { text: string; isBot: boolean }) => {
  const [expanded, setExpanded] = useState(true);
  const { thinking, answer } = parseMessageText(text);

  // Collapse automatically when answer starts to appear
  const hasAnswer = !!answer;
  const prevHasAnswerRef = useRef(false);
  
  useEffect(() => {
    if (hasAnswer && !prevHasAnswerRef.current) {
      setExpanded(false);
    }
    prevHasAnswerRef.current = hasAnswer;
  }, [hasAnswer]);

  if (!isBot) {
    return <span className="whitespace-pre-line">{text}</span>;
  }

  if (!thinking) {
    return <span className="whitespace-pre-line">{text}</span>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-300">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white/[0.01] hover:bg-white/[0.03] text-[10px] font-black text-white/30 hover:text-white/60 tracking-wider uppercase transition-all duration-200 border-b border-white/5"
        >
          <span className="flex items-center gap-2">
            <Cpu className={cn("h-3.5 w-3.5 text-saffron/60", expanded && "animate-pulse")} />
            Thinking Process
          </span>
          <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", expanded && "rotate-180")} />
        </button>
        {expanded && (
          <div className="px-4 py-3 text-[11px] leading-relaxed text-white/40 italic font-mono whitespace-pre-line border-t border-white/5 bg-black/20 max-h-[160px] overflow-y-auto custom-scrollbar">
            {thinking}
          </div>
        )}
      </div>
      {answer && <span className="whitespace-pre-line">{answer}</span>}
    </div>
  );
};

export const VidhiSahayak = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showModelPicker, setShowModelPicker] = useState(false);
  const { messages, input, setInput, isLoading, handleSend, selectedModel, setSelectedModel, clearChat } = useChatbot();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const modelPickerRef = useRef<HTMLDivElement>(null);
  const commonQuestions = t("vidhi.commonQuestions", { returnObjects: true }) as string[] || defaultQuestions;

  // Auto-scroll to bottom whenever messages or loading state changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollArea = scrollContainerRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  // Close model picker on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modelPickerRef.current && !modelPickerRef.current.contains(e.target as Node)) {
        setShowModelPicker(false);
      }
    };
    if (showModelPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModelPicker]);

  const onQuestionClick = (q: string) => {
    handleSend(q);
  };

  const onModelSelect = (model: AIModel) => {
    setSelectedModel(model);
    setShowModelPicker(false);
  };

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        setTimeout(() => handleSend(customEvent.detail.prompt), 600);
      }
    };
    window.addEventListener('open-vidhi-sahayak', handleOpenEvent);
    return () => window.removeEventListener('open-vidhi-sahayak', handleOpenEvent);
  }, [handleSend]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={(open) => { setIsOpen(open); setShowModelPicker(false); }}>
        <SheetTrigger asChild>
          <button
            className={cn(
              "group relative flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-white shadow-[0_0_30px_rgba(255,153,51,0.4)] transition-all duration-500 hover:scale-110 active:scale-95",
              "before:absolute before:inset-0 before:rounded-full before:bg-saffron before:animate-ping before:opacity-20 hover:before:hidden",
              "after:absolute after:inset-[-4px] after:rounded-full after:border-2 after:border-saffron/30 after:animate-[spin_6s_linear_infinite]"
            )}
            aria-label="Ask Vidhi Sahayak"
          >
            <div className="relative z-10">
              <Bot className="h-7 w-7 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </div>
            <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-india border-2 border-background text-[10px] font-bold text-white shadow-lg z-20">
              AI
            </div>
          </button>
        </SheetTrigger>
        <SheetContent 
          side="right"
          className="flex w-full flex-col border-white/5 bg-[#0A0A0A]/95 backdrop-blur-3xl p-0 sm:max-w-md shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden"
        >
          <SheetHeader className="relative overflow-hidden border-b border-white/5 bg-[#111]/80 p-6 pb-12 backdrop-blur-xl">
            {/* Ambient Background Glows */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-saffron/5 blur-[100px]" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-green-india/5 blur-[80px]" />
            
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron/10 border border-saffron/30 backdrop-blur-3xl shadow-inner group transition-all duration-500 hover:border-saffron/60">
                  <Bot className="h-7 w-7 text-saffron drop-shadow-[0_0_10px_rgba(255,153,51,0.5)]" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#111] bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="text-left flex-1">
                <SheetTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight leading-none mb-2">
                  {t("vidhi.title")}
                </SheetTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-saffron/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-saffron border border-saffron/20 ring-1 ring-saffron/10">
                    <Shield className="h-3 w-3" />
                    {t("vidhi.badge")}
                  </div>
                </div>
              </div>
              {/* Clear Chat Button */}
              <button
                onClick={clearChat}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/30 transition-all hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                title="Clear chat"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Model Switcher Bar */}
            <div className="relative mt-4" ref={modelPickerRef}>
              <button
                onClick={() => setShowModelPicker(!showModelPicker)}
                className={cn(
                  "w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300",
                  showModelPicker
                    ? "bg-white/[0.06] border-saffron/30 shadow-[0_0_20px_rgba(255,153,51,0.05)]"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] border border-white/10">
                    <Cpu className="h-3.5 w-3.5 text-saffron" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{selectedModel.label}</span>
                      <span className={cn("text-[9px] font-bold uppercase tracking-wider", selectedModel.color)}>{selectedModel.provider}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-green-500/10 border border-green-500/20">
                    <Zap className="h-2.5 w-2.5 text-green-400" />
                    <span className="text-[8px] font-black text-green-400 uppercase tracking-widest">Free</span>
                  </div>
                  <ChevronDown className={cn("h-3.5 w-3.5 text-white/30 transition-transform duration-300", showModelPicker && "rotate-180")} />
                </div>
              </button>

              {/* Model Dropdown */}
              {showModelPicker && (
                <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-[#111]/95 backdrop-blur-3xl border border-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-fade-in-up">
                  <div className="px-3 pt-2 pb-3">
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/25">
                      <Cpu className="h-3 w-3" />
                      Switch AI Model
                    </div>
                  </div>
                  <div className="space-y-1 max-h-[280px] overflow-y-auto custom-scrollbar">
                    {AI_MODELS.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => onModelSelect(model)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200",
                          selectedModel.id === model.id
                            ? "bg-saffron/10 border border-saffron/20"
                            : "border border-transparent hover:bg-white/[0.04] hover:border-white/10"
                        )}
                      >
                        <div className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                          selectedModel.id === model.id
                            ? "bg-saffron/20 border-saffron/30"
                            : "bg-white/[0.03] border-white/10"
                        )}>
                          {selectedModel.id === model.id ? (
                            <Check className="h-3.5 w-3.5 text-saffron" />
                          ) : (
                            <Cpu className={cn("h-3.5 w-3.5", model.color)} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white truncate">{model.label}</span>
                            <span className={cn("text-[9px] font-bold uppercase tracking-wider shrink-0", model.color)}>{model.provider}</span>
                          </div>
                          <p className="text-[10px] text-white/30 leading-snug mt-0.5 truncate">{model.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 mx-3 mb-1 pt-2 border-t border-white/5">
                    <p className="text-[9px] text-white/20 text-center font-bold uppercase tracking-widest">All models are free via OpenRouter</p>
                  </div>
                </div>
              )}
            </div>
          </SheetHeader>

          <div 
            ref={scrollContainerRef}
            className="relative -mt-8 flex-1 overflow-hidden rounded-t-[32px] bg-background/40 border-t border-white/10"
          >
            <ScrollArea className="h-full px-5">
              <div className="space-y-8 py-10">
                {/* Initial Welcome Message */}
                <div className="flex flex-col gap-4 animate-fade-in-up">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-saffron/10 flex items-center justify-center border border-saffron/20">
                      <Bot className="h-4 w-4 text-saffron" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="rounded-2xl bg-surface-high/30 backdrop-blur-md border border-white/10 p-5 text-sm leading-relaxed text-foreground/90 rounded-tl-none ring-1 ring-white/5 shadow-2xl" dangerouslySetInnerHTML={{ __html: t("vidhi.greeting").replace('Vidhi Sahayak', '<span class="text-saffron font-bold">Vidhi Sahayak</span>') }} />
                      
                      <div className="grid gap-2 pr-4">
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-saffron/60 px-1">
                          <Sparkles className="h-3 w-3" />
                          {t("vidhi.suggestedQueries")}
                        </div>
                        {Array.isArray(commonQuestions) && commonQuestions.map((q, idx) => (
                          <button
                            key={idx}
                            onClick={() => onQuestionClick(q)}
                            className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-left text-xs font-semibold text-foreground/70 transition-all duration-300 hover:border-saffron/30 hover:bg-saffron/[0.05] hover:text-saffron hover:translate-x-1"
                          >
                            {q}
                            <ChevronRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-3 animate-fade-in-up",
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 shrink-0 rounded-full flex items-center justify-center border",
                      msg.role === "user" 
                        ? "bg-navy/40 border-white/10" 
                        : "bg-saffron/10 border-saffron/20"
                    )}>
                      {msg.role === "user" ? (
                        <div className="text-[10px] font-bold text-white/40">{t("vidhi.you")}</div>
                      ) : (
                        <Bot className="h-4 w-4 text-saffron" />
                      )}
                    </div>
                    
                    <div className={cn("flex flex-col gap-2 max-w-[80%]", msg.role === "user" ? "items-end" : "items-start")}>
                      <div
                        className={cn(
                          "rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-2xl transition-all duration-300",
                          msg.role === "user"
                            ? "bg-gradient-to-br from-saffron to-saffron/80 text-white rounded-tr-none hover:shadow-saffron/20 whitespace-pre-line"
                            : "bg-surface-high/40 backdrop-blur-md border border-white/10 text-foreground/90 rounded-tl-none ring-1 ring-white/5"
                        )}
                      >
                        <MessageContent text={msg.text} isBot={msg.role === "bot"} />
                      </div>
                      <div className="px-1 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                        {msg.role === "bot" ? (
                          <span className="flex items-center gap-1.5">
                            {t("vidhi.botLabel")}
                            <span className="text-white/10">·</span>
                            <span className={cn("normal-case tracking-normal", selectedModel.color)}>{selectedModel.label}</span>
                          </span>
                        ) : t("vidhi.sent")}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 animate-pulse">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-saffron/40" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="rounded-2xl bg-surface-high/20 backdrop-blur-md border border-white/5 py-4 px-6 rounded-tl-none">
                        <div className="flex gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce" />
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce [animation-delay:0.2s]" />
                          <div className="h-1.5 w-1.5 rounded-full bg-saffron/40 animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                      <div className="px-1 text-[9px] font-bold text-white/15 uppercase tracking-widest">
                        Thinking via {selectedModel.label}...
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="relative z-10 border-t border-white/5 bg-[#0F0F0F]/80 p-6 backdrop-blur-3xl">
            <div className="flex gap-3">
              <div className="relative flex-1 group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={t("vidhi.placeholder")}
                  disabled={isLoading}
                  className={cn(
                    "w-full rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-4 text-sm outline-none transition-all duration-500",
                    "focus:bg-white/[0.07] focus:border-saffron/50 focus:ring-4 focus:ring-saffron/5",
                    "placeholder:text-white/20 disabled:opacity-50"
                  )}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-focus-within:opacity-100">
                  <div className="flex items-center gap-1.5 rounded-lg bg-saffron/10 px-2 py-1 border border-saffron/20 text-[9px] font-bold text-saffron uppercase tracking-widest">
                    <span>{t("vidhi.pressEnter")}</span>
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={cn(
                  "h-[56px] w-[56px] shrink-0 rounded-2xl bg-saffron text-white shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95",
                  "hover:shadow-saffron/40 hover:bg-saffron/90 disabled:opacity-20 disabled:grayscale"
                )}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-5 flex items-center justify-center gap-2.5 rounded-xl bg-white/[0.02] py-2.5 border border-white/5 px-4 backdrop-blur-xl">
              <div className="h-1 w-1 rounded-full bg-saffron/40" />
              <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
                {t("vidhi.disclaimer")}
              </p>
              <div className="h-1 w-1 rounded-full bg-saffron/40" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
