export default function Slide02() {
  return (
    <div className="flex w-full flex-col">
      <p className="mb-10 font-dm text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--pres-accent)]">
        About me
      </p>
      <h2 className="mb-14 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[52px]">
        I&apos;m a Designer <span className="opacity-30">&amp; Vibe Coder</span>
      </h2>

      <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-[var(--pres-text)] sm:text-3xl">
            3+ Years
          </p>
          <p className="mt-2 font-dm text-sm text-[var(--pres-muted)]">
            Doing Design
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold leading-snug text-[var(--pres-text)] sm:text-3xl">
            6+ Months
          </p>
          <p className="mt-2 font-dm text-sm text-[var(--pres-muted)]">
            Development &amp; Schema Design
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold leading-snug text-[var(--pres-text)] sm:text-3xl">
            Opacity
          </p>
          <p className="mt-2 font-dm text-sm text-[var(--pres-muted)]">
            Musemind
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold leading-snug text-[var(--pres-text)] sm:text-3xl">
            2nd Hand
          </p>
          <p className="mt-2 font-dm text-sm text-[var(--pres-muted)]">
            Artificial Intelligence (AI)
          </p>
        </div>
      </div>

    
    </div>
  );
}
