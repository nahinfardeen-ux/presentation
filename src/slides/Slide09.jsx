const Point = ({ children }) => (
  <p className="flex gap-3 font-dm text-base leading-relaxed text-[var(--pres-muted)] sm:text-lg">
    <span className="shrink-0 font-display font-semibold text-[var(--pres-accent)]">→</span>
    <span>{children}</span>
  </p>
);

const Node = ({ children }) => (
  <div className="rounded-xl border border-[var(--pres-accent)] bg-[var(--pres-pill)] px-4 py-2.5 text-center font-dm text-sm font-semibold text-[var(--pres-text)] sm:px-5 sm:py-3 sm:text-base">
    {children}
  </div>
);

export default function Slide09() {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Step 05
      </p>
      <h2 className="mb-12 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        The Loop That Actually Builds Things
      </h2>

      <div className="relative mb-14 w-full max-w-[400px] px-0 sm:max-w-[420px]">
        <svg
          className="h-[320px] w-full sm:h-[360px]"
          viewBox="0 0 360 360"
          fill="none"
          aria-hidden
        >
          <defs>
            <marker
              id="accentArrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#0a0a0a" />
            </marker>
          </defs>
          <path
            d="M 180 52 Q 268 100 292 180 Q 268 260 180 308 Q 92 260 68 180 Q 92 100 180 52"
            stroke="#0a0a0a"
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#accentArrow)"
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-6 sm:py-8">
          <Node>Feedback</Node>
          <div className="flex w-full max-w-[300px] justify-between px-1 sm:max-w-[320px]">
            <Node>Repeat</Node>
            <Node>Fix</Node>
          </div>
          <Node>Test</Node>
        </div>
      </div>

      <div className="mb-10 flex w-full max-w-2xl flex-col gap-4">
        <Point>
          Be specific with feedback — &quot;the button is wrong&quot;
          doesn&apos;t help AI
        </Point>
        <Point>One change at a time — don&apos;t batch fixes</Point>
      </div>

      <div className="w-full max-w-2xl border border-[var(--pres-border)] border-l-4 border-l-[var(--pres-accent)] bg-[var(--pres-card)] px-6 py-5 shadow-sm sm:px-8 sm:py-6">
        <p className="font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
          This is 80% of the work. Embrace it.
        </p>
      </div>
    </div>
  );
}
