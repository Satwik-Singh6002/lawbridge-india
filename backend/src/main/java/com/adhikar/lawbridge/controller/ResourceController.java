package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.OfficialResourceItem;
import com.adhikar.lawbridge.service.ResourceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping
    public List<OfficialResourceItem> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OfficialResourceItem> getResourceById(@PathVariable String id) {
        return resourceService.getResourceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<OfficialResourceItem> getResourcesByCategory(@PathVariable String category) {
        return resourceService.getResourcesByCategory(category);
    }

    @GetMapping("/type/{type}")
    public List<OfficialResourceItem> getResourcesByType(@PathVariable String type) {
        return resourceService.getResourcesByType(type);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return resourceService.getCategories();
    }
}
