package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.dto.AIModel;
import com.adhikar.lawbridge.dto.ChatRequest;
import com.adhikar.lawbridge.dto.ChatResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.*;

@Service
public class ChatbotService {
    private final WebClient openRouterWebClient;

    @Value("${openrouter.api.key}")
    private String apiKey;

    public static final List<AIModel> AI_MODELS = List.of(
        AIModel.builder().id("openrouter/free").label("Auto-Select (Recommended)")
                .provider("OpenRouter").description("Automatically routes to the fastest, most reliable free model").color("text-amber-500").build(),
        AIModel.builder().id("openai/gpt-oss-120b:free").label("GPT-OSS 120B")
                .provider("OpenAI").description("Massive open-source model").color("text-emerald-400").build(),
        AIModel.builder().id("deepseek/deepseek-v4-flash:free").label("DeepSeek V4 Flash")
                .provider("DeepSeek").description("Fast and efficient").color("text-cyan-400").build(),
        AIModel.builder().id("meta-llama/llama-3.3-70b-instruct:free").label("Llama 3.3 70B")
                .provider("Meta").description("Strong reasoning").color("text-indigo-400").build(),
        AIModel.builder().id("google/gemma-4-31b-it:free").label("Gemma 4 31B")
                .provider("Google").description("Lightweight reasoning model").color("text-sky-400").build()
    );

    private static final Map<String, String> LANGUAGE_NAMES = Map.of(
        "en", "English", "hi", "Hindi", "ta", "Tamil", "te", "Telugu",
        "bn", "Bengali", "mr", "Marathi", "kn", "Kannada", "gu", "Gujarati"
    );

    private static final Map<String, String> DISCLAIMERS = Map.of(
        "en", "This is for educational purposes only and does not constitute legal advice.",
        "hi", "यह केवल शैक्षिक उद्देश्यों के लिए है और कानूनी सलाह नहीं है।",
        "ta", "இது கல்வி நோக்கங்களுக்காக மட்டுமே, சட்ட ஆலோசனை அல்ல.",
        "te", "ఇది విద్యా ప్రయోజనాల కోసం మాత్రమే మరియు చట్టపరమైన సలహా కాదు.",
        "bn", "এটি শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে এবং এটি কোনো আইনি পরামর্শ নয়।",
        "mr", "हे केवळ शैक्षणिक उद्देशांसाठी आहे आणि कायदेशीर सल्ला नाही.",
        "kn", "ಇದು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ.",
        "gu", "આ માત્ર શૈક્ષણિક હેતુઓ માટે છે અને કાનૂની સલાહ નથી."
    );

    public ChatbotService(WebClient openRouterWebClient) {
        this.openRouterWebClient = openRouterWebClient;
    }

    public List<AIModel> getAvailableModels() { return AI_MODELS; }

    @SuppressWarnings("unchecked")
    public ChatResponse chat(ChatRequest request) {
        try {
            String langCode = request.getLanguage() != null ? request.getLanguage() : "en";
            String langName = LANGUAGE_NAMES.getOrDefault(langCode, "English");
            String disclaimer = DISCLAIMERS.getOrDefault(langCode, DISCLAIMERS.get("en"));

            String systemPrompt = "You are Vidhi Sahayak, a highly knowledgeable AI legal assistant for India. " +
                "You provide accurate, helpful, and concise information about Indian laws including the Constitution, " +
                "BNS, BNSS, BSA, RTI Act, Consumer Protection Act, IT Act, and more.\n\n" +
                "Rules:\n1. Be professional, respectful and accessible.\n" +
                "2. Use simple language for complex legal concepts.\n" +
                "3. End every response with: \"" + disclaimer + "\"\n" +
                "4. If the query is ambiguous, ask for clarification.\n" +
                "5. The user's preferred language is \"" + langName + "\". You MUST answer in " + langName + ".\n" +
                "6. Use bullet points and formatting for clarity.\n" +
                "7. When citing law, mention the exact Act name and section.\n" +
                "8. If unsure, say so honestly.";

            List<Map<String, String>> messages = new ArrayList<>();
            messages.add(Map.of("role", "system", "content", systemPrompt));

            if (request.getHistory() != null) {
                List<ChatRequest.ChatMessage> recent = request.getHistory();
                int start = Math.max(0, recent.size() - 10);
                for (int i = start; i < recent.size(); i++) {
                    ChatRequest.ChatMessage msg = recent.get(i);
                    messages.add(Map.of("role", "bot".equals(msg.getRole()) ? "assistant" : "user", "content", msg.getText()));
                }
            }
            messages.add(Map.of("role", "user", "content", request.getMessage()));

            String modelId = request.getModelId() != null ? request.getModelId() : "openrouter/free";

            Map<String, Object> body = new HashMap<>();
            body.put("model", modelId);
            body.put("messages", messages);
            body.put("temperature", 0.7);
            body.put("max_tokens", 2048);

            Map<String, Object> response = openRouterWebClient.post()
                .header("Authorization", "Bearer " + apiKey)
                .header("X-Title", "ADHIKAR - Vidhi Sahayak")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(body)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

            if (response != null && response.containsKey("choices")) {
                List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
                if (!choices.isEmpty()) {
                    Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                    return ChatResponse.builder().reply((String) message.get("content")).model(modelId).success(true).build();
                }
            }
            return ChatResponse.builder().error("No response from AI model").success(false).build();
        } catch (Exception e) {
            return ChatResponse.builder().error("Error: " + e.getMessage()).success(false).build();
        }
    }
}
