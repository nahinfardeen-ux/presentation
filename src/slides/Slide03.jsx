export default function Slide03() {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Context
      </p>
      <h2 className="mb-10 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-[56px]">
        What is Vibe Coding?
      </h2>

      <div className="mb-8 w-full max-w-2xl border border-[var(--pres-border)] border-l-4 border-l-[var(--pres-accent)] bg-[var(--pres-card)] px-6 py-6 shadow-sm sm:px-8 sm:py-8">
        <p className="font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
          You describe what you want in plain language. AI writes the code. You
          guide, review, and iterate.
        </p>
      </div>

      <p className="mb-6 font-dm text-sm text-[var(--pres-muted)]">
        — coined by Andrej Karpathy, 2025
      </p>

      <p className="max-w-3xl font-display text-xl font-semibold leading-snug text-[var(--pres-accent)] sm:text-2xl md:text-[24px]">
        The bottleneck is no longer code. It&apos;s clarity.
      </p>
    </div>
  );
}
