import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

export type Message = { role: "bot" | "user"; text: string };

export interface AIModel {
  id: string;
  label: string;
  provider: string;
  description: string;
  color: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: "openrouter/free",
    label: "Auto-Select (Recommended)",
    provider: "OpenRouter",
    description: "Automatically routes to the fastest, most reliable free model",
    color: "text-amber-500",
  },
  {
    id: "openai/gpt-oss-120b:free",
    label: "GPT-OSS 120B",
    provider: "OpenAI",
    description: "Massive open-source model — great conversational skills",
    color: "text-emerald-400",
  },
  {
    id: "deepseek/deepseek-v4-flash:free",
    label: "DeepSeek V4 Flash",
    provider: "DeepSeek",
    description: "Fast and efficient — great for quick simple answers",
    color: "text-cyan-400",
  },
  {
    id: "meta-llama/llama-3.3-70b-instruct:free",
    label: "Llama 3.3 70B",
    provider: "Meta",
    description: "Meta's state of the art 70B model — strong reasoning",
    color: "text-indigo-400",
  },
  {
    id: "google/gemma-4-31b-it:free",
    label: "Gemma 4 31B",
    provider: "Google",
    description: "Google's latest lightweight reasoning model",
    color: "text-sky-400",
  },
];


const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  hi: "Hindi (हिन्दी)",
  ta: "Tamil (தமிழ்)",
  te: "Telugu (తెలుగు)",
  bn: "Bengali (বাংলা)",
  mr: "Marathi (मराठी)",
  kn: "Kannada (ಕನ್ನಡ)",
  gu: "Gujarati (ગુજરાતી)",
};

const DISCLAIMERS: Record<string, string> = {
  en: "⚖️ This is for educational purposes only and does not constitute legal advice.",
  hi: "⚖️ यह केवल शैक्षिक उद्देश्यों के लिए है और कानूनी सलाह नहीं है।",
  ta: "⚖️ இது கல்வி நோக்கங்களுக்காக மட்டுமே, சட்ட ஆலோசனை அல்ல.",
  te: "⚖️ ఇది విద్యా ప్రయోజనాల కోసం మాత్రమే మరియు చట్టపరమైన సలహా కాదు.",
  bn: "⚖️ এটি শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে এবং এটি কোনো আইনি পরামর্শ নয়।",
  mr: "⚖️ हे केवळ शैक्षणिक उद्देशांसाठी आहे आणि कायदेशीर सल्ला नाही.",
  kn: "⚖️ ಇದು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ.",
  gu: "⚖️ આ માત્ર શૈક્ષણિક હેતુઓ માટે છે અને કાનૂની સલાહ નથી.",
};

