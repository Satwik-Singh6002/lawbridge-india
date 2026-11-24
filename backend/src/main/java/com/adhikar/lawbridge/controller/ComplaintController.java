package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.ComplaintGuide;
import com.adhikar.lawbridge.service.ComplaintService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @GetMapping
    public List<ComplaintGuide> getAllComplaintGuides() {
        return complaintService.getAllComplaintGuides();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ComplaintGuide> getComplaintGuideBySlug(@PathVariable String slug) {
        return complaintService.getComplaintGuideBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<ComplaintGuide> getComplaintGuidesByCategory(@PathVariable String category) {
        return complaintService.getComplaintGuidesByCategory(category);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return complaintService.getCategories();
    }
}
