import Link from "next/link";
import { SITE, FUNDING, INDUSTRIES } from "@/lib/config";
import { LogoLockup } from "./Logo";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div style={{ maxWidth: 320 }}>
            <LogoLockup />
            <p>Bridging the gap between aspiration and execution for small and mid-sized businesses. Honest lending — no pushy pitches.</p>
          </div>
          <div className="col">
            <h4>Funding</h4>
            {FUNDING.slice(0, 4).map((f) => (
              <Link key={f.slug} href={`/funding/${f.slug}`}>{f.title}</Link>
            ))}
          </div>
          <div className="col">
            <h4>Industries</h4>
            {INDUSTRIES.slice(0, 4).map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`}>{i.title}</Link>
            ))}
          </div>
          <div className="col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/apply">Apply Now</Link>
            <a href={`sms:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>{SITE.email} · {SITE.phoneDisplay} call/text</span>
        </div>
      </div>
    </footer>
  );
}
