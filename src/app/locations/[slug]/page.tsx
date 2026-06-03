import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

const LOCATIONS = [
  {
    slug: "new-jersey",
    name: "New Jersey",
    hero: "Merchant cash advance broker serving all of New Jersey.",
    description: "Max Funding provides $50K to $500K in merchant cash advance funding for New Jersey small businesses — construction, restaurants, retail, and trucking. Funded in 24 hours.",
    body: "New Jersey small businesses move fast — and so does Max Funding. Joel Carbajal works directly with high-reputation lenders to get NJ construction companies, restaurants, retail stores, and trucking operations funded in as little as 24 hours. No bank required, no collateral, no lengthy approval process.",
    cities: ["Freehold", "Toms River", "Trenton", "Newark", "Jersey City", "Edison", "Woodbridge", "Brick", "Cherry Hill", "Clifton"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "freehold-nj",
    name: "Freehold, NJ",
    hero: "Fast business funding in Freehold, NJ — funded in 24 hours.",
    description: "Max Funding provides merchant cash advances from $50K to $500K for Freehold NJ businesses. Construction, restaurants, retail, trucking. Funded in 24 hours. Call Joel directly.",
    body: "Freehold is home to Joel Carbajal and Max Funding. If your Freehold business needs capital fast — whether you are a contractor waiting on a draw, a restaurant owner heading into summer, or a retailer stocking up — Joel can have you funded in as little as 24 hours. Local knowledge, direct relationships, fast results.",
    cities: ["Freehold", "Howell", "Marlboro", "Manalapan", "Colts Neck", "Farmingdale", "Englishtown", "Morganville"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "monmouth-county",
    name: "Monmouth County, NJ",
    hero: "Monmouth County business funding — $50K to $500K in 24 hours.",
    description: "Max Funding serves Monmouth County NJ businesses with fast merchant cash advances from $50K to $500K. Construction, restaurants, retail, trucking. Funded in 24 hours.",
    body: "Monmouth County is Joel Carbajal's home market. From Freehold to Asbury Park, Red Bank to Long Branch — Max Funding has funded construction crews, restaurant owners, retailers, and trucking operations across the county. When you need capital fast, Joel picks up the phone and moves.",
    cities: ["Freehold", "Asbury Park", "Red Bank", "Long Branch", "Keyport", "Keansburg", "Hazlet", "Aberdeen", "Matawan", "Tinton Falls"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "new-york",
    name: "New York",
    hero: "New York small business funding — merchant cash advance broker.",
    description: "Max Funding provides $50K to $500K in fast MCA funding for New York small businesses. Construction, restaurants, retail, trucking. Funded in 24 hours. No bank required.",
    body: "New York businesses operate at a pace banks cannot match. Max Funding connects NY construction companies, restaurant owners, retailers, and trucking operations with $50K to $500K in merchant cash advance funding — in as little as 24 hours. Joel Carbajal works personally with every client, no call centers, no runaround.",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "new-york-city",
    name: "New York City",
    hero: "NYC merchant cash advance broker — $50K to $500K in 24 hours.",
    description: "Max Funding provides fast merchant cash advance funding for New York City businesses. $50K to $500K, funded in 24 hours. Construction, restaurants, retail, trucking. No bank required.",
    body: "New York City businesses cannot afford to wait 90 days for a bank loan. Max Funding gets NYC construction companies, restaurants, retailers, and trucking operations funded in as little as 24 hours — based on revenue, not credit score. Joel Carbajal works personally with every client across all five boroughs and surrounding areas.",
    cities: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Hoboken", "Jersey City", "Newark", "Yonkers", "White Plains"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "long-island",
    name: "Long Island",
    hero: "Long Island business funding — fast MCA broker serving Nassau and Suffolk.",
    description: "Max Funding provides $50K to $500K in merchant cash advance funding for Long Island businesses in Nassau and Suffolk County. Funded in 24 hours. No bank required.",
    body: "Long Island construction companies, restaurants, retailers, and trucking businesses need capital that moves as fast as they do. Max Funding connects Long Island small businesses with $50K to $500K in fast funding — no collateral, no lengthy bank process, funded in as little as 24 hours.",
    cities: ["Hempstead", "Huntington", "Babylon", "Islip", "Oyster Bay", "Smithtown", "Brookhaven", "North Hempstead", "Garden City", "Mineola"],
    industries: ["Construction", "Restaurants", "Retail", "Trucking"],
  },
  {
    slug: "new-jersey-construction",
    name: "NJ Construction Funding",
    hero: "Construction business funding in New Jersey — funded in 24 hours.",
    description: "Max Funding specializes in fast merchant cash advance funding for New Jersey construction companies. $50K to $500K, funded in 24 hours. Cover payroll, materials, and draw gaps.",
    body: "New Jersey construction companies face the same challenge everywhere: costs hit before draws arrive. Max Funding gets NJ contractors, GCs, and specialty trades funded in as little as 24 hours — covering payroll gaps, material costs, equipment repairs, and mobilization expenses. No bank, no collateral, no wait.",
    cities: ["Freehold", "Toms River", "Trenton", "Newark", "Edison", "Woodbridge", "Brick", "Cherry Hill", "Parsippany", "Hackensack"],
    industries: ["General Contractors", "Specialty Trades", "Subcontractors", "Commercial Construction"],
  },
];

function get(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = get(params.slug);
  if (!l) return {};
  return {
    title: l.hero,
    description: l.description,
    alternates: { canonical: `/locations/${l.slug}` },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = get(params.slug);
  if (!loc) notFound();

  const faqs = [
    { q: `How fast can a ${loc.name} business get funded?`, a: `Most ${loc.name} clients receive $50K to $500K in as little as 24 hours after approval. Same-day funding is available for qualifying businesses.` },
    { q: `Does Max Funding work with businesses in ${loc.name}?`, a: `Yes. Joel Carbajal works with businesses across ${loc.name} including ${loc.cities.slice(0, 4).join(", ")}, and surrounding areas.` },
    { q: "Do I need good credit to qualify?", a: "No. Merchant cash advances are based on your business revenue, not your personal credit score. We look at your monthly bank deposits." },
    { q: "What do I need to apply?", a: "Your last 4 months of business bank statements and a completed application. No tax returns, no collateral, no business plan required." },
    { q: "How much can I borrow?", a: "Max Funding works with advances from $50,000 to $500,000 based on your average monthly revenue." },
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Max Funding",
    description: loc.description,
    url: `${SITE.url}/locations/${loc.slug}`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    areaServed: loc.name,
    founder: { "@type": "Person", name: "Joel Carbajal" },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/" }, { name: loc.name, path: `/locations/${loc.slug}` }])} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={localSchema} />

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Serving {loc.name}</div>
          <h1 className="serif">{loc.hero}</h1>
          <p className="lead">{loc.body}</p>
          <div className="hero-cta">
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
            <a className="btn btn-ghost" href={`sms:${SITE.phoneE164}`}>Text Joel {SITE.phoneDisplay}</a>
          </div>
          <div className="softpull">Will not affect your credit score</div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
            {[["$50K to $500K", "Funding range"], ["24 Hours", "Time to fund"], ["No collateral", "Revenue-based"]].map(([s, l]) => (
              <div key={s}>
                <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "clamp(1.1rem,2.5vw,1.7rem)", fontWeight: 600, color: "var(--teal)" }}>{s}</div>
                <div style={{ fontSize: ".8rem", color: "var(--ink-soft)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="split">
            <div className="pad">
              <div className="eyebrow">Industries we fund in {loc.name}</div>
              <h2 className="serif">Fast capital for <em>{loc.name} businesses.</em></h2>
              <p>Joel Carbajal works personally with {loc.name} business owners across construction, restaurants, retail, and trucking — industries banks consistently underserve.</p>
              <Link className="btn btn-bronze" href="/apply">Apply in minutes</Link>
            </div>
            <div className="side">
              {loc.industries.map((ind) => (
                <div className="pledge" key={ind}>
                  <span className="dot">v</span>
                  <div><b>{ind}</b></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">Areas served in {loc.name}.</h2>
            <p>Max Funding works with businesses across {loc.name} including:</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, maxWidth: 760 }}>
            {loc.cities.map((city) => (
              <span key={city} style={{ background: "var(--cream-2)", border: "1px solid var(--line)", borderRadius: 100, padding: "8px 18px", fontSize: ".9rem", fontWeight: 500 }}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head"><h2 className="serif">Common questions</h2></div>
          {faqs.map((f) => (
            <details key={f.q} style={{ borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
              <summary style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.15rem", fontWeight: 600, cursor: "pointer" }}>{f.q}</summary>
              <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>{f.a}</p>
            </details>
          ))}
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
            <h2 className="serif">{loc.name} businesses funded <em>tomorrow.</em></h2>
            <p>$50K to $500K. Apply in minutes. Joel handles the rest personally.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
