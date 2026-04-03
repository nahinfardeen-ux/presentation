export function Nav({ current, total, onPrev, onNext, canPrev, canNext }) {
  const cur = String(current + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pres-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pres-bg)]";

  return (
    <>
      <p className="pointer-events-none fixed bottom-6 left-6 z-30 font-dm text-[13px] text-[var(--pres-muted)] sm:bottom-8 sm:left-8 md:left-12">
        {cur} / {tot}
      </p>
      <div className="group/nav fixed bottom-6 right-6 z-30 flex gap-1 opacity-40 transition-opacity duration-300 hover:opacity-100 sm:bottom-8 sm:right-8 md:right-12">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={!canPrev}
          onClick={onPrev}
          className={`flex size-9 items-center justify-center rounded-md border border-transparent text-[var(--pres-muted)] transition hover:border-[var(--pres-border-hover)] hover:bg-[var(--pres-nav-hover)] hover:text-[var(--pres-text)] disabled:pointer-events-none disabled:opacity-25 ${focusRing}`}
        >
          <span className="text-lg leading-none" aria-hidden>
            ←
          </span>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          disabled={!canNext}
          onClick={onNext}
          className={`flex size-9 items-center justify-center rounded-md border border-transparent text-[var(--pres-muted)] transition hover:border-[var(--pres-border-hover)] hover:bg-[var(--pres-nav-hover)] hover:text-[var(--pres-text)] disabled:pointer-events-none disabled:opacity-25 ${focusRing}`}
        >
          <span className="text-lg leading-none" aria-hidden>
            →
          </span>
        </button>
      </div>
    </>
  );
}
