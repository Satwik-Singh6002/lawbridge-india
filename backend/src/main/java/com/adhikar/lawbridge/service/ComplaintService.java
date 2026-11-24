package com.adhikar.lawbridge.service;

import com.adhikar.lawbridge.model.ComplaintGuide;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ComplaintService {
    private List<ComplaintGuide> complaintGuides = new ArrayList<>();
    private final ObjectMapper objectMapper;

    public ComplaintService(ObjectMapper objectMapper) { this.objectMapper = objectMapper; }

    @PostConstruct
    public void init() throws IOException {
        complaintGuides = objectMapper.readValue(new ClassPathResource("data/complaintGuides.json").getInputStream(), new TypeReference<>() {});
    }

    public List<ComplaintGuide> getAllComplaintGuides() { return complaintGuides; }

    public Optional<ComplaintGuide> getComplaintGuideBySlug(String slug) {
        return complaintGuides.stream().filter(c -> c.getSlug().equals(slug)).findFirst();
    }

    public List<ComplaintGuide> getComplaintGuidesByCategory(String category) {
        return complaintGuides.stream().filter(c -> c.getCategory().equalsIgnoreCase(category)).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return List.of("Cyber Crime", "Consumer Complaint", "Banking Complaint", "Police Complaint",
                "Government Complaint", "Workplace Complaint", "Online Fraud", "Traffic Violation", "Tax Complaint", "Environmental Complaint");
    }
}
