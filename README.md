# ⚖️ ADHIKAR — India's Legal & Democratic Empowerment Platform

> **अधिकार** (Adhikār) — *"Right"* in Hindi

**ADHIKAR** is a comprehensive, AI-powered legal awareness platform designed to make Indian law accessible to every citizen. Built with modern web technologies, it provides curated legal information in 12+ Indian languages.

![ADHIKAR](https://img.shields.io/badge/Platform-ADHIKAR-FF9933?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMiAzdjE4bTktOS04LTQtOCA0bDgtNCA4IDQiLz48L3N2Zz4=)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📜 **Legal Database** | 1,500+ Indian laws, acts, and constitutional provisions |
| ⚖️ **Landmark Cases** | Curated repository of landmark judgments across categories |
| 🤖 **Vidhi Sahayak AI** | 24/7 AI-powered legal assistant (multilingual) |
| 📊 **Crime Analytics** | State-wise crime trend visualizations from NCRB data |
| 🌐 **12+ Languages** | English, Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati |
| 📰 **Legal News** | Curated legal news with AI-powered case briefs |
| 🏛️ **Government Portals** | Direct links to official government services |
| 📖 **Legal Dictionary** | Searchable glossary of legal terms |
| 🧠 **Legal Quiz** | Interactive quiz to test legal knowledge |
| 💡 **Daily Legal Tips** | Daily curated tips on citizen rights |
| 🔖 **Bookmarks** | Save laws and articles to your personal library |
| 🚨 **Emergency Helplines** | Quick access to national helpline numbers |

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build**: Vite 5 (SWC)
- **Styling**: TailwindCSS 3 + shadcn/ui
- **Animations**: GSAP + CSS Animations
- **Routing**: React Router DOM v6
- **State**: TanStack React Query
- **i18n**: i18next (8 languages)
- **AI**: OpenRouter API (Gemini 2.0 Flash)
- **Smooth Scroll**: Lenis

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/adhikar.git
cd adhikar/lawbridge-india

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ...          # Feature sections
├── data/            # Static data (laws, news, analytics)
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization config + locales
├── lib/             # Utilities
├── pages/           # Route pages
└── main.tsx         # App entry point
```

---

## 🌍 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| हिन्दी (Hindi) | `hi` | ✅ Complete |
| தமிழ் (Tamil) | `ta` | ✅ Complete |
| తెలుగు (Telugu) | `te` | ✅ Complete |
| বাংলা (Bengali) | `bn` | ✅ Complete |
| मराठी (Marathi) | `mr` | ✅ Complete |
| ಕನ್ನಡ (Kannada) | `kn` | ✅ Complete |
| ગુજરાતી (Gujarati) | `gu` | ✅ Complete |

---

## ⚠️ Disclaimer

ADHIKAR is an **educational platform** and does **not** provide professional legal advice. All information is sourced from publicly available government databases and legal texts. For specific legal matters, please consult a qualified advocate.

---

## 📄 License

This project is for educational purposes. Indian legal texts and government data referenced are public domain.

---

<p align="center">
  <strong>⚖️ ADHIKAR — Know Your Laws. Claim Your Rights. ⚖️</strong>
</p>
