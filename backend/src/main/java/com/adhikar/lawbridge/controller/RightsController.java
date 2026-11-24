package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.RightsArticle;
import com.adhikar.lawbridge.service.RightsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rights")
public class RightsController {

    private final RightsService rightsService;

    public RightsController(RightsService rightsService) {
        this.rightsService = rightsService;
    }

    @GetMapping
    public List<RightsArticle> getAllRightsArticles() {
        return rightsService.getAllRightsArticles();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<RightsArticle> getRightsArticleBySlug(@PathVariable String slug) {
        return rightsService.getRightsArticleBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<RightsArticle> getRightsArticlesByCategory(@PathVariable String category) {
        return rightsService.getRightsArticlesByCategory(category);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return rightsService.getCategories();
    }
}
