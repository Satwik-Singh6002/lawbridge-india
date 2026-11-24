/**
 * ADHIKAR LawBridge - Java Backend API Client
 * Connects the React frontend to the Spring Boot Java backend running at http://localhost:8080.
 * Includes automatic fallback to local data if the Java backend is not reachable.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.debug(`[Java API] Fallback for ${endpoint}:`, err);
    return fallbackData;
  }
}

// ----------------- Health -----------------
export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return await res.json();
  } catch {
    return { status: 'DOWN' };
  }
}

// ----------------- Legal Cases -----------------
export async function getCases() {
  const { casesData } = await import('@/data/cases');
  return fetchWithFallback('/cases', casesData);
}

export async function getCaseBySlug(slug: string) {
  const { casesData } = await import('@/data/cases');
  const fallback = casesData.find((c) => c.slug === slug);
  return fetchWithFallback(`/cases/slug/${slug}`, fallback);
}

// ----------------- Lawyers -----------------
export async function getLawyers() {
  const { lawyersData } = await import('@/data/lawyers');
  return fetchWithFallback('/lawyers', lawyersData);
}

export async function getLawyerBySlug(slug: string) {
  const { lawyersData } = await import('@/data/lawyers');
  const fallback = lawyersData.find((l) => l.slug === slug);
  return fetchWithFallback(`/lawyers/slug/${slug}`, fallback);
}

// ----------------- Scam Alerts -----------------
export async function getScamAlerts() {
  const { scamAlertsData } = await import('@/data/scamAlerts');
  return fetchWithFallback('/scam-alerts', scamAlertsData);
}

export async function getScamAlertBySlug(slug: string) {
  const { scamAlertsData } = await import('@/data/scamAlerts');
  const fallback = scamAlertsData.find((s) => s.slug === slug);
  return fetchWithFallback(`/scam-alerts/slug/${slug}`, fallback);
}

// ----------------- Rights Articles -----------------
export async function getRightsArticles() {
  const { rightsArticlesData } = await import('@/data/rightsArticles');
  return fetchWithFallback('/rights', rightsArticlesData);
}

export async function getRightsArticleBySlug(slug: string) {
  const { rightsArticlesData } = await import('@/data/rightsArticles');
  const fallback = rightsArticlesData.find((r) => r.slug === slug);
  return fetchWithFallback(`/rights/slug/${slug}`, fallback);
}

// ----------------- Complaints -----------------
export async function getComplaintGuides() {
  const { complaintGuidesData } = await import('@/data/complaintGuides');
  return fetchWithFallback('/complaints', complaintGuidesData);
}

export async function getComplaintGuideBySlug(slug: string) {
  const { complaintGuidesData } = await import('@/data/complaintGuides');
  const fallback = complaintGuidesData.find((c) => c.slug === slug);
  return fetchWithFallback(`/complaints/slug/${slug}`, fallback);
}

// ----------------- Official Resources -----------------
export async function getResources() {
  const { officialResourcesData } = await import('@/data/resources');
  return fetchWithFallback('/resources', officialResourcesData);
}

// ----------------- Legal News -----------------
export async function getNews() {
  const { newsItems } = await import('@/data/legalNews');
  return fetchWithFallback('/news', newsItems);
}

// ----------------- Problem Guides -----------------
export async function getProblemGuides() {
  const { problemGuidesData } = await import('@/data/problemGuides');
  return fetchWithFallback('/problem-guides', problemGuidesData);
}

export async function getProblemGuideBySlug(slug: string) {
  const { problemGuidesData } = await import('@/data/problemGuides');
  const fallback = problemGuidesData.find((p) => p.slug === slug);
  return fetchWithFallback(`/problem-guides/slug/${slug}`, fallback);
}

// ----------------- Legal Categories -----------------
export async function getLegalCategories() {
  const { legalCategoriesData } = await import('@/data/legalCategories');
  return fetchWithFallback('/legal-categories', legalCategoriesData);
}

export async function getLegalCategoryBySlug(slug: string) {
  const { legalCategoriesData } = await import('@/data/legalCategories');
  const fallback = legalCategoriesData[slug];
  return fetchWithFallback(`/legal-categories/${slug}`, fallback);
}

// ----------------- Legal Dictionary -----------------
export async function getDictionaryTerms() {
  const { legalDictionary } = await import('@/data/legalDictionary');
  return fetchWithFallback('/dictionary', legalDictionary);
}

// ----------------- AI Chatbot (Vidhi Sahayak) via Java Backend -----------------
export async function sendChatMessageToJava(
  message: string,
  language: string,
  modelId: string,
  history: Array<{ role: 'user' | 'bot'; text: string }>
) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, language, modelId, history }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
