package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.LegalCase;
import com.adhikar.lawbridge.service.CaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
public class CaseController {

    private final CaseService caseService;

    public CaseController(CaseService caseService) {
        this.caseService = caseService;
    }

    @GetMapping
    public List<LegalCase> getAllCases() {
        return caseService.getAllCases();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<LegalCase> getCaseBySlug(@PathVariable String slug) {
        return caseService.getCaseBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LegalCase> getCaseById(@PathVariable String id) {
        return caseService.getCaseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<LegalCase> getCasesByCategory(@PathVariable String category) {
        return caseService.getCasesByCategory(category);
    }

    @GetMapping("/search")
    public List<LegalCase> searchCases(@RequestParam String q) {
        return caseService.searchCases(q);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return caseService.getCategories();
    }
}
