import { brand, logoMark } from "@ostiary/core/lib/brand";
import { cn } from "@ostiary/core/lib/utils";

/**
 * The mark: an arched door with a keyhole. Geometry lives in `lib/brand.ts` (shared with
 * the favicon and social images); colors follow the `--brand-*` tokens, so the tile
 * inverts in dark mode.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox={logoMark.viewBox} aria-hidden className={cn("size-7 shrink-0", className)}>
      <rect width="3000" height="3000" rx={logoMark.radius} className="fill-[var(--brand-tile)]" />
      <g transform={logoMark.transform}>
        <path d={logoMark.path} className="fill-[var(--brand-mark)]" />
      </g>
    </svg>
  );
}

/** Mark + wordmark. The wordmark is the name set in the heading font. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <LogoMark />
      <span className="truncate font-heading text-[1.05rem] font-semibold tracking-[-0.02em]">{brand.name}</span>
    </span>
  );
}
