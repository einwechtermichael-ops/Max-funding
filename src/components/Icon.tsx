/**
 * Max Funding icon system — all icons in one component.
 * Lines use currentColor; accents use --accent (defaults to bronze).
 * Usage: <Icon name="capital" size={48} />
 */

const P: Record<string, React.ReactNode> = {
  // ── Funding ──
  capital: (<>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M50 20a22 22 0 0 0-38-4"/><path d="M52 12v8h-8"/></g>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 44a22 22 0 0 0 38 4"/><path d="M12 52v-8h8"/><ellipse cx="28" cy="28" rx="11" ry="4.5"/><path d="M17 28v6c0 2.5 5 4.5 11 4.5s11-2 11-4.5v-6"/></g>
  </>),
  equipment: (<g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="30" r="7"/><path d="M22 19v-4M22 45v-4M33 30h4M11 30H7M29.8 22.2l2.8-2.8M11.4 40.6l2.8-2.8M29.8 37.8l2.8 2.8M11.4 19.4l2.8 2.8"/>
    <path d="M40 26h9l6 7v9H40z"/><circle cx="44" cy="46" r="3"/><circle cx="53" cy="46" r="3"/></g>),
  sba: (<g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 24 32 12l22 12"/><circle cx="32" cy="20" r="2"/><path d="M14 24v22M24 24v22M40 24v22M50 24v22"/><path d="M10 50h44M8 54h48"/></g>),
  loc: (<>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 24a21 21 0 0 1 36-6"/><path d="M50 10v8h-8"/><path d="M25 36h6"/></g>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M50 40a21 21 0 0 1-36 6"/><path d="M14 54v-8h8"/><rect x="20" y="24" width="26" height="16" rx="3"/><path d="M20 30h26"/></g>
  </>),
  realestate: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M8 40V26l10-8 10 8v14"/><path d="M14 40v-7h6v7"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M32 40c6-12 18-12 24 0"/><path d="M32 40v6M40 36v10M48 36v10M56 40v6M30 46h28"/></g>
  </>),
  credit: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 46V34M20 46V26M28 46V20"/><path d="M8 50h26"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M44 18l11 4v9c0 7-5 11-11 14-6-3-11-7-11-14v-9z"/></g>
    <path d="M40 30l3 3 6-6" stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  // ── Industries ──
  restaurant: (<g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 30a7 7 0 1 1 3-13 7 7 0 0 1 12 0 7 7 0 1 1 3 13z"/><path d="M16 30v14h18V30"/><path d="M20 34v6M30 34v6"/>
    <path d="M44 16v32" stroke="var(--accent,#B17A3C)"/><path d="M44 16v14M52 16c0 6-4 8-4 8M52 16v32"/></g>),
  key: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="22" cy="22" r="8"/><path d="M27 27l12 12M35 35l4 4M39 39l4-4"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M40 30l8-6 8 6v10H40z"/></g>
    <rect x="46" y="33" width="4" height="4" stroke="currentColor" strokeWidth={5} fill="none"/>
  </>),
  truck: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="22" width="26" height="20"/><path d="M36 28h10l8 7v7H36z"/><circle cx="20" cy="46" r="4"/><circle cx="46" cy="46" r="4"/></g>
    <path d="M36 35h12" stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round"/>
  </>),
  crane: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 50V14M22 14h24M22 22h10M46 14v10M14 50h20M24 50V40"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M46 24v6"/><path d="M38 50a10 10 0 0 1 20 0"/><path d="M34 50h28M48 40v-4"/></g>
  </>),
  store: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 26l3-8h26l3 8"/><path d="M14 26c0 4 3 5 5 5s5-1 5-5c0 4 3 5 5 5s5-1 5-5c0 4 3 5 5 5s5-1 5-5"/><path d="M16 31v17h24V31"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M36 38h10l-1 12H37z"/><path d="M39 38v-2a2 2 0 0 1 4 0v2"/></g>
  </>),
  tooth: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16c-5 0-8 4-8 9 0 6 3 9 4 15 1 4 2 6 4 6s3-4 4-8 2-4 3-4 2 0 3 4 2 8 4 8 3-2 4-6c1-6 4-9 4-15 0-5-3-9-8-9-4 0-5 2-7 2s-3-2-7-2z"/></g>
    <g fill="var(--accent,#B17A3C)"><rect x="46" y="40" width="4" height="12" rx="1"/><rect x="42" y="44" width="12" height="4" rx="1"/></g>
  </>),
  // ── Process & trust ──
  apply: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 12h22l8 8v32H16z"/><path d="M38 12v8h8"/><path d="M22 28h16M22 34h16M22 40h10"/></g>
    <path d="M40 48l10-10 4 4-10 10-5 1z" stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  approved: (<>
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth={5} fill="none"/>
    <path d="M22 33l7 7 14-15" stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  funded: (<>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M30 14l8 8M38 22h-9M38 22v-9"/></g>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 24h32v24H14z"/><path d="M14 24v-2a2 2 0 0 1 2-2h18"/><path d="M46 32h-8a4 4 0 0 0 0 8h8"/></g>
    <circle cx="40" cy="36" r="1.5" fill="var(--accent,#B17A3C)"/>
  </>),
  shield: (<>
    <path d="M32 10l18 7v13c0 12-8 19-18 24-10-5-18-12-18-24V17z" stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32l6 6 11-12" stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </>),
  growth: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M32 50V28"/><path d="M32 34c-4 0-9-3-11-9 6-1 11 1 11 6"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M32 30c4-2 9-7 9-14-6 0-11 4-11 10"/><path d="M30 22l4 16M30 22l8 6"/></g>
  </>),
  strategist: (<>
    <g stroke="currentColor" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="22" r="6"/><path d="M10 46c0-7 4-12 10-12s10 5 10 12"/><path d="M36 46c0-7 4-12 10-12s10 5 10 12"/></g>
    <g stroke="var(--accent,#B17A3C)" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="46" cy="22" r="6"/><path d="M40 22a6 6 0 0 1 12 0v3"/><path d="M52 25v3M40 25v3"/><path d="M33 38h.01M36 38h.01M39 38h.01"/></g>
  </>),
};

export function Icon({ name, size = 48, className = "" }: { name: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      {P[name] ?? null}
    </svg>
  );
}
