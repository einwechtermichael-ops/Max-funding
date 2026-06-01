import Link from "next/link";
import { SITE } from "@/lib/config";
import { LogoLockup } from "./Logo";

export function Header() {
  return (
    <header className="site">
      <nav className="wrap">
        <Link href="/" aria-label="Max Funding home"><LogoLockup /></Link>
        <div className="navlinks">
          <Link href="/#funding">Funding</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="navcta">
          <a className="navphone" href={`sms:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
          <Link className="btn" href="/apply">Check Your Rate</Link>
        </div>
      </nav>
    </header>
  );
}
