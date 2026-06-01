import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FUNDING } from "@/lib/config";
import { Icon } from "@/components/Icon";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

/** Pre-render all funding pages at build time (SSG = fastest + best for SEO). */
export function generateStaticParams() {
  return FUNDING.map((f) => ({ slug: f.slug }));
}

function get(slug: string) {
  return FUNDING.find((f) => f.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = get(params.slug);
  if (!f) return {};
  return {
    title: `${f.title} for Small Business`,
    description: `${f.blurb} Get pre-qualified in minutes — checking your rate won't affect your credit score.`,
    alternates: { canonical: `/funding/${f.slug}` },
  };
}

export default function FundingPage({ params }: { params: { slug: string } }) {
  const f = get(params.slug);
  if (!f) notFound();

  const faqs = [
    { q: `How fast can I get ${f.title.toLowerCase()}?`, a: "Rapid funding options can be approved and funded in 1–3 business days, sometimes same day. Your dedicated strategist will give you a precise timeline based on your situation." },
    { q: `What do I need to qualify for ${f.title.toLowerCase()}?`, a: "Typically your last 4 months of business bank statements plus current month-to-date. Larger amounts may require additional documents — we'll tell you exactly what's needed, no surprises." },
    { q: "Will checking my rate hurt my credit?", a: "No. We use a soft pull to check your rate, which has no impact on your credit score." },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Funding", path: "/#funding" }, { name: f.title, path: `/funding/${f.slug}` }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="ico-wrap" style={{ color: "var(--teal)" }}><Icon name={f.icon} size={56} /></div>
          <div className="eyebrow">Funding</div>
          <h1 className="serif">{f.title} for small business.</h1>
          <p className="lead">{f.blurb}</p>
          <div className="hero-cta">
            <Link className="btn btn-bronze" href="/apply">Check your rate</Link>
            <Link className="btn btn-ghost" href="/#funding">All funding options</Link>
          </div>
          <div className="softpull">Won&apos;t affect your credit score</div>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head"><h2 className="serif">Common questions</h2></div>
          {faqs.map((q) => (
            <details key={q.q} style={{ borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
              <summary style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.15rem", fontWeight: 600, cursor: "pointer" }}>{q.q}</summary>
              <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>{q.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Ready to move forward?</h2>
            <p>Get pre-qualified in minutes with a real strategist who has your growth in mind.</p>
            <Link className="btn btn-bronze" href="/apply">Get pre-qualified</Link>
          </div>
        </div>
      </section>
    </>
  );
}
