package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.OfficialResourceItem;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ResourceService {
    private List<OfficialResourceItem> resources = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public ResourceService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        resources = objectMapper.readValue(new ClassPathResource("data/resources.json").getInputStream(), new TypeReference<>() {});
    }

    public List<OfficialResourceItem> getAllResources() { return resources; }

    public Optional<OfficialResourceItem> getResourceById(String id) {
        return resources.stream().filter(r -> r.getId().equals(id)).findFirst();
    }

    public List<OfficialResourceItem> getResourcesByCategory(String category) {
        return resources.stream().filter(r -> r.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }

    public List<OfficialResourceItem> getResourcesByType(String type) {
        return resources.stream().filter(r -> r.getType().equalsIgnoreCase(type)).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return List.of("Cyber Crime", "Legal Services", "Consumer Protection", "Financial",
                "Government Portals", "Emergency", "Women & Children", "Tax & Revenue");
    }
}
