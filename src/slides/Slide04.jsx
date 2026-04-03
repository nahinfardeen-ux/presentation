import { Fragment } from "react";
import { BrandLogo } from "../components/BrandLogo.jsx";

const steps = [
  { label: "NotebookLM", brands: ["google"] },
  { label: "Claude (PRD)", brands: ["anthropic"] },
  { label: "Claude (Prompt)", brands: ["anthropic"] },
  {
    label: "Cursor / Antigravity / Claude Code",
    brands: ["cursor", "google", "anthropic"],
  },
  { label: "GitHub", brands: ["github"] },
  { label: "Vercel", brands: ["vercel"] },
];

const StepPill = ({ children, brands }) => (
  <span className="inline-flex max-w-[260px] items-center gap-2.5 rounded-full border border-[var(--pres-accent)] bg-[var(--pres-pill)] px-4 py-2.5 font-dm text-xs font-medium leading-snug text-[var(--pres-text)] shadow-sm sm:max-w-[280px] sm:px-5 sm:text-sm">
    <span className="flex shrink-0 items-center gap-1">
      {brands.map((b) => (
        <BrandLogo key={b} brand={b} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
      ))}
    </span>
    <span className="min-w-0 text-left">{children}</span>
  </span>
);

const Arrow = () => (
  <span className="shrink-0 font-display text-lg font-semibold text-[var(--pres-accent)] sm:text-xl">
    →
  </span>
);

export default function Slide04() {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        The workflow
      </p>
      <h2 className="mb-12 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[48px]">
        My End-to-End Process
      </h2>

      <div className="mb-10 flex w-full flex-wrap items-center gap-x-3 gap-y-4 sm:gap-x-4 md:gap-x-5">
        {steps.map((step, i) => (
          <Fragment key={step.label}>
            <StepPill brands={step.brands}>{step.label}</StepPill>
            {i < steps.length - 1 ? <Arrow /> : null}
          </Fragment>
        ))}
      </div>

      <p className="max-w-3xl font-dm text-sm text-[var(--pres-muted)] sm:text-base">
        Research → Requirement → Prompt → Build → Version → Deploy
      </p>
    </div>
  );
}
