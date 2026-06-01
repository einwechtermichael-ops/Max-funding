# Max Funding — Deploy Checklist (Email Backend)

Phase 1 build: home, /apply (4-step form), funding pages, full SEO/schema, sitemap,
robots, and an **email-based lead pipeline** (no GHL, no monthly cost). Built to be
pasted into Codespaces and pushed to Vercel from your phone.

---

## A. Fill in YOUR details (2 minutes)

Open `src/lib/config.ts` and replace the 🔴 placeholders:
- `phoneDisplay` → your phone as shown, e.g. `(732) 233-2067`
- `phoneE164`   → `+1` + 10 digits, e.g. `+17322332067`
- `email`       → your public inbox
- `url`         → already set to the staging subdomain

That's the only file with personal info; everything reads from it.

---

## B. Run it (Codespaces → Vercel)

1. New GitHub repo → `maxfunding`. Open in **Codespaces**.
2. Drop in all repo files (keep folder structure).
3. Terminal:
   ```
   npm install
   npm run dev
   ```
   Open the forwarded port → homepage loads. Submit a test lead — it logs to the
   terminal (email keys not set yet — expected).
4. Commit & push to `main`.
5. **Vercel** → New Project → import repo → Deploy.
6. **Domain:** Vercel → Settings → Domains → add `maxfunding.michaeleinwechter.com`
   → copy the CNAME → add it in **Cloudflare** DNS (proxy ON, SSL Full-strict).

---

## C. Turn on email leads (free — Resend)

1. Go to **resend.com** → sign up (free tier ~3,000 emails/mo).
2. Create an **API Key** → copy it.
3. (Recommended) Add & verify your domain in Resend so emails send from
   `leads@yourdomain.com`. Skip this to start — the default sender works for testing.
4. **Vercel** → Project → Settings → Environment Variables → add:
   - `RESEND_API_KEY` = your key
   - `LEAD_TO_EMAIL` = where leads should land (your inbox)
   - `LEAD_FROM_EMAIL` = `Max Funding Leads <leads@yourdomain.com>`
     (or leave unset to use Resend's test sender)
5. **Redeploy** (Deployments → ⋯ → Redeploy) so the vars take effect.
6. Submit a real test lead from `/apply` → check your inbox. Done.

**Want a text too?** Easiest no-code path: set a filter/rule in your email that
forwards lead emails to your carrier's email-to-SMS address. Or add Twilio later
(I can wire it in ~10 lines).

---

## D. Index it with Google

1. **Search Console** → add `maxfunding.michaeleinwechter.com` (verify via Cloudflare TXT).
2. Submit `…/sitemap.xml`.
3. **GA4** → create property (tag added in a later pass).
4. **Google Business Profile** → create/claim (powers the Phase 5 local-SEO layer).

---

## E. Safety net — you will never lose a lead

`/api/lead` is defensive by design:
- **Email not configured?** Lead logs to Vercel → Logs (recoverable); user still sees success.
- **Email send fails?** Form shows a "call/text us" fallback instead of faking success.

---

## F. Add SageFlow later (one variable)

When SageFlow has a lead-intake endpoint, just add one env var in Vercel:
- `SAGEFLOW_WEBHOOK_URL` = your endpoint

The API route already mirrors every lead to it (best-effort, never blocks the email).
Max Funding becomes SageFlow's tenant #1 with zero code changes.

---

## G. What's next (not in Phase 1)

- Industries pages, /about (founder story = E-E-A-T win), /contact, /learn engine
- GA4 + conversion events
- Geo/local pages + Google Business Profile
