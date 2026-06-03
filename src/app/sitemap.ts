import type { MetadataRoute } from "next";
import { SITE, FUNDING, INDUSTRIES } from "@/lib/config";

const ARTICLE_SLUGS = [
  "how-does-a-merchant-cash-advance-work",
  "how-to-get-funding-for-your-restaurant",
  "merchant-cash-advance-for-construction-companies",
  "merchant-cash-advance-for-retail-businesses",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const s = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.url}${path}`, lastModified: now, changeFrequency: "weekly", priority,
  });
  return [
    s("/", 1),
    s("/apply", 0.9),
    s("/funding/merchant-cash-advance", 0.95),
    s("/about", 0.75),
    s("/contact", 0.7),
    s("/learn", 0.7),
    ...FUNDING.map((f) => s(`/funding/${f.slug}`, 0.8)),
    ...INDUSTRIES.map((i) => s(`/industries/${i.slug}`, 0.85)),
    ...ARTICLE_SLUGS.map((slug) => s(`/learn/${slug}`, 0.7)),
  ];
}
