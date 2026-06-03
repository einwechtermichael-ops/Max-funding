import Link from "next/link";
import { SITE, FUNDING, INDUSTRIES } from "@/lib/config";
import { Icon } from "@/components/Icon";
import { faqSchema, JsonLd } from "@/lib/schema";

const STEPS = [
  { icon: "apply", num: "APPLY", t: "In minutes", p: "A short application and 4 months of bank statements. No tax returns, no business plan, no collateral required." },
  { icon: "approved", num: "APPROVE", t: "Same day", p: "Your dedicated broker reviews your file and matches you to the right funder — the one that actually funds your industry." },
  { icon: "funded", num: "FUND", t: "In 24 hours", p: "$50K–$500K wired directly to your business account. Most clients are funded the next business day." },
];

const FAQS = [
  { q: "How fast can I get funded?", a: "Most clients receive $50K–$500K in as little as 24 hours after approval. Same-day funding is available for qualifying businesses." },
  { q: "What industries do you work with?", a: "Max Funding specializes in construction, restaurants, retail, and trucking — industries that banks consistently underserve." },
  { q: "Do I need good credit to qualify?", a: "No. Merchant cash advances are based on your business revenue, not your personal credit score. We look at your bank statements, not your credit history." },
  { q: "How much can I borrow?", a: "Max Funding works with advances from $50,000 to $500,000 based on your average monthly revenue." },
  { q: "What do I need to apply?", a: "Just your last 4 months of business bank statements and a completed application. No tax returns, no collateral required." },
  { q: "Is there any obligation when I apply?", a: "None. Checking your options is completely free. Joel will walk you through everything before you decide." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">MCA Broker · Construction · Restaurants · Retail · Trucking</div>
          <h1 className="serif">$50K–$500K. <em>24 hours.</em> No bank required.</h1>
          <p className="lead">Max Funding connects small businesses with fast merchant cash advance funding — based on your revenue, not your credit score. Apply in minutes, funded tomorrow.</p>
          <div className="hero-cta">
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
            <Link className="btn btn-ghost" href="/#funding">See your options</Link>
          </div>
          <div className="softpull">Checking your rate will not affect your credit score</div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "32px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
            {[["$50K to $500K", "Funding range"], ["24 Hours", "Average funding time"], ["4 Industries", "Construction, Restaurants, Retail, Trucking"]].map(([stat, label]) => (
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
          <div className="sec-head">
            <h2 className="serif">From application to funded in 24 hours.</h2>
            <p>No bank. No collateral. No 90-day wait. Fast capital for businesses that cannot afford to slow down.</p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.num}>
                <div className="ico-wrap"><Icon name={s.icon} size={44} /></div>
                <div className="num">{s.num}</div>
                <h3 className="serif">{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split">
            <div className="pad">
              <div className="eyebrow">Why Max Funding</div>
              <h2 className="serif">The broker who knows which funders <em>actually fund.</em></h2>
              <p>Any broker can submit your file. Joel Carbajal has spent years building relationships with the funders who specialize in your industry — so your application lands with the right people, not in a pile.</p>
              <Link className="btn btn-bronze" href="/apply">Talk to Joel today</Link>
            </div>
            <div className="side">
              {[
                ["Revenue-based approval", "No credit score minimum. We look at your monthly deposits — if your business generates revenue, we can work with you."],
                ["Industry specialist", "Construction, restaurants, retail, trucking — Joel knows your cash flow cycle and structures deals that fit."],
                ["Transparent terms", "You see the full cost of capital before you sign. No surprises, no hidden fees."],
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

      <section id="funding">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">Fast capital for every need.</h2>
            <p>Merchant cash advances are our specialty — and we offer a full range of business financing for every stage of growth.</p>
          </div>
          <div className="grid3">
            {FUNDING.map((f) => (
              <Link className="card" href={"/funding/" + f.slug} key={f.slug}>
                <div className="ico-wrap"><Icon name={f.icon} size={46} /></div>
                <h3 className="serif">{f.title}</h3>
                <p>{f.blurb}</p>
                <span className="more">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">Built for the industries banks ignore.</h2>
            <p>Construction crews, restaurant owners, retailers, and truckers — Max Funding specializes in the businesses traditional lenders consistently underserve.</p>
          </div>
          <div className="grid3">
            {INDUSTRIES.map((i) => (
              <Link className="card" href={"/industries/" + i.slug} key={i.slug}>
                <div className="ico-wrap"><Icon name={i.icon} size={46} /></div>
                <h3 className="serif">{i.title}</h3>
                <p>{i.blurb}</p>
                <span className="more">Learn more</span>
              </Link>
            ))}
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

      <section id="faq">
        <div className="wrap">
          <div className="sec-head"><h2 className="serif">Common questions.</h2></div>
          <div style={{ maxWidth: 760 }}>
            {FAQS.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
                <summary style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.15rem", fontWeight: 600, cursor: "pointer" }}>{f.q}</summary>
                <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Your business can be funded <em>tomorrow.</em></h2>
            <p>$50K to $500K. Apply in minutes. Funded in 24 hours. No bank, no collateral, no credit score minimum.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
