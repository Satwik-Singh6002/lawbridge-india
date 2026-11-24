package com.adhikar.lawbridge.model;

import java.util.List;

public class ProblemGuide {
    private String id;
    private String category;
    private String slug;
    private String icon;
    private String color;
    private String whatHappened;
    private List<String> immediateSteps;
    private List<Authority> authorities;
    private List<String> documentsToKeep;
    private List<String> whatToAvoid;
    private List<OfficialResourceLink> officialResources;
    private String whenToSeekLegal;

    public ProblemGuide() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public String getWhatHappened() { return whatHappened; }
    public void setWhatHappened(String whatHappened) { this.whatHappened = whatHappened; }

    public List<String> getImmediateSteps() { return immediateSteps; }
    public void setImmediateSteps(List<String> immediateSteps) { this.immediateSteps = immediateSteps; }

    public List<Authority> getAuthorities() { return authorities; }
    public void setAuthorities(List<Authority> authorities) { this.authorities = authorities; }

    public List<String> getDocumentsToKeep() { return documentsToKeep; }
    public void setDocumentsToKeep(List<String> documentsToKeep) { this.documentsToKeep = documentsToKeep; }

    public List<String> getWhatToAvoid() { return whatToAvoid; }
    public void setWhatToAvoid(List<String> whatToAvoid) { this.whatToAvoid = whatToAvoid; }

    public List<OfficialResourceLink> getOfficialResources() { return officialResources; }
    public void setOfficialResources(List<OfficialResourceLink> officialResources) { this.officialResources = officialResources; }

    public String getWhenToSeekLegal() { return whenToSeekLegal; }
    public void setWhenToSeekLegal(String whenToSeekLegal) { this.whenToSeekLegal = whenToSeekLegal; }

    public static class Authority {
        private String name;
        private String contact;
        private String url;

        public Authority() {}
        public Authority(String name, String contact, String url) {
            this.name = name;
            this.contact = contact;
            this.url = url;
        }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getContact() { return contact; }
        public void setContact(String contact) { this.contact = contact; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }

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
