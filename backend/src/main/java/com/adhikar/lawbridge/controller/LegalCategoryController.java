package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.LegalCategory;
import com.adhikar.lawbridge.service.LegalCategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/legal-categories")
public class LegalCategoryController {

    private final LegalCategoryService legalCategoryService;

    public LegalCategoryController(LegalCategoryService legalCategoryService) {
        this.legalCategoryService = legalCategoryService;
    }

    @GetMapping
    public Map<String, LegalCategory> getAllCategories() {
        return legalCategoryService.getAllCategories();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<LegalCategory> getCategoryBySlug(@PathVariable String slug) {
        return legalCategoryService.getCategoryBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
