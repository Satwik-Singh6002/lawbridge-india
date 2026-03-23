import { ScrollReveal } from "@/components/ScrollReveal";
import { Bot, Send } from "lucide-react";
import { useState } from "react";

type Message = { role: "bot" | "user"; text: string };

const sampleMessages: Message[] = [
  { role: "bot", text: "Namaste! I'm Vidhi Sahayak, your AI legal assistant. Ask me anything about Indian laws, rights, or legal procedures. I can help in Hindi, English, Tamil, and 9 other languages." },
];

export const ChatbotSection = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user" as const, text: input },
      { role: "bot" as const, text: "Thank you for your question. This feature will be powered by our RAG-based AI system. For now, please explore the legal knowledge base above for detailed information. ⚖️\n\n⚠️ Disclaimer: For informational purposes only — not legal advice." },
    ]);
    setInput("");
  };

  return (
    <section className="py-24" id="chatbot">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">AI Legal Assistant</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              Meet Vidhi Sahayak
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our multilingual AI chatbot simplifies complex legal concepts, explains relevant sections, and helps you understand your rights — all in the language you're most comfortable with.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Explains laws in simple, everyday language",
                "Supports 12 Indian languages including Hindi, Tamil, Telugu",
                "Retrieves relevant case summaries and judgments",
                "Provides step-by-step guides for legal procedures",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden max-w-md mx-auto w-full">
              {/* Header */}
              <div className="bg-navy px-5 py-3.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-saffron/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-saffron" />
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">Vidhi Sahayak</p>
                  <p className="text-primary-foreground/50 text-xs">AI Legal Assistant</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[260px] max-h-[320px] overflow-y-auto bg-muted/30">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-navy text-primary-foreground rounded-br-sm"
                        : "bg-card text-foreground border border-border rounded-bl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about any law or right…"
                  className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg outline-none focus:ring-1 focus:ring-saffron/50 placeholder:text-muted-foreground"
                />
                <button
                  onClick={handleSend}
                  className="w-9 h-9 rounded-lg bg-saffron text-secondary-foreground flex items-center justify-center hover:bg-saffron/90 transition-colors active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
