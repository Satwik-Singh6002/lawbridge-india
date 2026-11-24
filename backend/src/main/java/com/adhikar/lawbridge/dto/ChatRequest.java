package com.adhikar.lawbridge.dto;

import java.util.List;

public class ChatRequest {
    private String message;
    private String language;
    private String modelId;
    private List<ChatMessage> history;

    public ChatRequest() {}

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getLanguage() { return language; }
    public void setLanguage(String language) { this.language = language; }

    public String getModelId() { return modelId; }
    public void setModelId(String modelId) { this.modelId = modelId; }

    public List<ChatMessage> getHistory() { return history; }
    public void setHistory(List<ChatMessage> history) { this.history = history; }

    public static class ChatMessage {
        private String role;
        private String text;

        public ChatMessage() {}
        public ChatMessage(String role, String text) {
            this.role = role;
            this.text = text;
        }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }

        public String getText() { return text; }
        public void setText(String text) { this.text = text; }
    }
}
