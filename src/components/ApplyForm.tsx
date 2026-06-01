"use client";

import { useState } from "react";

const AMOUNTS = ["$5K – $50K", "$50K – $150K", "$150K – $500K", "$500K+"];
const TIME = ["< 6 months", "6–12 months", "1–3 years", "3+ years"];
const REVENUE = ["< $10K/mo", "$10K – $30K/mo", "$30K – $100K/mo", "$100K+/mo"];

type Data = {
  fundingAmount: string; timeInBusiness: string; monthlyRevenue: string;
  firstName: string; lastName: string; phone: string; email: string;
};

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({
    fundingAmount: "", timeInBusiness: "", monthlyRevenue: "",
    firstName: "", lastName: "", phone: "", email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: keyof Data, v: string) => setData((d) => ({ ...d, [k]: v }));
  const TOTAL = 4;
  const pct = ((step + 1) / TOTAL) * 100;

  const pickStep = (key: keyof Data, label: string, opts: string[]) => (
    <>
      <h3 className="serif" style={{ fontSize: "1.5rem", marginBottom: 18 }}>{label}</h3>
      <div className="opts">
        {opts.map((o) => (
          <button type="button" key={o} className={`opt ${data[key] === o ? "sel" : ""}`}
            onClick={() => { set(key, o); setTimeout(() => setStep((s) => s + 1), 180); }}>
            {o}
          </button>
        ))}
      </div>
    </>
  );

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card">
        <div className="msg-ok">
          <div className="check">✓</div>
          <h3 className="serif" style={{ fontSize: "1.6rem", marginBottom: 8 }}>You&apos;re in motion.</h3>
          <p style={{ color: "var(--ink-soft)" }}>A dedicated strategist will reach out shortly. Keep an eye on your phone — and thank you for trusting us with your next chapter.</p>
        </div>
      </div>
    );
  }

  const contactValid = data.firstName && data.phone && data.email;

  return (
    <div className="form-card">
      <div className="progress"><i style={{ width: `${pct}%` }} /></div>

      {step === 0 && pickStep("fundingAmount", "How much funding are you looking for?", AMOUNTS)}
      {step === 1 && pickStep("timeInBusiness", "How long have you been in business?", TIME)}
      {step === 2 && pickStep("monthlyRevenue", "What's your average monthly revenue?", REVENUE)}

      {step === 3 && (
        <>
          <h3 className="serif" style={{ fontSize: "1.5rem", marginBottom: 18 }}>Where should we send your options?</h3>
          <div className="field"><label>First name</label><input value={data.firstName} onChange={(e) => set("firstName", e.target.value)} /></div>
          <div className="field"><label>Last name</label><input value={data.lastName} onChange={(e) => set("lastName", e.target.value)} /></div>
          <div className="field"><label>Phone (call/text)</label><input type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} /></div>
          <div className="field"><label>Email</label><input type="email" value={data.email} onChange={(e) => set("email", e.target.value)} /></div>
          {status === "error" && (
            <div className="msg-err">Something went wrong sending your application. Please call or text us at the number in the header — we don&apos;t want to lose your request.</div>
          )}
        </>
      )}

      <div className="form-nav">
        {step > 0 ? <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}>Back</button> : <span />}
        {step === 3 && (
          <button type="button" className="btn btn-bronze" disabled={!contactValid || status === "sending"} onClick={submit}>
            {status === "sending" ? "Sending…" : "Get my options"}
          </button>
        )}
      </div>
    </div>
  );
}
