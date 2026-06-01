import { SITE } from "./config";

/** Organization + FinancialService — rendered once in root layout. */
export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    telephone: SITE.phoneE164,
    email: SITE.email,
    areaServed: "US",
    priceRange: "$$",
    founder: { "@type": "Person", name: SITE.founder },
    slogan: SITE.tagline,
  };
}

/** FAQPage — pass an array of {q, a}. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** BreadcrumbList — pass [{name, path}]. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

/** Helper to render a schema object as a <script> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
