package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.ScamAlert;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ScamAlertService {
    private List<ScamAlert> scamAlerts = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public ScamAlertService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        scamAlerts = objectMapper.readValue(new ClassPathResource("data/scamAlerts.json").getInputStream(), new TypeReference<>() {});
    }

    public List<ScamAlert> getAllScamAlerts() {
        return scamAlerts.stream().filter(s -> s.isPublished()).collect(Collectors.toList());
    }

    public Optional<ScamAlert> getScamAlertBySlug(String slug) {
        return scamAlerts.stream().filter(s -> s.getSlug().equals(slug)).findFirst();
    }

    public List<ScamAlert> getScamAlertsByCategory(String category) {
        return scamAlerts.stream().filter(s -> s.getCategory().equalsIgnoreCase(category) && s.isPublished()).collect(Collectors.toList());
    }

    public List<ScamAlert> getScamAlertsByRiskLevel(String riskLevel) {
        return scamAlerts.stream().filter(s -> s.getRiskLevel().equalsIgnoreCase(riskLevel) && s.isPublished()).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return List.of("UPI Scam", "OTP Scam", "Digital Arrest", "Fake Job Offer", "Investment Scam",
                "Courier Scam", "Banking Scam", "Phishing", "Fake Customer Care", "Fake Government Notice", "Loan Scam", "Social Media Scam");
    }
}
