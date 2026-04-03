export default function Slide13() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center text-center py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,1000px)] w-[min(100vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, var(--pres-accent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] flex max-w-4xl flex-col items-center">
        <div className="mb-8 rounded-full border border-[var(--pres-border)] bg-white px-6 py-2 shadow-sm">
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--pres-muted)]">
            End of Presentation
          </p>
        </div>
        
        <h1 className="font-display text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl md:text-8xl lg:text-[120px]">
          Thank You!
        </h1>
        
        <p className="mt-12 max-w-2xl font-dm text-xl leading-relaxed text-[var(--pres-muted)] sm:text-2xl md:text-3xl">
          Let&apos;s embrace the future of product development together.
        </p>
        
        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="h-px w-32 bg-[var(--pres-accent)]" />
          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-2xl font-bold tracking-tight text-[var(--pres-text)]">
              Fardeen Nahin
            </p>
            <p className="font-dm text-lg text-[var(--pres-muted)] uppercase tracking-widest">
              Designer & Product Builder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
