import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

const INDUSTRIES = [
  {
    slug: "construction",
    title: "Construction",
    icon: "crane",
    headline: "Construction businesses funded in 24 hours.",
    description: "Draw gaps, material costs, payroll — Max Funding gets construction companies $50K to $500K in as little as 24 hours. No bank, no collateral.",
    body: "Draw gaps, material costs, equipment, payroll — construction cash flow is unpredictable by nature. Banks take too long and ask for too much. Max Funding moves at the speed your job site demands.",
    uses: ["Payroll between draw payments", "Material purchases and supplier deposits", "Equipment repairs that cannot wait", "Mobilization costs on a new job", "Bonding and insurance on a large contract", "Bridge capital while waiting on a GC payment"],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    icon: "restaurant",
    headline: "Restaurant funding without the wait.",
    description: "Peak season, equipment repairs, renovations — Max Funding gets restaurants $50K to $500K in as little as 24 hours. Revenue-based, no collateral.",
    body: "Peak season is coming, equipment breaks, or you finally land the space you have been eyeing. You need capital now — not in 90 days. Max Funding gets restaurants $50K to $500K in as little as 24 hours.",
    uses: ["Equipment repairs and replacements", "Kitchen renovations and dining room updates", "Inventory for a busy season", "Covering payroll during a slow month", "Opening a second location", "Marketing and catering program launch"],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: "store",
    headline: "Retail funding that moves with your inventory.",
    description: "Holiday stock, a second location, a slow January — Max Funding gets retail businesses $50K to $500K fast. No bank approval required.",
    body: "Holiday inventory, a slow January, a second location — retail is feast or famine. Max Funding provides fast capital so you can stock up, expand, and compete without draining your reserves.",
    uses: ["Holiday and seasonal inventory purchases", "Opening a second or third location", "Store renovations and display upgrades", "E-commerce expansion", "Bridging a slow season", "Buying out closeout inventory"],
  },
  {
    slug: "trucking-transportation",
    title: "Trucking and Transportation",
    icon: "truck",
    headline: "Trucking companies funded fast.",
    description: "A down truck costs you every hour. Max Funding gets trucking and transportation companies $50K to $500K in as little as 24 hours. No collateral required.",
    body: "A down truck costs you every hour it sits. Fuel, tires, a new rig, or fleet expansion — Max Funding gets trucking and transportation companies the capital they need without slowing down operations.",
    uses: ["Emergency repairs and breakdowns", "Fuel and maintenance costs", "New truck or trailer acquisition", "Fleet expansion", "Insurance and licensing fees", "Owner-operator startup costs"],
  },
];

function get(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = get(params.slug);
  if (!i) return {};
  return {
    title: `${i.title} Business Funding — $50K to $500K in 24 Hours`,
    description: i.description,
    alternates: { canonical: `/industries/${i.slug}` },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = get(params.slug);
  if (!ind) notFound();

  const faqs = [
    { q: `How fast can a ${ind.title.toLowerCase()} business get funded?`, a: `Most ${ind.title.toLowerCase()} clients receive $50K to $500K in as little as 24 hours after approval. Same-day funding is available for qualifying businesses.` },
    { q: "Do I need good credit to qualify?", a: "No. Merchant cash advances are based on your business revenue, not your personal credit score. We look at your monthly bank deposits." },
    { q: "What do I need to apply?", a: "Your last 4 months of business bank statements and a completed application. No tax returns, no collateral, no business plan required." },
    { q: "How much can I borrow?", a: "Max Funding works with advances from $50,000 to $500,000 based on your average monthly revenue." },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/#industries" }, { name: ind.title, path: `/industries/${ind.slug}` }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="ico-wrap" style={{ color: "var(--teal)", marginBottom: 16 }}>
            <Icon name={ind.icon} size={56} />
          </div>
          <div className="eyebrow">{ind.title} Funding</div>
          <h1 className="serif">{ind.headline}</h1>
          <p className="lead">{ind.body}</p>
          <div className="hero-cta">
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
            <Link className="btn btn-ghost" href="/#industries">All industries</Link>
          </div>
          <div className="softpull">Will not affect your credit score</div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "28px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
            {[["$50K to $500K", "Funding range"], ["24 Hours", "Time to fund"], ["No collateral", "Revenue-based approval"]].map(([s, l]) => (
              <div key={s}>
                <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", fontWeight: 600, color: "var(--teal)" }}>{s}</div>
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
              <div className="eyebrow">How {ind.title.toLowerCase()} businesses use funding</div>
              <h2 className="serif">Capital for the costs that <em>cannot wait.</em></h2>
              <p>Every {ind.title.toLowerCase()} business hits moments where cash flow does not match the pace of operations. Max Funding bridges that gap — fast.</p>
              <Link className="btn btn-bronze" href="/apply">Apply in minutes</Link>
            </div>
            <div className="side">
              {ind.uses.map((u) => (
                <div className="pledge" key={u}>
                  <span className="dot">v</span>
                  <div><b>{u}</b></div>
                </div>
              ))}
            </div>
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
            <h2 className="serif">Your {ind.title.toLowerCase()} business can be funded <em>tomorrow.</em></h2>
            <p>$50K to $500K. Apply in minutes. Funded in 24 hours. No bank, no collateral, no credit score minimum.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
