package com.adhikar.lawbridge.model;

public class DictionaryItem {
    private String term;
    private String definition;
    private String category;

    public DictionaryItem() {}
    public DictionaryItem(String term, String definition, String category) {
        this.term = term;
        this.definition = definition;
        this.category = category;
    }

    public String getTerm() { return term; }
    public void setTerm(String term) { this.term = term; }

    public String getDefinition() { return definition; }
    public void setDefinition(String definition) { this.definition = definition; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}
