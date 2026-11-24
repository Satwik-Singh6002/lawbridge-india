package com.adhikar.lawbridge.model;

import java.util.List;

public class RightsArticle {
    private String id;
    private String title;
    private String slug;
    private String category;
    private String icon;
    private String description;
    private RightsContent content;
    private String lastReviewed;

    public RightsArticle() {}

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

    public RightsContent getContent() { return content; }
    public void setContent(RightsContent content) { this.content = content; }

    public String getLastReviewed() { return lastReviewed; }
    public void setLastReviewed(String lastReviewed) { this.lastReviewed = lastReviewed; }

    public static class RightsContent {
        private String whatIsTheIssue;
        private List<String> yourBasicRights;
        private List<String> whatYouCanDo;
        private List<NameUrl> whereToComplain;
        private List<String> importantDocuments;
        private List<NameUrl> usefulResources;

        public RightsContent() {}

        public String getWhatIsTheIssue() { return whatIsTheIssue; }
        public void setWhatIsTheIssue(String whatIsTheIssue) { this.whatIsTheIssue = whatIsTheIssue; }

        public List<String> getYourBasicRights() { return yourBasicRights; }
        public void setYourBasicRights(List<String> yourBasicRights) { this.yourBasicRights = yourBasicRights; }

        public List<String> getWhatYouCanDo() { return whatYouCanDo; }
        public void setWhatYouCanDo(List<String> whatYouCanDo) { this.whatYouCanDo = whatYouCanDo; }

        public List<NameUrl> getWhereToComplain() { return whereToComplain; }
        public void setWhereToComplain(List<NameUrl> whereToComplain) { this.whereToComplain = whereToComplain; }

        public List<String> getImportantDocuments() { return importantDocuments; }
        public void setImportantDocuments(List<String> importantDocuments) { this.importantDocuments = importantDocuments; }

        public List<NameUrl> getUsefulResources() { return usefulResources; }
        public void setUsefulResources(List<NameUrl> usefulResources) { this.usefulResources = usefulResources; }
    }

    public static class NameUrl {
        private String name;
        private String url;

        public NameUrl() {}
        public NameUrl(String name, String url) { this.name = name; this.url = url; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
