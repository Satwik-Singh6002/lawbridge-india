package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.NewsItem;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class NewsService {
    private List<NewsItem> newsItems = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public NewsService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        newsItems = objectMapper.readValue(new ClassPathResource("data/legalNews.json").getInputStream(), new TypeReference<>() {});
    }

    public List<NewsItem> getAllNews() { return newsItems; }

    public Optional<NewsItem> getNewsById(int id) {
        return newsItems.stream().filter(n -> n.getId() == id).findFirst();
    }

    public List<NewsItem> getNewsByCategory(String category) {
        return newsItems.stream().filter(n -> n.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }

    public List<NewsItem> searchNews(String query) {
        String q = query.toLowerCase();
        return newsItems.stream().filter(n -> n.getTitle().toLowerCase().contains(q) || n.getSummary().toLowerCase().contains(q)).collect(Collectors.toList());
    }
}
