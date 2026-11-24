package com.adhikar.lawbridge.model;

import java.util.List;

public class LegalCase {
    private String id;
    private String title;
    private String slug;
    private String court;
    private int year;
    private String category;
    private String summary;
    private String keyIssue;
    private String whatHappened;
    private String decision;
    private String whyItMatters;
    private String whatCitizensShouldLearn;
    private String officialSource;
    private List<String> relatedRights;
    private int popularity;

    public LegalCase() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getCourt() { return court; }
    public void setCourt(String court) { this.court = court; }

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getKeyIssue() { return keyIssue; }
    public void setKeyIssue(String keyIssue) { this.keyIssue = keyIssue; }

    public String getWhatHappened() { return whatHappened; }
    public void setWhatHappened(String whatHappened) { this.whatHappened = whatHappened; }

    public String getDecision() { return decision; }
    public void setDecision(String decision) { this.decision = decision; }

    public String getWhyItMatters() { return whyItMatters; }
    public void setWhyItMatters(String whyItMatters) { this.whyItMatters = whyItMatters; }

    public String getWhatCitizensShouldLearn() { return whatCitizensShouldLearn; }
    public void setWhatCitizensShouldLearn(String whatCitizensShouldLearn) { this.whatCitizensShouldLearn = whatCitizensShouldLearn; }

    public String getOfficialSource() { return officialSource; }
    public void setOfficialSource(String officialSource) { this.officialSource = officialSource; }

    public List<String> getRelatedRights() { return relatedRights; }
    public void setRelatedRights(List<String> relatedRights) { this.relatedRights = relatedRights; }

    public int getPopularity() { return popularity; }
    public void setPopularity(int popularity) { this.popularity = popularity; }
}
