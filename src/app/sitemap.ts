import type { MetadataRoute } from "next";
import { SITE, FUNDING, INDUSTRIES } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const stat = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.url}${path}`, lastModified: now, changeFrequency: "weekly", priority,
  });

  return [
    stat("/", 1),
    stat("/apply", 0.9),
    stat("/about", 0.6),
    stat("/learn", 0.6),
    ...FUNDING.map((f) => stat(`/funding/${f.slug}`, 0.8)),
    ...INDUSTRIES.map((i) => stat(`/industries/${i.slug}`, 0.8)),
  ];
}
