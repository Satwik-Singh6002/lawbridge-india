package com.adhikar.lawbridge.model;

import java.util.List;

public class LegalCategory {
    private String slug;
    private String label;
    private String subtitle;
    private String description;
    private List<LawEntry> laws;
    private List<String> fundamentalRights;
    private List<KeyJudgment> keyJudgments;

    public LegalCategory() {}

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<LawEntry> getLaws() { return laws; }
    public void setLaws(List<LawEntry> laws) { this.laws = laws; }

    public List<String> getFundamentalRights() { return fundamentalRights; }
    public void setFundamentalRights(List<String> fundamentalRights) { this.fundamentalRights = fundamentalRights; }

    public List<KeyJudgment> getKeyJudgments() { return keyJudgments; }
    public void setKeyJudgments(List<KeyJudgment> keyJudgments) { this.keyJudgments = keyJudgments; }

    public static class LawEntry {
        private String title;
        private String description;
        private String section;
        private String type;

        public LawEntry() {}

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public String getSection() { return section; }
        public void setSection(String section) { this.section = section; }

        public String getType() { return type; }
        public void setType(String type) { this.type = type; }
    }

    public static class KeyJudgment {
        private String name;
        private String year;
        private String summary;

        public KeyJudgment() {}

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getYear() { return year; }
        public void setYear(String year) { this.year = year; }

        public String getSummary() { return summary; }
        public void setSummary(String summary) { this.summary = summary; }
    }
}
