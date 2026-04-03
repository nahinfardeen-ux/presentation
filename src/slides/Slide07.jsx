import { ToolBadge } from "../components/BrandLogo.jsx";

const Point = ({ children }) => (
  <p className="flex gap-3 font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
    <span className="shrink-0 font-display font-semibold text-[var(--pres-accent)]">→</span>
    <span>{children}</span>
  </p>
);

export default function Slide07() {
  return (
    <div className="flex w-full max-w-3xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Step 03
      </p>
      <h2 className="mb-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        Writing the First Build Prompt
      </h2>
      <div className="mb-10">
        <ToolBadge logos={["anthropic"]}>Claude</ToolBadge>
      </div>

      <div className="mb-10 flex flex-col gap-5">
        <Point>Ask Claude to write a detailed coding prompt from the PRD</Point>
        <Point>
          Specify: tech stack, component breakdown, file structure, design
          tokens
        </Point>
        <Point>
          This prompt goes into the IDE — quality here determines output quality
        </Point>
      </div>

      <div className="mb-10 border border-[var(--pres-border)] border-l-4 border-l-[var(--pres-accent)] bg-[var(--pres-card)] px-6 py-5 shadow-sm sm:px-8 sm:py-6">
        <p className="font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
          Most people skip this step. That&apos;s why their vibe-coded apps fall
          apart.
        </p>
      </div>

      <pre className="overflow-x-auto rounded-lg border border-[var(--pres-border)] bg-[var(--pres-code-bg)] p-4 text-left font-mono text-xs leading-relaxed text-[var(--pres-code-text)] sm:text-sm sm:leading-relaxed">
        <code>
          <span className="text-sky-700">&quot;</span>
          <span className="text-sky-900">
            Build a React dashboard with Tailwind CSS. Include a sidebar nav
            with 4 items: Dashboard, Reports, Settings, Profile. Use shadcn/ui
            for components. File structure: /components /pages /hooks
          </span>
          <span className="text-amber-800">...</span>
          <span className="text-sky-700">&quot;</span>
        </code>
      </pre>
    </div>
  );
}
