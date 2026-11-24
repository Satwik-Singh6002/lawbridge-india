package com.adhikar.lawbridge.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {
    @Value("${openrouter.api.url}")
    private String openRouterUrl;

    @Bean
    public WebClient openRouterWebClient() {
        return WebClient.builder().baseUrl(openRouterUrl).build();
    }
}
