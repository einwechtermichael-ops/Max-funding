import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Business Funding Guides and Resources",
  description: "Plain-language guides on merchant cash advances, business funding, and industry-specific financing for construction, restaurants, retail, and trucking.",
  alternates: { canonical: "/learn" },
};

const ARTICLES = [
  { slug: "how-does-a-merchant-cash-advance-work", title: "How Does a Merchant Cash Advance Work?", description: "A plain-language guide to MCA funding — how it works, who qualifies, what it costs, and when it makes sense.", industry: "" },
  { slug: "how-to-get-funding-for-your-restaurant", title: "How to Get Funding for Your Restaurant in 2026", description: "Restaurant owners have more funding options than ever — but the fastest path for most is a merchant cash advance.", industry: "Restaurants" },
  { slug: "merchant-cash-advance-for-construction-companies", title: "Merchant Cash Advance for Construction Companies", description: "Draw gaps, payroll, materials — construction cash flow is brutal. Here is how construction companies get fast funding without a bank.", industry: "Construction" },
  { slug: "merchant-cash-advance-for-retail-businesses", title: "Merchant Cash Advance for Retail Businesses", description: "Retail is feast or famine. A merchant cash advance gives retail businesses fast access to $50K to $500K to stock up and compete.", industry: "Retail" },
];

export default function LearnPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Learn", path: "/learn" }])} />
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Resources</div>
          <h1 className="serif">Business funding, <em>plainly explained.</em></h1>
          <p className="lead">No jargon. No upsell. Just honest guides to help you understand your options and make the right call for your business.</p>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, maxWidth: 900 }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={"/learn/" + a.slug} className="card" style={{ display: "block" }}>
                {a.industry && <div className="eyebrow" style={{ marginBottom: 10, fontSize: ".72rem" }}>{a.industry}</div>}
                <h3 className="serif" style={{ marginBottom: 10 }}>{a.title}</h3>
                <p style={{ fontSize: ".95rem" }}>{a.description}</p>
                <span className="more" style={{ marginTop: 14, display: "inline-block" }}>Read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Ready to stop reading and <em>start funding?</em></h2>
            <p>$50K to $500K. Apply in minutes. Joel handles the rest personally.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
