import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Joel Carbajal — Max Funding",
  description: "Get in touch with Joel Carbajal directly. Call, text, or apply online — most clients are funded within 24 hours of first contact.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <section className="hero" style={{ paddingBottom: 50 }}>
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h1 className="serif">Talk to Joel — <em>directly.</em></h1>
          <p className="lead">No call centers. No automated systems. When you reach out to Max Funding, you get Joel — a real person who picks up, knows your industry, and moves fast.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, maxWidth: 860 }}>

            <a href={`tel:${SITE.phoneE164}`} className="card" style={{ display: "block", textAlign: "center", padding: "40px 28px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>📞</div>
              <h3 className="serif" style={{ marginBottom: 8 }}>Call Joel</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>Pick up the phone and talk through your situation. Joel will tell you exactly what you qualify for and how fast he can move.</p>
              <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--teal)" }}>{SITE.phoneDisplay}</div>
            </a>

            <a href={`sms:${SITE.phoneE164}`} className="card" style={{ display: "block", textAlign: "center", padding: "40px 28px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>💬</div>
              <h3 className="serif" style={{ marginBottom: 8 }}>Text Joel</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>Prefer to text? Send Joel a message and he will get back to you fast — usually within the hour during business hours.</p>
              <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--teal)" }}>{SITE.phoneDisplay}</div>
            </a>

            <a href={`mailto:${SITE.email}`} className="card" style={{ display: "block", textAlign: "center", padding: "40px 28px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✉️</div>
              <h3 className="serif" style={{ marginBottom: 8 }}>Email Joel</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>Send over your questions or a quick overview of your situation and Joel will respond with your options.</p>
              <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--teal)" }}>{SITE.email}</div>
            </a>

            <Link href="/apply" className="card" style={{ display: "block", textAlign: "center", padding: "40px 28px", background: "var(--teal)", color: "var(--cream)", borderColor: "var(--teal)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>⚡</div>
              <h3 className="serif" style={{ marginBottom: 8, color: "var(--cream)" }}>Apply online</h3>
              <p style={{ color: "rgba(250,245,236,.75)", marginBottom: 16 }}>The fastest path to funding. Fill out the 4-step application in minutes and Joel will have your options ready same day.</p>
              <div style={{ fontFamily: "var(--font-serif),serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--bronze-lt, #CB9658)" }}>Get funded in 24 hours →</div>
            </Link>

          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div style={{ background: "var(--cream-2)", borderRadius: 22, padding: "40px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
            <div>
              <h2 className="serif" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 14 }}>What to expect when you reach out</h2>
              <p style={{ color: "var(--ink-soft)", marginBottom: 12 }}>Joel responds fast. Most clients hear back within the hour during business hours — and same-day responses are the standard, not the exception.</p>
              <p style={{ color: "var(--ink-soft)" }}>When you connect, Joel will ask a few quick questions about your business, your monthly revenue, and what you need the capital for. From there he will tell you exactly what you qualify for and how fast he can fund you.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["You reach out", "Call, text, email, or apply online"],
                ["Joel reviews your situation", "Same day — usually within the hour"],
                ["You get your options", "Clear terms, no surprises, no obligation"],
                ["Funded in 24 hours", "Capital wired directly to your account"],
              ].map(([title, sub], i) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ flex: "none", width: 28, height: 28, borderRadius: "50%", background: "var(--teal)", color: "var(--cream)", display: "grid", placeItems: "center", fontSize: ".8rem", fontWeight: 700 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: ".95rem" }}>{title}</div>
                    <div style={{ color: "var(--ink-soft)", fontSize: ".88rem" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="band">
            <h2 className="serif">Ready to get funded <em>tomorrow?</em></h2>
            <p>$50K to $500K. Apply in minutes. Joel handles the rest personally.</p>
            <Link className="btn btn-bronze" href="/apply">Get funded in 24 hours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
