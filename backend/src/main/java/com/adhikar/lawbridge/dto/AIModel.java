package com.adhikar.lawbridge.dto;

public class AIModel {
    private String id;
    private String label;
    private String provider;
    private String description;
    private String color;

    public AIModel() {}

    public AIModel(String id, String label, String provider, String description, String color) {
        this.id = id;
        this.label = label;
        this.provider = provider;
        this.description = description;
        this.color = color;
    }

    public static Builder builder() {
        return new Builder();
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public static class Builder {
        private String id;
        private String label;
        private String provider;
        private String description;
        private String color;

        public Builder id(String id) { this.id = id; return this; }
        public Builder label(String label) { this.label = label; return this; }
        public Builder provider(String provider) { this.provider = provider; return this; }
        public Builder description(String description) { this.description = description; return this; }
        public Builder color(String color) { this.color = color; return this; }

        public AIModel build() {
            return new AIModel(id, label, provider, description, color);
        }
    }
}
