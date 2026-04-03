import { ToolBadge } from "../components/BrandLogo.jsx";

const Point = ({ children }) => (
  <p className="flex gap-3 font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
    <span className="shrink-0 font-display font-semibold text-[var(--pres-accent)]">→</span>
    <span>{children}</span>
  </p>
);

export default function Slide08() {
  return (
    <div className="flex w-full max-w-3xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Step 04
      </p>
      <h2 className="mb-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        Handing Off to the IDE
      </h2>
      <div className="mb-10 flex flex-wrap gap-3">
        <ToolBadge logos={["cursor"]}>Cursor</ToolBadge>
        <ToolBadge logos={["google"]}>Google Antigravity</ToolBadge>
        <ToolBadge logos={["anthropic"]}>Claude Code</ToolBadge>
      </div>

      <div className="mb-12 flex flex-col gap-5">
        <Point>Paste the Claude-generated prompt into your IDE of choice</Point>
        <Point>Let the AI scaffold the full project</Point>
        <Point>
          Review structure, fix naming, adjust layout — you&apos;re the art
          director now
        </Point>
      </div>

      <div className="border border-[var(--pres-border)] border-l-4 border-l-[var(--pres-accent)] bg-[var(--pres-card)] px-6 py-5 shadow-sm sm:px-8 sm:py-6">
        <p className="font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
          You&apos;re not writing code. You&apos;re making decisions.
        </p>
      </div>
    </div>
  );
}
