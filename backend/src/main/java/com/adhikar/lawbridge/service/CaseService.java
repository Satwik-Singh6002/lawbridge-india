package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.LegalCase;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CaseService {
    private List<LegalCase> cases = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public CaseService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        cases = objectMapper.readValue(new ClassPathResource("data/cases.json").getInputStream(), new TypeReference<>() {});
    }

    public List<LegalCase> getAllCases() { return cases; }

    public Optional<LegalCase> getCaseBySlug(String slug) {
        return cases.stream().filter(c -> c.getSlug().equals(slug)).findFirst();
    }

    public Optional<LegalCase> getCaseById(String id) {
        return cases.stream().filter(c -> c.getId().equals(id)).findFirst();
    }

    public List<LegalCase> getCasesByCategory(String category) {
        return cases.stream().filter(c -> c.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }

    public List<LegalCase> searchCases(String query) {
        String q = query.toLowerCase();
        return cases.stream().filter(c -> c.getTitle().toLowerCase().contains(q)
                || c.getSummary().toLowerCase().contains(q)
                || c.getCategory().toLowerCase().contains(q)).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return List.of("Supreme Court", "High Court", "Consumer", "Cyber", "Constitutional",
                "Criminal Law", "Civil Law", "Technology & Law", "Women's Rights");
    }
}
