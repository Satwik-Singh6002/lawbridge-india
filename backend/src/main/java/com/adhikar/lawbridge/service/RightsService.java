package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.RightsArticle;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class RightsService {
    private List<RightsArticle> rightsArticles = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public RightsService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        rightsArticles = objectMapper.readValue(new ClassPathResource("data/rightsArticles.json").getInputStream(), new TypeReference<>() {});
    }

    public List<RightsArticle> getAllRightsArticles() { return rightsArticles; }

    public Optional<RightsArticle> getRightsArticleBySlug(String slug) {
        return rightsArticles.stream().filter(r -> r.getSlug().equals(slug)).findFirst();
    }

    public List<RightsArticle> getRightsArticlesByCategory(String category) {
        return rightsArticles.stream().filter(r -> r.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return List.of("Consumer Rights", "Cyber Safety", "Employment Rights", "Women's Rights",
                "Senior Citizen Rights", "Student Rights", "Tenant Rights", "Banking Rights",
                "Digital Rights", "Police & Legal Rights", "Property Basics", "Government Services");
    }
}
