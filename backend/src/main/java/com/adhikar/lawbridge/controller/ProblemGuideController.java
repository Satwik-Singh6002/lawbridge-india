package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.ProblemGuide;
import com.adhikar.lawbridge.service.ProblemGuideService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/problem-guides")
public class ProblemGuideController {

    private final ProblemGuideService problemGuideService;

    public ProblemGuideController(ProblemGuideService problemGuideService) {
        this.problemGuideService = problemGuideService;
    }

    @GetMapping
    public List<ProblemGuide> getAllProblemGuides() {
        return problemGuideService.getAllProblemGuides();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ProblemGuide> getProblemGuideBySlug(@PathVariable String slug) {
        return problemGuideService.getProblemGuideBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<ProblemGuide> getProblemGuideByCategory(@PathVariable String category) {
        return problemGuideService.getProblemGuideByCategory(category)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
