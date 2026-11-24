package com.adhikar.lawbridge.model;

import java.util.List;

public class ScamAlert {
    private String id;
    private String title;
    private String slug;
    private String category;
    private String description;
    private String riskLevel;
    private List<String> warningSigns;
    private String howItWorks;
    private String exampleScenario;
    private List<String> prevention;
    private List<String> whatToDo;
    private List<String> whereToReport;
    private List<OfficialResourceLink> officialResources;
    private String lastReviewed;
    private boolean isPublished;

    public ScamAlert() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getRiskLevel() { return riskLevel; }
    public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

    public List<String> getWarningSigns() { return warningSigns; }
    public void setWarningSigns(List<String> warningSigns) { this.warningSigns = warningSigns; }

    public String getHowItWorks() { return howItWorks; }
    public void setHowItWorks(String howItWorks) { this.howItWorks = howItWorks; }

    public String getExampleScenario() { return exampleScenario; }
    public void setExampleScenario(String exampleScenario) { this.exampleScenario = exampleScenario; }

    public List<String> getPrevention() { return prevention; }
    public void setPrevention(List<String> prevention) { this.prevention = prevention; }

    public List<String> getWhatToDo() { return whatToDo; }
    public void setWhatToDo(List<String> whatToDo) { this.whatToDo = whatToDo; }

    public List<String> getWhereToReport() { return whereToReport; }
    public void setWhereToReport(List<String> whereToReport) { this.whereToReport = whereToReport; }

    public List<OfficialResourceLink> getOfficialResources() { return officialResources; }
    public void setOfficialResources(List<OfficialResourceLink> officialResources) { this.officialResources = officialResources; }

    public String getLastReviewed() { return lastReviewed; }
    public void setLastReviewed(String lastReviewed) { this.lastReviewed = lastReviewed; }

    public boolean isPublished() { return isPublished; }
    public void setPublished(boolean isPublished) { this.isPublished = isPublished; }

    public static class OfficialResourceLink {
        private String name;
        private String url;

        public OfficialResourceLink() {}
        public OfficialResourceLink(String name, String url) { this.name = name; this.url = url; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
