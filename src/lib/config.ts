/**
 * ════════════════════════════════════════════════════════════════
 *  MAX FUNDING — SITE CONFIG (single source of truth)
 *  Edit values HERE. They flow to every page, the schema, and the form.
 * ════════════════════════════════════════════════════════════════
 */

export const SITE = {
  name: "Max Funding",
  legalName: "Max Funding",
  // 🔴 STAGING URL — change to https://www.maxfundingnow.com when you go live
  url: "https://maxfunding.michaeleinwechter.com",
  tagline: "Honest funding that grows your business.",
  description:
    "Get competitive rates, transparent terms, and a dedicated strategist. Working capital, equipment financing, SBA loans & more — funded in days. Checking your rate won't affect your credit.",

  // 🔴 REPLACE THESE TWO with your real public contact info:
  phoneDisplay: "(732,) 233-2067",          // <-- your phone, as shown
  phoneE164: "+17322332067",               // <-- same number, +1 + 10 digits, no spaces
  email: "joel@maxfunding.org",                // <-- your public inbox

  author: "Joel Carbajal, President",
  founder: "Joel Carbajal",
} as const;

/**
 * ── LEAD DELIVERY (email via Resend) ──
 * Set these in Vercel → Settings → Environment Variables (NOT hard-coded):
 *   RESEND_API_KEY   — from resend.com (free tier; create an API key)
 *   LEAD_TO_EMAIL    — where new leads land (your inbox)
 *   LEAD_FROM_EMAIL  — verified sender, e.g. leads@yourdomain.com
 *
 * Empty fallbacks let the site build before keys exist — the API route
 * logs the lead instead of dropping it.
 */
export const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
export const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL ?? "";
export const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? "Max Funding Leads <onboarding@resend.dev>";

/**
 * ── SAGEFLOW (later) ──
 * When SageFlow has an intake endpoint, set this and the API route will
 * ALSO mirror every lead to it as tenant #1. Leave empty for now.
 */
export const SAGEFLOW_WEBHOOK_URL = process.env.SAGEFLOW_WEBHOOK_URL ?? "";

export const FUNDING = [
  { slug: "working-capital", title: "Working Capital", icon: "capital",
    blurb: "Bridge cash-flow gaps for payroll, rent, and inventory — fast, flexible, no long-term lock-in." },
  { slug: "equipment-financing", title: "Equipment Financing", icon: "equipment",
    blurb: "Acquire machinery, trucks, or tech without draining reserves. Spread the cost, keep liquidity." },
  { slug: "sba-loans", title: "SBA Loans", icon: "sba",
    blurb: "7(a) up to $5M and 504 for fixed assets — government-backed terms for serious growth." },
  { slug: "business-line-of-credit", title: "Business Line of Credit", icon: "loc",
    blurb: "Revolving access to capital you draw only when you need it. Built for unpredictable months." },
  { slug: "real-estate-bridge", title: "Real Estate & Bridge", icon: "realestate",
    blurb: "Acquire, renovate, or refinance — residential and commercial — without your personal credit ceiling." },
  { slug: "business-credit", title: "Business Credit", icon: "credit",
    blurb: "Build a credit profile separate from your personal one — and protect your personal assets." },
] as const;

export const INDUSTRIES = [
  { slug: "restaurants", title: "Restaurants", icon: "restaurant" },
  { slug: "real-estate-investors", title: "Real Estate Investors", icon: "key" },
  { slug: "trucking-transportation", title: "Trucking & Transportation", icon: "truck" },
  { slug: "construction", title: "Construction", icon: "crane" },
  { slug: "retail", title: "Retail", icon: "store" },
  { slug: "medical-dental", title: "Medical & Dental", icon: "tooth" },
] as const;
