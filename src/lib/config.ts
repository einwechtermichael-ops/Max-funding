export const SITE = {
  name: "Max Funding",
  legalName: "Max Funding",
  url: "https://maxfunding.michaeleinwechter.com",
  tagline: "$50K–$500K in 24 hours. No bank. No wait.",
  description: "Max Funding connects small businesses with $50K–$500K in merchant cash advance funding — in as little as 24 hours. Construction, restaurants, retail, and trucking.",
  phoneDisplay: "(732) 233-2067",
  phoneE164: "+17322332067",
  email: "you@example.com",
  author: "Joel Carbajal, President",
  founder: "Joel Carbajal",
} as const;

export const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
export const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL ?? "";
export const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? "";
export const SAGEFLOW_WEBHOOK_URL = process.env.SAGEFLOW_WEBHOOK_URL ?? "";

export const FUNDING = [
  { slug: "merchant-cash-advance", title: "Merchant Cash Advance", icon: "capital", blurb: "$50K–$500K funded in as little as 24 hours. Capital based on your revenue, not your credit score." },
  { slug: "working-capital", title: "Working Capital", icon: "loc", blurb: "Bridge cash-flow gaps for payroll, rent, and inventory — fast, flexible, no long-term lock-in." },
  { slug: "equipment-financing", title: "Equipment Financing", icon: "equipment", blurb: "Acquire machinery, trucks, or tech without draining reserves. Spread the cost, keep your liquidity." },
  { slug: "business-line-of-credit", title: "Business Line of Credit", icon: "credit", blurb: "Revolving access to capital you draw only when you need it. Built for unpredictable months." },
  { slug: "sba-loans", title: "SBA Loans", icon: "sba", blurb: "7(a) up to $5M and 504 for fixed assets — government-backed rates for serious long-term growth." },
  { slug: "real-estate-bridge", title: "Real Estate & Bridge", icon: "realestate", blurb: "Acquire, renovate, or refinance — residential and commercial — without your personal credit ceiling." },
] as const;

export const INDUSTRIES = [
  { slug: "construction", title: "Construction", icon: "crane", blurb: "Cover payroll between draws, buy materials, and keep crews moving — without waiting on a bank.", headline: "Construction businesses funded in 24 hours.", body: "Draw gaps, material costs, equipment, payroll — construction cash flow is unpredictable by nature. Banks take too long and ask for too much. Max Funding moves at the speed your job site demands." },
  { slug: "restaurants", title: "Restaurants", icon: "restaurant", blurb: "Renovations, inventory, seasonal swings — restaurant funding that moves as fast as your kitchen.", headline: "Restaurant funding without the wait.", body: "Peak season is coming, equipment breaks, or you finally land the space you have been eyeing. You need capital now — not in 90 days. Max Funding gets restaurants $50K–$500K in as little as 24 hours." },
  { slug: "retail", title: "Retail", icon: "store", blurb: "Stock up for peak season, open a second location, or bridge a slow month — retail funding built for your cycle.", headline: "Retail funding that moves with your inventory.", body: "Holiday inventory, a slow January, a second location — retail is feast or famine. Max Funding provides fast capital so you can stock up, expand, and compete without draining your reserves." },
  { slug: "trucking-transportation", title: "Trucking and Transportation", icon: "truck", blurb: "Fuel, maintenance, new rigs — keep your fleet moving with same-week funding.", headline: "Trucking companies funded fast.", body: "A down truck costs you every hour it sits. Fuel, tires, a new rig, or fleet expansion — Max Funding gets trucking and transportation companies the capital they need without slowing down operations." },
] as const;
