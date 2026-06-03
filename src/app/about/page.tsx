import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Joel Carbajal — MCA Broker",
  description: "Joel Carbajal is a dedicated merchant cash advance broker known for speed, trust, and genuine client relationships. $50K to $500K funded in 24 hours.",
  alternates: { canonical: "/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joel Carbajal",
  jobTitle: "Merchant Cash Advance Broker",
  worksFor: { "@type": "Organization", name: "Max Funding" },
  url: `${SITE.url}/about`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <JsonLd data={personSchema} />

      <section className="hero" style={{ paddingBottom: 50 }}>
        <div className="wrap">
          <div className="eyebrow">About Max Funding</div>
          <h1 className="serif">More than a broker. <em>A trusted resource.</em></h1>
          <p className="lead">Joel Carbajal built Max Funding on a simple belief: business owners deserve fast capital, honest terms, and a real person in their corner.</p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "32px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
            {[["$50K to $500K", "Funding range"], ["24 Hours", "Average time to fund"], ["4 Industries", "Construction, Restaurants, Retail, Trucking"]].map(([stat, label]) => (
              <div key={stat}>
                <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 600, color: "var(--teal)" }}>{stat}</div>
                <div style={{ fontSize: ".82rem", color: "var(--ink-soft)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="eyebrow">The person behind the funding</div>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3.2vw,2.4rem)", marginBottom: 20 }}>Joel Carbajal</h2>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Joel is a natural extrovert with a gift for making people feel comfortable, understood, and confident — especially when securing funding for your business.</p>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Known by many as a loyal friend first, he brings that same energy to every client relationship. He genuinely loves hearing what people are building, what is in the way, and how he can help them move faster.</p>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Outside of work, Joel stays active in the gym, lives a fit lifestyle, and spends time at the beach. That same drive and discipline show up every day in how he handles client files — with urgency, care, and follow-through.</p>
              <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>His relationships with select high-reputation lenders mean files move faster than the industry average. Most clients are funded within 24 hours.</p>
            </div>
            <div style={{ background: "var(--cream-2)", borderRadius: 22, minHeight: 420, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 40 }}>
              <div style={{ width: 160, height: 160, borderRadius: "50%", background: "linear-gradient(135deg,var(--teal),var(--bronze))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", color: "var(--cream)", fontFamily: "var(--font-serif),serif", fontWeight: 600 }}>JC</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif),serif", fontWeight: 600, fontSize: "1.3rem" }}>Joel Carbajal</div>
                <div style={{ color: "var(--bronze)", fontSize: ".9rem", fontWeight: 600 }}>Founder and MCA Broker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split">
            <div className="pad">
              <div className="eyebrow">Who qualifies</div>
              <h2 className="serif">If your business generates revenue, <em>we can likely fund you.</em></h2>
              <p>Qualification is based on three simple factors — not a lengthy underwriting process.</p>
              <Link className="btn btn-bronze" href="/apply">Check your eligibility</Link>
            </div>
            <div className="side">
              {[
                ["Credit score", "A baseline review is performed — but revenue and consistency matter more."],
                ["Monthly gross revenue", "Your average monthly deposits show us what advance size makes sense."],
                ["Time in business", "A minimum operating history is required to demonstrate stability."],
              ].map(([b, s]) => (
                <div className="pledge" key={b as string}>
                  <span className="dot">v</span>
                  <div><b>{b}</b><span>{s}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="quote">
            <blockquote className="serif">Rather than just handing over capital and forgetting about you, Joel truly cares about you and your company. The connection and the fact that he genuinely cares makes all the difference.</blockquote>
            <cite>Owner, Butcher Block<span>Verified Max Funding client</span></cite>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Ready to work with someone who <em>actually picks up?</em></h2>
            <p>$50K to $500K. Apply in minutes. Joel handles the rest personally.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
