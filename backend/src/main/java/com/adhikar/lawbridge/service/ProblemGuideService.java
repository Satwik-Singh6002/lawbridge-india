package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.ProblemGuide;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;

@Service
public class ProblemGuideService {
    private List<ProblemGuide> problemGuides = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public ProblemGuideService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        problemGuides = objectMapper.readValue(new ClassPathResource("data/problemGuides.json").getInputStream(), new TypeReference<>() {});
    }

    public List<ProblemGuide> getAllProblemGuides() { return problemGuides; }

    public Optional<ProblemGuide> getProblemGuideBySlug(String slug) {
        return problemGuides.stream().filter(p -> p.getSlug().equals(slug)).findFirst();
    }

    public Optional<ProblemGuide> getProblemGuideByCategory(String category) {
        return problemGuides.stream().filter(p -> p.getCategory().equalsIgnoreCase(category)).findFirst();
    }
}
