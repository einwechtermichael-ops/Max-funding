"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/config";
import { LogoLockup } from "./Logo";

const LINKS = [
  { href: "/funding/merchant-cash-advance", label: "MCA" },
  { href: "/#industries", label: "Industries" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="site">
        <nav className="wrap">
          <Link href="/" aria-label="Max Funding home" onClick={() => setOpen(false)}>
            <LogoLockup />
          </Link>

          {/* Desktop links */}
          <div className="navlinks">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="navcta">
            <a className="navphone" href={`sms:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
            <Link className="btn" href="/apply">Get Funded</Link>
            {/* Hamburger */}
            <button
              className="hamburger"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 98,
          background: "rgba(26,23,20,.5)", backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
          transition: "opacity .3s",
        }}
      />
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99,
        width: "min(320px, 85vw)",
        background: "var(--cream)", boxShadow: "-8px 0 40px rgba(26,23,20,.18)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
        display: "flex", flexDirection: "column",
        padding: "0 0 32px",
        overflowY: "auto",
      }}>
        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--line)" }}>
          <LogoLockup />
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", fontSize: "1.6rem", color: "var(--ink)", cursor: "pointer", lineHeight: 1 }}>×</button>
        </div>

        {/* Drawer links */}
        <nav style={{ flex: 1, padding: "16px 0" }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "16px 28px",
                fontFamily: "var(--font-serif),serif", fontSize: "1.3rem", fontWeight: 500,
                color: "var(--ink)", borderBottom: "1px solid var(--line)",
                transition: "color .2s, background .2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTAs */}
        <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
          <Link className="btn btn-bronze" href="/apply" onClick={() => setOpen(false)} style={{ textAlign: "center" }}>
            Get funded in 24 hours
          </Link>
          <a href={`sms:${SITE.phoneE164}`} className="btn btn-ghost" style={{ textAlign: "center" }}>
            Text Joel {SITE.phoneDisplay}
          </a>
        </div>

        {/* Drawer footer */}
        <div style={{ padding: "0 28px", fontSize: ".82rem", color: "var(--ink-soft)" }}>

        </div>
      </div>
    </>
  );
}
