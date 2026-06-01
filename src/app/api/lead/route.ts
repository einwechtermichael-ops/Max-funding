import { NextRequest, NextResponse } from "next/server";
import {
  RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL, SAGEFLOW_WEBHOOK_URL,
} from "@/lib/config";

/**
 * Lead intake → email (via Resend), with optional SageFlow mirror.
 *
 * Design goal: NEVER silently lose a lead.
 *  - No email keys set yet?  Log the full lead to Vercel → Logs, still return 200.
 *  - Email send fails?       Log it and return 502 so the form shows the
 *                            "call/text us" fallback instead of faking success.
 *  - SageFlow mirror fails?  Never blocks the email — it's best-effort.
 */

type Lead = {
  firstName?: string; lastName?: string; phone?: string; email?: string;
  fundingAmount?: string; timeInBusiness?: string; monthlyRevenue?: string;
};

function emailHtml(l: Lead, when: string) {
  const row = (k: string, v?: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#4A433B;font-weight:600">${k}</td><td style="padding:6px 0">${v || "—"}</td></tr>`;
  return `
  <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;color:#1A1714">
    <h2 style="color:#103B38;border-bottom:2px solid #B17A3C;padding-bottom:8px">🔔 New funding lead</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row("Name", `${l.firstName ?? ""} ${l.lastName ?? ""}`.trim())}
      ${row("Phone", l.phone)}
      ${row("Email", l.email)}
      ${row("Funding wanted", l.fundingAmount)}
      ${row("Monthly revenue", l.monthlyRevenue)}
      ${row("Time in business", l.timeInBusiness)}
      ${row("Submitted", when)}
    </table>
    <p style="margin-top:18px;font-size:13px;color:#7C8B7A">Source: maxfunding-website</p>
  </div>`;
}

export async function POST(req: NextRequest) {
  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  // A lead with no way to contact them back is useless.
  if (!lead.phone && !lead.email) {
    return NextResponse.json({ error: "missing contact" }, { status: 400 });
  }

  const when = new Date().toISOString();

  // ── Best-effort mirror to SageFlow (never blocks the email) ──
  if (SAGEFLOW_WEBHOOK_URL) {
    fetch(SAGEFLOW_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source: "maxfunding-website", submittedAt: when }),
    }).catch((e) => console.error("[LEAD — SageFlow mirror failed]", e));
  }

  // ── Email not configured yet — capture to logs, don't lose it ──
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL) {
    console.log("[LEAD — email not configured, logging instead]",
      JSON.stringify({ ...lead, submittedAt: when }));
    return NextResponse.json({ ok: true, note: "logged (email not configured)" });
  }

  // ── Send the lead email via Resend ──
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: LEAD_FROM_EMAIL,
        to: [LEAD_TO_EMAIL],
        reply_to: lead.email,
        subject: `New funding lead: ${lead.firstName ?? "Unknown"} — ${lead.fundingAmount ?? ""}`,
        html: emailHtml(lead, when),
      }),
    });
    if (!res.ok) {
      console.error("[LEAD — Resend rejected]", res.status, JSON.stringify(lead));
      return NextResponse.json({ error: "email error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD — network error to Resend]", err, JSON.stringify(lead));
    return NextResponse.json({ error: "network" }, { status: 502 });
  }
}
