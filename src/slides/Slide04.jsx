import { Fragment } from "react";
import { BrandLogo } from "../components/BrandLogo.jsx";

const row1 = [
  { label: "NotebookLM", brands: ["google"] },
  { label: "Claude (PRD)", brands: ["anthropic"] },
  { label: "Claude (Prompt)", brands: ["anthropic"] },
];

const row2 = [
  {
    label: "Cursor / Antigravity / Claude Code",
    brands: ["cursor", "google", "anthropic"],
  },
  { label: "GitHub", brands: ["github"] },
  { label: "Vercel", brands: ["vercel"] },
  { label: "Deliver to Client", brands: ["check"] },
];

const StepPill = ({ children, brands, prominent }) => {
  return (
    <span className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 font-dm text-xs font-semibold leading-snug shadow-sm sm:px-5 sm:text-sm transition-all duration-300 ${
      prominent 
        ? "border-[var(--pres-accent)] bg-[var(--pres-accent)] text-white scale-105 shadow-md" 
        : "border-[var(--pres-border)] bg-[var(--pres-pill)] text-[var(--pres-text)]"
    }`}>
      <span className="flex shrink-0 items-center gap-1.5">
        {brands.map((b) => (
          b === "check" ? (
            <svg key="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
          ) : (
            <BrandLogo 
              key={b} 
              brand={b} 
              className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${prominent ? "brightness-200 contrast-200 invert" : ""}`} 
            />
          )
        ))}
      </span>
      <span className="min-w-0">{children}</span>
    </span>
  );
};

const Arrow = ({ prominent }) => (
  <span className={`shrink-0 font-display text-lg font-bold sm:text-xl ${prominent ? "text-[var(--pres-accent)]" : "text-[var(--pres-muted)]"}`}>
    →
  </span>
);

const DownArrow = () => (
  <div className="flex h-6 w-6 items-center justify-center text-[var(--pres-muted)] opacity-50 sm:h-8 sm:w-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>
);

export default function Slide04() {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        The workflow
      </p>
      <h2 className="mb-14 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[48px]">
        My End-to-End Process
      </h2>

      <div className="flex flex-col gap-10">
        {/* Row 1: Planning */}
        <div className="flex w-full flex-wrap items-center gap-3 sm:gap-4 md:gap-5 opacity-70">
          {row1.map((step, i) => (
            <Fragment key={step.label}>
              <StepPill brands={step.brands}>{step.label}</StepPill>
              <Arrow />
            </Fragment>
          ))}
          <DownArrow />
        </div>

        {/* Row 2: Execution & Delivery */}
        <div className="flex w-full flex-wrap items-center gap-4 sm:gap-5 md:gap-6 pt-4">
          {row2.map((step, i) => (
            <Fragment key={step.label}>
              <StepPill brands={step.brands} prominent>{step.label}</StepPill>
              {i < row2.length - 1 ? <Arrow prominent /> : null}
            </Fragment>
          ))}
        </div>
      </div>

      <p className="mt-20 max-w-3xl font-dm text-sm text-[var(--pres-muted)] sm:text-base">
        Research → Requirement → Prompt → <span className="font-bold text-[var(--pres-accent)]">Build → Version → Deploy → Deliver</span>
      </p>
    </div>
  );
}
