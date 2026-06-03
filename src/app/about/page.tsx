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

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "$50K–$500K in 24 Hours — Meet Joel Carbajal, Max Funding MCA Broker",
  description: "Meet Joel Carbajal — the merchant cash advance broker who gets construction companies, restaurants, retail stores, and trucking businesses funded in as little as 24 hours.",
  thumbnailUrl: "https://i.ytimg.com/vi/2VWfPoRc5ME/maxresdefault.jpg",
  uploadDate: "2026-06-02",
  duration: "PT5S",
  embedUrl: "https://www.youtube.com/embed/2VWfPoRc5ME",
  publisher: { "@type": "Organization", name: "Max Funding", url: SITE.url },
};

const VALUES = [
  ["Speed you can count on", "Joel's relationships with select high-reputation lenders mean your file moves fast — most clients funded in 24 hours, not 90 days."],
  ["People first, always", "Every client gets Joel's direct attention. No call centers, no runaround — just a real person who picks up the phone and gets it done."],
  ["Transparent from day one", "You will know exactly what you are getting before you sign anything. Joel walks every client through the terms and what to expect."],
  ["Built on trust", "Joel's network grows almost entirely through referrals. When someone sends a friend to Joel, that is the highest endorsement in the business."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <JsonLd data={personSchema} />
      <JsonLd data={videoSchema} />

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
                <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "clamp(1.1rem,2.5vw,1.8rem)", fontWeight: 600, color: "var(--teal)" }}>{stat}</div>
                <div style={{ fontSize: ".78rem", color: "var(--ink-soft)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          {/* Thumbnail circle — taps to open YouTube */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 40 }}>
            <a
              href="https://youtube.com/shorts/2VWfPoRc5ME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Joel Carbajal intro video"
              style={{
                display: "block",
                width: "min(280px, 80vw)",
                height: "min(280px, 80vw)",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 60px rgba(16,59,56,.25)",
                border: "5px solid var(--cream-2)",
                textDecoration: "none",
              }}
            >
              <img
                src="https://i.ytimg.com/vi/2VWfPoRc5ME/maxresdefault.jpg"
                alt="Joel Carbajal — Max Funding MCA Broker"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
              />
              {/* Play button overlay */}
              <div style={{
                position: "absolute", inset: 0,
                display: "grid", placeItems: "center",
                background: "rgba(16,59,56,.2)",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(255,255,255,.92)",
                  display: "grid", placeItems: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,.25)",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5l13 7-13 7V5z" fill="#103B38"/>
                  </svg>
                </div>
              </div>
            </a>
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <div style={{ fontFamily: "var(--font-serif),serif", fontWeight: 600, fontSize: "1.3rem" }}>Joel Carbajal</div>
              <div style={{ color: "var(--bronze)", fontSize: ".9rem", fontWeight: 600, marginTop: 4 }}>Founder and MCA Broker · Max Funding</div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The person behind the funding</div>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Joel has a rare ability to make people feel at ease in high-stakes moments — heard, understood, and confident that they are in the right hands.</p>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Known by many as a loyal friend first, he brings that same energy to every client relationship. He genuinely loves hearing what people are building, what is in the way, and how he can help them move faster.</p>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16, fontSize: "1.05rem" }}>Outside of work, Joel stays active in the gym, lives a fit lifestyle, and spends time at the beach. That same drive and discipline show up every day in how he handles client files — with urgency, care, and follow-through.</p>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>His relationships with select high-reputation lenders mean files move faster than the industry average. Most clients are funded within 24 hours.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">How Joel operates.</h2>
            <p>Four principles that define every client relationship.</p>
          </div>
          <div className="grid3">
            {VALUES.map(([title, body]) => (
              <div className="card" key={title as string}>
                <h3 className="serif">{title}</h3>
                <p>{body}</p>
              </div>
            ))}
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
