package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.DictionaryItem;
import com.adhikar.lawbridge.service.DictionaryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dictionary")
public class DictionaryController {

    private final DictionaryService dictionaryService;

    public DictionaryController(DictionaryService dictionaryService) {
        this.dictionaryService = dictionaryService;
    }

    @GetMapping
    public List<DictionaryItem> getAllTerms() {
        return dictionaryService.getAllTerms();
    }

    @GetMapping("/search")
    public List<DictionaryItem> searchTerms(@RequestParam String q) {
        return dictionaryService.searchTerms(q);
    }

    @GetMapping("/category/{category}")
    public List<DictionaryItem> getTermsByCategory(@PathVariable String category) {
        return dictionaryService.getTermsByCategory(category);
    }
}
