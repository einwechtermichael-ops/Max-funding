/**
 * Max Funding logo mark — the M-arrow.
 * The M inherits text color (currentColor); the arrow stays bronze.
 * Use <Logo /> for the mark, <LogoLockup /> for mark + wordmark.
 */

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Max Funding"
      className={className}
    >
      <g stroke="currentColor" strokeWidth={9} strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M14 82 V30 L36 56" />
        <path d="M86 82 V44" />
      </g>
      <g stroke="#B17A3C" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M36 56 L84 16" />
        <path d="M66 14 H86 V34" />
      </g>
    </svg>
  );
}

export function LogoLockup({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="logo-lockup" style={{ color: onDark ? "var(--cream)" : "var(--teal)" }}>
      <Logo size={36} />
      <span className="logo-word">
        Max<b>Funding</b>
      </span>
    </span>
  );
}
