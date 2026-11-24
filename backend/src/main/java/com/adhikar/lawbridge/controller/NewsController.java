package com.adhikar.lawbridge.controller;

import com.adhikar.lawbridge.model.NewsItem;
import com.adhikar.lawbridge.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public List<NewsItem> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/{id}")
    public ResponseEntity<NewsItem> getNewsById(@PathVariable int id) {
        return newsService.getNewsById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/category/{category}")
    public List<NewsItem> getNewsByCategory(@PathVariable String category) {
        return newsService.getNewsByCategory(category);
    }

    @GetMapping("/search")
    public List<NewsItem> searchNews(@RequestParam String q) {
        return newsService.searchNews(q);
    }
}
