# ADHIKAR LawBridge India — Java Spring Boot Backend

This is the enterprise **Java Spring Boot 3** backend for **ADHIKAR (LawBridge India)** — India's Legal Awareness Platform.

---

## 🏗️ Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Spring Boot 3.2.5 |
| **Language** | Java 17+ (Compatible with Java 17, 21, and 25) |
| **Build Tool** | Apache Maven |
| **HTTP Client** | Spring WebFlux (`WebClient`) for OpenRouter AI API |
| **JSON Parser** | Jackson (`com.fasterxml.jackson`) |
| **Data Models** | Lombok (`@Data`, `@Builder`, `@NoArgsConstructor`, `@AllArgsConstructor`) |
| **API Architecture** | RESTful JSON APIs with CORS enabled for `http://localhost:5173` |

---

## 📁 Project Structure

```
backend/
├── pom.xml                                      # Maven configuration & dependencies
├── README.md                                    # This documentation
└── src/
    ├── main/
    │   ├── java/com/adhikar/lawbridge/
    │   │   ├── LawBridgeApplication.java        # Main Spring Boot entry point
    │   │   ├── config/
    │   │   │   ├── CorsConfig.java              # Cross-Origin Resource Sharing (CORS) setup
    │   │   │   └── WebClientConfig.java         # OpenRouter WebClient bean
    │   │   ├── model/                           # Java domain models
    │   │   │   ├── LegalCase.java
    │   │   │   ├── Lawyer.java
    │   │   │   ├── ScamAlert.java
    │   │   │   ├── RightsArticle.java
    │   │   │   ├── ComplaintGuide.java
    │   │   │   ├── OfficialResourceItem.java
    │   │   │   ├── NewsItem.java
    │   │   │   ├── ProblemGuide.java
    │   │   │   ├── LegalCategory.java
    │   │   │   └── DictionaryItem.java
    │   │   ├── dto/                             # Data Transfer Objects
    │   │   │   ├── ChatRequest.java
    │   │   │   ├── ChatResponse.java
    │   │   │   └── AIModel.java
    │   │   ├── service/                         # Business logic & data loaders
    │   │   │   ├── CaseService.java
    │   │   │   ├── LawyerService.java
    │   │   │   ├── ScamAlertService.java
    │   │   │   ├── RightsService.java
    │   │   │   ├── ComplaintService.java
    │   │   │   ├── ResourceService.java
    │   │   │   ├── NewsService.java
    │   │   │   ├── ProblemGuideService.java
    │   │   │   ├── LegalCategoryService.java
    │   │   │   ├── DictionaryService.java
    │   │   │   └── ChatbotService.java          # OpenRouter LLM integration
    │   │   └── controller/                      # REST API Endpoints
    │   │       ├── HealthController.java        # GET /api/health
    │   │       ├── CaseController.java          # /api/cases
    │   │       ├── LawyerController.java        # /api/lawyers
    │   │       ├── ScamAlertController.java     # /api/scam-alerts
    │   │       ├── RightsController.java        # /api/rights
    │   │       ├── ComplaintController.java     # /api/complaints
    │   │       ├── ResourceController.java      # /api/resources
    │   │       ├── NewsController.java          # /api/news
    │   │       ├── ProblemGuideController.java  # /api/problem-guides
    │   │       ├── LegalCategoryController.java # /api/legal-categories
    │   │       ├── DictionaryController.java    # /api/dictionary
    │   │       └── ChatbotController.java       # POST /api/chat
    │   └── resources/
    │       ├── application.properties           # Spring configuration
    │       └── data/                            # JSON Seed Data (extracted from TS)
    │           ├── cases.json
    │           ├── lawyers.json
    │           ├── scamAlerts.json
    │           ├── rightsArticles.json
    │           ├── complaintGuides.json
    │           ├── resources.json
    │           ├── legalNews.json
    │           ├── problemGuides.json
    │           ├── legalCategories.json
    │           ├── legalDictionary.json
    │           └── categoryAnalytics.json
    └── test/java/com/adhikar/lawbridge/
        └── LawBridgeApplicationTests.java       # Spring Boot context tests
```

