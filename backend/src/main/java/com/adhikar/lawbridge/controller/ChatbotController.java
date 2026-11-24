package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.dto.AIModel;
import com.adhikar.lawbridge.dto.ChatRequest;
import com.adhikar.lawbridge.dto.ChatResponse;
import com.adhikar.lawbridge.service.ChatbotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatbotController {

    private final ChatbotService chatbotService;

    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    @PostMapping
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        ChatResponse response = chatbotService.chat(request);
        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.internalServerError().body(response);
    }

    @GetMapping("/models")
    public List<AIModel> getAvailableModels() {
        return chatbotService.getAvailableModels();
    }
}
