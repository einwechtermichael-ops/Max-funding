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
            <p>Fast merchant cash advance funding for construction, restaurants, retail, and trucking. $50K to $500K in as little as 24 hours.</p>
          </div>
          <div className="col">
            <h4>Funding</h4>
            <Link href="/funding/merchant-cash-advance">Merchant Cash Advance</Link>
            <Link href="/funding/working-capital">Working Capital</Link>
            <Link href="/funding/equipment-financing">Equipment Financing</Link>
            <Link href="/funding/sba-loans">SBA Loans</Link>
          </div>
          <div className="col">
            <h4>Industries</h4>
            <Link href="/industries/construction">Construction</Link>
            <Link href="/industries/restaurants">Restaurants</Link>
            <Link href="/industries/retail">Retail</Link>
            <Link href="/industries/trucking-transportation">Trucking</Link>
          </div>
          <div className="col">
            <h4>Locations</h4>
            <Link href="/locations/freehold-nj">Freehold, NJ</Link>
            <Link href="/locations/monmouth-county">Monmouth County</Link>
            <Link href="/locations/new-jersey">New Jersey</Link>
            <Link href="/locations/new-york-city">New York City</Link>
            <Link href="/locations/long-island">Long Island</Link>
            <Link href="/locations/new-york">New York</Link>
          </div>
          <div className="col">
            <h4>Company</h4>
            <Link href="/about">About Joel</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/contact">Contact</Link>
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
