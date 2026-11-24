package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.LegalCategory;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;

@Service
public class LegalCategoryService {
    private Map<String, LegalCategory> legalCategories = new HashMap<>();
    private final ObjectMapper objectMapper;

    public LegalCategoryService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        legalCategories = objectMapper.readValue(new ClassPathResource("data/legalCategories.json").getInputStream(), new TypeReference<>() {});
    }

    public Map<String, LegalCategory> getAllCategories() { return legalCategories; }

    public Optional<LegalCategory> getCategoryBySlug(String slug) {
        return Optional.ofNullable(legalCategories.get(slug));
    }
}
