package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.ScamAlert;
import com.adhikar.lawbridge.service.ScamAlertService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scam-alerts")
public class ScamAlertController {

    private final ScamAlertService scamAlertService;

    public ScamAlertController(ScamAlertService scamAlertService) {
        this.scamAlertService = scamAlertService;
    }

    @GetMapping
    public List<ScamAlert> getAllScamAlerts() {
        return scamAlertService.getAllScamAlerts();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ScamAlert> getScamAlertBySlug(@PathVariable String slug) {
        return scamAlertService.getScamAlertBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<ScamAlert> getScamAlertsByCategory(@PathVariable String category) {
        return scamAlertService.getScamAlertsByCategory(category);
    }

    @GetMapping("/risk-level/{riskLevel}")
    public List<ScamAlert> getScamAlertsByRiskLevel(@PathVariable String riskLevel) {
        return scamAlertService.getScamAlertsByRiskLevel(riskLevel);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return scamAlertService.getCategories();
    }
}