---

## 🚀 How to Run

### Prerequisites
1. **Java JDK 17+** (JDK 17, 21, or 25). Verify with:
   ```powershell
   java -version
   ```
2. **Apache Maven** (Download from [maven.apache.org](https://maven.apache.org/download.cgi) and add `bin` to `PATH`).

### Build & Run
```powershell
cd backend
mvn clean package
mvn spring-boot:run
```

The server starts on port `8080`:
- **Health check**: `http://localhost:8080/api/health`

---

## 📡 REST API Documentation

### 1. Health
- `GET /api/health` — Service status check

### 2. Legal Cases
- `GET /api/cases` — List all landmark cases
- `GET /api/cases/slug/{slug}` — Get case details by slug
- `GET /api/cases/{id}` — Get case by ID
- `GET /api/cases/category/{category}` — Filter cases by category
- `GET /api/cases/search?q={query}` — Search cases
- `GET /api/cases/categories` — List all case categories

### 3. Lawyers
- `GET /api/lawyers` — List all lawyer profiles
- `GET /api/lawyers/slug/{slug}` — Lawyer profile by slug
- `GET /api/lawyers/search?q=&state=&practiceArea=&language=` — Filter lawyers
- `GET /api/lawyers/practice-areas` — List practice areas
- `GET /api/lawyers/states` — List supported states
- `GET /api/lawyers/languages` — List supported languages

### 4. Scam Alerts
- `GET /api/scam-alerts` — List published scams
- `GET /api/scam-alerts/slug/{slug}` — Scam details by slug
- `GET /api/scam-alerts/category/{category}` — Filter by scam category
- `GET /api/scam-alerts/risk-level/{riskLevel}` — Filter by risk (high, medium, low)
- `GET /api/scam-alerts/categories` — List scam categories

### 5. Rights Articles
- `GET /api/rights` — List all Know Your Rights guides
- `GET /api/rights/slug/{slug}` — Guide details by slug
- `GET /api/rights/category/{category}` — Filter by rights category
- `GET /api/rights/categories` — List rights categories

### 6. Complaint Guides
- `GET /api/complaints` — Step-by-step complaint filing procedures
- `GET /api/complaints/slug/{slug}` — Complaint guide by slug
- `GET /api/complaints/category/{category}` — Filter by category
- `GET /api/complaints/categories` — List complaint categories

### 7. Official Resources
- `GET /api/resources` — Government portals and emergency helplines
- `GET /api/resources/{id}` — Resource by ID
- `GET /api/resources/category/{category}` — Filter by category
- `GET /api/resources/type/{type}` — Filter by type (government / aadhikar)

### 8. Legal News
- `GET /api/news` — Landmark legal news articles
- `GET /api/news/{id}` — News item by ID
- `GET /api/news/category/{category}` — Filter by category
- `GET /api/news/search?q={query}` — Search news

### 9. Problem Guides
- `GET /api/problem-guides` — Interactive problem diagnosis guides
- `GET /api/problem-guides/slug/{slug}` — Guide by slug
- `GET /api/problem-guides/category/{category}` — Guide by category

### 10. Legal Categories & Dictionary
- `GET /api/legal-categories` — Deep legal category breakdowns (BNS, POCSO, POSH, IPC)
- `GET /api/legal-categories/{slug}` — Category breakdown by slug
- `GET /api/dictionary` — Legal terms dictionary
- `GET /api/dictionary/search?q={query}` — Search legal terms

### 11. Vidhi Sahayak AI Chatbot
- `POST /api/chat` — Send query to legal AI (routes to OpenRouter with Indian law context & multi-language prompts)
- `GET /api/chat/models` — List available free legal reasoning AI models
