package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.Lawyer;
import com.adhikar.lawbridge.service.LawyerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lawyers")
public class LawyerController {

    private final LawyerService lawyerService;

    public LawyerController(LawyerService lawyerService) {
        this.lawyerService = lawyerService;
    }

    @GetMapping
    public List<Lawyer> getAllLawyers() {
        return lawyerService.getAllLawyers();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Lawyer> getLawyerBySlug(@PathVariable String slug) {
        return lawyerService.getLawyerBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<Lawyer> searchLawyers(
            @RequestParam(required = false) String q,
            @RequestParam(required = false) String state,
            @RequestParam(required = false) String practiceArea,
            @RequestParam(required = false) String language) {
        return lawyerService.searchLawyers(q, state, practiceArea, language);
    }

    @GetMapping("/practice-areas")
    public List<String> getPracticeAreas() {
        return lawyerService.getPracticeAreas();
    }

    @GetMapping("/states")
    public List<String> getStates() {
        return lawyerService.getStates();
    }

    @GetMapping("/languages")
    public List<String> getLanguages() {
        return lawyerService.getLanguages();
    }
}
