import Link from "next/link";
import { SITE, FUNDING } from "@/lib/config";
import { Icon } from "@/components/Icon";
import { faqSchema, JsonLd } from "@/lib/schema";

const STEPS = [
  { icon: "apply", num: "APPLY", t: "In minutes", p: "A short, soft-pull application. Four months of bank statements and you're in motion — no credit hit to check your rate." },
  { icon: "approved", num: "APPROVE", t: "In hours", p: "Your dedicated strategist reviews your real numbers and matches you to the right structure — not whatever pays them most." },
  { icon: "funded", num: "FUND", t: "In days", p: "Rapid funding can land in 1–3 business days, sometimes same day. Bigger deals get the white-glove treatment." },
];

const FAQS = [
  { q: "Which types of funding are available?", a: "SBA loans, real estate bridge loans, private equity, term loans, business lines of credit, equipment financing, working capital, invoice factoring, and merchant cash advances (recommended only as a last resort)." },
  { q: "How quickly will I receive funding?", a: "Rapid funding like term loans and lines of credit can be approved and funded within 1–3 business days, sometimes same day. SBA loans typically take 30–90 days; SBA Express can be 14–21 days." },
  { q: "Does my credit score matter?", a: "Yes. Your credit score affects access, terms, and rates. Below 500 means major challenges; 680–739 is good; 740+ gets the best rates. If your score isn't where you'd like, a personalized review can identify options." },
  { q: "What documentation do I need?", a: "For rapid funding, typically your last 4 months of business bank statements plus current month-to-date. Larger transactions may require tax returns, financial statements, and a use-of-funds plan — your strategist guides you through exactly what's needed." },
  { q: "How much can I borrow?", a: "Amounts vary by revenue, credit profile, and funding type. Rapid funding often ranges $5K–$500K, while SBA or bank loans can reach $10M+." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Honest funding · No predatory traps</div>
          <h1 className="serif">Funding that grows <em>your</em> business — not someone else&apos;s.</h1>
          <p className="lead">From startup dreams to expansion plans: competitive rates, transparent terms, and a dedicated strategist who&apos;s actually been in your shoes. Funded in days, not months.</p>
          <div className="hero-cta">
            <Link className="btn btn-bronze" href="/apply">Get pre-qualified in minutes</Link>
            <Link className="btn btn-ghost" href="/#funding">See funding options</Link>
          </div>
          <div className="softpull">Checking your rate won&apos;t affect your credit score</div>
        </div>
      </section>

      {/* STEPS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">Speed without the compromise.</h2>
            <p>No cookie-cutter applications. No buried fees. Just a clear path from question to capital.</p>
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

      {/* ANTI-PREDATORY SPLIT */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split">
            <div className="pad">
              <div className="eyebrow">Why we&apos;re different</div>
              <h2 className="serif">Stuck on the <em>MCA treadmill?</em> We&apos;ll get you off it — for good.</h2>
              <p>Most brokers profit when you stay trapped in expensive merchant cash advances. We do the opposite: we recommend an MCA only as a last resort, then build a plan to qualify you for real, standard funding.</p>
              <Link className="btn btn-bronze" href="/apply">Talk to a strategist</Link>
            </div>
            <div className="side">
              {[["Transparent terms", "No hidden fees. Ever. You see the full cost before you sign."],
                ["Entrepreneur-led", "Founded by someone who's secured the wrong financing — so you don't have to."],
                ["You, not the commission", "We're matched to your growth, not the highest-margin product."]].map(([b, s]) => (
                <div className="pledge" key={b}><span className="dot">✓</span><div><b>{b}</b><span>{s}</span></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUNDING TYPES */}
      <section id="funding">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="serif">Creative funding for nearly every need.</h2>
            <p>Each path is its own conversation — and its own page built to answer exactly what you&apos;re searching for.</p>
          </div>
          <div className="grid3">
            {FUNDING.map((f) => (
              <Link className="card" href={`/funding/${f.slug}`} key={f.slug}>
                <div className="ico-wrap"><Icon name={f.icon} size={46} /></div>
                <h3 className="serif">{f.title}</h3>
                <p>{f.blurb}</p>
                <span className="more">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="quote">
            <blockquote className="serif">Rather than just handing over capital and forgetting about you, Joel truly cares about you and your company. The connection — and the fact that he genuinely cares — makes all the difference.</blockquote>
            <cite>Owner, Butcher Block<span>Verified Max Funding client</span></cite>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sec-head"><h2 className="serif">Frequently asked questions.</h2></div>
          <div style={{ maxWidth: 760 }}>
            {FAQS.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
                <summary style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.18rem", fontWeight: 600, cursor: "pointer" }}>{f.q}</summary>
                <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Your next chapter is <em>fundable.</em></h2>
            <p>Get pre-qualified in minutes with no impact to your credit score. Real guidance from a real strategist — starting today.</p>
            <Link className="btn btn-bronze" href="/apply">Check your rate now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