export const useChatbot = () => {
  const { i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS[0]);

  const handleSend = useCallback(async (customInput?: string) => {
    const textToSend = (customInput || input).trim();
    if (!textToSend || isLoading) return;
    
    const userMessage: Message = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    if (!customInput) setInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      if (!apiKey || apiKey === "your_openrouter_api_key_here") {
        throw new Error("Please set a valid VITE_OPENROUTER_API_KEY in your .env file. Get one free at openrouter.ai");
      }

      // Build conversation history (last 10 messages to keep context manageable)
      const recentMessages = messages.slice(-10);

      const currentLangCode = i18n.language || "en";
      const currentLangName = LANGUAGE_NAMES[currentLangCode] || "English";
      const currentDisclaimer = DISCLAIMERS[currentLangCode] || DISCLAIMERS.en;

      const systemPrompt = `You are Vidhi Sahayak, a highly knowledgeable AI legal assistant for India. 
You provide accurate, helpful, and concise information about Indian laws including the Constitution of India, Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Sakshya Adhiniyam (BSA), RTI Act, Consumer Protection Act, IT Act, and more.

Rules:
1. Be professional, respectful and accessible.
2. Use simple language for complex legal concepts.
3. End every response with: "${currentDisclaimer}"
4. If the query is ambiguous, ask for clarification.
5. IMPORTANT: The user's preferred language is "${currentLangName}". You MUST answer/respond in ${currentLangName} (using the correct script, e.g. Devanagari script for Hindi, Tamil script for Tamil, etc.) even if the user asks in English/Hinglish, unless they explicitly ask you to respond in a different language.
6. Use bullet points and formatting for clarity.
7. When citing law, mention the exact Act name and section.
8. If unsure, say so honestly.`;

      const apiMessages = [
        { role: "system" as const, content: systemPrompt },
        ...recentMessages.map(m => ({ 
          role: (m.role === "bot" ? "assistant" : "user") as "assistant" | "user", 
          content: m.text 
        })),
        { role: "user" as const, content: textToSend }
      ];

      console.log(`[Vidhi Sahayak] Sending to ${selectedModel.label} (${selectedModel.id})...`);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "ADHIKAR - Vidhi Sahayak",
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: selectedModel.id,
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 2048,
          stream: true,
        }),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errText = await response.text();
        let errMsg = `Server returned ${response.status}`;
        try {
          const errJson = JSON.parse(errText);
          errMsg = errJson?.error?.message || errJson?.message || errMsg;
        } catch {
          // Ignore parsing error, fallback to raw response status
        }
        throw new Error(errMsg);
      }

      if (!response.body) {
        throw new Error("No response body received from server.");
      }

      // Add placeholder bot message to update dynamically
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let buffer = "";
      let botText = "";
      let isThinking = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          buffer += decoder.decode(value, { stream: !done });
          const lines = buffer.split("\n");
          // Keep the last incomplete line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            if (trimmed === "data: [DONE]") continue;

            if (trimmed.startsWith("data: ")) {
              try {
                const parsed = JSON.parse(trimmed.slice(6));
                const choice = parsed?.choices?.[0];
                const content = choice?.delta?.content || "";
                const reasoning = choice?.delta?.reasoning || "";

                let textChunk = "";
                if (reasoning) {
                  if (!isThinking) {
                    isThinking = true;
                    textChunk += "<think>";
                  }
                  textChunk += reasoning;
                } else if (content) {
                  if (isThinking) {
                    isThinking = false;
                    textChunk += "</think>\n\n";
                  }
                  textChunk += content;
                }

                if (textChunk) {
                  botText += textChunk;
                  setMessages((prev) => {
                    const updated = [...prev];
                    const lastMsg = updated[updated.length - 1];
                    if (lastMsg && lastMsg.role === "bot") {
                      updated[updated.length - 1] = {
                        ...lastMsg,
                        text: botText,
                      };
                    }
                    return updated;
                  });
                }
              } catch (e) {
                // Ignore JSON parsing errors for incomplete lines
              }
            }
          }
        }
      }

      // Final close tag check if ended on reasoning
      if (isThinking) {
        botText += "</think>";
        setMessages((prev) => {
          const updated = [...prev];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg && lastMsg.role === "bot") {
            updated[updated.length - 1] = {
              ...lastMsg,
              text: botText,
            };
          }
          return updated;
        });
      }

      if (!botText.trim()) {
        throw new Error("Model returned an empty response. Try a different model.");
      }

    } catch (error: unknown) {
      console.error("[Vidhi Sahayak] Error:", error);
      let message = "Unknown error";
      if (error instanceof DOMException && error.name === "AbortError") {
        message = "Request timed out after 60 seconds. The model may be busy — try a different one.";
      } else if (error instanceof TypeError && error.message.includes("fetch")) {
        message = "Network error — please check your internet connection.";
      } else if (error instanceof Error) {
        message = error.message;
      }
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `❌ Error: ${message}\n\n💡 Tip: Try switching to a different AI model using the selector at the top.` }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, selectedModel, i18n.language]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);


  return {
    messages,
    input,
    setInput,
    isLoading,
    handleSend,
    selectedModel,
    setSelectedModel,
    clearChat,
  };
};
