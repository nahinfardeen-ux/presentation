import { ToolBadge } from "../components/BrandLogo.jsx";

const Point = ({ children }) => (
  <p className="flex gap-3 font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
    <span className="shrink-0 font-display font-semibold text-[var(--pres-accent)]">→</span>
    <span>{children}</span>
  </p>
);

export default function Slide10() {
  return (
    <div className="flex w-full max-w-3xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Step 06
      </p>
      <h2 className="mb-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        Ship It
      </h2>
      <div className="mb-10 flex flex-wrap gap-3">
        <ToolBadge logos={["github"]}>GitHub</ToolBadge>
        <ToolBadge logos={["vercel"]}>Vercel</ToolBadge>
      </div>

      <div className="mb-10 flex flex-col gap-5">
        <Point>
          Push code to GitHub regularly — treat commits as save points
        </Point>
        <Point>Connect repo to Vercel for instant deployment</Point>
        <Point>Every push = live preview link</Point>
      </div>

      <div className="mb-10 border border-[var(--pres-border)] border-l-4 border-l-[var(--pres-accent)] bg-[var(--pres-card)] px-6 py-5 shadow-sm sm:px-8 sm:py-6">
        <p className="font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
          From idea to live URL — no DevOps team needed.
        </p>
      </div>

      <p className="font-display text-xl font-semibold text-[var(--pres-accent)] sm:text-2xl md:text-[28px]">
        You just shipped a product.
      </p>
    </div>
  );
}
