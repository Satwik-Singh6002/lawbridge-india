package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.Lawyer;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class LawyerService {
    private List<Lawyer> lawyers = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public LawyerService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        lawyers = objectMapper.readValue(new ClassPathResource("data/lawyers.json").getInputStream(), new TypeReference<>() {});
    }

    public List<Lawyer> getAllLawyers() { return lawyers; }

    public Optional<Lawyer> getLawyerBySlug(String slug) {
        return lawyers.stream().filter(l -> l.getSlug().equals(slug)).findFirst();
    }

    public List<Lawyer> searchLawyers(String query, String state, String practiceArea, String language) {
        return lawyers.stream().filter(l -> {
            boolean matches = true;
            if (query != null && !query.isEmpty()) {
                String q = query.toLowerCase();
                matches = l.getName().toLowerCase().contains(q) || l.getCity().toLowerCase().contains(q);
            }
            if (state != null && !state.isEmpty()) matches = matches && l.getState().equalsIgnoreCase(state);
            if (practiceArea != null && !practiceArea.isEmpty())
                matches = matches && l.getPracticeAreas().stream().anyMatch(pa -> pa.equalsIgnoreCase(practiceArea));
            if (language != null && !language.isEmpty())
                matches = matches && l.getLanguages().stream().anyMatch(lang -> lang.equalsIgnoreCase(language));
            return matches;
        }).collect(Collectors.toList());
    }

    public List<String> getPracticeAreas() {
        return List.of("Criminal", "Civil", "Family", "Property", "Consumer", "Cyber Crime",
                "Corporate", "Employment", "Tax", "Banking", "Intellectual Property", "Constitutional", "Environmental");
    }

    public List<String> getStates() {
        return List.of("Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Rajasthan",
                "Gujarat", "West Bengal", "Uttar Pradesh", "Telangana", "Kerala");
    }

    public List<String> getLanguages() {
        return List.of("English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Kannada", "Gujarati", "Malayalam", "Punjabi");
    }
}
