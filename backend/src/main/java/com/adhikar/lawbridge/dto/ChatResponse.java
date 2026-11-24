package com.adhikar.lawbridge.dto;

public class ChatResponse {
    private String reply;
    private String model;
    private boolean success;
    private String error;

    public ChatResponse() {}

    public ChatResponse(String reply, String model, boolean success, String error) {
        this.reply = reply;
        this.model = model;
        this.success = success;
        this.error = error;
    }

    public static Builder builder() {
        return new Builder();
    }

    public String getReply() { return reply; }
    public void setReply(String reply) { this.reply = reply; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getError() { return error; }
    public void setError(String error) { this.error = error; }

    public static class Builder {
        private String reply;
        private String model;
        private boolean success;
        private String error;

        public Builder reply(String reply) { this.reply = reply; return this; }
        public Builder model(String model) { this.model = model; return this; }
        public Builder success(boolean success) { this.success = success; return this; }
        public Builder error(String error) { this.error = error; return this; }

        public ChatResponse build() {
            return new ChatResponse(reply, model, success, error);
        }
    }
}
