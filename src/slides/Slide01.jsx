export default function Slide01() {
  return (
    <div className="relative flex w-full flex-col">
      <div
        className="pointer-events-none absolute left-[42%] top-1/2 h-[min(80vw,720px)] w-[min(80vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(10, 10, 10, 0.12) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] flex max-w-4xl flex-col pt-4 sm:pt-8 md:pt-12">
        <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.08] lg:text-[76px] lg:leading-[1.05]">
          How I Build Real Products with Vibe Coding
        </h1>
        <p className="mt-8 max-w-xl font-dm text-base leading-relaxed text-[var(--pres-muted)] sm:text-lg md:text-[20px]">
          A designer&apos;s workflow — from idea to live URL
        </p>
      </div>
    </div>
  );
}
