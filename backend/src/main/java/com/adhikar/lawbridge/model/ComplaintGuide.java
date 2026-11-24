package com.adhikar.lawbridge.model;

import java.util.List;

public class ComplaintGuide {
    private String id;
    private String title;
    private String slug;
    private String category;
    private String icon;
    private String description;
    private List<Step> steps;
    private List<String> requiredDocuments;
    private List<OfficialLink> officialLinks;
    private List<String> importantWarnings;
    private List<String> followUpSteps;
    private String lastReviewed;

    public ComplaintGuide() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<Step> getSteps() { return steps; }
    public void setSteps(List<Step> steps) { this.steps = steps; }

    public List<String> getRequiredDocuments() { return requiredDocuments; }
    public void setRequiredDocuments(List<String> requiredDocuments) { this.requiredDocuments = requiredDocuments; }

    public List<OfficialLink> getOfficialLinks() { return officialLinks; }
    public void setOfficialLinks(List<OfficialLink> officialLinks) { this.officialLinks = officialLinks; }

    public List<String> getImportantWarnings() { return importantWarnings; }
    public void setImportantWarnings(List<String> importantWarnings) { this.importantWarnings = importantWarnings; }

    public List<String> getFollowUpSteps() { return followUpSteps; }
    public void setFollowUpSteps(List<String> followUpSteps) { this.followUpSteps = followUpSteps; }

    public String getLastReviewed() { return lastReviewed; }
    public void setLastReviewed(String lastReviewed) { this.lastReviewed = lastReviewed; }

    public static class Step {
        private int stepNumber;
        private String title;
        private String description;

        public Step() {}
        public Step(int stepNumber, String title, String description) {
            this.stepNumber = stepNumber;
            this.title = title;
            this.description = description;
        }
        public int getStepNumber() { return stepNumber; }
        public void setStepNumber(int stepNumber) { this.stepNumber = stepNumber; }
        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }

    public static class OfficialLink {
        private String name;
        private String url;

        public OfficialLink() {}
        public OfficialLink(String name, String url) { this.name = name; this.url = url; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
