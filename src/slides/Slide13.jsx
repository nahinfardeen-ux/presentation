const Takeaway = ({ children }) => (
  <p className="flex gap-4 font-dm text-base leading-relaxed text-[var(--pres-text)] sm:text-lg">
    <span className="shrink-0 font-display font-semibold text-[var(--pres-accent)]">→</span>
    <span>{children}</span>
  </p>
);

export default function Slide13() {
  return (
    <div className="flex w-full max-w-3xl flex-col">
      <p className="mb-4 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        Takeaways
      </p>
      <h2 className="mb-12 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl md:text-[56px]">
        You don&apos;t need to be a developer to build.
      </h2>

      <div className="mb-16 w-full space-y-5">
        <Takeaway>
          Research first. Build second. NotebookLM + Claude = your foundation.
        </Takeaway>
        <Takeaway>
          The prompt is the design. Treat it with the same care as a wireframe.
        </Takeaway>
        <Takeaway>
          Iteration is the process — not a sign that something went wrong.
        </Takeaway>
        <Takeaway>
          Ship early. Vercel makes deployment a non-event.
        </Takeaway>
      </div>

      <div className="flex w-full max-w-xl flex-col items-start">
        <div className="mb-4">
          <p className="font-display text-lg font-semibold text-[var(--pres-text)] sm:text-xl">
            Fardeen
          </p>
          <p className="mt-0.5 font-dm text-sm text-[var(--pres-muted)] sm:text-base">
            UI/UX Designer — Opacity, Musemind
          </p>
        </div>
        <div className="h-px w-24 bg-[var(--pres-accent)]" />
        <p className="mt-6 font-dm text-sm text-[var(--pres-muted)]">
          Contact / portfolio — placeholder
        </p>
      </div>

      <p className="mt-14 font-display text-2xl font-medium italic text-[var(--pres-muted)] sm:text-3xl md:text-4xl">
        Vibe on.
      </p>
    </div>
  );
}
