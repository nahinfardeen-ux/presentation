const ICON_BASE =
  "https://cdn.jsdelivr.net/npm/simple-icons@16.14.0/icons";

/** Simple Icons slug — black glyphs for light UI */
const SLUGS = {
  google: "google",
  anthropic: "anthropic",
  cursor: "cursor",
  github: "github",
  vercel: "vercel",
};

export function BrandLogo({
  brand,
  className = "h-5 w-5 sm:h-6 sm:w-6",
  label,
}) {
  const slug = SLUGS[brand];
  if (!slug) return null;

  return (
    <img
      src={`${ICON_BASE}/${slug}.svg`}
      alt=""
      width={24}
      height={24}
      className={`shrink-0 object-contain opacity-90 brightness-0 ${className}`}
      aria-hidden={!label}
      title={label}
    />
  );
}

export function ToolBadge({ children, logos = [] }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--pres-accent)] bg-[var(--pres-pill)] px-3 py-1.5 shadow-sm sm:gap-2.5 sm:px-4 sm:py-2">
      {logos.length > 0 ? (
        <span className="flex items-center gap-1.5">
          {logos.map((b) => (
            <BrandLogo key={b} brand={b} className="h-4 w-4 sm:h-5 sm:w-5" />
          ))}
        </span>
      ) : null}
      <span className="font-dm text-sm font-semibold text-[var(--pres-accent)]">
        {children}
      </span>
    </span>
  );
}
