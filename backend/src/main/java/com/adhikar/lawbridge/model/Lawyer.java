package com.adhikar.lawbridge.model;

import java.util.List;

public class Lawyer {
    private String id;
    private String name;
    private String slug;
    private String profileImage;
    private String verificationStatus;
    private List<String> practiceAreas;
    private String city;
    private String state;
    private int experience;
    private List<String> languages;
    private String description;
    private List<String> consultationOptions;
    private double rating;
    private int reviewCount;
    private String barEnrollment;
    private String availability;
    private String education;

    public Lawyer() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getProfileImage() { return profileImage; }
    public void setProfileImage(String profileImage) { this.profileImage = profileImage; }

    public String getVerificationStatus() { return verificationStatus; }
    public void setVerificationStatus(String verificationStatus) { this.verificationStatus = verificationStatus; }

    public List<String> getPracticeAreas() { return practiceAreas; }
    public void setPracticeAreas(List<String> practiceAreas) { this.practiceAreas = practiceAreas; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public int getExperience() { return experience; }
    public void setExperience(int experience) { this.experience = experience; }

    public List<String> getLanguages() { return languages; }
    public void setLanguages(List<String> languages) { this.languages = languages; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getConsultationOptions() { return consultationOptions; }
    public void setConsultationOptions(List<String> consultationOptions) { this.consultationOptions = consultationOptions; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getReviewCount() { return reviewCount; }
    public void setReviewCount(int reviewCount) { this.reviewCount = reviewCount; }

    public String getBarEnrollment() { return barEnrollment; }
    public void setBarEnrollment(String barEnrollment) { this.barEnrollment = barEnrollment; }

    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }

    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }
}
