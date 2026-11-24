package com.adhikar.lawbridge.model;

public class OfficialResourceItem {
    private String id;
    private String name;
    private String description;
    private String websiteUrl;
    private String type;
    private String category;
    private String icon;
    private String helplineNumber;
    private String lastVerified;

    public OfficialResourceItem() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getWebsiteUrl() { return websiteUrl; }
    public void setWebsiteUrl(String websiteUrl) { this.websiteUrl = websiteUrl; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getHelplineNumber() { return helplineNumber; }
    public void setHelplineNumber(String helplineNumber) { this.helplineNumber = helplineNumber; }

    public String getLastVerified() { return lastVerified; }
    public void setLastVerified(String lastVerified) { this.lastVerified = lastVerified; }
}
