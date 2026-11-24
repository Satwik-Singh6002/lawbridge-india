package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.DictionaryItem;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DictionaryService {
    private List<DictionaryItem> dictionary = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public DictionaryService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        dictionary = objectMapper.readValue(new ClassPathResource("data/legalDictionary.json").getInputStream(), new TypeReference<>() {});
    }

    public List<DictionaryItem> getAllTerms() { return dictionary; }

    public List<DictionaryItem> searchTerms(String query) {
        String q = query.toLowerCase();
        return dictionary.stream().filter(d -> d.getTerm().toLowerCase().contains(q) || d.getDefinition().toLowerCase().contains(q)).collect(Collectors.toList());
    }

    public List<DictionaryItem> getTermsByCategory(String category) {
        return dictionary.stream().filter(d -> d.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }
}
